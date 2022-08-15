import { useEffect, useState } from 'react'
import { NavBar } from '../../components/NavBar'
import { Box, ContainerImgs, ListDogPage } from '../../styles/ListDog'
import Service from '../../services/service'

export function ListDogs (): JSX.Element {
  interface dataI {
    breed: string
    list: string[]
  }
  const { getDogs } = new Service()

  const [data, setData] = useState<dataI>({
    breed: '',
    list: []
  })
  const handleBreed = async (): Promise<any> => {
    try {
      const { data } = await getDogs('husky')
      setData(data)
    } catch (error) {

    }
  }

  useEffect(() => {
    void handleBreed()
  }, [])
  return (
    <ListDogPage>
      <NavBar />
      <ContainerImgs>
      { data.list?.map((e: any) => (<Box key={e} src={e} />)) }
      </ContainerImgs>
    </ListDogPage>
  )
}
