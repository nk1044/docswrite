import React, {useState, useEffect} from 'react'
import Sidebar from '../Components/Sidebar';
import { databases, GetTree } from '../Appwrite/AppwriteAuth.js';

function Docs() {

  const [tree, setTree] = useState([]);

    useEffect(() => {
      const Tree = localStorage.getItem('markdownTree');
      if (Tree) {
        setTree(JSON.parse(Tree) || []);
      } else {
        GetTree().then((result) => {
          if (result) {
            setTree(result || []);
          }
        }).catch((error) => {
          console.error('Failed to get tree: ', error);
        });
      }
    }, []);
    


  return (
    <div className="w-full h-screen">
      <Sidebar tree={tree} setTree={setTree}/>
    </div>
  )
}

export default Docs