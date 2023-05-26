const textSteps = {
  stepApresentation: {
    balloon1: `Olá! Meu nome é João e estou aqui para te ajudar`,
    balloon2: `Farei algumas perguntas.`,
    balloon3: 'Para começarmos, qual seu nome?',
  },

  stepAskCity: {
    balloon1: (str) => `Prazer ${str}! Em qual cidade você mora?`,
  },
};
function addLoaderAvatar() {
  document.querySelector('.avatar-and-loading').classList.add('show-avatar');
  document.querySelector('.add-loader').classList.add('loader');
}

function removeLoaderAvatar() {
  setTimeout(() => {
    document.querySelector('.add-loader').classList.remove('loader');
    document
      .querySelector('.avatar-and-loading')
      .classList.remove('show-avatar');
  }, 500);
}

function createBallonAvatar(text, chatStepId, scrollBoolean) {
  const createDivStep = document.getElementById(chatStepId);

  const createNewDiv = `
    <div class="balloon">
      <p>${text}</p>
      <div class="icon-view-msg">
        <img src="./imgs/message-viewed.png" alt="Icone que menssagem vizualizada">
      </div>
    </div>`;
  createDivStep.insertAdjacentHTML('beforeend', createNewDiv);

  if (scrollBoolean) {
    const newDiv = createDivStep.lastElementChild;
    newDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
}

function createBallonInput(inputId, idCreateChat, nameCalledFunction) {
  const createDivStep = document.getElementById(idCreateChat);
  const newDiv = `
  <div class="balloon-inp">
      <input id="${inputId}" class="inputsSteps" type="text" placeholder="Digite seu nome">
      <button type="button" class="btn send-data" onclick="${nameCalledFunction}('${inputId}')">
          <img width="20" src="./imgs/send-data.png">
      </button>
  </div>
  `;
  createDivStep.insertAdjacentHTML('beforeend', newDiv);
  document.querySelector(`#${inputId}`).focus();
}

function createButtonsOptions(
  textOp1,
  textOp2,
  onClickFunc1,
  onClickFunc2,
  scrollBoolean
) {
  const createDivStep = document.getElementById('create-chat-step-two');
  const newDiv = `
  <div class="btn-options">
    <button type="button" class="btn btn-option-blue-ligth" onclick="${onClickFunc1}()">
        ${textOp1}
    </button>
    <button type="button" class="btn btn-option-blue-dark" onclick="${onClickFunc2}()">
        ${textOp2}
    </button>
  </div>
  `;
  createDivStep.insertAdjacentHTML('beforeend', newDiv);

  if (scrollBoolean) {
    const newDiv = createDivStep.lastElementChild;
    newDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
}

function hideInput(element) {
  const sendData = document.querySelector('.send-data');

  element.parentNode.removeChild(element);
  sendData.parentNode.removeChild(sendData);
}

function createBalloonClient(inputId) {
  const getValueInp = document.getElementById(inputId);

  const resultName = document.getElementById('result' + '-' + inputId);
  var getValueInpUpdate =
    getValueInp.value.charAt(0).toUpperCase() + getValueInp.value.slice(1);
  const newDiv = `<div class="balloon-client">
                    <p>${getValueInpUpdate}</p>
                    <div class="icon-view-msg-client">
                      <img src="./imgs/message-viewed.png" alt="Icone que menssagem vizualizada">
                    </div>
                  </div>
                  `;
  resultName.insertAdjacentHTML('beforeend', newDiv);
  return getValueInp;
}

function getName(inputId) {
  let getValueInp = createBalloonClient(inputId);
  hideInput(getValueInp);
  stepAskCity(getValueInp.value);
}

function getCity(inputId) {
  alert(inputId);
}

function pressEnterInput(inputId, nameCalledFunction) {
  let getNameInp = document.getElementById(inputId);

  getNameInp.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      nameCalledFunction(inputId);
      event.preventDefault();
    }
  });
}

function showAvatar(nameClassAvatar) {
  document.querySelector(nameClassAvatar).classList.remove('hide-avatar');
}

function stepApresentation() {
  // Balão 1
  addLoaderAvatar();
  createBallonAvatar(
    textSteps.stepApresentation.balloon1,
    'create-chat-step-apresentation',
    false
  );

  // Balão 2
  setTimeout(() => {
    addLoaderAvatar();
    createBallonAvatar(
      textSteps.stepApresentation.balloon2,
      'create-chat-step-apresentation',
      false
    );
    removeLoaderAvatar();
  }, 2000);

  // Balão 3
  setTimeout(() => {
    addLoaderAvatar();
    createBallonAvatar(
      textSteps.stepApresentation.balloon3,
      'create-chat-step-apresentation',
      false
    );
    removeLoaderAvatar();
  }, 3000);

  // Balão 4 - Input
  setTimeout(() => {
    addLoaderAvatar();
    createBallonInput(
      'inp-step-apresentation',
      'create-chat-step-apresentation',
      'getName'
    );

    pressEnterInput('inp-step-apresentation', getName);

    removeLoaderAvatar();
  }, 4000);
}

function stepAskCity(clientName) {
  showAvatar('#avatar-step-ask-city');
  addLoaderAvatar();
  createBallonAvatar(
    textSteps.stepAskCity.balloon1(clientName),
    'create-chat-step-ask-city',
    true
  );

  // Balão 4 - Input
  setTimeout(() => {
    addLoaderAvatar();
    createBallonInput(
      'inp-step-ask-city',
      'create-chat-step-ask-city',
      'getCity'
    );

    pressEnterInput('inp-step-ask-city', getCity);

    removeLoaderAvatar();
  }, 1000);
}

stepApresentation();
