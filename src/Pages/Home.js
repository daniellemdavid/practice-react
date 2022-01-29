import React from "react";
import { Link } from "react-router-dom";
import Nav from '../App.js'
import { navList } from "../notion.js";

const Home = () =>{
    return(
        <div className="Home" > 
        {/* {document.getElementById("hdr")? document.getElementById("hdr").style.display = "none": null} */}
        <p>Welcome to Mycelium Sporet</p> 
        <audio
        controls
        src="alice.mp3">
            Your browser does not support the
            <code>audio</code> element.
        </audio>
        {/* <Link to='/' >Enter (to Blog)</Link> */}
        </div>
    
    )
}

export default Home;
