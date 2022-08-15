import styled from 'styled-components'

interface boxI {
  src: string
}
export const ListDogPage = styled.div`

width: 100%;
height: 100%;
`
export const ContainerImgs = styled.div`

width: 100%;
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
  &:hover {
  transform: scale(1.5);
  cursor: pointer;
}
`
