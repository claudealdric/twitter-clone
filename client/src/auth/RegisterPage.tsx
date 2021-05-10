import UserPage from './components/UserPage'

const RegisterPage: React.FC = () => {
  return (
    <UserPage
      blurbText="Already have an account?"
      blurbLinkText="Login"
      blurbLinkUrl="/auth/login"
    />
  )
}

export default RegisterPage
