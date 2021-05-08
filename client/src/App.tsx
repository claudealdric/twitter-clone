import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from './slices/counter.slice'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state: RootState) => state.counter)

  return (
    <div>
      <p>Counter: {counter}</p>
      <button type="button" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch(incrementAsync())}>
        IncrementAsync
      </button>
      <button type="button" onClick={() => dispatch(decrementAsync())}>
        DecrementAsync
      </button>
    </div>
  )
}

export default App
