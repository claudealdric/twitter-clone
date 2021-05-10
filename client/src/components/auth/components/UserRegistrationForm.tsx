import { useState } from 'react'
import { Button, FormControl, Input } from '@material-ui/core'

import styles from './UserForm.module.css'

export interface ButtonProps {
  buttonText: string
}

const UserForm: React.FC<ButtonProps> = ({ buttonText }) => {
  const [fullName, setFullName] = useState('')
  const [handle, setHandle] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form>
      <FormControl fullWidth>
        <Input
          id="fullName"
          type="text"
          placeholder="Name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </FormControl>

      <FormControl fullWidth>
        <Input
          id="handle"
          type="text"
          placeholder="Handle"
          value={handle}
          onChange={(event) => setHandle(event.target.value)}
        />
      </FormControl>

      <FormControl fullWidth>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormControl>

      <FormControl fullWidth>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormControl>

      <FormControl fullWidth>
        <Button variant="contained" color="primary" className={styles.button}>
          {buttonText}
        </Button>
      </FormControl>
    </form>
  )
}

export default UserForm
