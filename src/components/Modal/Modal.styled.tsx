import styled from 'styled-components'
// My theme
import { color, media } from '../../theme/my-theme'

export const ModalOverlay = styled.div<{openModal: boolean, size?: string}>`
  position: fixed;
  z-index: 100;
  padding-top: 100px;
  left: 0;
  top: 0;
  background-color: #00000024;
  opacity: 0;

  transition: opacity 150ms ${ props => props.theme.transition },
              width 0ms ${ props => props.openModal ? null : `200ms` },
              height  0ms ${ props => props.openModal ? null : `200ms` };


  ${ props => props.openModal 
    ? ` 
      width: 100vw;
      height: 100vh;  
      opacity: 1;
    ` 
    : ` 
      width: 0px;
      height: 0px; 
      opacity: 0; 
      overflow: hidden;
    ` 
  }

  .modalContent {
    background-color: white;
    position: relative;
    z-index: 200;
    margin: auto;
    padding: 20px 20px 25px 20px;
    border-radius: 15px;
    text-align : center;

    .icon {
      float: right;
      cursor: pointer;
      color: ${ color() };
    }

    ${ 
      props => {
        switch (props.size) {
          case 'sm':
            return 'width: 35%;'
          case 'md':
            return 'width: 45%;'
          case 'lg':
            return 'width: 60%;'
          default:
            return 'width: 50%;'
        }
      }
    }

    @media (max-width: ${media.md}) { width: 50%; }
    @media (max-width: ${media.sm}) { width: 80%; }

    transform: scale(0.7);
    transition: transform 200ms ${ props => props.theme.transition };
    
    ${ props => props.openModal 
      ? `
        transform: scale(1);
      ` 
      : `
        transform: scale(0.7);
      ` 
    }
  }
`
