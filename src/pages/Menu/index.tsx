import { BoxButtons, Button, Dog, MenuPage } from '../../styles/Menu'

export function Menu (): JSX.Element {
  return (
    <MenuPage>
      <BoxButtons>
        <Button>
          <Dog src='pug.png'/>
        </Button>
        <Button>
          <Dog src='golden.png'/>
        </Button>
        <Button>
          <Dog src='husky.png'/>
        </Button>
        <Button>
          <Dog src='chihua.png'/>
        </Button>
      </BoxButtons>

    </MenuPage>
  )
}
