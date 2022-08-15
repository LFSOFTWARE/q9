import { ButtonMenu } from '../../components/ButtonMenu'
import { NavBar } from '../../components/NavBar'
import { BoxButtons, MenuPage } from '../../styles/Menu'

export function Menu (): JSX.Element {
  return (
    <MenuPage>
      <NavBar />
      <BoxButtons>
        <ButtonMenu src='pug.png' />
        <ButtonMenu src='golden.png' />
        <ButtonMenu src='husky.png' />
        <ButtonMenu src='chihua.png' />

      </BoxButtons>

    </MenuPage>
  )
}
