import styled from 'styled-components'

export const MainContainer = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
    align-items: center;
`
export const CardNaruto = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: space-between;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    color:#074f8f;
    .chamada1{
        display:flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 30px;
        margin-top: 30px;
        margin-bottom: 30px;
        width:50%;
        left:5%;
        position:relative;
    }
    .naruto{
        margin-top:30px;
        margin-bottom:30px;
        width:50%;
        position:relative;
        right:5%;
    }
`
export const Busca = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    position:relative;
    width: 70%;
    border: 1px solid #074f8f;
    border-radius: 10px;
    padding: 15px;
    margin-top: 15px;
    img{
        width: 30px;
        margin: 0 10px
    }
    input{
        border:0;
        outline:none;
        width:95%;
        padding: 10px;
    }
    button{
        border-radius: 10px;
        padding: 10px;
    }
`