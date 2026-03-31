import { ContainerMain } from './style'
import Contato from '../../components/contatos'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaContato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <ContainerMain>
      <ul>
        {itens.map((i) => (
          <li key={i.nome}>
            <Contato
              id={i.id}
              nome={i.nome}
              email={i.email}
              telefone={i.telefone}
            />
          </li>
        ))}
      </ul>
    </ContainerMain>
  )
}

export default ListaContato
