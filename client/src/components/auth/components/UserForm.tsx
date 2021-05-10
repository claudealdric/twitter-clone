import { Button, FormControl, Input } from '@material-ui/core'

import styles from './UserForm.module.css'

export interface ButtonProps {
  buttonText: string
}

const UserForm: React.FC<ButtonProps> = ({ buttonText }) => {
  return (
    <form>
      <FormControl fullWidth>
        <Input id="handle" placeholder="Handle" />
      </FormControl>
      <FormControl fullWidth>
        <Input type="password" id="password" placeholder="Password" />
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
