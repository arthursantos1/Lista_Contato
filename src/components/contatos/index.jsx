import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover } from '../../store/reducers/contato'
import ContatoClass from '../../models/Contato'

import { IoPerson } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'

type Props = ContatoClass

const Contato = ({
  nome,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (telefoneOriginal.length && emailOriginal.length > 0) {
      setTelefone(telefoneOriginal)
      setEmail(emailOriginal)
    }
  }, [emailOriginal, telefoneOriginal])

  return (
    <S.ContainerCard>
      <label id="nome">
        <h3 id="nome">{nome}</h3>
      </label>
      <S.CardTexto
        disabled={!estaEditando}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.CardTexto
        disabled={!estaEditando}
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
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
