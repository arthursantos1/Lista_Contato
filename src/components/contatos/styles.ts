import styled from 'styled-components'

export const ContainerCard = styled.div`
  background-color: #fcfcfd;
  padding: 32px;
  margin-bottom: 32px;
  border-radius: 8px;
  border: 1px solid #ccc;
`

export const ContainerBotao = styled.div`
  padding-top: 18px;
  width: 100%;
  margin-top: 16px;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
`

export const CardTexto = styled.p`
  margin-top: 12px;
  color: #afafaf;
`

export const Botao = styled.button`
  margin-right: 12px;
  padding: 8px 12px;
  background-color: #2980b9;
  border-radius: 7px;
  border: none;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
`

export const BotaoSalvar = styled(Botao)`
  background-color: #27ae60;
`

export const BotaoRemover = styled(Botao)`
  background-color: #c0392b;
`
