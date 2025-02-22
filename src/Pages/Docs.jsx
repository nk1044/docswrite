import React, {useState, useEffect} from 'react'
import Sidebar from '../Components/Sidebar';
import { databases } from '../Appwrite/AppwriteAuth.js';

function Docs() {

  const [tree, setTree] = useState([]);

  const GetTree = async () => {
      try {
        const result = await databases.listDocuments(
          import.meta.env.VITE_APWRITE_DATABASE_ID,
          import.meta.env.VITE_APWRITE_IDS_COLLECTION_ID
        );
        console.log("Results from Appwrite: ", result?.documents);
  
        if (!result?.documents) return [];
  
        // Corrected way of constructing ResultTree
        const ResultTree = result.documents.map((item) => ({
          id: item?.MarkDownId,
          name: item?.MarkdownTitle,
        }));
  
        console.log("Result Tree: ", ResultTree);
        return ResultTree;
      } catch (error) {
        console.error('Failed to get note: ', error);
        return [];
      }
    };

    useEffect(() => {
      const Tree = localStorage.getItem('markdownTree');
      if (Tree) {
        // console.log('Tree found in local storage');
        setTree(JSON.parse(Tree) || []);
      } else {
        GetTree().then((result) => {
          if (result) {
            // Store the array correctly in local storage
            localStorage.setItem('markdownTree', JSON.stringify(result));
            console.log('Tree stored in local storage');
            setTree(result || []);
          }
        }).catch((error) => {
          console.error('Failed to get tree: ', error);
        });
      }
    }, []);
    


  return (
    <div className="w-full h-screen">
      <Sidebar tree={tree}/>
    </div>
  )
}

export default Docs