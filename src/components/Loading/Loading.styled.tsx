import styled, { keyframes } from 'styled-components'
import { color } from '../../theme/my-theme'
import { ILoading } from './Loading'


const ldsEllipsis1 = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`
const ldsEllipsis3 = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
`
const ldsEllipsis2 = (translatePx: number) => keyframes`
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(${translatePx}px, 0);
    }
`

const getSize = (size?: 'lg' | 'md' | 'sm'): number => {
    switch (size) {
        case 'sm':
            return 8
        case 'md':
            return 11
        case 'lg':
            return 14
        default:
            return 11
    }
}

export const LoaingStyled = styled.div.attrs((props: ILoading) => ({
    sizePx: getSize(props.size)
  }))<ILoading>`
    position: relative;
    height: ${ props => props.sizePx }px;
    width: ${ props => props.sizePx*4 }px;

    div {
        position: absolute;
        width: ${ props => props.sizePx }px;
        height: ${ props => props.sizePx }px;
        border-radius: 50%;
        background-color: ${ props => color(props.bg) };
        animation-timing-function: ${ props => props.theme.transition };
    }
    div:nth-child(1) {
        left: 0px;
        animation: ${ ldsEllipsis1 } 0.6s infinite;
    }
    div:nth-child(2) {
        left: 0px;
        animation: ${ props => ldsEllipsis2(props.sizePx*1.5) } 0.6s infinite;
    }
    div:nth-child(3) {
        left: ${ props => props.sizePx*1.5 }px;
        animation: ${ props => ldsEllipsis2(props.sizePx*1.5) } 0.6s infinite;
    }
    div:nth-child(4) {
        left: ${ props => props.sizePx*3 }px;
        animation: ${ ldsEllipsis3 } 0.6s infinite;
    }
`