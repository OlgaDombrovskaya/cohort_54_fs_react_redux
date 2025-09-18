import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceAction,
  counterSliceSelectors,
} from "store/redux/counter/counterSlice"
import Button from "components/Button/Button"

import { CounterWrapper, Count, ButtonControl } from "./styles"

function Counter() {
  //этот хук не принимает в себя аргументы от просто возвращает функцию disputch
  // которая передает экшен в реадакт store.Потом на переданные экшен спускается нужный нам редюсер
  const dispatch = useAppDispatch()

  // убираем значение из store и передаем куда надо, подписываемся на изменения в store
  const count = useAppSelector(counterSliceSelectors.count)

  const onPlus = () => {
    // это actionCreator функция которая возвращает action
    const plusAction = counterSliceAction.plus()
    //action  это обьект состоящий из 2-х пар ключ/значение
    // 1 - строка по которому вызывается редьюсер . Например "COUNTER/plus"
    // COUNTER - имя
    // plus - имя редьюсера
    // 2 - payload -это данные которые передаются из компонента в редьюсер
    console.log(plusAction)

    dispatch(plusAction)
    //более которкая запись
    // dispatch(counterSliceAction.plus());
  }

  const onMinus = () => {
    dispatch(counterSliceAction.minus())
  }

  const onMultiply = () => {
    dispatch(counterSliceAction.multiply(3))
  }

  const onDivide = () => {
    dispatch(counterSliceAction.divide(2))
  }

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="/" onClick={onDivide} />
      </ButtonControl>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count className="count">{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
      <ButtonControl>
        <Button name="*" onClick={onMultiply} />
      </ButtonControl>
    </CounterWrapper>
  )
}

export default Counter
