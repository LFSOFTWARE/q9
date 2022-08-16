import { useContext, useEffect, useState } from 'react'
import { Frame, RegisterPage } from '../../styles/Register'
import Service from '../../services/service'
import { ContextGlobal } from '../../context/contexGlobal'
import { useNavigate } from 'react-router-dom'

export function Registro (): JSX.Element {
  const { getToken } = new Service()
  const { setJwt } = useContext(ContextGlobal)
  const [email, setEmail] = useState<string>('')
  const navigate = useNavigate()
  const reload = (): void => {
    const jwtStore = localStorage.getItem('jwt')
    if (jwtStore !== null) {
      navigate('/')
    }
  }
  const Register = async (): Promise<any> => {
    try {
      const tryEmail = email.split('@')
      if (email !== null && email !== '' && tryEmail.length > 1) {
        const { data } = await getToken({ email })
        setJwt(data?.user.token)
        localStorage.setItem('jwt', data?.user.token)
        if (data?.user.token !== undefined) {
          navigate('/')
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    reload()
  })
  return (
    <RegisterPage>
      <div className='hero' />
      <Frame color="fff">
        <img src="dog.gif" alt="cachorro" />
        <h4>Faça o Registro</h4>
        <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email' type="text" id='email'/>
        <button onClick={Register} type='button' >Entrar</button>
      </Frame>
    </RegisterPage>
  )
}
