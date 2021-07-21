import React from 'react';
import styled from 'styled-components';

function BodyFirst() {
    return (
        <div>
            <ColorCont> 

            <TextContainer>

            <FirstText>
                Pay at your own pace
            </FirstText>

            <FirstText2>
            When you buy with Affirm, you always know exactly what you’ll owe and when you’ll be done paying. There are no hidden fees—not even late fees.                
            </FirstText2>

            </TextContainer>

            


            </ColorCont>
            
        </div>
    )
}

export default BodyFirst


const ColorCont = styled.nav`
background: #4a4af4;
height: 500px;

`

const TextContainer = styled.div`
/* background-color: yellow; */
padding-top: 30px;
margin-left: 200px;
width: 600px;
height: 400px;


`

const FirstText = styled.h1`
color: white;
font-size: 79px;
word-wrap: break-word;

`

const FirstText2 = styled.h1`
padding-top: 40px;
color: white;
font-size: 24px;
font-weight: 100;
letter-spacing: 2px;
`
