import { Frame, RegisterPage } from '../../styles/Register'

export function Registro (): JSX.Element {
  return (
  <RegisterPage>
    <div className='hero' />
    <Frame color="fff">
      <img src="dog.gif" alt="" />
      <h4>Faça o Registro</h4>
      <input placeholder='Email' type="text" />
      <button type='button' >Entrar</button>
    </Frame>
  </RegisterPage>
  )
}
