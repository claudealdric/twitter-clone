import UserPage from './components/UserPage'

const RegisterPage: React.FC = () => {
  return (
    <UserPage
      blurbText="Already have an account?"
      blurbLinkText="Log in"
      blurbLinkUrl="/auth/login"
      buttonText="Sign up"
    />
  )
}

export default RegisterPage