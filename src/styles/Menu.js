import styled from 'styled-components'

export const MenuPage = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`

export const Button = styled.div`

width: 40%;
height: 40%;
background-color: black;
margin: 1%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
border-radius: 5px;
&:hover {
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
`
