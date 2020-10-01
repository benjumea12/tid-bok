import styled from 'styled-components'
// My theme
import { media } from '../../theme/my-theme'

export const Container = styled.div`
    .title { 
        text-align: center;
        padding: 20px;
        margin-bottom: 30px;

        @media (max-width: ${ media.md }) {
            margin-bottom: 0px;
        }
    }

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px;

        @media (max-width: ${ media.md }) {
            flex-direction: column-reverse;
        }

        .card {
            text-align: center;
            padding: 20px;
            width: 300px;
            border-radius: 15px;
            box-shadow: 0px 3px 10px #00000024;

            .values {
                padding: 20px 0px;
                display: grid;
                grid-template-columns: 33% 0.495% 33% 0.495% 33%;
            }

            .last-times {
                margin-top: 10px;
                text-align: left;

                .time {
                    position: relative;
                    margin: 15px 15px 15px 15px;

                    .link { 
                        position: absolute;
                        bottom: 0px;
                        right: 0px;
                    }
                }
            }
        }

        .illustration {
            text-align: center;
            margin-top: 30px;
            img { 
                width: 60%; 

                @media (max-width: ${ media.md }) {
                    display: none;
                }
            }
            .button { margin: 50px 30px; }
        }
    }
`