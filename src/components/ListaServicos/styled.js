import styled from 'styled-components'

export const MainContainer = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
    align-items: center;
    width: 95%;
    margin: 20px;
    .filtros{
        display:flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        width:95%;
    }
`
export const ListaServico = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
    width: 100%;
    margin: 20px;
`
export const CardBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
    width:20%;
    margin:15px;
    padding:25px;
    box-shadow: 5px 5px 10px grey;
    border-radius:5px;
    color:#074f8f;
    transition: 0.2s;
    :hover{
        transform: scale(1.1);
        transition: 0.2s;
    }
    p{
        margin-top:0;
    }
    div{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    button{
        cursor: pointer;
        margin:10px;
        margin-left:0;
        padding:10px;
        border:2px solid #074f8f;
        border-radius:7px;
        font-size: 18px;
        color:#074f8f;
        background-color: inherit;
        transition: 0.2s;
        :hover{
            background-color: #dff0ff;
            transition: 0.2s;
        }
    }
    img{
        width:40px;
        height:40px;
    }
`