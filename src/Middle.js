import React from 'react';
import styled from 'styled-components';
import './Middle.css';

function Middle() {
    return (
        <div>

            <Header>Just choose Affirm at checkout</Header>
            <GridContainer>

                <div>

                    
                </div>
                <div>

                <img className="bigimage" src="https://images.ctfassets.net/4rc1asww3mw7/ZUtRHjqWakkKUtQoKj9Lv/9d1c3d0b5e79b178afcf37fd6c2b3481/walmart_home.jpg?w=734&h=488&q=50&fm=webp"/>
                

                

                </div>
                


                <div className="smallCont">

                <div>
                    <div>

                        <img className="images image1" src="https://images.ctfassets.net/4rc1asww3mw7/1C5LfN4L7y99CT7uRKhM9R/802625d6e343beef3e4492a4c8ba474a/BIKE__ANITA_FLOOR_YOGA_WIDE_0017-1.jpg?w=1310&h=873&q=50&fm=webp"/>

                    </div>

                    <div>

                        <img className="images image2" src="https://images.ctfassets.net/4rc1asww3mw7/l0IhGG6fsZW8vpZh3N50Q/61730971415c15efd1310c4660d7ddb2/Merchant_LWGKASO1U9UXFLAJ?w=1310&h=873&q=50&fm=webp"/>
                    </div>

                </div>

                <div>
                    <div>

                        <img className="images image3" src="https://images.ctfassets.net/4rc1asww3mw7/7FCAvIukUEM61Q1mn9v4cj/207e1d77a622671702f03bdb00b4d0d8/Merchant_7B6478KO7RT4JTU0?w=1310&h=810&q=50&fm=webp"/>

                    </div>

                    <div>

                        <img className="images image4" src="https://images.ctfassets.net/4rc1asww3mw7/6Lm66XAWTxQsh0PAa3gvyO/30493d19e3c313c85e8439b88586ce81/Merchant_3CB741ZCDI7ND66P?w=1024&h=633&q=50&fm=webp"/>
                    </div>

                </div>



                </div>

                



            </GridContainer>
            
        </div>
    )
}

export default Middle


const Header = styled.h1`
font-size: 70px;
position: relative;
top: -340px;
left: 350px;

`
const GridContainer = styled.div`
display: flex;
height: 576.8px;
width: 402px;

`

const Circle = styled.div`
  background: #456BD9;
  border: 0.1875em solid #0F1C3F;
  border-radius: 50%;
  box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
  height: 5em;
  width: 5em;

`

