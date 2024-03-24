import {useState} from 'react'
import './App.css'

const WIDTH = 128;
const HEIGHT = 70;
const DX = [10, 0, 0, -10];
const DX_MOUTH = [12, 0, -10, -10];

const getStyle = (config) => {
    return {
        width: (WIDTH - 20),
        height: HEIGHT,
        ...(config ? { backgroundPosition: `${config.x - 10}px ${config.y}px` } : null),
    };
}

const eyesConfig = [];
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
        eyesConfig.push({
            x: -WIDTH * i + DX[i],
            y: -HEIGHT * j,
        })
    }
}
const mouthConfig = [];
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
        mouthConfig.push({
            x: -WIDTH * i + DX_MOUTH[i],
            y: -389 -HEIGHT * j,
        })
    }
}

function App() {
    const [selectedEyes, setSelectedEyes] = useState(null);
    const [selectedMouth, setSelectedMouth] = useState(null);
    return (
        <div className="app">
            <div className="controls">
                <div className="selection">
                    {eyesConfig.map((eyeConfig) => {
                        return <div className={`part ${eyeConfig === selectedEyes ? 'part-selected' : ''}`} style={getStyle(eyeConfig)} onClick={() => {
                            setSelectedEyes(eyeConfig);
                        }}></div>
                    })}
                </div>
                <div className="selection">
                    {mouthConfig.map((mouthConfig) => {
                        return <div className={`part ${mouthConfig === selectedMouth ? 'part-selected' : ''}`} style={getStyle(mouthConfig)} onClick={() => {
                            setSelectedMouth(mouthConfig);
                        }}></div>
                    })}
                </div>
            </div>
            <div className="result">
                <div className="emotion">
                    <div className="part" style={{...getStyle(selectedEyes)}}></div>
                    <div className="part" style={{...getStyle(selectedMouth)}}></div>
                </div>
            </div>
        </div>
    )
}

export default App
