import styled, { keyframes } from 'styled-components'
import { colors } from '../styled/colors'

const bounceInDown = keyframes`
  0%, 60%, 75%, 90%, 100% {
      transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
  opacity: 0;
  -webkit-transform: translate3d(0, -3000px, 0);
  transform: translate3d(0, -3000px, 0);
  }
  
  60% {
  opacity: 1;
  -webkit-transform: translate3d(0, 25px, 0);
  transform: translate3d(0, 25px, 0);
  }
  
  75% {
  -webkit-transform: translate3d(0, -10px, 0);
  transform: translate3d(0, -10px, 0);
  }
  
  90% {
  -webkit-transform: translate3d(0, 5px, 0);
  transform: translate3d(0, 5px, 0);
  }
  
  100% {
  -webkit-transform: none;
  transform: none;
  }
`

const ErrorMessage = styled.div`
  animation-name: ${bounceInDown};
  animation-duration: 1s;
  animation-fill-mode: both;
  border: 1px solid ${colors.danger};
  color: ${colors.danger};
  padding: 15px 20px;
  margin: 1.3em 0;
  max-width: 300px;
  text-align: center;
`

export default ErrorMessage
