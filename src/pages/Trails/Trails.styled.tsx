import styled from 'styled-components'
// My theme
import { media } from '../../theme/my-theme'

export const ContentPage = styled.div<{user: string}>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;

    @media (max-width: ${media.sm}){
        padding: 0px;
    }

    .card {
        width: 10em;
        margin: 10px;
        padding: 13px 15px 15px 15px;
        border-radius: 15px;
        box-shadow: 3px 3px 8px #0000001A;
        transition: box-shadow 200ms ${ props => props.theme.transition };

        @media (max-width: ${media.sm}){}
            
        .info { margin: 5px 3px; }
        .link { float: right; }
    }
`