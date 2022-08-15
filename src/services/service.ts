import { api } from '../api/api'

class Service {
  getToken = async (data: any): Promise<any> => await api.post('/register', data)
  getDogs = async (breed: string): Promise<any> => await api.get(`/list/?breed=${breed}`)
}

export default Service
