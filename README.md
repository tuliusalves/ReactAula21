<h2>Exercício 01 e  02</h2>
<h4>Obs: Usei o mesmo componente para fazer esses dois exercícios.</h4>
Importando os Hooks Necessários


import React, { useRef, useState, useContext } from 'react';
React: Importa a biblioteca principal do React, que fornece as ferramentas para criar componentes e interfaces de usuário.
useRef: Cria uma referência persistente a um elemento DOM. É útil para manipular diretamente o DOM, como focar em um input.
useState: Permite criar e gerenciar estados locais dentro de um componente funcional. Neste caso, é usado para controlar o valor do tempo.
useContext: Permite acessar o valor de um contexto. Embora não utilizado neste exemplo específico, é útil para compartilhar dados entre componentes sem passar props através de várias camadas.
Estrutura do Componente


function Componente1() {
  // ...
}
Componente1: Define um componente funcional do React que encapsula a lógica e a interface do usuário.
Estado e Referências


const inputRef = useRef(null);
const [tempo, setTempo] = useState(0);
const intervaloRef = useRef(null);
inputRef: Cria uma referência para o elemento de input. Será utilizada para focar no campo de texto.
tempo: Um estado que armazena o valor do tempo em segundos.
intervaloRef: Uma referência para o intervalo que atualiza o tempo.
Funcionalidades
iniciar:
Inicia um intervalo usando setInterval.
A cada segundo, o valor do tempo é incrementado.
pausar:
Limpa o intervalo usando clearInterval, pausando a contagem.
resetar:
Limpa o intervalo e reconfigura o tempo para zero.
handleClick:
Foca no campo de texto utilizando a referência inputRef.current.
Interface do Usuário
O componente renderiza:

Um campo de texto com a referência inputRef.
Botões para iniciar, pausar e resetar o cronômetro.
Um botão para focar no campo de texto.
Um parágrafo exibindo o valor atual do tempo.

<h2>Exercício 03 </h2>

1. Import componentes necessários:



import React, { createContext, useState } from 'react';
React: Imports the fundamental React library.
createContext: A função createContext do React é usada para criar um objeto que permite compartilhar dados entre componentes sem a necessidade de passar props manualmente através de várias camadas.
useState: Este Hook permite gerenciar o estado local dentro de um componente funcional. Aqui, ele é usado para controlar o tema atual (claro ou escuro).
2. Criando o Contexto:



const TemaContext = createContext('Light');
TemaContext: Cria uma instância de createContext.
'Light' é o valor inicial padrão para o tema.
3. Criando o TemaProvider:



const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState('light');
TemaProvider: Este é um componente funcional que irá fornecer o contexto para os componentes filhos.
useState: Cria um estado local chamado tema com o valor inicial de 'light'.
setTema: A função para atualizar o estado do tema.


  const toggleTema = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
  };
toggleTema: Esta função é responsável por alternar entre os temas.
Se o tema atual for 'light', ele é alterado para 'dark'.
Se o tema atual for 'dark', ele é alterado para 'light'.


  return (
    <TemaContext.Provider value={{ tema, toggleTema }}> 
      {children} 
    </TemaContext.Provider>
  );
};
TemaContext.Provider: Este é o componente que fornece o contexto para os componentes filhos.
value: O atributo value é usado para fornecer os dados que serão compartilhados através do contexto. Neste caso, ele fornece o tema atual e a função toggleTema.
children: Este atributo representa os componentes filhos que serão renderizados dentro do contexto.
4. Exportando o Contexto e o Provider:



export { TemaContext, TemaProvider };
Exporta o TemaContext e o TemaProvider para que possam ser importados e utilizados em outros componentes da aplicação.

<h4>Componente botaoTroca</h4>
Importações


import React, { useContext } from 'react';
import TemaAtual from './TemaAtual';
import { TemaContext } from './TemaContext';
React: Importa a biblioteca principal do React, essencial para criar componentes e interfaces de usuário.
useContext: Esse hook do React nos permite acessar o valor de um contexto dentro de um componente. É como se fosse uma forma de "buscar" informações que estão sendo compartilhadas globalmente na aplicação.
TemaAtual e TemaContext: Importam componentes e o contexto que foram definidos em outros arquivos. O TemaAtual provavelmente é um componente que exibe o tema atual, e o TemaContext é o contexto que estamos usando para gerenciar o tema da aplicação.
Criando o Componente


function BotaoTrocaTema() {
  const { toggleTema } = useContext(TemaContext);
BotaoTrocaTema: Define um componente funcional do React chamado BotaoTrocaTema.
useContext(TemaContext): Aqui, estamos usando o hook useContext para acessar o valor do TemaContext. Esse valor contém informações sobre o tema atual e uma função para alternar entre os temas. Desestruturamos esse objeto para obter apenas a função toggleTema.


  return (
    <button onClick={toggleTema}> Trocar Tema</button>
  );
}
Retorno: O componente renderiza um botão.
onClick={toggleTema}: Quando o botão é clicado, a função toggleTema é chamada. Essa função, que foi obtida do contexto, é responsável por alternar entre os temas claro e escuro.

<h4>Componente TemaAtual</h4>

Importações
JavaScript

import React, {useContext} from 'react';
import { TemaContext } from './TemaContext';
React: Importa a biblioteca principal do React, essencial para criar componentes e interfaces de usuário.
useContext: Esse hook do React nos permite acessar o valor de um contexto dentro de um componente.
TemaContext: Importa o contexto que foi definido em outro arquivo (provavelmente TemaContext.js). Esse contexto armazena informações sobre o tema atual da aplicação (claro ou escuro).
Componente TemaAtual


function TemaAtual(){
TemaAtual: Define um componente funcional do React chamado TemaAtual. Esse componente é responsável por exibir o tema atual da aplicação.


  const {tema} = useContext(TemaContext);
useContext(TemaContext): Aqui, estamos usando o hook useContext para acessar o valor do TemaContext. Esse valor contém informações sobre o tema atual.
{tema}: Desestruturamos o objeto retornado pelo useContext para obter apenas a propriedade tema, que representa o tema atual (claro ou escuro).



Retorno: O componente renderiza um elemento div com um título e uma mensagem que indica o tema atual.
{tema}: Aqui, o valor da variável tema é inserido diretamente no JSX, mostrando o tema atual ao usuário.