import styled from 'styled-components'

interface boxI {
  src: string
}
export const ListDogPage = styled.div`

width: 100%;
height: 100%;
display: flex;
flex-direction: column;
.load{
  width: 20%;
  height: 30%;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}
`
export const ContainerImgs = styled.div`

width: 100%;
margin-top: 5%;
height: 100%;
display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Box = styled.div<boxI>`
  width: 15%;
  height: 20%;
  background-image: url(${props => props.src});
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover; 
  flex-direction: column;
  margin: 1% 1%;

  @media only screen and (max-width: 600px)  {
  width: 40%;

  }
  &:hover {
  transform: scale(2);
  cursor: pointer;
}
`
