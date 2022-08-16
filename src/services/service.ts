import { api } from '../api/api'

class Service {
  jwt: any
  constructor () {
    const jwtStore = localStorage.getItem('jwt')
    this.jwt = jwtStore
  }

  getToken = async (data: any): Promise<any> => await api.post('/register', data)
  getDogs = async (breed: string): Promise<any> => await api.get(`/list/?breed=${breed === undefined ? '' : breed}`, {
    headers: {
      Authorization: this.jwt
    }
  })
}

export default Service
