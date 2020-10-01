import styled from 'styled-components'
// My theme
import { media, color } from '../../theme/my-theme'

type PropsNav = {
    openNav: boolean
    selected: number
    autoShow?: boolean | true
}

const WidthNav = '230px'

export const Container = styled.div``

export const ContentNav = styled.div<PropsNav>`
    position: fixed;
    z-index: 2;
    height: 100vh;
    width: ${WidthNav};
    box-shadow: 3px 0px 8px #0000001A;

    @media (max-width: ${media.lg}) {
        ${props => props.openNav ? `
            opacity: 1;
            width: 100%;
        ` : `
            opacity: 0;
            width: 0px;
        `}

        background-color: rgba(0,0,0,0.15);
        transition: opacity 200ms ${ props => props.theme.transition },
                    width 0ms ${ props => props.openNav ? null : `200ms` };
    }

    .nav-content {
        width: ${WidthNav};
        height: 100vh;
        display: flex;
        overflow-x: hidden;
        overflow-y: hidden;
        flex-direction: column;
        background-color: white;
        box-shadow: 3px 0px 8px #0000001A;
        transition: width 200ms ${ props => props.theme.transition };

        @media (max-width: ${media.lg}) {
            ${props => props.openNav ? `
                    opacity: 1;
                    width: ${WidthNav};
                ` : `
                    width: 0px;
                `}
        }

        .header {
            align-self: start;
            text-align: center;
            padding-bottom: 10px;
            width: ${WidthNav};
            
            .logo-name { 
                padding-top: 20px;
                img { width: 120px; }
            }
            .avatar { 
                padding-top: 10px; 
                img { width: 80px; }
            }
            .name { 
                padding: 5px 20px; 
            }

            .actions {
                padding-top: 12px;
                display: flex;
                justify-content: center;

                .margin { margin-right: 10px; }
                .icon { 
                    font-size: 26px;
                    color: ${ color() };
                    cursor: pointer;
                    transition: transform 200ms ${ props => props.theme.transition };

                    &:hover {
                        opacity: 0.9;
                        transform: rotate(40deg);
                    }
                }
            }
        }

        .menu-nav {
            height:100%;
            width: ${WidthNav};

            .contain {
                position: relative;
                height: 90%;
                width: 90%;
                margin: 5% auto;
                background: #EBF1F5;
                border-radius: 15px;

                .list-menu {
                    padding-top: 18px;

                    .selected { margin-top: 10px; margin-bottom: 5px;}

                    .selected > .link {
                        color: white;
                        &:hover { color: white; }
                    }

                    li {
                        position: relative;
                        z-index: 2;
                        list-style: none; 
                        height: 30px;
                        transition: margin-top 200ms ${ props => props.theme.transition };
                    }

                    .link {
                            cursor: pointer;
                        text-decoration: none;
                        font-weight: 500;
                        font-family: 'Roboto';
                        user-select: none;
                        color: ${ props => props.theme.colors.primary };
                        transition: color 200ms ${ props => props.theme.transition };

                        &:hover { color: ${ props => props.theme.colors.secondary }; }

                        p {
                            margin: 0px;
                        }
                    }
                }

                .selection {
                    position: absolute;
                    top: ${ props => (props.selected * 30) + 20}px;
                    height: 34px;
                    width: 90%;
                    margin: auto 5%;
                    border-radius: 18px;
                    z-index: 1;
                    background-color: ${ props => props.theme.colors.secondary };

                    transition: top 200ms ${ props => props.theme.transition };
                }

                .logOut {
                    float: unset;
                    color: red;
                    height: 100%;

                    p {
                        position: absolute;
                        text-align: center;
                        margin: auto;
                        left: 0;
                        right: 0;
                        bottom: 30px;
                        font-weight: 500;
                        font-family: 'Roboto';
                        user-select: none;
                        cursor: pointer;
                        color: ${ props => props.theme.colors.primary };
                        transition: color 200ms ${ props => props.theme.transition };

                        .icon { transform: rotate(180deg) }

                        &:hover { color: ${ props => props.theme.colors.secondary }; }
                    }
                }
            }
        }
    }
`

export const ContentRight = styled.div`
    position: relative;
    z-index: 1;
    margin-left: ${WidthNav};
    height: 100vh;
    width: auto;
    transition: margin-left 200ms ${ props => props.theme.transition };

    @media (max-width: ${media.lg}) {
        margin-left: 0px;
    }

    .header-nav{
        top: 0px;
        position: fixed;
        height: 0px;
        width: 100%;
        overflow: hidden;
        background-color: white;
        box-shadow: 0px 3px 8px #0000001A;
        transition: height 200ms ${ props => props.theme.transition };

        @media (max-width: ${media.lg}) {
            height: 50px;
        }

        .logo-name { 
            display: inline-flex; 
            margin: 13px 15px;
        }
        .logo-name > img { width: 120px; }

        .icon {
            float: right;
            margin: 13px 15px;
            height: 25px;
            width: 26px;
            cursor: pointer;
            position: relative;
            transition: 200ms ${ props => props.theme.transition };

            &:hover { opacity: 0.8; }
        }


        .icon span {
            display: block;
            position: absolute;
            height: 3.4px;
            width: 100%;
            background: ${ color('secondary') };
            border-radius: 5px;
            opacity: 1;
            left: 0;
            transform: rotate(0deg);
            transition: 200ms ${ props => props.theme.transition };
        }

        .icon span:nth-child(1) { top: 0px; }
        .icon span:nth-child(2), .icon span:nth-child(3) { top: 8px; }
        .icon span:nth-child(4) { top: 16px; }

        .icon.open span:nth-child(2) { transform: rotate(45deg); }
        .icon.open span:nth-child(3) { transform: rotate(-45deg); }

        .icon.open span:nth-child(1), .icon.open span:nth-child(4) {
            top: 8px;
            width: 0%;
            left: 50%;
        }
    }

    .content {
        padding: 15px 20px 15px 20px;

        @media (max-width: ${media.lg}) {
            padding-top: 70px;
        }
    }
`
