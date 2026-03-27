import { useState } from 'react'
import * as S from './styles'

type Props = {
  nome: string,
  email: string,
  telefone: number
}

const Contato = ({ nome, email, telefone }: Props) => {
  const [estaEditando, setEditando] = useState(false)

  return (
    <S.ContainerCard>
      <label id="nome">
        <h3 id="nome">{nome}</h3>
      </label>
      <S.CardTexto>{email}</S.CardTexto>
      <S.CardTexto>{telefone}</S.CardTexto>
      <S.ContainerBotao>
        {estaEditando ? (
          <>
            <S.BotaoEditar>Salvar</S.BotaoEditar>
            <S.BotaoRemover onClick={() => setEditando(false)}>
              Cancelar
            </S.BotaoRemover>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEditando(true)}>
              Editar
            </S.BotaoEditar>
            <S.BotaoRemover>Remover</S.BotaoRemover>
          </>
        )}
      </S.ContainerBotao>
    </S.ContainerCard>
  )
}

export default Contato
