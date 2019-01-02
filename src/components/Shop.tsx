import * as React from 'react'
import { Link, RouteComponentProps } from '@reach/router'
import { Flex, Input, Button } from '../elements'
import ProductUtils from './ProductUtils'
import Products from './Products'

type Props = {} & RouteComponentProps

type State = {
  productName: string
  productPrice: string
}

const initialState = {
  productName: '',
  productPrice: ''
}

export default class Shop extends React.PureComponent<Props, State> {
  state = { ...initialState }

  onChangeProductName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ productName: e.target.value })
  }

  onChangeProductPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ productPrice: e.target.value })
  }

  render() {
    const { productName, productPrice } = this.state
    return (
      <Flex column>
        <ProductUtils>
          {({ addProduct, products }) => (
            <React.Fragment>
              <Input
                my={1.3}
                type='text'
                name='productName'
                value={this.state.productName}
                onChange={this.onChangeProductName}
                placeholder='name ex. Nike airmax 97'
              />
              <Input
                type='text'
                name='price'
                value={this.state.productPrice}
                onChange={this.onChangeProductPrice}
                placeholder='price ex. 10$'
              />
              <Button
                my={1.3}
                onClick={() =>
                  addProduct({ name: productName, price: productPrice })
                }
              >
                Add Product
              </Button>
              <Products products={products} />
            </React.Fragment>
          )}
        </ProductUtils>
        <Link to='/'>Home</Link>
      </Flex>
    )
  }
}
