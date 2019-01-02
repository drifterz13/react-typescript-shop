import * as React from 'react'
import firebase from '../firebaase'
import { Product } from '../types'

type InjectedProps = {
  addProduct(product: Product): void
}

type Props = {
  children(props: InjectedProps & State): JSX.Element
}

type State = {
  products: any[]
}

const db = firebase.firestore()

db.settings({
  timestampsInSnapshots: true
})

export default class ProductUtils extends React.PureComponent<Props, State> {
  state = {
    products: []
  }

  async componentDidMount() {
    const products = await this.getProducts()
    this.setState(() => ({ products }), () => console.log(this.state))
  }

  addProduct = (product: Product) => {
    db.collection('products')
      .add(product)
      .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.log(err)
      })
  }

  getProducts = async () => {
    const products = []
    try {
      const querySnapshot = await db.collection('products').get()
      querySnapshot.forEach(doc => {
        const product = { ...doc.data(), id: doc.id }
        products.push(product)
      })
      return products
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return this.props.children({
      products: this.state.products,
      addProduct: this.addProduct
    })
  }
}
