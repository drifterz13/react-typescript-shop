import styled from 'styled-components'

type FlexProps = Partial<{
  mt: number
  mb: number
  my: number
  column: boolean
}>

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  margin-top: ${props =>
    props.my ? `${props.my}em` : props.mt ? `${props.mt}em` : 0};
  margin-bottom: ${props =>
    props.my ? `${props.my}em` : props.mb ? `${props.mb}em` : 0};
`

export default Flex
