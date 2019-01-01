import styled from 'styled-components'
import { colors } from '../styled/colors'

const size = {
  XS: '0.25em 0.5em',
  S: '0.5em 1em'
}

type Props = {
  size: 'XS' | 'S'
  mt: number
  mb: number
  my: number
  mx: number
  width: number
  height: number
  onClick(): void
}

const Button = styled.button<Partial<Props>>`
  color: ${colors.gray_100};
  background-color: ${colors.black};
  font-size: 18px;
  padding: ${props => (props.size ? size[props.size] : size.S)};
  border-radius: 2px;
  border: 1px solid ${colors.gray_300};
  cursor: pointer;
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
  height: ${props => (props.height ? `${props.height}px` : 'auto')};
  margin-top: ${props =>
    props.my ? `${props.my}em` : props.mt ? `${props.mt}em` : 0};
  margin-bottom: ${props =>
    props.my ? `${props.my}em` : props.mb ? `${props.mb}em` : 0};
  font-size: 16px;
  &:hover {
    color: ${colors.white};
    border: 1px solid ${colors.gray_100};
  }
`

export default Button
