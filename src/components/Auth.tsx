import * as React from 'react'
import firebase from '../firebaase'

const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth

let unsbuscribe

type User = {
  displayName: string
  email: string
  phoneNumber: string
  photoURL: string
  providerId: string
  uid: string
}

type State = {
  user: User
  authStatus: string
}

type InjectedAuthProps = {
  signInWithGoogle(): void
  signOut(): void
}

type Props = {
  children(props: InjectedAuthProps & State): JSX.Element
}

const initialState: State = {
  user: null,
  authStatus: 'verified'
}

export default class Auth extends React.PureComponent<Props, State> {
  state = { ...initialState }

  componentDidMount() {
    this.setState({ authStatus: 'pending' })
    unsbuscribe = auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user.providerData[0], authStatus: 'verified' })
      } else {
        this.setState(initialState)
      }
    })
  }

  componentWillUnmount() {
    unsbuscribe()
  }

  signInWithGoogle = () => {
    auth()
      .signInWithPopup(provider)
      .catch(err => {
        throw new Error('Invalid credentials')
      })
  }

  signOut = () => {
    auth()
      .signOut()
      .then(() => this.setState(initialState))
  }

  render() {
    return this.props.children({
      user: this.state.user,
      authStatus: this.state.authStatus,
      signInWithGoogle: this.signInWithGoogle,
      signOut: this.signOut
    })
  }
}
