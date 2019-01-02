import styled from 'styled-components'

type Props = Partial<{
  h: string
  w: string
}>

const PreviewImage = styled.img<Props>`
  width: ${props => (props.w ? `${props.w}px` : 'auto')};
  height: ${props => (props.h ? `${props.h}px` : 'auto')};
  object-fit: contain;
`

export default PreviewImage
