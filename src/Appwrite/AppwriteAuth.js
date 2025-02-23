import { Client, Account, Databases, Storage, ID, Query} from 'appwrite';


const client = new Client();

client
    .setEndpoint(String(import.meta.env.VITE_APPWRITE_ENDPOINT))
    .setProject(String(import.meta.env.VITE_APWRITE_PROJECT_ID));

export const account = new Account(client);
export const storage = new Storage(client);
export const databases = new Databases(client);


export const GetTree = async () => {
      try {
        const result = await databases.listDocuments(
          import.meta.env.VITE_APWRITE_DATABASE_ID,
          import.meta.env.VITE_APWRITE_IDS_COLLECTION_ID
        );
  
        if (!result?.documents) return [];
  
        const ResultTree = result.documents.map((item) => ({
          id: item?.MarkDownId,
          name: item?.MarkdownTitle,
        }));
  
        console.log("Result Tree: ", ResultTree);
        localStorage.setItem('markdownTree', JSON.stringify(ResultTree));
        return ResultTree;
      } catch (error) {
        console.error('Failed to get note: ', error);
        return [];
      }
};

export const CreateMarkdown = async () => {
  const NoteID = ID.unique();
  try {
    const result = await databases.createDocument(
        import.meta.env.VITE_APWRITE_DATABASE_ID,
        import.meta.env.VITE_APWRITE_MARKDOWN_COLLECTION_ID,
        NoteID,
        {
            title: 'Title',
            markdownContent: `# Markdown Text Editor
---`
        }
    );
    const Array_ID = ID.unique();
    // console.log('New note created: ', result);
    const AddNoteId = await databases.createDocument(
      String(import.meta.env.VITE_APWRITE_DATABASE_ID),
      String(import.meta.env.VITE_APWRITE_IDS_COLLECTION_ID),
      Array_ID,
      {
        MarkDownId: result.$id,
        MarkdownTitle: result.title
      }
    );
    // console.log('result: ', result);
    // console.log('New note ID created: ', AddNoteId);
    return NoteID;
  } catch (error) {
    console.error('Failed to create new note: ', error);
  }

};

export const GetNote = async (id) => {
    try {
      const result = await databases.getDocument(
        String(import.meta.env.VITE_APWRITE_DATABASE_ID),
        String(import.meta.env.VITE_APWRITE_MARKDOWN_COLLECTION_ID),
        id
      );
      const Appwriteresult = {
        title: result.title,
        markdownContent: result.markdownContent,
      };
      return Appwriteresult;
    } catch (error) {
      console.error('failed to get note: ', error);
    }
};

export const UpdateNote = async ({
  id,
  markdown,
  title,
}) => {
  try {
    const result = await databases.updateDocument(
      String(import.meta.env.VITE_APWRITE_DATABASE_ID),
      String(import.meta.env.VITE_APWRITE_MARKDOWN_COLLECTION_ID),
      id,
      {
        title: title,
        markdownContent: markdown,
      },
    );
    const TreeResult = await databases.listDocuments(
      String(import.meta.env.VITE_APWRITE_DATABASE_ID),
      String(import.meta.env.VITE_APWRITE_IDS_COLLECTION_ID),
      [Query.equal('MarkDownId', id)],
    );
    // console.log('Tree Result: ', TreeResult);
    console.log('Tree Result id: ', TreeResult?.documents[0]?.$id);
    const UpdateTree = await databases.updateDocument(
      String(import.meta.env.VITE_APWRITE_DATABASE_ID),
      String(import.meta.env.VITE_APWRITE_IDS_COLLECTION_ID),
      TreeResult?.documents[0]?.$id,
      {
        MarkDownId: id,
        MarkdownTitle: title,
      }
    );
    console.log('Update Tree: ', UpdateTree);
    const UpdatedTree = await GetTree();
    return UpdatedTree;
  } catch (error) {
    console.error('failed to update note: ', error);
  }
}

export const DeleteNote = async ({id}) => {
  alert('Are you sure you want to delete this note?');
  try {
    const result = await databases.deleteDocument(
      String(import.meta.env.VITE_APWRITE_DATABASE_ID),
      String(import.meta.env.VITE_APWRITE_MARKDOWN_COLLECTION_ID),
      id,
    );
    if(result){
      const TreeResult = await databases.listDocuments(
        String(import.meta.env.VITE_APWRITE_DATABASE_ID),
        String(import.meta.env.VITE_APWRITE_IDS_COLLECTION_ID),
        [Query.equal('MarkDownId', id)],
      );
      const DeleteTree = await databases.deleteDocument(
        String(import.meta.env.VITE_APWRITE_DATABASE_ID),
        String(import.meta.env.VITE_APWRITE_IDS_COLLECTION_ID),
        TreeResult?.documents[0]?.$id,
      );
      console.log('Delete Tree: ', DeleteTree);
    }
    const UpdatedTree = await GetTree();
    return UpdatedTree;
  } catch (error) {
    console.error('failed to delete note: ', error);
  }
}
