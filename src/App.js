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

            <h2 className='warning flexDisplay' >Então, antes de te liberar pra ler a cartinha que escrevi, eu só queria lembrar que a parte de escrever bem da relação ficou com você :)</h2>

            <a onClick={releaseLetter} >Abrir a cartinha</a>

        </div>

        <div className='theLetter flexDisplay' style={{display: theLetter}} >

            <h3>Título</h3>

            <p>texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinhatexto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinhatexto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinhatexto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinhatexto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinhatexto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinhatexto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinhatexto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha texto da cartinha</p>

            <a onClick={finishedReading} >Já terminei de ler, irmão </a>

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
