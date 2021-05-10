import UserPage from './components/UserPage'

const LoginPage: React.FC = () => {
  return (
    <UserPage
      blurbText="Don't have an account?"
      blurbLinkText="Sign up"
      blurbLinkUrl="/auth/register"
    />
  )
}

export default LoginPage
