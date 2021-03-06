import * as React from 'react'
import {
  GoogleLoginButton,
  Button,
  Flex,
  Input,
  ErrorMessage
} from '../elements'
import { Error } from '../types'
import Loader from './Loader'

type State = {
  email: string
  password: string
}

type Props = {
  user: any
  authStatus: string
  signOut(): void
  signInWithGoogle(): void
  signInWithEmail(email: string, password: string): void
  error: Error
}

const initialState = {
  email: '',
  password: ''
}

export default class Login extends React.PureComponent<Props, State> {
  state = { ...initialState }

  onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value })
  }

  onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value })
  }

  onSubmit = () => {
    const { email, password } = this.state
    this.props.signInWithEmail(email, password)
  }

  render() {
    const { user, signOut, signInWithGoogle, error, authStatus } = this.props
    const isError = error && error.message
    if (user)
      return (
        <Button mb={2} onClick={signOut}>
          Sign out
        </Button>
      )
    return (
      <Flex column>
        {authStatus === 'pending' && <Loader />}
        {isError && <ErrorMessage>{error.message}</ErrorMessage>}
        <Input
          my={1.3}
          type='email'
          name='email'
          value={this.state.email}
          placeholder='email'
          onChange={this.onChangeEmail}
        />
        <Input
          type='password'
          name='password'
          value={this.state.password}
          placeholder='password'
          onChange={this.onChangePassword}
        />
        <Button
          mt={2}
          w={241}
          h={42}
          onClick={this.onSubmit}
          disabled={authStatus === 'pending'}
        >
          Sign in with Email
        </Button>
        <GoogleLoginButton my={1.3} w={241} onClick={signInWithGoogle} />
      </Flex>
    )
  }
}
