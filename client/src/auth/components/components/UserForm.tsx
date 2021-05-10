import { FormControl, Input } from '@material-ui/core'

const UserForm: React.FC = () => {
  return (
    <form>
      <FormControl fullWidth>
        <Input id="handle" placeholder="Handle" />
      </FormControl>
      <FormControl fullWidth>
        <Input type="password" id="password" placeholder="Password" />
      </FormControl>
      <FormControl fullWidth>
        <Input type="submit" value="Login"></Input>
      </FormControl>
    </form>
  )
}

export default UserForm
