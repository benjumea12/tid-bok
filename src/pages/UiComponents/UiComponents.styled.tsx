import styled from 'styled-components'
// My theme
import { color } from '../../theme/my-theme'

export const Container = styled.div`
    padding: 20px; 
    img { 
        width: 100%;
        border-radius: 15px; 
        box-shadow: 3px 3px 15px rgba(0,0,0,0.4);
    }

    .title {
        text-align: center;
        width: auto;
        padding: 5px;
        height: auto;
        height: auto;
        padding: 25px 30px 28px 30px;
        border-radius: 15px;
        background-color: ${ color('primaryLight') };
    }
    .tab { 
        margin: 20px 0px 20px 20px; 
        display: flex;
        flex-direction: column
        
    }
    .bg-black { background-color: black; }
    .bg-secondary { 
        padding: 15px;
        border-radius: 15px;
        margin-top: 5px;
        background-color: ${ color('secondaryLight') }; 
    }
    .space { height: 35px; }
    .space-sm { height: 5px; }

    .border { 
        margin: 35px 0px;
        padding: 30px 25px;
        border-radius: 15px;
        border: 1px solid rgba(0,0,0,0.2);
    }

    .flex {
        display: flex;
        padding-left: 20px;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
`