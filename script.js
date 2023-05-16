const chatMsg = document.getElementById('chatMsg');

function currentTime() {
  const current = new Date();
  const hour = current.getHours().toString().padStart(2, '0');
  const minutes = current.getMinutes().toString().padStart(2, '0');

  const hourFormat = `${hour}:${minutes}`;
  return hourFormat;
}

function getName() {
  let getNameInp = document.getElementById('stepOneInp');
  let sendData = document.querySelector('.sendData');
  let resultName = document.getElementById('resultName');
  const newDiv = `<div class="balloonClient">
                    <p>${getNameInp.value}</p>
                  </div>
                  <div class="currentTime"> ${currentTime()} </div>
                  `;
  resultName.insertAdjacentHTML('beforeend', newDiv);
  getNameInp.parentNode.removeChild(getNameInp);
  sendData.parentNode.removeChild(sendData);
  stepTwo(getNameInp.value);
}

// Etapa 1
function stepOne() {
  let balloonOneText = `Olá! Meu nome é Joov e estou aqui para encontrar o plano de saúde ideal para você. Tudo é bem rápido e seguro.`;
  let balloonTwoText = `Farei algumas perguntas para saber qual o melhor plano para seu perfil e enviarei sua cotação.`;
  let balloonThreeText = 'Para começarmos, qual seu nome?';

  // Balão 1
  setTimeout(() => {
    document.querySelector('#avatar').style.display = 'block';
    document.querySelector('.avatarAndLoading').classList.add('showAvatar');
    document.querySelector('.addLoader').classList.add('loader');
    const newDiv = `<div class="balloon"> <p>${balloonOneText}</p> </div>`;
    chatMsg.insertAdjacentHTML('beforeend', newDiv);

    setTimeout(() => {
      document.querySelector('.addLoader').classList.remove('loader');
      document
        .querySelector('.avatarAndLoading')
        .classList.remove('showAvatar');
    }, 500);
  }, 1000);

  // Balão 2
  setTimeout(() => {
    document.querySelector('.avatarAndLoading').classList.add('showAvatar');
    document.querySelector('.addLoader').classList.add('loader');
    const newDiv = `<div class="balloon"> <p>${balloonTwoText}</p> </div>`;
    chatMsg.insertAdjacentHTML('beforeend', newDiv);

    setTimeout(() => {
      document.querySelector('.addLoader').classList.remove('loader');
      document
        .querySelector('.avatarAndLoading')
        .classList.remove('showAvatar');
    }, 500);
  }, 2000);

  // Balão 3
  setTimeout(() => {
    document.querySelector('.avatarAndLoading').classList.add('showAvatar');
    document.querySelector('.addLoader').classList.add('loader');
    const newDiv = `
                    <div class="balloon">
                        <p> ${balloonThreeText} </p>
                    </div>`;
    chatMsg.insertAdjacentHTML('beforeend', newDiv);

    setTimeout(() => {
      document.querySelector('.addLoader').classList.remove('loader');
      document
        .querySelector('.avatarAndLoading')
        .classList.remove('showAvatar');
    }, 500);
  }, 3000);

  // Balão 4 - Input
  setTimeout(() => {
    document.querySelector('.avatarAndLoading').classList.add('showAvatar');
    document.querySelector('.addLoader').classList.add('loader');
    const newDiv = `
                    <div class="balloon-inp">
                        <input id="stepOneInp" type="text">
                        <button type="button" class="btn sendData" onclick="getName()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" x="3650" y="3688">
                                <path fill="rgb(6, 110, 196)"
                                    d="M1.1 21.757l22.7-9.73L1.1 2.3l.012 7.912 13.623 1.816-13.623 1.817-.01 7.912z"></path>
                            </svg>
                        </button>
                      </div>
                      <div id="resultName"></div>
                    `;
    chatMsg.insertAdjacentHTML('beforeend', newDiv);

    setTimeout(() => {
      document.querySelector('.addLoader').classList.remove('loader');
      document
        .querySelector('.avatarAndLoading')
        .classList.remove('showAvatar');
      document.querySelector('#stepOneInp').focus();
    }, 500);
  }, 4000);
}

// Etapa 2
function stepTwo(resultName) {
  let balloonOneText = `Prazer ${resultName}! Escolher um plano de saúde pode gerar diversas dúvidas, não é mesmo?`;
  let balloonTwoText = `Vamos conversar. Me conta um pouco sobre você e no final vou te enviar ótimas opções.`;

  // Balão 1
  setTimeout(() => {
    document.querySelector('#avatar').style.display = 'block';
    document.querySelector('.avatarAndLoading').classList.add('showAvatar');
    document.querySelector('.addLoader').classList.add('loader');
    const newDiv = `<div class="balloon"> <p>${balloonOneText}</p> </div>`;
    chatMsg.insertAdjacentHTML('beforeend', newDiv);
    // chatMsg.scrollIntoView();

    setTimeout(() => {
      document.querySelector('.addLoader').classList.remove('loader');
      document
        .querySelector('.avatarAndLoading')
        .classList.remove('showAvatar');
    }, 500);
  }, 1000);

  // Balão 2
  setTimeout(() => {
    document.querySelector('.avatarAndLoading').classList.add('showAvatar');
    document.querySelector('.addLoader').classList.add('loader');
    const newDiv = `<div class="balloon"> <p>${balloonTwoText}</p> </div>`;
    chatMsg.insertAdjacentHTML('beforeend', newDiv);
    // chatMsg.scrollIntoView();

    setTimeout(() => {
      document.querySelector('.addLoader').classList.remove('loader');
      document
        .querySelector('.avatarAndLoading')
        .classList.remove('showAvatar');
    }, 500);
  }, 2000);

  // Balão 4 - Input
  setTimeout(() => {
    document.querySelector('.avatarAndLoading').classList.add('showAvatar');
    document.querySelector('.addLoader').classList.add('loader');
    const newDiv = `
                    <div>
                      <button class="btn btnOption" type="button">Vamos começar</button>
                      <button class="btn btnOption" type="button">Me explique melhor</button>
                    </div>
                    `;
    chatMsg.insertAdjacentHTML('beforeend', newDiv);
    // chatMsg.scrollIntoView();

    setTimeout(() => {
      document.querySelector('.addLoader').classList.remove('loader');
      document
        .querySelector('.avatarAndLoading')
        .classList.remove('showAvatar');
      document.querySelector('#stepTwoInp').focus();
    }, 500);
  }, 4000);
}

stepOne();
