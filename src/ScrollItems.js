import React from 'react';
import { ReactSmartScroller } from 'react-smart-scroller';
import Scroller from 'custom-react-scroller';
import 'custom-react-scroller/dist/index.css';
import './ScrollItems.css';
import styled from 'styled-components';

function ScrollItems() {


    return (

        <div className='container'>
      <div className='scrollerContainer'>
        <Scroller>



                <div className="complete">
                <h1 className="text">Accessories</h1>
                <img src="https://images.ctfassets.net/4rc1asww3mw7/6F3YK2IeRY3CN1jOzD3izg/9224ccd9021863fa61cabd13b598dab9/Accessories.png?w=305&h=367&q=50&fm=webp" height="250px" width="250px" ></img>
                </div>
                 


                <div className="complete">
                    <h1 className="text">Apparel</h1>
                    <img src="https://images.ctfassets.net/4rc1asww3mw7/2cSe1KHDLpZmwbFQpKCNr/9c2a98ad5449480306de5980476d35b6/Apparel.png?w=305&h=367&q=50&fm=webp" height="250px" width="250px"></img>
                </div>

                 



                <div className="complete">
                    <h1 className="text">Auto</h1>
                    <img src="https://images.ctfassets.net/4rc1asww3mw7/3b1tbchUbryRqsKslgYaJz/844cf653718ebb571feb70376199890a/Auto.png?w=305&h=367&q=50&fm=webp" height="250px" width="250px"></img>
                </div>
                 
                <div className="complete">
                    <h1 className="text">Beauty and Health</h1>
                <img src="https://images.ctfassets.net/4rc1asww3mw7/vV88p9gkYCzA5X9wbQFYR/86d3efd984ba10f7ed396f29dd66118c/Beauty.png?w=305&h=367&q=50&fm=webp" height="250px" width="250px"></img>
                </div>
                 
                <div className="complete">
                    <h1 className="text2">Black-owned businesses</h1>
                <img src="https://images.ctfassets.net/4rc1asww3mw7/1rNDUUszr1u0FIxbKcbrwP/8b5bec33ff271acbbc29fbeefd673c97/Electronics.png?w=305&h=367&q=50&fm=webp" height="250px" width="250px"></img>
                </div>
                 
                <div className="complete">
                    <h1 className="text">Electronics</h1>
                    <img src="https://images.ctfassets.net/4rc1asww3mw7/ZGoiaK3LA7caRwMb9yEoE/db94dda0f7dd750bc3e7117ef4da0af5/Black-owned_Businesses_2x.jpg?w=304&h=366&q=50&fm=webp" height="250px" width="250px"></img>
                </div>
                 

          
        </Scroller>
      </div>
    </div>




        

    )
}

export default ScrollItems




// {[...Array(20).keys()].map((val, indx) => {
//     return (
//       <div className='buttons' key={indx}>

//           <img src="https://images.ctfassets.net/4rc1asww3mw7/6F3YK2IeRY3CN1jOzD3izg/9224ccd9021863fa61cabd13b598dab9/Accessories.png?w=305&h=367&q=50&fm=webp"></img>
//         {/* <span className='buttonContent'>button {indx + 1}</span> */}
//       </div>
//     )
//   })}
