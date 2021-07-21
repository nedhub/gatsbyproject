import * as React from "react";
import Header from "../header";
import { GlobalStyle } from "../styles/GlobalStyles";
import BodyFirst from "../bodyfirst";
import Imagee from "../images/head.jpg";
import "../pages/index.css";
import styled from "styled-components";





// markup
const IndexPage = () => {
  return (
    <div>
<GlobalStyle/>
<Header/>
    <BodyFirst/>
    <img className="image" src="https://images.pexels.com/photos/7191870/pexels-photo-7191870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
    <div className="Container">

      <div className="search-cont">

        <div className="left">

        <div className="left-inner">
          <h1 className="first-text">STORES</h1>
          <h1 className="second-text">Where are you shopping</h1>


        </div>


        </div>

        <div className="right">

        <div class="circle">

        <img src="http://assets.stickpng.com/images/585e4adacb11b227491c3392.png" className="glassicon"/>

        </div>

          


        </div>


      </div>

    

    </div>



    </div>

    
   
  )
}

export default IndexPage

const Search = styled.div`
    


`


