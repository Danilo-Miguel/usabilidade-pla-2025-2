import React from "react";
import '../styles/home.css'


const home =({title, links})=> {
    return(
        <main className="home-container container py-">
    <h1 className="home-title">{title}</h1>
   
   <ul className="home-list list-unstyled">
    {links.map((link, idx) => (
    <li key={idx} className="home-list-item">
  <a className="home-link" href={link.href}>{link.label}</a>
    </li>    
))}
   </ul>
   </main>

    );
};

export default home;