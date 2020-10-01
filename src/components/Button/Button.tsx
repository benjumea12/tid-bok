import React from 'react'
// Styled components
import { LinedButton, OutlinedButton, Link } from './Button.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
// My theme
import { TColors } from '../../theme/my-theme'
// Types
export interface IButtonProps {
    text?: string
    size?: 'sm' | 'md' | 'lg'
    bg?: TColors
    variant?:  'lined' | 'outlined' | 'link'
}

type ButtonAttributes = IButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = (props: ButtonAttributes): JSX.Element => {
    // Destructuring props
    const { text, variant } = props

    // Condicional boutton 
    switch (variant) {
        case 'lined':
            return  <LinedButton {...props}>
                        { text }
                    </LinedButton>
        case 'outlined':
            return  <OutlinedButton {...props}>
                        { text }
                    </OutlinedButton>
        case 'link':
            return  <Link {...props}>
                        { text } <FontAwesomeIcon className='margin' icon={faAngleRight} size='lg' />
                    </Link>
        default:
            return  <LinedButton {...props}>
                        { text }
                    </LinedButton>
    }
}


export default Button;
