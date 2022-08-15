import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContextGlobal } from '../../context/contexGlobal'
import { Button, Dog } from '../../styles/Menu'

interface ButtonMenuProps {
  src: string
}

export function ButtonMenu ({ src }: ButtonMenuProps): JSX.Element {
  const navigate = useNavigate()
  const { setBreedSearch } = useContext(ContextGlobal)
  const handleLink = (): void => {
    setBreedSearch(src.split('.')[0])
    navigate('/list/')
  }

  return (
    <Button onClick={handleLink}>
    <Dog src={src}/>
  </Button>
  )
}
