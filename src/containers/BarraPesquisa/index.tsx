import { CampoBusca, ContainerBusca, InputBusca } from './styles'

const BarraDePesquisa = () => {
  return (
    <ContainerBusca>
      <CampoBusca>
        <InputBusca type="text" placeholder="Buscar contato" />
      </CampoBusca>
    </ContainerBusca>
  )
}

export default BarraDePesquisa
