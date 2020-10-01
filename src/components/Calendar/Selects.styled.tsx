import styled from 'styled-components'
// My theme
import { color } from '../../theme/my-theme'

export const MontStyled = styled.div<{openDropdown: boolean}>`
    .input {
        position: relative;
        font-family: ${ props => props.theme.fonts.secondary };
        text-decoration: none;
        border-radius: 28px;
        display: inline-block;
        cursor: pointer;
        user-select: none;
        border: none;
        font-weight: 400;
        outline: none;
        width: 80px;
        height: 25px;
        padding: 0px 12px 2px 0px;
        font-size: 15px;
        background-color: transparent;
        border: 1.5px solid ${ color('primary') };
        &:hover { box-shadow: 2px 2px 8px #0000001A; }
    }

    .icon {
        top: 0;
        bottom: 0;
        right: 10px;
        margin: auto;
        position: absolute;
        transform: rotate(90deg);
        font-size: 18px;
    }

    .options {
        ${ props => props.openDropdown 
            ? ` visibility: visible;
                opacity: 1;`
            : ` visibility: hidden;
                opacity: 0;` }
        display: flex;
        position: absolute;
        z-index: 2;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 5px;
        padding: 5px;
        width: 131px;
        border-radius: 15px;
        position: absolute;
        background-color: white;
        box-shadow: 3px 3px 10px #0000001A;
        transition: visibility 150ms ${ props => props.theme.transition },
                    opacity 150ms ${ props => props.theme.transition };

        .option {
            margin: 1px;
            text-align: center;
            width: 40px;
            color: ${ color() };
            border-radius: 20px;
            cursor: pointer;
            user-select: none;
            transition: all 150ms ${ props => props.theme.transition };

            &:hover {
                color: white;
                background-color: ${ color('secondary') };
            }
        }

        .selected{
            color: white;
            background-color: ${ color('secondary') };
        }
    }
`

export const YearStyled = styled(MontStyled)`
    .options .actions:nth-child(1n) {
        cursor: pointer;
    }
    
    .options .actions {
        width: 100%;
        display: flex;
        justify-content: space-around;

        .left { transform: rotate(180deg) }
    }

    .options {
        width: 141px;
        .option { width: 45px; }
    }
`