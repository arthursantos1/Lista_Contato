import { Provider } from 'react-redux'
import BarraDePesquisa from './containers/BarraPesquisa'
import ListaContato from './containers/ListaContatos'
import EstiloGlobal, { Container } from './styles'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraDePesquisa />
        <ListaContato />
      </Container>
    </Provider>
  )
}

export default App
