import React from 'react'
import { useState } from 'react';
import {AudioPlayer} from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';

export default function Audio() {


    const [file, setFile] = useState("")
    const [id, setId] = useState(0)
    const handlePlay = (id) => {
        setId(id)
    }

  return (
    <div>
        <AudioPlayer
            layout="stacked-reverse"
            src={file}
            className='audio-player'
            showSkipControls={true} 
            showJumpControls={false}
        />
    </div>
  )
}
