import React from 'react'
// My theme
import { TColors } from '../../theme/my-theme'
// Styled components
import { LoaingStyled } from './Loading.styled'

export interface ILoading {
    size?: 'sm' | 'md' | 'lg'
    bg?: TColors
}

const Loading = (props: ILoading) => {
    return (
        <LoaingStyled {...props} className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </LoaingStyled>
    )
}

export default Loading