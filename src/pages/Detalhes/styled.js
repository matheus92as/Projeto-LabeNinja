import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
    .conteudo{
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        border-radius: 15px;
        width: 80%;
        color:#074f8f;
        .X{
        cursor: pointer;
        position: relative;
        border-radius: 35px;
        left: 95%;
        width: 32px;
        height: 32px;
        padding: 0;
        margin: 0;
        z-index: 1;
        }
        h1 {
            margin:40px;
            margin-top:10px;
        }
        p{
            margin-left:50px;
        }
        h3{
            margin-left:40px;
        }
    }
    button{
        cursor: pointer;
        border-radius: 15px;
        padding: 10px;
        margin: 30px;
        border:2px solid #074f8f;
        color:#074f8f;
        font-size: 18px;
        background-color: inherit;
        transition: 0.2s;
        :hover{
            background-color: #dff0ff;
            transition: 0.2s;
        }

    }
`