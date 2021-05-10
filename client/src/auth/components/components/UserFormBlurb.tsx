import { Link } from 'react-router-dom'

import styles from './UserFormBlurb.module.css'

export interface BlurbProps {
  blurbText: string
  blurbLinkText: string
  blurbLinkUrl: string
}

const UserFormBlurb: React.FC<BlurbProps> = ({
  blurbText,
  blurbLinkText,
  blurbLinkUrl,
}) => {
  return (
    <p className={styles.blurb}>
      {blurbText} <Link to={blurbLinkUrl}>{blurbLinkText}</Link>
    </p>
  )
}

export default UserFormBlurb
