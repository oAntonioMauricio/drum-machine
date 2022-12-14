import React from 'react';

import Sample1 from "../assets/drumSounds/Sample 1.wav";
import Sample2 from "../assets/drumSounds/Sample 2.wav";
import Sample3 from "../assets/drumSounds/Sample 3.wav";
import Sample4 from "../assets/drumSounds/Sample 4.wav";
import DillaSnare from "../assets/drumSounds/Dilla Snare.wav";
import OpenHH from "../assets/drumSounds/OpenHH.wav";
import KickNHat from "../assets/drumSounds/KickNHat.wav";
import Kick from "../assets/drumSounds/Kick.wav";
import ClosedHH from "../assets/drumSounds/ClosedHH.wav";

class DrumMachine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: "Let's hear you!",
        }

        this.onKeyPress = this.onKeyPress.bind(this);
        this.handleAudioAndColor = this.handleAudioAndColor.bind(this);
    }

    //
    //reproduzir audio nos botões
    //
    handleAudio = (event) => {
        let audio = document.getElementById(event.currentTarget.textContent);
        if (audio.paused) {
            audio.play();
        } else {
            audio.currentTime = 0
        }
        this.setState({ display: event.currentTarget.id });
    }

    //função para reproduzir áudio e trocar a cor durante 200ms
    handleAudioAndColor = (id) => {
        document.getElementById(id).click();
        document.getElementById(id).classList.remove("bg-blue-500");
        document.getElementById(id).classList.add("bg-violet-700");
        setTimeout(() => document.getElementById(id).classList.remove("bg-violet-700"), 100);
        setTimeout(() => document.getElementById(id).classList.add("bg-blue-500"), 100);
    }

    //
    //reproduzir audio nas teclas
    //
    onKeyPress(event) {

        switch (event.keyCode) {
            case 81:
                this.handleAudioAndColor("Sample 1");
                break;

            case 87:
                this.handleAudioAndColor("Sample 2");
                break;

            case 69:
                this.handleAudioAndColor("Sample 3");
                break;

            case 65:
                this.handleAudioAndColor("Sample 4");
                break;

            case 83:
                this.handleAudioAndColor("Dilla Snare");
                break;

            case 68:
                this.handleAudioAndColor("Open-HH");
                break;

            case 90:
                this.handleAudioAndColor("Kick-n'-Hat");
                break;

            case 88:
                this.handleAudioAndColor("Kick");
                break;

            case 67:
                this.handleAudioAndColor("Closed-HH");
                break;

            default:
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
        const buttonStyle = "drum-pad bg-blue-500 text-white font-bold p-4 rounded active:bg-violet-700";

        return (
            <div id='drum-machine' className='container w-4/5 md:w-3/6 md:flex md:flex-row p-6 gap-8 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>

                <div className='grid grid-cols-3 gap-3 md:w-1/2'>
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
                <div id="display" className='flex flex-col justify-center md:w-1/2'>
                    <p id="display" className='py-4 px-8 w-full text-black dark:text-white '>{this.state.display}</p>
                </div>

            </div>
        )
    }
}

export default DrumMachine;