import UserPage from './components/UserPage'

const LoginPage: React.FC = () => {
  return (
    <UserPage
      blurbText="Don't have an account?"
      blurbLinkText="Sign up"
      blurbLinkUrl="/auth/register"
      buttonText="Log in"
    />
  )
}

export default LoginPage
