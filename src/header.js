import * as React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import Logo from '../src/images/logo.png';
// import {FaBars} from "react-icons/fa"
// import MenuIcon from '@material-ui/icons/Menu';
// import { menuData } from "../data/MenuData";
// import { Button } from "./Button";
// import Logo from '../assets/images/logo.png';
import './Logo.css';

const Header = () => {


  return (
    <Nav>

      <NavLink to = "/"> <img className="logo" src={Logo}></img></NavLink>
      {/* <Bars/> */}
      <NavMenu>

            <FirstHead>



            <div>
            <FirstHeadText>Shop</FirstHeadText>
            <Line></Line>


            </div>
          
          <FirstHeadText>Save</FirstHeadText>
          <FirstHeadText>About</FirstHeadText>
          <FirstHeadText>For business</FirstHeadText>

          </FirstHead>

          <SecondHead>
              <SecondHeadText>Create account</SecondHeadText>

              <SecondHeadText>Sign in</SecondHeadText>

              <SecondHeadText>Download app</SecondHeadText>



          </SecondHead>




        {/* {menuData.map((item, index) => (

          <NavLink to={item.link} key={index}>

            {item.title}


          </NavLink>





        ))} */}



      </NavMenu>

      <NavBtn>

        {/* <Button primary="true" round="true" to="/trips">Current Rentals</Button> */}



      </NavBtn>


    </Nav>
  )
}



export default Header

const Nav = styled.nav`
background: #4a4af4;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1300px) / 2);
z-index: 100;
position: relative;
`

const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
`

const FirstHead = styled.div`
display: flex;
position: relative;
left: -200px;
column-gap: 20px;
justify-content: space-between;
/* justify-content: space-around; */



`

const FirstHeadText = styled.h1`
font-size: 19px;
color: whitesmoke;





`

const SecondHead = styled.div`
display: flex;
position: relative;
left: 200px;
column-gap: 20px;
justify-content: space-between;



`

const SecondHeadText = styled.h1`
font-size: 19px;
color: whitesmoke;



`

const Line = styled.div`
  border-bottom: 3px solid whitesmoke;
  
  height: 18px;
`







// const Bars = styled(MenuIcon)`
// display: none;
// color: #FFFFFF;
// @media screen and (max-width: 768px) {
//   display: block;
//   position: absolute;
//   top: 0;
//   right: 0;
//   transform: translate(-100%, 75%);
//   font-size: 1.88em;
//   cursor: pointer;
// }
// `

const NavMenu = styled.div`
display: flex;
align-items: center;
/* margin-right: -48px; */
font-family: 'Teko', sans-serif;
@media screen and (max-width: 768px) {
  display: none;
}
`

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px) {
  display: none;
}
`