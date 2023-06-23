import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sound.js"
import Events from "./events.js"
import {   
  buttonpause,
  buttonplay,
  buttonset,
  buttonstop,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

const controls = Controls ({
  buttonplay, 
  buttonpause, 
  buttonset, 
  buttonstop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,  
  resetControls: controls.reset  
})

const sound = Sound()

Events({controls, sound, timer})