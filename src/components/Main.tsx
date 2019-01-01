import * as React from 'react'
import { Link, RouteComponentProps } from '@reach/router'
import Auth from './Auth'
import { Flex } from '../elements'
import Loader from './Loader'
import Login from './Login'

export default class Main extends React.PureComponent<RouteComponentProps> {
  render() {
    return (
      <Auth>
        {({ user, signInWithGoogle, signOut, authStatus }) => (
          <Flex column>
            {authStatus === 'pending' ? (
              <Loader />
            ) : (
              <React.Fragment>
                <h1>
                  {user
                    ? `Welcome, ${user.displayName}`
                    : 'Welcome to, 98 MART'}
                </h1>
                <Login
                  user={user}
                  signInWithGoogle={signInWithGoogle}
                  signOut={signOut}
                />
                <Link to='/shop'>Go to shop</Link>
              </React.Fragment>
            )}
          </Flex>
        )}
      </Auth>
    )
  }
}
