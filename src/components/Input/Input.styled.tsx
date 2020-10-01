import styled from 'styled-components'
// Iterfaces
import { IinputProps } from './Input'

export const Message = styled.div<{error?: boolean | false}>`
    font-family: Roboto;
    margin-bottom: 2px;
    padding-left: 15px;
    color: ${ props => props.theme.colors.tertiary };
    transition: opacity 250ms ${ props => props.theme.transition },
                font-size 20ms ${ props => props.theme.transition };
    
    ${ props => props.error ? `
        opacity: 1;
        font-size: 13px;
    ` : `
        opacity: 0;
        font-size: 5px;
    ` }
`

export const InputStyled = styled.input<IinputProps>`
    height: 35px;
    padding: 1px 15px;
    outline: none;
    font-size: 14px;
    ${ props => props.border ? `border: 1px solid rgba(0,0,0, 0.2);` : `border: none;`}
    border-radius: 20px;
    width: ${ props => props.width ? props.width : null };
    transition: box-shadow 250ms ${ props => props.theme.transition };

    &:hover { box-shadow: 2px 2px 8px rgba(0,0,0, 0.2); }

    ${ props => props.error && `
        border: 1px solid ${ props.theme.colors.tertiary };
        color: ${ props.theme.colors.tertiary };
    `}
`