import React from 'react'
// Styled components
import styled from 'styled-components'
// Theme 
import { color, TColors } from '../../theme/my-theme';
// Interfaces
export interface IDividerProps {
    variant?: 'horizontal' | 'vertical'
    marginT?: string
    marginR?: string
    marginB?: string
    marginL?: string
    height?: string
    width?: string
    bg?: TColors
}

const DividerStyled = styled.div<IDividerProps>`
    margin-top: ${ props => props.marginT ? props.marginT : '0px' };
    margin-right: ${ props => props.marginR ? props.marginR : '0px' };
    margin-bottom: ${ props => props.marginB ? props.marginB : '0px' };
    margin-left: ${ props => props.marginL ? props.marginL : '0px' };
    ${ props => props.height && `height: ${props.height};` }
    ${ props => props.width && `width: ${props.width};` }
    opacity: 0.6;
    ${ props => props.variant === 'horizontal' || !props.variant 
        ? `border-top: 0.5px solid ${ color(props.bg) };` 
        : ` width: 0.5px;
            border-left: 0.5px solid ${ color(props.bg) };` }
`

const Divider = (props: IDividerProps): JSX.Element => {
    return <DividerStyled { ...props }></DividerStyled>
}

export default Divider;