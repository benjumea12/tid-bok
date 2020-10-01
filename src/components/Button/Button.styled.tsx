import styled from 'styled-components'
// Theme
import { color } from '../../theme/my-theme'
// Interfaces
import { IButtonProps } from './Button'

export const ButtonStyled = styled.a<IButtonProps>`
  font-family: ${ props => props.theme.fonts.secondary };
  text-decoration: none;
  text-align: center;
  border-radius: 28px;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  border: 1.5px solid ${ props => color(props.bg) };
  transition: opacity 250ms ${ props => props.theme.transition }, 
              box-shadow 250ms ${ props => props.theme.transition };

  ${ props => {
    switch (props.size) {
      case 'lg':
        return `
          width: 225px;
          height: 35px;
          padding-top: 8px;
          font-size: 21px;`
      case 'md':
        return `
          width: 160px;
          height: 27px;
          padding-top: 4px;
          font-size: 18px;`
      case 'sm':
        return `
          width: 130px;
          height: 23px;
          padding-top: 5px;
          font-size: 15px;`    
      default:
        return `
          width: 160px;
          height: 27px;
          padding-top: 6px;
          font-size: 18px;`
    }
  }}

  &:hover { box-shadow: 3px 3px 8px rgba(0,0,0,0.2); }
  &:active { opacity: 0.88; }
`

export const LinedButton = styled(ButtonStyled)<IButtonProps>`
  font-weight: 500;
  color: #ffffff;
  background-color: ${ props => color(props.bg) };
`

export const OutlinedButton = styled(ButtonStyled)<IButtonProps>`
  font-weight: 600;
  color: ${ props => color(props.bg) };
  border: 1.5px solid ${ props => color(props.bg) };
`

export const Link = styled.a<IButtonProps>`
  font-family: ${ props => props.theme.fonts.secondary };
  text-decoration: none;
  text-align: center;
  border-radius: 28px;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  border: none;
  font-weight: 400;
  color: ${ color('secondary') };
  width: 70px;
  height: 22px;
  padding-top: 1px;
  font-size: 15px;
  background-color: ${ color('secondaryLight') };
  transition: opacity 250ms ${ props => props.theme.transition }, 
              box-shadow 250ms ${ props => props.theme.transition };

  .margin {
    font-size: 19px;
    margin-left: 3px;
  }

  &:hover { box-shadow: 2px 2px 8px #0000001A; }
  &:active { opacity: 0.88; }
`
