import { NavBarComponent } from '../../styles/NavBar'
import { Link } from 'react-router-dom'

export function NavBar (): JSX.Element {
  return (
    <NavBarComponent>
   <Link to='/'><h3>Menu</h3></Link>
    </NavBarComponent>
  )
}
