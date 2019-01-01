import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex } from '../elements'

import { colors } from '../styled/colors'

const dualRing = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  &::after {
    content: ' ';
    display: block;
    width: 60px;
    height: 60px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: ${colors.primary} transparent ${colors.primary} transparent;
    animation: ${dualRing} 1.2s linear infinite;
  }
`
const Container = styled(Flex)`
  position: relative;
  height: 100vh;
`

export default () => (
  <Container>
    <Loader />
  </Container>
)
