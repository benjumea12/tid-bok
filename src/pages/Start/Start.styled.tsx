import styled from 'styled-components'
// Theme
import { media } from '../../theme/my-theme'
// Interfaces
interface Icontents {
    showForm: boolean
}

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-auto-columns: minmax(50%, 100%);
    grid-auto-rows: minmax(100vh, auto);
`

export const ContentLeft = styled.div<Icontents>`
    position: relative;
    grid-column: 1;
    grid-row: 1;
    height: 100%;
    display: grid;
    padding: 0px 20px;
    grid-auto-rows: minmax(33.33%, auto);

    /* Responsive styles */
    @media (max-width: ${media.md}) {
        ${ props => !props.showForm && `display: none;` }
    }

    /* class styles */
    .divContent {
        display: flex;
        align-self: end;
        justify-content: center;
        margin-bottom: 7em;

        /* Styles when the form is show */
        ${ props => props.showForm && `
            align-self: center;
            margin-bottom: 0em;
        ` }

        img {
            width: 80%;
            animation:  ${ props => props.theme.animaShowElement } 
                        ${ props => props.theme.transition } 200ms forwards;
        }
    }
`

export const ContentRight = styled.div<Icontents>`
    position: relative;
    grid-row: 1;
    grid-column: 2;
    height: 100%;
    display: grid;
    padding: 0px 30px;

    .social {
        visibility: hidden;
    }

    /* Responsive styles */
    @media (max-width: ${media.md}) {
        grid-column: 1;

        .social {
            visibility: visible;
        }

        /* Styles when the form is show */
        ${ props => props.showForm && `display: none;` }        
    }

    /* class styles */
    .logo {
        display: flex;
        align-self: start;
        justify-content: center;
        margin-top: 50px;

        img {
            width: auto;
            height:auto;
            cursor: pointer;
        }
    }

    .text {
        display: flex;
        align-self: top;
        justify-content: center;
        margin-top: 30px;
        animation:  ${ props => props.theme.animaShowElement } 
                    ${ props => props.theme.transition } 200ms forwards;
    }

    .buttons {
        display: flex;
        align-self: top;
        justify-content: center;
        animation:  ${ props => props.theme.animaShowElement } 
                    ${ props => props.theme.transition } 200ms forwards;
    }

    .button {
        margin-top: 5px;
        display: block;
    }

    .illustration {
        display: flex;
        align-self: center;
        justify-content: center;
        padding-bottom: 40px;

        img {
            width: 80%;
            animation:  ${ props => props.theme.animaShowElement } 
                        ${ props => props.theme.transition } 200ms forwards;
        }
    }
`

export const SocialStyled = styled.div`
    position: absolute;
    padding-top: 10px;
    padding-left: 0px;

    img {
        margin: 0px 10px;
        cursor: pointer;
    }
`