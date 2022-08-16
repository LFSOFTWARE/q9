import styled from 'styled-components'

export const MenuPage = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
`

export const Button = styled.div`

width: 39%;
height: 40%;
background-color: #0b66af;
margin: 2%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
border-radius: 5px;
@media only screen and (max-width: 600px)  {
  width: 90%;

  }
&:hover {
  transform: scale(1.1);
background-color: antiquewhite;

}
`

export const BoxButtons = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
flex-wrap: wrap;

`

export const Dog = styled.img`
width: 20%;
@media only screen and (max-width: 600px)  {
  width: 40%;

  }
`
