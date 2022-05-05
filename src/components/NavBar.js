import React from "react";


function NavBar() {
  const links = ["home", "about", "projects"];

  const linkItems = links.map((link,index)=>{

    let refLink = '#'+link
  
    return <a key={index} href={refLink}>{link}</a>
  })

  return(
    <nav>
      <ul>
        <li>
          {linkItems}
        </li>
      </ul>
    </nav>
  )
  
   
}

export default NavBar;
