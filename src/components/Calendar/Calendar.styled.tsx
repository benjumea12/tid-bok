import styled from 'styled-components'
// My theme
import { color, media } from '../../theme/my-theme'

export const Container = styled.div`
    @media (min-width: ${media.md}) {
        display: flex;
        flex-direction: row;
    }
    
    padding: 30px 0px 0px 0px;
    margin: 0px 20px;
`

export const Actions = styled.div`
    position: relative;
    z-index: 1;
    width: 30%;

    @media (max-width: ${media.md}) {
        width: 100%;
    }

    .container-actions {
        display: flex;
        flex-direction: row;
        margin-top: 15px;

        @media (max-width: ${media.md}) {
            justify-content: space-between;
        }

        .current-date { width: 100%; }
        .selects {
            display: flex;
            flex-direction: row;
        }

        .selects :nth-child(1) { margin-right: 2px; }
        .prev-next div { 
            margin: 0px 5px;
            cursor: pointer;    
        }
        .prev-next {
            margin-left: 30px;
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            color: ${ color('primary') };

            .left { transform: rotate(180deg); }
        }
    }
`

export const CalendarCard = styled.div`
    width: 70%;
    text-align: center;
    margin-top: 10px;

    @media (max-width: ${media.md}) {
        margin-top: 30px;
        width: 100%;
    }

    .table {
        margin: 10px auto auto auto;
        height: 350px;
        width: 30em;
        border-radius: 15px;
        padding: 20px;
        box-shadow: 3px 0px 10px #0000001A;
        text-align: center;

        @media (max-width: ${media.sm}) {
            width: 100%;
        }

        .calendar-day {
            height: 30px;
            padding: 8px 0px 0px 0px;
            vertical-align: top;
            position: ralative;
            color: gray;
            z-index: 1;

            p { margin: 0px auto 3px auto; }

            .times {
                display: flex;
                flex-direction: row;
                justify-content: center;
            }
        }
    }
`

export const SryledTimeWidget = styled.div<{type: string, open: boolean}>`
    padding: 0px 1px;
    position: relative;

    .time {
        height: 18px;
        width: 8px;
        border-radius: 8px;
        background-color: ${props => props.type === 'I' ? color('tertiary') : color('secondary')};
    }      

    .card {
        position: absolute;
        text-align: center;
        top: 20px;
        left: -45px;
        padding: 8px 5px;
        width: 100px;
        z-index: 2; 
        border-radius: 15px;
        background-color: ${ color('primary') };
        box-shadow: 3px 3px 8px #0000001A;
        ${ props => props.open ? `
            opacity: 1;
            visibility: visible;` : `
            opacity: 0;
            visibility: hidden;` };

        transition: opacity 150ms ${ props => props.theme.transition },
                    visibility 0ms ${ props => !props.open && `150ms` };

        .route {
            margin: 2px 0px 5px 0px;
            line-height: 10pt;
            font-size: 15px;
            color: ${ color('white') };;
        }
    } 

    .card:nth-child(3) { margin-top: 20px; }
`