let flowStep1 = {
  btnTexts: { text1: 'Sim', text2: 'Não' },
  texts: ['Ola cara', 'tudo bem?', 'vamos la?'],
};

let timeShowBallons = 1000;
let types = ['input', 'options-two', 'options-three'];

function createOptionsTwo(btnTexts) {
  return `<div class="btn-options">
          <button type="button" class="btn btn-option" onclick="talFunc(${btnTexts.text1}, 'option_1')">
              ${btnTexts.text1}
          </button>
          <button type="button" class="btn btn-option btn-option-blue" onclick="talFunc(${btnTexts.text2}, 'option_2')">
              ${btnTexts.text2}
          </button>
        </div>`;
}

function createInput() {
  return `<input type="text">`;
}

function elementType(type, config) {
  if (type === types[0]) {
    return createInput();
  }
  if (type === types[1] && config) {
    return createOptionsTwo(config);
  }
}

function removeAvatar(index) {
  let img = document.querySelector(`.img-${index}`);
  img.classList.add('hidden');
}

function createStep1(idElements, flowStep, type) {
  const { texts, btnTexts } = flowStep;
  const createDivStep = document.querySelector('.container');
  const ballonsDiv = document.createElement('div');
  ballonsDiv.className = 'ballons';
  const srcImg = '../assets/imgs/icon-chat.png';

  function displayNextItem(index) {
    if (index < texts.length) {
      const text = texts[index];

      const newDiv = `
          <div class="group-ballon-avatar">
            <div class="avatar">
              <img class="img-${index}" width="200" src="${srcImg}" alt="Imagem">
            </div>
            <div class="ballon ballon-1 ballon-step-1">${text}</div>
          </div>
          ${index === texts.length - 1 ? elementType(type, btnTexts) : ''}
        `;

      ballonsDiv.insertAdjacentHTML('beforeend', newDiv);

      setTimeout(() => {
        displayNextItem(index + 1);
        if (index + 1 !== texts.length) {
          removeAvatar(index);
        }
      }, timeShowBallons);
    }
  }

  displayNextItem(0);

  const step1Div = document.createElement('div');
  step1Div.className = idElements;
  step1Div.appendChild(ballonsDiv);

  createDivStep.appendChild(step1Div);

  return createDivStep;
}

createStep1('step-1', flowStep1, 'options-two');
