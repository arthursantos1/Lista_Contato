import { ContainerMain } from './style'
import Contato from '../../components/contatos'

const Contatos = [
  {
    nome: 'Arthur Santos',
    email: 'arthur.s.vale@gmail.com',
    telefone: 619999 - 8990
  },
  {
    nome: 'Marcelo Barbosa',
    email: 'marcelo.barbosa@gmail.com',
    telefone: 619249 - 8190
  },
  {
    nome: 'Fernanda Monteiro',
    email: 'fernanda.monteiro@gmail.com',
    telefone: 611992 - 4567
  },
  {
    nome: 'Maria Santos',
    email: 'maria.santos@gmail.com',
    telefone: 6167459 - 8392
  }
]

const ListaContato = () => {
  return (
    <ContainerMain>
      <ul>
        {Contatos.map((i) => (
          <li key={i.nome}>
            <Contato nome={i.nome} email={i.email} telefone={i.telefone} />
          </li>
        ))}
      </ul>
    </ContainerMain>
  )
}

export default ListaContato
