import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Arthur Santos',
      email: 'arthur.s.vale@gmail.com',
      telefone: 6199817634,
      id: 1
    },
    {
      nome: 'Arthur Santos',
      email: 'arthur.s.vale@gmail.com',
      telefone: 6199817634,
      id: 2
    },
    {
      nome: 'Arthur Santos',
      email: 'arthur.s.vale@gmail.com',
      telefone: 6199817634,
      id: 3
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    }
  }
})

export const { remover } = contatoSlice.actions
export default contatoSlice.reducer
