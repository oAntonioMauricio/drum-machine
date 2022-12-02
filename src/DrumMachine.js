import React from 'react';

import Sample1 from "./assets/drumSounds/Sample 1.wav";
import Sample2 from "./assets/drumSounds/Sample 2.wav";
import Sample3 from "./assets/drumSounds/Sample 3.wav";
import Sample4 from "./assets/drumSounds/Sample 4.wav";
import DillaSnare from "./assets/drumSounds/Dilla Snare.wav";
import OpenHH from "./assets/drumSounds/OpenHH.wav";
import KickNHat from "./assets/drumSounds/KickNHat.wav";
import Kick from "./assets/drumSounds/Kick.wav";
import ClosedHH from "./assets/drumSounds/ClosedHH.wav";

class DrumMachine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: "Let's hear!",
        }

        this.onKeyPress = this.onKeyPress.bind(this);
        this.handleAudioKeys = this.handleAudioKeys.bind(this);
    }

    //
    //reproduzir audio nos botões
    //
    handleAudio = (event) => {
        let audio = document.getElementById(event.currentTarget.textContent);
        if (audio.paused) {
            audio.play()
        } else {
            audio.currentTime = 0
        }
        this.setState({ display: event.currentTarget.id });
    }


    //função pai para reproduzir com argumento key (utilizar abaixo!)
    handleAudioKeys = (key) => {
        let audio = document.getElementById(key);
        if (audio.paused) {
            audio.play()
        } else {
            audio.currentTime = 0
        }
    }
    //função pai para reproduzir com argumento key (utilizar abaixo!)


    //
    //reproduzir audio nas teclas
    //
    onKeyPress(event) {
        if (event.keyCode === 81) {
            document.getElementById("Sample 1").click();
        }
        if (event.keyCode === 87) {
            document.getElementById("Sample 2").click();
        }
        if (event.keyCode === 69) {
            document.getElementById("Sample 3").click();
        }
        if (event.keyCode === 65) {
            document.getElementById("Sample 4").click();
        }
        if (event.keyCode === 83) {
            document.getElementById("Dilla Snare").click();
        }
        if (event.keyCode === 68) {
            document.getElementById("Open-HH").click();
        }
        if (event.keyCode === 90) {
            document.getElementById("Kick-n'-Hat").click();
        }
        if (event.keyCode === 88) {
            document.getElementById("Kick").click();
        }
        if (event.keyCode === 67) {
            document.getElementById("Closed-HH").click();
        }
    }

    //adicionar monitorização de teclado
    componentDidMount() {
        document.addEventListener("keydown", this.onKeyPress, false);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyPress, false);
    }


    render() {

        // Tailwind Styles
        const buttonStyle = "drum-pad bg-blue-500 text-white font-bold py-4 px-8 rounded active:bg-violet-700";

        return (
            <div id='drum-machine' className='flex flex-row bg-white p-10 gap-8 rounded'>

                <div className='grid grid-cols-3 gap-2'>
                    <button id="Sample 1" className={buttonStyle} onClick={this.handleAudio.bind(this)}>Q
                        <audio src={Sample1} className='clip' id='Q' />
                    </button>

                    <button id="Sample 2" className={buttonStyle} onClick={this.handleAudio.bind(this)}>W
                        <audio src={Sample2} className='clip' id='W' />
                    </button>

                    <button id="Sample 3" className={buttonStyle} onClick={this.handleAudio.bind(this)}>E
                        <audio src={Sample3} className='clip' id='E' />
                    </button>

                    <button id="Sample 4" className={buttonStyle} onClick={this.handleAudio.bind(this)}>A
                        <audio src={Sample4} className='clip' id='A' />
                    </button>

                    <button id="Dilla Snare" className={buttonStyle} onClick={this.handleAudio.bind(this)}>S
                        <audio src={DillaSnare} className='clip' id='S' />
                    </button>

                    <button id="Open-HH" className={buttonStyle} onClick={this.handleAudio.bind(this)}>D
                        <audio src={OpenHH} className='clip' id='D' />
                    </button>

                    <button id="Kick-n'-Hat" className={buttonStyle} onClick={this.handleAudio.bind(this)}>Z
                        <audio src={KickNHat} className='clip' id='Z' />
                    </button>

                    <button id="Kick" className={buttonStyle} onClick={this.handleAudio.bind(this)}>X
                        <audio src={Kick} className='clip' id='X' />
                    </button>

                    <button id="Closed-HH" className={buttonStyle} onClick={this.handleAudio.bind(this)}>C
                        <audio src={ClosedHH} className='clip' id='C' />
                    </button>
                </div>
                <div id="display" className='flex flex-col justify-center w-1/3'>
                    <p id="display" className='bg-blue-400 rounded w-52 py-4 px-8'>{this.state.display}</p>
                </div>

            </div>
        )
    }
}

export default DrumMachine;