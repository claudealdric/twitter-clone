import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

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
  const [sampleText, setSampleText] = useState('')

  useEffect(() => {
    const getHelloWorld = async () => {
      const { data } = await axios.get<string>('http://localhost:8080')
      setSampleText(data)
    }

    getHelloWorld()
  }, [])

  return (
    <div>
      <p>API Response: {sampleText}</p>
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
