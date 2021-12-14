(() => {
    function createTitle(name) {
        const appTitle = document.createElement('h2');
        appTitle.innerHTML = name;
        appTitle.style.fontSize = '72px';
        appTitle.classList.add('text-center','mb-5');
        return appTitle;
    }
    function backgroundGame () {
        const bodyApp = document.querySelector('body');
        bodyApp.style.transition = '1000ms';
        const images = [
            './assets/image/background/1.jpg',
            './assets/image/background/2.jpg',
            './assets/image/background/3.jpg'
        ]
        shuffle(images);
        bodyApp.style.color = '#fff';
        bodyApp.style.height = '100vh';
        bodyApp.style.backgroundImage = `url(${images[0]})`;
        bodyApp.style.backgroundSize = 'cover';
    }
    function createCards () {
        let cards = [];
        const cardsList = document.querySelector('.cards__list');
        cardsList.innerHTML = '';
        const cardsArray = [
            './assets/image/cards/moon-min.png',
            './assets/image/cards/fantasy-min.png',
            './assets/image/cards/gaz-min.png',
            './assets/image/cards/mars-min.png',
            './assets/image/cards/triton-min.png',
            './assets/image/cards/sun-min.png',
            './assets/image/cards/uranus-min.png',
            './assets/image/cards/venus-min.png',
            './assets/image/cards/astromen-min.png',
            './assets/image/cards/blue-min.png',
            './assets/image/cards/blue-earth-min.png',
            './assets/image/cards/chirok-min.png',
            './assets/image/cards/destoyed-min.png',
            './assets/image/cards/drawasteroid-min.png',
            './assets/image/cards/green-min.png',
            './assets/image/cards/jupiterdraw-min.png',
            './assets/image/cards/litlejupiter-min.png',
            './assets/image/cards/pokeplanet-min.png',
            './assets/image/cards/purple-min.png',
            './assets/image/cards/red-min.png',
            './assets/image/cards/redplanet-min.png',
            './assets/image/cards/starofdeath-min.png',
            './assets/image/cards/sundraw.png',
            './assets/image/cards/uranusgreen-min.png',
            './assets/image/cards/alien-cartoon-min.png',
            './assets/image/cards/alien-cartoon2-min.png',
            './assets/image/cards/car-in-space-min.png',
            './assets/image/cards/cartoon-planet-min.png',
            './assets/image/cards/dust-min.png',
            './assets/image/cards/earch-min.png',
            './assets/image/cards/earth-black-blue-min.png',
            './assets/image/cards/eclips-min.png',
            './assets/image/cards/fu-min.png',
            './assets/image/cards/green-cartoon-min.png',
            './assets/image/cards/ice-min.png',
            './assets/image/cards/just-min.png',
            './assets/image/cards/kometa.png',
            './assets/image/cards/mist-min.png',
            './assets/image/cards/pink-min.png',
            './assets/image/cards/pink-earch-min.png',
            './assets/image/cards/rocket-cartoon-min.png',
            './assets/image/cards/rocket-cartoon2-min.png',
            './assets/image/cards/rocket-cartoon-up-min.png',
            './assets/image/cards/santa-min.png',
            './assets/image/cards/sber-min.png',
            './assets/image/cards/shatle-min.png',
            './assets/image/cards/sokol-min.png',
            './assets/image/cards/star-track-min.png',
            './assets/image/cards/tatooine-min.png',
            './assets/image/cards/ufp-cartoon-min.png'

        ];
        let shuffleCards = shuffle(cardsArray);
        let duplicateCards = copyCard(cardsOptions(shuffleCards));
        shuffle(duplicateCards).forEach(ell => {
            let { item } = createGameElements();
            item.firstElementChild.src = ell;
            cards.push(item);
        })
        cards.forEach(el => cardsList.append(el));
        cards = [];
    }
    function copyCard (cards) {
        return [...cards , ...cards];

    }
    function cardsOptions (cards) {
        let newCardsArray = [];
        let cardsInRow = +(document.getElementById('cardsInRow').textContent);
        let cardsInColumn = +(document.getElementById('cardsInColumn').textContent);
        if (cardsInRow > 10 || cardsInRow <= 2) {
          cardsInRow = 4;
          document.getElementById('cardsInRow').textContent = cardsInRow;
        }
        if (cardsInColumn > 10) {
          cardsInColumn = 4;
          document.getElementById('cardsInColumn').textContent = cardsInColumn;
        } else if (cardsInColumn < 2) {
          cardsInColumn = 2;
          document.getElementById('cardsInColumn').textContent = cardsInColumn;
        }
        const result = (cardsInRow * cardsInColumn) / 2;
        for (let i = 0; i < result;i++) {
            newCardsArray.push(cards[i]);
        }
        return newCardsArray;
    }
    // Создаём карточки и кнопки для запуска игры
    function createGameElements () {
        const row = document.createElement('div');
        const listCards = document.createElement('ul');
        const item = document.createElement('li');
        const img = document.createElement('img');
        const btnStartGame = document.createElement('button');
        const blockTimer = document.createElement('div');
        const timeContainer = document.createElement('span');
        const btnRestart = document.createElement('button');
        const btnOptions = document.createElement('button');

        listCards.style.transform = 'translateY(-1000px)';
        listCards.style.display = 'grid';
        listCards.style.gridTemplateColumns  = 'repeat(8,1fr)';
        listCards.style.gridAutoRows = '1fr';
        listCards.style.gap = '10px';
        item.style.cursor = 'pointer';
        item.style.transition = '300ms';
        btnStartGame.style.bottom = '-100px';
        btnStartGame.style.right = '50%';
        btnStartGame.style.transform = 'translateX(50%)';
        btnStartGame.style.minWidth = '200px';
        btnStartGame.style.minHeight = '50px';

        btnOptions.style.minWidth = '200px';
        btnOptions.style.display = 'none';

        btnRestart.style.minWidth = '200px';

        btnRestart.style.display = 'none';

        blockTimer.style.top = '0';
        blockTimer.style.right = '25%';
        blockTimer.style.transition = '300ms';
        blockTimer.style.transform = 'translateX(120%, -130%)';

        timeContainer.style.transition = '1000ms';

        row.classList.add('row','d-flex','flex-column','align-items-center','position-relative');
        timeContainer.classList.add('d-block','timer');
        btnStartGame.textContent = 'Начать игру';
        btnRestart.textContent = 'Перезапуск';
        btnOptions.textContent = 'Настройки';
        blockTimer.classList.add('mx-auto','group-btn','position-absolute','timer-container');
        btnStartGame.classList.add('mx-auto','group-btn','position-absolute');
        btnStartGame.classList.add('btn','btn-primary','btn-start','btn-play');
        btnRestart.classList.add('btn','btn-warning','btn-restart','btn-play','mb-3');
        btnOptions.classList.add('btn', 'btn-warning','btn-option-game');
        listCards.classList.add('cards__list');
        item.classList.add('hide','cards__item');

        item.append(img);
        blockTimer.append(timeContainer);
        return {
            row,
            listCards,
            item,
            btnStartGame,
            blockTimer,
            btnRestart,
            btnOptions
        }
    }

    function shuffle (array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    function matchingCards (array) {
        if (array.length === 2) {
            if (array[0] === array[1]) {
                getMatch.push(array);
                findMatch(array[0]);
            } else {
                setTimeout(() =>{
                    hideCards(array[0]);
                },1000)
                setTimeout(() =>{
                    hideCards(array[1]);
                },1000);
            }
            pairCards = [];
        }
    }
    function findMatch (src) {
        const cards = document.querySelectorAll('img');
        cards.forEach(el => {
            if (el.src === src) {
                el.classList.add('match');
            }
            cards.forEach(el => {
               if (el.classList.contains('match')) {
                   el.parentElement.classList.remove('hide');
               }
            })
        })
    }

    function hideCards (src) {
        const cards = document.querySelectorAll('.cards__item');
        cards.forEach(el => {
            if (el.firstElementChild.src === src) {
                el.classList.add('hide');
                el.classList.remove('show');
            }
        })
    }
    let arrayShowCards = [];
    function disabledOtherCards () {
        const hideCards = document.querySelectorAll('.hide');
        const showCards = document.querySelectorAll('.show');
        showCards.forEach(el => arrayShowCards.push(el));
        if (arrayShowCards.length >= 2) {
            hideCards.forEach(el => el.style.pointerEvents = 'none');
            setTimeout(() => {
                hideCards.forEach(el => el.style.pointerEvents = 'auto');
            },600);
            arrayShowCards = [];
        }
    }
    function addAnimateCard () {
        const cards = document.querySelectorAll('.cards__item');
        cards.forEach(el => el.classList.toggle('animate'));

    }

    function clickStartGame () {
        const list = document.querySelector('.cards__list');
        const btnPlay = document.querySelectorAll('.btn-play');
        const leaderBoard = document.querySelector('.leaderBoard');
        const timerContainer = document.querySelector('.timer-container');
        const btnRestart = document.querySelector('.btn-restart');
        const btnOption = document.querySelector('.btn-option-game');
        btnPlay.forEach(btn => {
            btn.addEventListener('click', () => {
                backgroundGame();
                btnRestart.style.display = 'block';
                btnOption.style.display = 'block';
                clicks = 0;
                getMatch = [];
                gameStarted = true;
                createCards();
                renderRow();
                renderColumn();
                createStopwatch();
                addAnimateCard();
                list.style.transform = 'translateY(0)';
                leaderBoard.style.transform = 'translate(0, -150%)';
                timerContainer.style.transform = 'translate(120%, -130%)';
                if (!btn.classList.contains('btn-restart')) {
                    btn.classList.add('d-none');
                } else {
                    clearInterval(stopTimer);
                }
                gameTimer = 60000;
                stopTimer = setInterval(() => {
                    createStopwatch();
                    const cardsInRow = +(document.querySelector('#cardsInRow').textContent);
                    const cardsInColumn = +(document.querySelector('#cardsInColumn').textContent);
                    const cards = cardsInRow * cardsInColumn;
                    if (gameTimer < 0 || getMatch.length * 2 === cards) {
                        clearInterval(stopTimer);
                        gameOver(list, cards);
                    }
                },1000)
            })
        })
    }

    function createStopwatch () {
        const timerBox = document.querySelector('.timer');
        timerBox.style.fontSize = '72px';
        timerBox.style.color = 'green';
        timerBox.textContent =  gameTimer / 1000;
        gameTimer = gameTimer - 1000;
        timerColorChange(gameTimer);
    }

    function timerColorChange (currentTime) {
        const timerBox = document.querySelector('.timer');
        const parseTime = parseInt((currentTime / 1000));
        if (parseTime < 45) {
            timerBox.style.color = 'yellow';
        }
        if (parseTime < 30) {
            timerBox.style.color = 'orange';
        }
        if (parseTime < 15) {
            timerBox.style.color = 'red';
        }
    }

    function scoring (cards) {
        const stopwatch = +(document.querySelector('.timer').textContent);
        const calcScore = (cards * stopwatch) - clicks;
        if (!playerName) {
          playerName = 'Player';
        }
        const result = {
            player: playerName,
            cards,
            stopwatch,
            clicks,
            score: calcScore
        }
        setNamesInStorage(result);
        showMessage(result);
    }
    function createScoreMessage (score) {
      let scoreLabel = 'Score';
      if (!score) {
        score = 'Попробуйте ещё';
        scoreLabel = '';
      }
      const text = document.createElement('div');

      text.style.opacity = '0';
      text.style.pointerEvents = 'none';
      text.style.color = 'orange';
      text.style.fontSize = '72px';
      text.style.transition = '1000ms';
      text.style.position = 'absolute';
      text.style.top = '50%';
      text.style.right = '50%';
      text.textContent = scoreLabel + ' ' + score;
      return text;
    }
    function showMessage (player) {
      if (!gameStarted) {
        const start = Date.now();
        const timePassed = Date.now() - start;
        const todoApp = document.querySelector('#todo-app');
        const msg = createScoreMessage(player.score);
        todoApp.append(msg);
        msg.style.opacity = '1';
        const timeMsg = setInterval(() => {
              msg.style.left = timePassed / 5 + 'px';
              msg.style.transform = 'scale(1.5)';
              if (timePassed > 2000) clearInterval(timeMsg);
            },500)
        setTimeout(() => msg.style.opacity = '0',3000);
      }
    }

    function gameOver (list, cards = null) {
        const timerBox = document.querySelector('.timer');
        const leaderBoard = document.querySelector('.leaderBoard');
        const timerContainer = document.querySelector('.timer-container');
        const complexityWrapper = document.querySelector('.complexity__wrapper');
        const btnRestart = document.querySelector('.btn-restart');
        const btnOptionGame = document.querySelector('.btn-option-game');
        const btnPlay = document.querySelector('.btn-start');
        gameStarted = false;
        addAnimateCard();
        btnOptionGame.style.display = 'none';
        leaderBoard.style.transform = 'translateX(160%)';
        timerContainer.style.transform = 'translate(120%, -130%)';
        complexityWrapper.classList.add('d-none');
        btnRestart.style.display = 'none';
        if (+timerBox.textContent <= 0) {
            timerBox.textContent = 'Время вышло =(';
        }
        btnPlay.textContent = 'Сыграть ещё?';
        btnPlay.classList.remove('d-none');
        if (cards !== null) {
            scoring(cards);
        }
    }

    let clicks = 0;
    function clickCard () {
        const list = document.querySelector('.cards__list');
        list.addEventListener('click', e => {
            let targetClick = e.target;
            if (targetClick.closest('li') && gameStarted) {
                targetClick.classList.remove('hide');
                targetClick.classList.add('show');
                if (targetClick.firstElementChild) {
                    pairCards.push(targetClick.firstElementChild.src);
                    matchingCards(pairCards);
                    disabledOtherCards();
                    ++clicks;
                }
            }
        })
    }

    // Создаём таблицу лидеров
    function createLeaderItem () {
        const item = document.createElement('li');
        const textPlayer = document.createElement('div');
        const textScore = document.createElement('div');
        const textTime = document.createElement('div');
        const textClicks = document.createElement('div');
        const textCards = document.createElement('div');

        textPlayer.style.maxWidth = '155px';
        textPlayer.style.minWidth = '120px';
        textPlayer.style.textAlign = 'left';
        textPlayer.style.whiteSpace = 'nowrap';
        textPlayer.style.textOverflow = 'ellipsis'
        textPlayer.style.overflow = 'hidden';
        item.style.cursor = 'pointer';
        item.style.textAlign = 'center';
        item.style.background = '#ffc107';
        item.style.padding = '5px 15px';
        item.style.borderRadius = '5px';
        item.style.color = '#000';
        item.style.fontWeight = '600';
        item.style.transition = '500ms'

        textCards.classList.add('leader__cards');
        textClicks.classList.add('leader__clicks');
        textScore.classList.add('leader__score');
        textTime.classList.add('leader__time');
        item.classList.add('leader__item','d-flex','justify-content-between','mb-3');

        return {
            item,
            textPlayer,
            textScore,
            textTime,
            textClicks,
            textCards
        };
    }
    function createComplexityBtn (text = 'Кнопки не подписаны',cardAxios = 4,id) {
        const btnGroup = document.createElement('div');
        const numberContainer = document.createElement('div');
        const wrapperBtn = document.createElement('div');
        const btnPlus = document.createElement('button');
        const btnMinus = document.createElement('button');
        const labelBtn = document.createElement('p');

        btnPlus.textContent = '+';
        btnPlus.style.width = '36px';
        btnPlus.type = 'button';
        btnMinus.style.width = '36px';
        btnMinus.textContent = '-';
        btnMinus.type = 'button';
        numberContainer.style.color = '#fff';
        numberContainer.style.fontSize = '21px';
        numberContainer.textContent = cardAxios;
        labelBtn.style.color = '#fff';
        labelBtn.textContent = text;
        wrapperBtn.style.width = '30%';

        numberContainer.classList.add('complexity__number');
        numberContainer.id = id;
        btnGroup.classList.add('d-flex','justify-content-between','align-items-center');
        btnPlus.classList.add('btn','btn-outline-secondary', 'btn-plus');
        btnMinus.classList.add('btn','btn-outline-secondary', 'btn-minus');
        labelBtn.classList.add('mr-3');
        wrapperBtn.classList.add('d-flex','justify-content-between','mb-2');

        btnGroup.append(labelBtn);
        wrapperBtn.append(btnMinus);
        btnMinus.after(numberContainer);
        numberContainer.after(btnPlus);
        labelBtn.after(wrapperBtn);

        return btnGroup
    }

    function createComplexity () {
        const wrapperComplexity = document.createElement('div');
        const bodyComplexity = document.createElement('div');
        const btnDeleteInStorage = document.createElement('button');

        btnDeleteInStorage.style.minWidth = '100px';
        btnDeleteInStorage.textContent = 'Очистить список лидеров'
        btnDeleteInStorage.type = 'button';

        wrapperComplexity.style.background = 'Url(./assets/image/bg-complexity.jpg)';
        wrapperComplexity.style.Width = '100%';
        wrapperComplexity.style.top = '0px';
        wrapperComplexity.style.right = '0';
        wrapperComplexity.style.bottom = '0';
        wrapperComplexity.style.left = '0';
        wrapperComplexity.style.borderRadius = '15px';
        bodyComplexity.style.padding = '15px';
        bodyComplexity.style.maxWidth = '90%';

        btnDeleteInStorage.classList.add('btn','btn-danger','btn-delete-all-storage');
        bodyComplexity.classList.add('d-flex', 'flex-column', 'complexity__body');
        wrapperComplexity.classList.add('position-absolute','d-none','complexity__wrapper');
        wrapperComplexity.append(bodyComplexity);

        return {
            wrapperComplexity,
            bodyComplexity,
            btnDeleteInStorage
        }
    }

    function openComplexity () {
        const btnComplexity = document.querySelector('.btn-open-complexity');
        const menuComplexity = document.querySelector('.complexity__wrapper');
        const leaderBoard = document.querySelector('.leaderBoard');
        const listCards = document.querySelector('.cards__list');
        btnComplexity.addEventListener('click', () => {
            menuComplexity.classList.toggle('d-none');
            leaderBoard.style.transform = 'translateX(160%)';
            listCards.style.transform = 'translateY(0)';
        })
    }

    function renderRow () {
        const list = document.querySelector('.cards__list');
        const cardsInRow = +(document.getElementById('cardsInRow').textContent);
        list.style.gridTemplateColumns = `repeat(${ cardsInRow }, 100px)`;
    }

    function renderColumn () {
        const list = document.querySelector('.cards__list');
        const cardsInColumn = +(document.getElementById('cardsInColumn').textContent);
        list.style.gridTemplateRows = `repeat(${ cardsInColumn }, 100px)`;
    }

    function cardsControl () {
        const wrapper = document.querySelector('.complexity__body');
        const cardsInRow = document.querySelector('#cardsInRow');
        const cardsInColumn = document.querySelector('#cardsInColumn');
        wrapper.addEventListener('click',e => {
            let currentItem = e.target;
            if (currentItem.closest('.btn-plus')) {
                currentItem.previousElementSibling.textContent++
                if ((+currentItem.previousElementSibling.textContent) % 2 && currentItem.previousElementSibling.id !== 'cardsInColumn') {
                    currentItem.previousElementSibling.textContent++
                }
                if ((+currentItem.previousElementSibling.textContent) > 10 && currentItem.previousElementSibling.id !== 'cardsInColumn') {
                    currentItem.previousElementSibling.textContent = '10';
                }
                // для колонок
                if ((+currentItem.previousElementSibling.textContent) > 10 && currentItem.previousElementSibling.id === 'cardsInColumn') {
                    currentItem.previousElementSibling.textContent = '10';
                }
                //Проверка что-бы не было слишком мало карточек на поле
                if (+(cardsInColumn.textContent) === 1 && +(cardsInRow.textContent) === 2) {
                    cardsInColumn.textContent = '2';
                }
                createCards();
                renderRow();
                renderColumn();
            }
            if (currentItem.closest('.btn-minus')) {
                currentItem.nextElementSibling.textContent--;
                if ((+currentItem.nextElementSibling.textContent) % 2 && currentItem.nextElementSibling.id !== 'cardsInColumn') {
                    currentItem.nextElementSibling.textContent--;
                }
                if ((+currentItem.nextElementSibling.textContent) < 2 && currentItem.nextElementSibling.id !== 'cardsInColumn') {
                    currentItem.nextElementSibling.textContent = '2';
                }
                // для колонок
                if ((+currentItem.nextElementSibling.textContent) < 2 && currentItem.nextElementSibling.id === 'cardsInColumn') {
                    currentItem.nextElementSibling.textContent = '1';
                }
                //Проверка что-бы не было слишком мало карточек на поле
                if (+(cardsInColumn.textContent) === 1 && +(cardsInRow.textContent) === 2) {
                    cardsInColumn.textContent = '2';
                }
                createCards();
                renderRow();
                renderColumn();
            }
        })
    }

    function createLeaderBoard () {
        const leaderForm = document.createElement('form');
        const leaderWrapper = document.createElement('div');
        const wrapperInput = document.createElement('label');
        const titleLeader = document.createElement('h2');
        const listTitle = document.createElement('h3');
        const inputName = document.createElement('input');
        const btnConfirmName = document.createElement('button');
        const btnMenu = document.createElement('button');
        const list = document.createElement('ul');
        const { item } = createLeaderItem()
        leaderForm.style.width = '570px';
        leaderWrapper.style.minHeight = '424px';

        leaderForm.style.top = '150px';
        leaderForm.style.transform = 'translateX(47%)';
        leaderForm.style.zIndex = '99';
        leaderForm.style.transition = '300ms';

        leaderWrapper.style.borderRadius = '25px';
        leaderWrapper.style.padding = '20px';
        leaderWrapper.style.backgroundImage = 'Url(./assets/image/form-bg.jpg)';
        leaderWrapper.style.backgroundPosition = 'center';
        inputName.style.marginBottom = '0'
        btnMenu.style.backgroundImage = 'Url(./assets/image/icons/gear.png)';
        btnMenu.style.backgroundSize = '23px';
        btnMenu.style.backgroundRepeat = 'no-repeat'
        btnMenu.style.backgroundPosition = 'center'
        btnMenu.style.width = '30px';
        btnMenu.style.height = '30px';
        btnMenu.style.top = '15px';
        btnMenu.style.right = '15px';
        btnMenu.type = 'button';

        inputName.style.transition = '500ms'
        inputName.placeholder = 'Player';
        inputName.required = true;

        titleLeader.textContent = 'Таблица лидеров';
        titleLeader.style.fontSize = '27px';

        listTitle.style.fontSize = '21px'

        btnConfirmName.textContent = 'Ok';

        listTitle.textContent = 'Предыдущие результаты!';

        list.style.listStyleType = 'disc';
        list.style.listStylePosition = 'inside';
        list.style.fontSize = '18px';

        wrapperInput.classList.add('d-flex','justify-content-between');
        list.classList.add('leader__list');
        leaderForm.classList.add('position-absolute','leaderBoard');
        titleLeader.classList.add('text-center');
        listTitle.classList.add('text-center')
        inputName.classList.add('form-control','mr-3');
        inputName.id = 'input-name';
        btnConfirmName.classList.add('btn','btn-primary','btn-confirm');
        btnMenu.classList.add('btn','btn-warning','position-absolute','btn-open-complexity');

        leaderForm.addEventListener('submit',e => e.preventDefault());

        leaderForm.append(leaderWrapper);
        leaderForm.append(btnMenu);
        leaderWrapper.append(titleLeader);
        leaderWrapper.append(wrapperInput);
        wrapperInput.append(inputName);
        wrapperInput.append(btnConfirmName);
        wrapperInput.after(list);
        list.append(item);
        wrapperInput.after(listTitle);
        const { wrapperComplexity , bodyComplexity, btnDeleteInStorage } = createComplexity();
        const btnRow = createComplexityBtn('Карточек в ряду',4,'cardsInRow');
        const btnColumn = createComplexityBtn('Карточек в колонке',4,'cardsInColumn');
        leaderWrapper.append(wrapperComplexity);
        wrapperComplexity.append(bodyComplexity);
        bodyComplexity.append(btnRow);
        bodyComplexity.append(btnColumn);
        bodyComplexity.append(btnDeleteInStorage);

        return leaderForm
    }

    let gameTimer = 60000;
    let gameStarted = false;
    let pairCards = [];
    let getMatch = [];
    let playerName = 'Player';

    function getNamesInStorage () {
        let leaderList = JSON.parse(localStorage.getItem('leaderBoard'));
        if (!leaderList) {
            leaderList = [];
        }
        return leaderList;
    }

    function setNamesInStorage (result = null) {
        const inputName = document.querySelector('#input-name');
        const btnInput = document.querySelector('.btn-confirm');
        let leaderBoard = getNamesInStorage();
        if (result) {
            if (!leaderBoard.length) {
                leaderBoard.push({ player:'Player',score: result.score,cards:result.cards, stopwatch:result.stopwatch, clicks:result.clicks, });
            }
            leaderBoard.forEach((el,i) => {
                if (el.player === result.player && result.score > el.score ) {
                    leaderBoard.splice(i,1,result);
                    localStorage.setItem('leaderBoard',JSON.stringify(leaderBoard));
                } else if (result.score > el.score && leaderBoard.length === 5) {
                    leaderBoard.splice(i,1,result);
                    localStorage.setItem('leaderBoard',JSON.stringify(leaderBoard));
                }
            })
        } else {
            btnInput.addEventListener('click', () => {
                if (!inputName.value) {
                    return
                }
                inputName.classList.add('bg-success')
                setTimeout(() => {
                    inputName.classList.remove('bg-success');
                },1000);
                let leaderBoard = getNamesInStorage();
                leaderBoard.push({ player:inputName.value.trim(),score: 0,cards:0, stopwatch:0, clicks:0, })
                localStorage.setItem('leaderBoard',JSON.stringify(leaderBoard));
                playerName = inputName.value;
                setTimeout(() => inputName.value = '',100);
                setName(inputName.value);
            })
        }
        updateLeaderBoard(leaderBoard);
        leaderBoard = []
    }

    function deleteAllInStorage () {
        const btnDeleteAllStorage = document.querySelector('.btn-delete-all-storage');
        const listLeader = document.querySelector('.leader__list');
        btnDeleteAllStorage.addEventListener('click', () => {
            if (confirm('Удалить результаты?')) {
                localStorage.removeItem('leaderBoard')
                listLeader.innerHTML = '';
            }
        })
    }

    function updateLeaderBoard (leaderPlayer) {
        const listLeader = document.querySelector('.leader__list');
        listLeader.innerHTML = '';
        leaderPlayer.sort((a,b) => {
            if (a.score > b.score) {
                return -1;
            }
        });
        //Показываем до 5 игроков
        let filteredLeaderPlayer = leaderPlayer.filter((v,i,a)=>a.findIndex(t=>(t.player === v.player))===i)
        console.log(filteredLeaderPlayer)
        console.log(leaderPlayer)
        filteredLeaderPlayer.splice(5);
        localStorage.setItem('leaderBoard',JSON.stringify(filteredLeaderPlayer))
        filteredLeaderPlayer.forEach((el,i) => {
            const { item, textPlayer, textScore, textTime, textClicks, textCards } = createLeaderItem();
            item.setAttribute(`data-id`,leaderPlayer[i].player);
            textPlayer.textContent = [i + 1] + ') ' + leaderPlayer[i].player;
            textScore.textContent = 'Очки' + ' ' + leaderPlayer[i].score + '|';
            textTime.textContent = 'Время' + ' ' + leaderPlayer[i].stopwatch + '|';
            textClicks.textContent = 'Клики' + ' ' + leaderPlayer[i].clicks + '|';
            textCards.textContent = 'карточек' + ' ' + leaderPlayer[i].cards + '|';
            listLeader.append(item);
            item.append(textPlayer);
            textPlayer.after(textScore);
            textScore.after(textTime);
            textTime.after(textClicks);
            textClicks.after(textCards);
        })
    }
    function deleteItemInLeaderBoard () {
        const list = document.querySelector('.leader__list');
        let leaderBoard = JSON.parse(localStorage.getItem('leaderBoard'));
        list.addEventListener('click',e => {
            const item = e.target.closest('.leader__item');
            if (confirm('Удалить участника' + ' ' + item.dataset.id)) {
                item.remove();
                const idItem = leaderBoard.findIndex(el => el.player === item.dataset.id);
                    leaderBoard.splice(idItem,1);
                    localStorage.setItem('leaderBoard',JSON.stringify(leaderBoard));
            }
        })
    }
    function getName () {
        const inputName = document.querySelector('#input-name');
        playerName = JSON.parse(localStorage.getItem('Player'));
        inputName.value = playerName;
    }

    function setName (name) {
        localStorage.setItem('Player',JSON.stringify(name))
    }

    function callOptions () {
       const btnOption = document.querySelector('.btn-option-game');
       const list = document.querySelector('.cards__list');
       const complexityWrapper = document.querySelector('.complexity__wrapper')
       btnOption.addEventListener('click',() => {
           gameOver(list,null);
           clearInterval(stopTimer);
           complexityWrapper.classList.remove('d-none');
           btnOption.style.display = 'none';
       })
    }

    // инстанс

    function createTodoApp(container,title = 'Игра найди пару') {
        backgroundGame();
        container.classList.add('pt-5');
        const titleGame = createTitle(title);
        container.append(createLeaderBoard());
        const { row, listCards, btnStartGame, blockTimer, btnRestart, btnOptions } = createGameElements();
        container.append(titleGame);
        row.append(listCards);
        const leaderBoard = document.querySelector('.leaderBoard');
        leaderBoard.append(btnStartGame);
        titleGame.after(row);
        row.append(blockTimer);
        listCards.after(btnRestart);
        btnRestart.after(btnOptions);
        //Основные функции
        createCards();
        clickCard();
        clickStartGame();
        openComplexity();
        cardsControl();
        renderRow();
        renderColumn();
        setNamesInStorage();
        callOptions();
        deleteAllInStorage();
        deleteItemInLeaderBoard();
        getName();
    }
    window.createTodoApp = createTodoApp;
})();
