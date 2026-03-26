import {
  BotaoEditar,
  BotaoRemover,
  CardTexto,
  ContainerBotao,
  ContainerCard,
  ContainerMain
} from './style'

const ListaContato = () => {
  return (
    <ContainerMain>
      <ul>
        <li>
          <ContainerCard>
            <label id="nome">
              <h3 id="nome">Nome Completo</h3>
            </label>
            <CardTexto>email</CardTexto>
            <CardTexto>telefone</CardTexto>
            <ContainerBotao>
              <BotaoEditar>Editar</BotaoEditar>
              <BotaoRemover>Remover</BotaoRemover>
            </ContainerBotao>
          </ContainerCard>
        </li>
        <li>
          <ContainerCard>
            <label id="nome">
              <h3 id="nome">Nome Completo</h3>
            </label>
            <CardTexto>email</CardTexto>
            <CardTexto>telefone</CardTexto>
            <ContainerBotao>
              <BotaoEditar>Editar</BotaoEditar>
              <BotaoRemover>Remover</BotaoRemover>
            </ContainerBotao>
          </ContainerCard>
        </li>
        <li>
          <ContainerCard>
            <label id="nome">
              <h3 id="nome">Nome Completo</h3>
            </label>
            <CardTexto>email</CardTexto>
            <CardTexto>telefone</CardTexto>
            <ContainerBotao>
              <BotaoEditar>Editar</BotaoEditar>
              <BotaoRemover>Remover</BotaoRemover>
            </ContainerBotao>
          </ContainerCard>
        </li>
        <li>
          <ContainerCard>
            <label id="nome">
              <h3 id="nome">Nome Completo</h3>
            </label>
            <CardTexto>email</CardTexto>
            <CardTexto>telefone</CardTexto>
            <ContainerBotao>
              <BotaoEditar>Editar</BotaoEditar>
              <BotaoRemover>Remover</BotaoRemover>
            </ContainerBotao>
          </ContainerCard>
        </li>
      </ul>
    </ContainerMain>
  )
}

export default ListaContato
