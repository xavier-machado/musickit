function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  let key = '';
  let audio = '';
  if(e.keyCode >= 49 && e.keyCode <= 57){
    audio = document.querySelector(`audio[data-key-up="${e.keyCode}"]`);
    key = document.querySelector(`div[data-key-up="${e.keyCode}"]`);
  }else if(e.keyCode >= 97 && e.keyCode <= 105){
    audio = document.querySelector(`audio[data-key-numpad="${e.keyCode}"]`);
    key = document.querySelector(`div[data-key-numpad="${e.keyCode}"]`);
  }else{
    return;
  }

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

// function playSoundNumPad(e) {
//   const audio = document.querySelector(`audio[data-key-numpad="${e.keyCode}"]`);
//   const key = document.querySelector(`div[data-key-numpad="${e.keyCode}"]`);
//   if (!audio) return;
//   key.classList.add('playing');
//   audio.currentTime = 0;
//   audio.play();
// }

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

