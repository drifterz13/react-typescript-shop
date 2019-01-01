import * as React from 'react'
import firebase from '../firebaase'

import { User, Error } from '../types'

const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth

let unsbuscribe

type State = {
  user: User
  authStatus: 'pending' | 'verified'
  error: Error
}

type InjectedAuthProps = {
  signInWithGoogle(): void
  signInWithEmail(email: string, password: string): void
  createAccount(email: string, password: string): void
  clearError(): void
  signOut(): void
}

type Props = {
  children(props: InjectedAuthProps & State): JSX.Element
}

const initialState: State = {
  user: null,
  authStatus: 'verified',
  error: null
}

export default class Auth extends React.PureComponent<Props, State> {
  state = { ...initialState }

  componentDidMount() {
    this.setState({ authStatus: 'pending' })
    unsbuscribe = auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: user.providerData[0],
          authStatus: 'verified',
          error: null
        })
      } else {
        this.setState(initialState)
      }
    })
  }

  componentWillUnmount() {
    unsbuscribe()
  }

  createAccount = (email: string, password: string) => {
    this.setState(
      () => ({ error: null, authStatus: 'pending' }),
      () => {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(error => {
            this.setState({ error, authStatus: 'verified' })
          })
      }
    )
  }

  signInWithGoogle = () => {
    auth()
      .signInWithPopup(provider)
      .catch(err => {
        throw new ErrorEvent(err)
      })
  }

  signInWithEmail = (email: string, password: string) => {
    this.setState(
      () => ({ authStatus: 'pending', error: null }),
      () => {
        auth()
          .signInWithEmailAndPassword(email, password)
          .catch(error => {
            this.setState({ error, authStatus: 'verified' })
          })
      }
    )
  }

  signOut = () => {
    auth()
      .signOut()
      .then(() => this.setState(initialState))
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    return this.props.children({
      user: this.state.user,
      authStatus: this.state.authStatus,
      error: this.state.error,
      clearError: this.clearError,
      signInWithGoogle: this.signInWithGoogle,
      signInWithEmail: this.signInWithEmail,
      createAccount: this.createAccount,
      signOut: this.signOut
    })
  }
}
