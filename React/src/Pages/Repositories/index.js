import React, { useEffect, useState } from "react";
import * as S from './styled';
import { useNavigate } from "react-router-dom";


export default function Repositories(){
    const navigate = useNavigate();
    const [ repositories , setRespositories ] = useState ([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName != null){
            repositoriesName = JSON.parse(repositoriesName);
            setRespositories(repositoriesName)
            localStorage.clear();
        }else{
            navigate('/')
        }
        
    },[]);

    return(
        <S.Container>
            <S.Title> Repositorios</S.Title>
            <S.List>
                {   repositories.map(repository => {
                    return (
                        <S.ListItem> Repositorio: { repository } </S.ListItem>
                    )
                }) }
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}

//export default Repositories; poderia usar assim tambem