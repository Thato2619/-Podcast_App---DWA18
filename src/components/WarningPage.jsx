import React from 'react'
import { useState, useEffect } from 'react'
{/*import {Prompt} from 'react-router-dom'*/}

const WarningPage = (message = "Are you you want to stop listening?") => {

  const [warning, setWarning ] = useState(false)

  useEffect(() => {
    //detect browser as the browser is closing

    window.onbeforeunload = warning && (() => message);

    return () => 
    window.onbeforeunload = null;
  }, [warning]) 

  const routerPrompt = <Prompt when={warning}  message={message}/>
  
  return [routerPrompt, () => setWarning(true), () => setWarning(false)]
}

export default WarningPage


