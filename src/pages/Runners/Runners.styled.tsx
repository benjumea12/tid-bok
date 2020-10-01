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
        padding: 13px 15px 20px 15px;
        border-radius: 15px;
        text-align: center;
        align-content: center;
        box-shadow: 3px 3px 8px #0000001A;
        transition: box-shadow 200ms ${ props => props.theme.transition };

        @media (max-width: ${media.sm}){
            
        }

        .user {
            height: 80px;
            width: 80px;
            border-radius: 50%;
            margin: 0px auto 8px auto;
            box-shadow: 3px 3px 8px #0000001A;
            background-image: url(${ props => props.user });
        }

        .info {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 10px 0px 15px 0px;
            padding: 0px 5px 0px 21px;
        }

        .info :nth-child(2) {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
        }

        .info :nth-child(1), .info :nth-child(3) {
            display: inline-block;
        }
    }
`