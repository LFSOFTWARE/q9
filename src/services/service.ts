import { api } from '../api/api'

class Service {
  getToken = async (data: any): Promise<any> => await api.post('/register', data)
  getDogs = async (): Promise<any> => await api.get('')
}

export default Service
