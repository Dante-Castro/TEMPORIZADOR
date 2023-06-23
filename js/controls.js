
export  default function Controls({ 
  buttonplay, 
  buttonpause, 
  buttonset, 
  buttonstop
}) {

  function play () {
    buttonplay.classList.add('hide')
    buttonpause.classList.remove('hide')
    buttonstop.classList.remove('hide')
    buttonset.classList.add('hide')
  }

  function pause () {
    buttonpause.classList.add('hide')
    buttonplay.classList.remove('hide')
  }

  function reset () {
    buttonplay.classList.remove('hide')
    buttonpause.classList.add('hide')
    buttonset.classList.remove('hide')
    buttonstop.classList.add('hide')
  }

  function getMinutes () {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes){      
      return false
    }
    return newMinutes    
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
  }
}

