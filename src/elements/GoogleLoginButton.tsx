import * as React from 'react'
import styled from 'styled-components'

type Props = Partial<{
  my: number
  mb: number
  mt: number
  w: number
  onClick(): void
}>

const Container = styled.div<Props>`
  margin-top: ${props =>
    props.my ? `${props.my}em` : props.mt ? `${props.mt}em` : 0};
  margin-bottom: ${props =>
    props.my ? `${props.my}em` : props.mb ? `${props.mb}em` : 0};
  width: ${props => (props.w ? `${props.w}px` : 'auto')};
  display: inline-block;
  background: white;
  color: #444;
  border-radius: 2px;
  box-shadow: 1px 1px 1px grey;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
  }
`
const Icon = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 42px;
  height: 42px;
`
const ButtonText = styled.span`
  display: inline-block;
  text-align: center;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  right: 40px;
`
const imgSrc = require('../assets/btn_google_light_normal_ios.svg')

const GoogleLoginButton = (props: Props) => (
  <Container {...props}>
    <Icon src={imgSrc} />
    <ButtonText>Sign in with Google</ButtonText>
  </Container>
)

export default GoogleLoginButton
