import React , {useContext} from 'react';
import TemaAtual from './TemaAtual';
import { TemaContext } from './TemaContext';

function BotaoTrocaTema(){
    const{ toggleTema } = useContext(TemaContext);
    return ( <button onClick={toggleTema}> Trocar Tema</button>);

}export default BotaoTrocaTema;