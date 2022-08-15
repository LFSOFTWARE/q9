import { useEffect, useContext } from 'react'
import { Frame, RegisterPage } from '../../styles/Register'
import Service from '../../services/service'
import { ContextGlobal } from '../../context/contexGlobal'
import { useNavigate } from 'react-router-dom'
export function Registro (): JSX.Element {
  const navigate = useNavigate()
  const { getToken } = new Service()
  const { setJwt } = useContext(ContextGlobal)
  const Register = async (): Promise<any> => {
    try {
      const { data } = await getToken({ email: 'luiz@gmail.com' })
      setJwt(data?.user.token)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    void Register()
  }, [])
  return (
  <RegisterPage>
    <div className='hero' />
    <Frame color="fff">
      <img src="dog.gif" alt="cachorro" />
      <h4>Faça o Registro</h4>
      <input placeholder='Email' type="text" />
      <button onClick={ () => navigate('/')} type='button' >Entrar</button>
    </Frame>
  </RegisterPage>
  )
}
