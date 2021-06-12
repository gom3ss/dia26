import { useState } from 'react';
import './App.css';

function App() {

    const[phoneOK, setPhoneOK] = useState ('flex')
    const[openingTheLetter, setOpeningTheLetter] = useState ('none')
    const[theLetter, setTheLetter] = useState ('none')
    const[theKiss, setTheKiss] = useState ('none')
    const[lookFine, setLookFine] = useState ('none')

    function releaseLetterDiv () {

        setPhoneOK('none')
        setOpeningTheLetter('flex')
        window.open('https://open.spotify.com/user/212y56iptyz6xc7okjlhfacca/playlist/33qI9krVysOVMdwXnWQmb4?si=OYsLotSYQNSH7ZHTqOBQQQ&dl_branch=1')
        
    }

    function releaseLetter () {

        setOpeningTheLetter('none')
        setTheLetter('flex')
        
    }

    function finishedReading () {

        setTheLetter('none')
        setTheKiss('flex')
        
    }

    function look () {

        setTheKiss('none')
        setLookFine('flex')
        
    }

  return (

    <div className="App flexDisplay">

        <div className='takethePhone flexDisplay' style={{display: phoneOK}} >

            <h2>O primeiro passo é pegar o fone de ouvido</h2>

            <a 
                onClick={releaseLetterDiv}
            >Já peguei</a>

        </div>

        <div className='openTheLetter flexDisplay' style={{display: openingTheLetter}} >

            <h2 className='warning flexDisplay' >Então, antes de te liberar para ler a cartinha que escrevi, eu só queria lembrar que a parte de escrever bem da relação ficou com você :)</h2>

            <a onClick={releaseLetter} >Abrir a cartinha</a>

        </div>

        <div className='theLetter flexDisplay' style={{display: theLetter}} >

            <h3>我被迷住了</h3>

            <p>Bom, bora lá. Hoje é dia 11/02/2021 às 01:02 e eu tô a semana toda tentando parar para escrever alguma coisa para você mas fé que agora vai.</p>

	        <p>Nesse momento às 01:23 ainda sem ter ideia do que vou escrever me pego pensando no dia 26 que a gente se conheceu e olhando aqui, isso faz 78 dias; 22 fins de semana, 3 feriados e 54 dias úteis. Mas o bizarro é que cara, não consigo lembrar da minha vida antes de te conhecer.</p>

            <p>Hoje é sábado dia 12/02/2021 às 01:58 e eu acabei de tirar você do nosso servidor do discord porque você caiu no sono kkkkkkkk cara, fico muito muito bobo quando paro pra pensar em tudo isso que a gente tá vivendo, de verdade. É bizarro o quanto tudo isso é natural com você, sabe? todas as piadas sem graça e todas as perguntas estranhas; é tudo TÃO TÃO!!.</p>

            <p>Então bora lá, baby. Eu realmente tô muito na dúvida do que escrever porque cara, vem muita coisa na cabeça quando penso em você e tá difícil de organizar; então vou só abrir meu coração aqui e por favor, não ri.
            Cara, eu de verdade nunca achei que ia encontrar uma pessoa igual a você na minha vida e só tenho a agradecer por tudo que tá rolando; por cada dengo, cheiro e xodó. Você faz todos os meus dias mais felizes. É uma paz muito absurda que nem sei explicar, sério!.
            Nunca acreditei em destino - masssss - tem uma história que eu conheço e que desde o dia 26 não me sai da cabeça: a lenda do Akai Ito. Não tenho certeza se você já conhece, então vou explicar rapidinho: é uma lenda chinesa que diz que existem pessoas tão profundamente conectadas que são ligadas pelos deuses por um cordão invisível, que pode se embolar e se esticar mas nunca se quebra. E, essas pessoas ligadas por este cordão estão destinadas a ficarem juntas, independente da hora, local e até da vida. Independente da história, eu só queria que soubesse que meu sentimento por você é o mais genuíno possível e que eu te amo nessa e em todas as próximas vidas que por acaso venham a ocorrer. Te amo e te amo!.</p>

            <p>Namora comigo?</p>

            <a onClick={finishedReading} >Sim, lógico!! </a>
            <a onClick={finishedReading} style={{backgroundColor: 'rgb(202, 15, 93)', marginTop: '10px'}} >Sim só que com cor diferente </a>

        </div>

        <div className='flexDisplay' style={{display: theKiss}}>
        
            <h2 className='giveAKiss' style={{display: theKiss}} >Dá um beijo nesse cara aí então por favor</h2>

            <a onClick={look} >🦄🤠 🦄🤠 🦄🤠</a>

        </div>

        <h2 style={{display: lookFine}} >Agora olha na capinha do telefone dele aí porque eu acho que ele tá escondendo alguma coisa.</h2>

    </div>
  );
}

export default App;
