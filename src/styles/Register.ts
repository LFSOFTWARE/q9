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
  h4{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 5%;
    line-height: 14px;

    letter-spacing: 0.968915px;

    color: #354446;

  }
  img {
    width: 30%;
    height: 20%;
  }
  input{
    width: 60%;
    max-width: 40%;
    height: 5%;
    background: #F5F5F5;
    border: 0;
    border-bottom: 1px solid gray;
    padding: 0 5px;

   
  }

  button{
    width: 60%;
    max-width: 40%;
    height: 5%;
    background: #354545;
    color: white;
    margin-top: 2%;
    &:hover{
      background-color: #4a7272;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 600px)  {
  width: 100%;
  input{
    width: 90%;
    max-width: 90%;
   
  }

  button{
    width: 90%;
    max-width: 90%;
    margin-bottom: 30%;
  }

  img {
    width: 95%;
    height: 20%;
  }
  }
`
