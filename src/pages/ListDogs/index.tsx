import { useEffect, useState, useContext } from 'react'
import { NavBar } from '../../components/NavBar'
import { Box, ContainerImgs, ListDogPage } from '../../styles/ListDog'
import Service from '../../services/service'
import { ContextGlobal } from '../../context/contexGlobal'

export function ListDogs (): JSX.Element {
  const { breedSearch } = useContext(ContextGlobal)
  const [load, setLaod] = useState(true)

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
      const { data } = await getDogs(breedSearch)
      setData(data)
      setLaod(false)
    } catch (error) {

    }
  }

  useEffect(() => {
    void handleBreed()
  }, [breedSearch])
  return (
    <ListDogPage>
      <NavBar />
      {load && (
        <img className='load' src="/load.gif" alt="gif" />
      )}
      {!load && (
        <ContainerImgs>
        { data.list?.map((e: any) => (<Box key={e} src={e} />)) }
        </ContainerImgs>
      )}
    </ListDogPage>
  )
}
