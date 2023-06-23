import {
  buttonoff,
  buttonon,
  buttonpause,
  buttonplay,
  buttonset,
  buttonstop
} from "./elements.js"

export default function ({controls, timer, sound}) {

  buttonplay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
    sound.pressButton()
  })
  
  buttonpause.addEventListener('click', function(){
    controls.pause()
    timer.hold()
    sound.pressButton()
  })
  
  buttonstop.addEventListener('click', function(){
    controls.reset()
    timer.reset()
    sound.pressButton()
  })
  
  buttonon.addEventListener('click', function(){
    buttonon.classList.add('hide')
    buttonoff.classList.remove('hide')
    sound.bgAudio.pause()
  })
  
  buttonoff.addEventListener('click', function(){
    buttonoff.classList.add('hide')
    buttonon.classList.remove('hide')
    sound.bgAudio.play()
  })
  
  buttonset.addEventListener('click', function(){
    let newMinutes = controls.getMinutes()
  
    if (!newMinutes){
      timer.reset()
      return
    }
    
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
}
