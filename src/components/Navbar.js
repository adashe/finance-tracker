import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

import styles from './Navbar.module.css'


export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoneyApp</li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>Hello, {user.displayName} </li>
            <li>
              <button onClick={logout} className="btn">Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
