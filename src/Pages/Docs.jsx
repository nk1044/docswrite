import React, {useState, useEffect} from 'react'
import Sidebar from '../Components/Sidebar';
import { databases } from '../Appwrite/AppwriteAuth.js';

function Docs() {

  const [tree, setTree] = useState([]);

  const GetTree = async () => {
      try {
        const result = await databases.getDocument(
          String(import.meta.env.VITE_APWRITE_DATABASE_ID),
          String(import.meta.env.VITE_APWRITE_IDS_COLLECTION_ID),
          String(import.meta.env.VITE_TREE_ID),
        );
        console.log(result?.Tree);
        return result?.Tree;
      } catch (error) {
        console.error('failed to get note: ', error);
      }
    };

  useEffect(() => {
      const Tree = localStorage.getItem('markdownTree');
      if (Tree) {
        console.log('Tree found in local storage');
        setTree(Tree || []);
      } else {
        GetTree().then((result) => {
          if (result) {
            // store the array in local storage
            localStorage.setItem('markdownTree', JSON.stringify(result));
            console.log('Tree stored in local storage');
            setTree(result || []);
          }
        }).catch((error) => {
          console.error('failed to get tree: ', error);
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