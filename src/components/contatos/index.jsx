import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover } from '../../store/reducers/contato'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
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
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoRemover onClick={() => setEditando(false)}>
              Cancelar
            </S.BotaoRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.ContainerBotao>
    </S.ContainerCard>
  )
}

export default Contato
