import BarraDePesquisa from './containers/BarraPesquisa'
import ListaContato from './containers/ListaContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraDePesquisa />
        <ListaContato />
      </Container>
    </>
  )
}

export default App
