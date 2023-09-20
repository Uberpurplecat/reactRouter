import React, {useEffect, useState} from 'react';
import PageNavbar from "./PageNavbar"

function PostsPage(){
    const [postMessage, setPosts] = useState([]);
    const [hash, setHash] = useState(window.location.hash.slice(1)*1);
  
    React.useEffect(()=> {
      const fetchData = async ()=>{
      const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts");
          const json = await response.json();
          setPosts(json);
  
        }
        fetchData();
      },[]);
  
      useEffect(()=>{
        window.addEventListener('hashchange',()=>{
          setHash(window.location.hash.slice(1)*1);
        });
      },[]);
  
      const poste = postMessage.find(poste => hash === poste.id);
  
    return(
        <>
        <div>
            <PageNavbar/>
        </div>
      <p>Title: {poste ? poste.title: null}</p>
      <p>Body: {poste ? poste.body: null}</p>
      <ul>
        {
          postMessage.map( post=>{
            return (
              <li key={post.id} className={post.id === hash ? 'selected': ''}>
                <a href={`#${post.id === hash ? '': post.id}`}>
                {post.title}
                </a>
              </li>
            );
          })
        }
      </ul>
      </>
    );
}

export default PostsPage;