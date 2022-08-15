import { useNavigate } from 'react-router-dom'
import { Button, Dog } from '../../styles/Menu'

interface ButtonMenuProps {
  src: string
}

export function ButtonMenu ({ src }: ButtonMenuProps): JSX.Element {
  const navigate = useNavigate()
  const handleLink = (): void => {
    navigate('/list')
  }
  return (
    <Button onClick={handleLink}>
    <Dog src={src}/>
  </Button>
  )
}
