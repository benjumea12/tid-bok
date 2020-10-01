import styled from 'styled-components'

export const  NotificationButton = styled.div`
    position: relative;
    user-select: none;
    cursor: pointer;

    .button {
        top: 0px;
        left: 0px;
        height: 25px;
        width: 30px;
        padding-top: 5px;
        border-radius: 10px;
        position: relative;
        user-select: none;
        text-align: center;
        background-color: ${ props => props.theme.colors.secondary };
        transition: transform 200ms ${ props => props.theme.transition }, 
                    box-shadow 200ms ${ props => props.theme.transition };

        &:hover {
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
        }

        &:hover + .beagle {
            opacity: 0;
        }
    }

    .beagle {
        top: -6px;
        right: 0px;
        bottom: 0px;
        left: 19px;
        width: 12px;
        height: 12px;
        opacity: 1;
        border: 2px solid #FFFFFF;
        border-radius: 50%;
        position: absolute;
        user-select: none;
        background-color: ${ props => props.theme.colors.tertiary };
        transition: opacity 200ms ${ props => props.theme.transition };
    }
`