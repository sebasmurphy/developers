document.addEventListener('DOMContentLoaded', function() {
  let imgCounter = 0;
  let audioCounter = 0;
  let bodyElement = document.querySelector('body');
  let footerElement = document.querySelector('footer');

  let createDiv = function(x, y) {
    let newDiv = document.createElement('div');
    let newImg = document.createElement('img');
    let imgNumArray = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15'
    ];
    let audioNumArray = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
      '13',
      '14'
    ];
    let centerX = x - 100;
    let centerY = y - 100;

    let newAudioName = 'developers-' + audioNumArray[audioCounter];
    let newAudio = new Audio('mp3/' + newAudioName + '.mp3');
    newAudio.play();

    let imgSrc = 'img/ballmer/png/ballmer-' + imgNumArray[imgCounter] + '.png';

    newImg.setAttribute('src', imgSrc);

    newDiv.append(newImg);
    newDiv.setAttribute(
      'style',
      `position: absolute;
    top: ${centerY}px;
    left: ${centerX}px;`
    );

    bodyElement.append(newDiv);

    if (imgCounter == imgNumArray.length - 1) {
      imgCounter = 0;
    } else {
      imgCounter++;
    }

    if (audioCounter == audioNumArray.length - 1) {
      audioCounter = 0;
    } else {
      audioCounter++;
    }
  };

  let bodyHandler = function(e) {
    e.stopPropagation();
    if (e.type == 'touchstart') {
      let x = e.originalEvent.touches[0].pageX;
      let y = e.originalEvent.touches[0].pageY;
      createDiv(x, y);
      alert(x + 'yes' + y);
    } else if (e.type == 'click') {
      let a = e.pageX;
      let b = e.pageY;
      createDiv(a, b);
    }
  };
  let footerHandler = function(e) {
    e.stopPropagation;
  };

  footerElement.addEventListener('click', footerHandler);
  footerElement.addEventListener('touchstart', footerHandler);
  bodyElement.addEventListener('click', bodyHandler);
  bodyElement.addEventListener('touchstart', bodyHandler);
});
