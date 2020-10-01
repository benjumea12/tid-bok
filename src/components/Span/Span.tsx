// Styled componens
import styled from 'styled-components'
// My theme
import { color, TColors } from '../../theme/my-theme'

// interfaces
interface ISpanProps {   
    bg?: TColors
}

const Span = styled.span<ISpanProps>`
  color: ${ props => color(props.bg) }
`

export default Span
