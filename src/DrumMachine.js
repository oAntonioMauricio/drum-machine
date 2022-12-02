import React from 'react'

class DrumMachine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleAudio = (event) => {
        document.getElementById(event.currentTarget.textContent).play();
    }

    render() {

        // Tailwind Styles
        const buttonStyle = "drum-pad bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded";

        return (
            <div id='drum-machine' className='flex flex-row bg-white p-10 gap-8 rounded'>

                <div className='grid grid-cols-3 gap-2'>
                    <button id="Sample 1" className={buttonStyle} onClick={this.handleAudio.bind(this)}>
                        Q
                        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className='clip' id='Q' />
                    </button>

                    <button id="Sample 2" className={buttonStyle}>W</button>
                    <button id="Sample 3" className={buttonStyle}>E</button>
                    <button id="Sample 4" className={buttonStyle}>A</button>
                    <button id="Dilla Snare" className={buttonStyle}>S</button>
                    <button id="Open-HH" className={buttonStyle}>D</button>
                    <button id="Kick-n'-Hat" className={buttonStyle}>Z</button>
                    <button id="Kick" className={buttonStyle}>X</button>
                    <button id="Closed-HH" className={buttonStyle}>C</button>
                </div>
                <div id="display" className='flex flex-col bg-blue-700'>
                    <p>DOIS</p>
                </div>

            </div>
        )
    }
}

export default DrumMachine;