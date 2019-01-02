import * as React from 'react'
import { Product } from '../types'

type Props = {
  products: Array<Product>
}

export default class Products extends React.PureComponent<Props> {
  render() {
    console.log(this.props.products)
    return <div />
  }
}
