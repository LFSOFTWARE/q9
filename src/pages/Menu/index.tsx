import { Frame, RegisterPage } from '../../styles/Register'

export function Menu (): JSX.Element {
  return (
  <RegisterPage>
    <div className='hero' />

    <Frame color="fff">
      <p>LOGO</p>
      <input placeholder='Email' type="text" />
      <button type='button'>Entrar</button>
    </Frame>
  </RegisterPage>
  )
}
