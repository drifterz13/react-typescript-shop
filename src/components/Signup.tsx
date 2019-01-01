import * as React from 'react'
import { Flex, Input, Button, ErrorMessage } from '../elements'
import { RouteComponentProps, Link } from '@reach/router'
import { Error } from '../types'
import Loader from './Loader'

type State = {
  email: string
  password: string
}

type Props = {
  createAccount(email: string, password: string): void
  clearError(): void
  authStatus: string
  error: Error
} & RouteComponentProps

const inititalState = {
  email: '',
  password: ''
}

export default class Signup extends React.PureComponent<Props, State> {
  state = { ...inititalState }

  componentWillUnmount() {
    this.props.clearError()
  }

  onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value })
  }

  onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value })
  }

  onSubmit = () => {
    const { email, password } = this.state
    this.props.createAccount(email, password)
  }

  render() {
    const { createAccount, error, authStatus } = this.props
    const isError = error && error.message
    return (
      <Flex column>
        <h1>Create your account</h1>
        {authStatus === 'pending' && <Loader />}
        {isError && <ErrorMessage>{error.message}</ErrorMessage>}
        <Input
          my={1.3}
          type='email'
          name='email'
          value={this.state.email}
          onChange={this.onChangeEmail}
          placeholder='email'
        />
        <Input
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.onChangePassword}
          placeholder='password'
        />
        <Button
          my={2}
          w={241}
          h={42}
          onClick={() => createAccount(this.state.email, this.state.password)}
          disabled={authStatus === 'pending'}
        >
          Signup
        </Button>
        <Link to='/'>Back to Login</Link>
      </Flex>
    )
  }
}
