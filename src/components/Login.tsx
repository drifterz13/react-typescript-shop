import * as React from 'react'
import { GoogleLoginButton, Button, Flex, Input } from '../elements'

type State = {
  email: string
  password: string
}

type Props = {
  user: any
  signOut(): void
  signInWithGoogle(): void
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

  render() {
    const { user, signOut, signInWithGoogle } = this.props
    if (user)
      return (
        <Button mb={2} onClick={signOut}>
          Sign out
        </Button>
      )
    return (
      <Flex column>
        <Input
          mb={1.3}
          type='email'
          name='email'
          placeholder='email'
          onChange={this.onChangeEmail}
        />
        <Input
          type='password'
          name='password'
          placeholder='password'
          onChange={this.onChangePassword}
        />
        <Button mt={2} width={241} height={42}>
          Sign in with Email
        </Button>
        <GoogleLoginButton my={1.3} width={241} onClick={signInWithGoogle} />
      </Flex>
    )
  }
}
