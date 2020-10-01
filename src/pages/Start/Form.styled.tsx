import styled from 'styled-components'

export const FormStyled = styled.form<{isChanging: boolean}>`
    padding: 30px 50px 35px 50px;
    background-color: white;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0px 3px 10px #0000001A;
    animation:  ${ props => props.theme.animaShowElement } 
                ${ props => props.theme.transition } 200ms forwards;

    /* Styles when the form is changing */
    ${ props => props.isChanging && `display: none;` }

    /* class styles */
    .text {
        margin-top: 15px;
        margin-bottom: 10px;
    }

    .acounts {
        margin: 10px;

        .mar {
            margin: 3px 3px 3px 0px;
        }

        .acount {
            font-family: ${ props => props.theme.fonts.secondary };
            text-decoration: none;
            text-align: center;
            border-radius: 28px;
            display: inline-block;
            cursor: pointer;
            user-select: none;
            border: 1.5px solid #3b5998;
            transition: opacity 250ms ${ props => props.theme.transition }, 
            box-shadow 250ms ${ props => props.theme.transition };
            width: 130px;
            height: 28px;
            padding-top: 10px;
            font-size: 15px;

            &:hover {
                box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26);
            }

            &:active {
                opacity: 0.88;
            }
        }

        .facebook-button {
            font-weight: 500;
            color: #ffffff;
            background-color: #3b5998;
        }

        .google-button {
            font-weight: 500;
            color: #ffffff;
            background-color: white;
            color: black;
            border: 1.5px solid gray;
        }
    }

    .inputs {
        width: 100%;

        Input {
            margin-top: 3px;
        }
    }

    .actionBtn {
        margin-top: 15px;
    }

    .pointer {
        user-select: none;
        cursor: pointer;
    }
`