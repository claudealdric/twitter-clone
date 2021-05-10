import { Grid } from '@material-ui/core'

import UserForm from './components/UserForm'
import UserFormBlurb, { BlurbProps } from './components/UserFormBlurb'
import bean from '../../images/bean.png'
import styles from './UserPage.module.css'
import { ButtonProps } from './components/UserForm'

interface Props extends BlurbProps, ButtonProps {}

const UserPage: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={bean} alt="bean cartoon"></img>
      <div>
        <h2 className={styles.title}>How You Bean?</h2>
        <Grid>
          <Grid container>
            <Grid item xs={1}>
              {/* Empty grid for spacing */}
            </Grid>
            <Grid>
              <UserForm buttonText={props.buttonText} />
              <UserFormBlurb
                blurbText={props.blurbText}
                blurbLinkText={props.blurbLinkText}
                blurbLinkUrl={props.blurbLinkUrl}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default UserPage
