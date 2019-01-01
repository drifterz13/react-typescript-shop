import * as React from 'react'
import { Link, RouteComponentProps } from '@reach/router'
import { Flex } from '../elements'
import Loader from './Loader'
import Login from './Login'
import { User, Error } from '../types'

type Props = {
  user: User
  signInWithGoogle(): void
  signInWithEmail(email: string, password: string): void
  signOut(): void
  authStatus: string
  error: Error
} & RouteComponentProps

export default class Main extends React.PureComponent<Props> {
  render() {
    const {
      user,
      authStatus,
      signInWithGoogle,
      signInWithEmail,
      signOut,
      error
    } = this.props
    return (
      <Flex column>
        <React.Fragment>
          <h1>
            {user ? `Welcome, ${user.displayName}` : 'Welcome to, 98 MART'}
          </h1>
          <Login
            user={user}
            authStatus={authStatus}
            signInWithGoogle={signInWithGoogle}
            signInWithEmail={signInWithEmail}
            signOut={signOut}
            error={error}
          />
          <Link to='/signup'>Signup</Link>
        </React.Fragment>
      </Flex>
    )
  }
}
