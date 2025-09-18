import { createAppSlice } from "store/createAppSlice"
import { CounterSliceState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const counterInitialState = {
  count: 0,
}

export const counterSlice = createAppSlice({
  //это имя используется для нахождения событий слайса
  name: "COUNTER",
  // это стэйт по умолчанию
  initialState: counterInitialState,

  //функция которая возвращает объект содержащий функции которые будут изменять стэйт
  reducers: create => ({
    plus: create.reducer((state: CounterSliceState) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterSliceState) => {
      state.count = state.count - 1
    }),
    multiply: create.reducer(
      (state: CounterSliceState, action: PayloadAction<number>) => {
        // payload передает из компонента в редьюсер
        console.log(action.payload)

        state.count = Number((state.count * action.payload).toFixed(2))
      },
    ),
    divide: create.reducer(
      (state: CounterSliceState, action: PayloadAction<number>) => {
        state.count = Number((state.count * action.payload).toFixed(2))
      },
    ),
  }),

  // подписка на хранилище в store
  selectors: {
    count: (state: CounterSliceState) => {
      return state.count
    },
  },
})

// counterSlice сам создает экшон для каждого редюсера
export const counterSliceAction = counterSlice.actions

export const counterSliceSelectors = counterSlice.selectors
