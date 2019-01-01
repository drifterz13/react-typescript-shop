import styled from 'styled-components'
import { colors } from '../styled/colors'

type Props = Partial<{
  my: number
  mt: number
  mb: number
}>

const Input = styled.input<Props>`
  background: none;
  color: ${colors.gray_100};
  font-size: 18px;
  padding: 0.25em 0.5em;
  border: none;
  border-bottom: 1px solid ${colors.white};
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  outline: none;
  margin-top: ${props =>
    props.my ? `${props.my}em` : props.mt ? `${props.mt}em` : 0};
  margin-bottom: ${props =>
    props.my ? `${props.my}em` : props.mb ? `${props.mb}em` : 0};
  &:hover {
    border-bottom-color: ${colors.primary};
  }
`

export default Input
