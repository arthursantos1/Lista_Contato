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
      telefone: '(61) 99981-7634',
      id: 1
    },
    {
      nome: 'Fernando Monteiro Guimarães',
      email: 'fernando.monteiro@outlook.com',
      telefone: '(61) 9862487-7689',
      id: 2
    },
    {
      nome: 'Barbara Souza Duarte',
      email: 'barbara.d@gmail.com',
      telefone: '(61) 98712-2876',
      id: 3
    },
    {
      nome: 'Sarah Oliveira Souza',
      email: 'SarahOliveiraSouza@jourrapide.com',
      telefone: '(25) 9595-8345',
      id: 4
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
