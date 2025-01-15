import React, {useContext} from 'react';
import { TemaContext } from './TemaContext';

function TemaAtual(){
    const {tema} = useContext(TemaContext);
    return (<div>
        <h2>Exercício 03</h2>
         O tema atual é : {tema}
         </div>);
} export default TemaAtual;

