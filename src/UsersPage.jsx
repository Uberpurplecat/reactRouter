import React, {useEffect, useState} from 'react';
import PageNavbar from "./PageNavbar"

function UsersPage(){
    const [postMessage, setPosts] = useState([]);
    const [hash, setHash] = useState(window.location.hash.slice(1)*1);
  
    React.useEffect(()=> {
      const fetchData = async ()=>{
      const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
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
      <p>Name: {poste ? poste.name: null}</p>
      <p>Email: {poste ? poste.email: null}</p>
      <ul>
        {
          postMessage.map( post=>{
            return (
              <li key={post.id} className={post.id === hash ? 'selected': ''}>
                <a href={`#${post.id === hash ? '': post.id}`}>
                {post.name}
                </a>
              </li>
            );
          })
        }
      </ul>
        </>
    );
}

export default UsersPage;