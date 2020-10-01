import styled from 'styled-components'
// My theme 
import { color } from '../../theme/my-theme'

export const Container = styled.div`
    .row { display: flex; padding: 10px 0px 0px 0px;}

    .time-i, .time-g {
        height: 18px;
        width: 8px;
        margin: 1px 10px 0px 8px;
        border-radius: 8px;
    }

    .time-i { background-color: ${ color('tertiary') }; }
    .time-g { background-color: ${ color('secondary') }; }
`