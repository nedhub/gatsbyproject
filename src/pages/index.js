import * as React from "react";
import Header from "../header";
import { GlobalStyle } from "../styles/GlobalStyles";
import BodyFirst from "../bodyfirst";
import Imagee from "../images/head.jpg";
import "../pages/index.css";





// markup
const IndexPage = () => {
  return (
    <div>
<GlobalStyle/>
<Header/>
    <BodyFirst/>
    <img className="image" src="https://images.pexels.com/photos/7191870/pexels-photo-7191870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />



    </div>

    
   
  )
}

export default IndexPage


