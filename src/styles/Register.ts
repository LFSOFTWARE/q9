import styled from 'styled-components'

export const RegisterPage = styled.div`

width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
background-image: url("dogs.jpg");
height: 100%; 
background-position: center; 
background-repeat: no-repeat;
background-size: cover; 
flex-direction: column;
.hero{
  width: 100%;
height: 100%;
background-color: black;
opacity: 15%;
z-index: 1;
}

`
export const Frame = styled.div`
  width: 50%;
  height: 100%;
  
  background-color: #fff;
  z-index: 100;
  opacity: 90%;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input{
    width: 50%;
    max-width: 33%;
    height: 5%;
    background: #F5F5F5;
    border: 0;
    border-bottom: 1px solid gray;
    padding: 0 5px;
  }

  button{
    width: 50%;
    max-width: 33%;
    height: 5%;
    background: #354545;
    border-radius: 0.961465px;
    color: white;
    margin-top: 2%;
  }
`
