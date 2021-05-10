import { Grid } from '@material-ui/core'

import UserForm from './components/UserForm'
import UserFormBlurb, { BlurbProps } from './components/UserFormBlurb'
import bean from '../../images/bean.png'
import styles from './UserPage.module.css'

const UserPage: React.FC<BlurbProps> = ({
  blurbText,
  blurbLinkText,
  blurbLinkUrl,
}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={bean} alt="bean cartoon"></img>
      <div>
        <h1 className={styles.title}>How You Bean?</h1>
        <Grid>
          <Grid container>
            <Grid item xs={1}>
              {/* Empty grid for spacing */}
            </Grid>
            <Grid>
              <UserForm />
              <UserFormBlurb
                blurbText={blurbText}
                blurbLinkText={blurbLinkText}
                blurbLinkUrl={blurbLinkUrl}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default UserPage
