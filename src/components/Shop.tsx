import * as React from 'react'
import { Link, RouteComponentProps } from '@reach/router'

const Shop = (props: RouteComponentProps) => (
  <React.Fragment>
    <h1>Shop Page</h1>
    <Link to='/'>Home</Link>
  </React.Fragment>
)

export default Shop
