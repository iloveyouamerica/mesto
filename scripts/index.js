// определяем переменные
const editButton = document.querySelector('#edit-btn'); // кнопка редактирования профиля
const addButton = document.querySelector('#add-btn'); // кнопка добавления карточки

const popupEdit = document.querySelector('#popup-edit'); // popup редактирования данных пользователя
const popupAdd = document.querySelector('#popup-add'); // popup добавления новых фотокарточек

const closeEditButton = document.querySelector('#close-popup-edit'); // кнопка закрытия popup-edit
const closeAddButton = document.querySelector('#close-popup-add'); // кнопка закрытия popup-add

const profileName = document.querySelector('.profile__name'); // имя
const profileAbout = document.querySelector('.profile__about'); // о себе

const inputName = document.querySelector('#input-name'); // input с именем
const inputAbout = document.querySelector('#input-about'); // input о себе

const inputNameCard = document.querySelector('#input-place-name'); // input с названием места
const inputLinkCard = document.querySelector('#input-place-link'); // input ссылка на место

const formProfileEdit = document.querySelector('#form-profile-edit'); // форма редактирования данных пользователя
const formCardAdd = document.querySelector('#form-card-add'); // форма добавления новых карточек

const cardTemplate = document.querySelector('#template-card'); // шаблон фотокарточки
const cardContainer = document.querySelector('.elements__list'); // <ul> блок для карточек

// массив с карточками
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// функция добавления и снятия лайков
const getLike = (event) => {
  // активируем или деактивируем лайк
  event.target.classList.toggle('card__like_active');
};

// функция удаления карточки
const deleteCard = (event) => {
  // найти ближайшего родителя
  const card = event.target.closest('.elements__list-item');
  
  // удаляем карточку
  card.remove();
};

// функция создаёт карточки
const createCard = (cardName, cardLink) => {
  // клонируем шаблон карточки
  const card = cardTemplate.content.querySelector('.elements__list-item').cloneNode(true);

  // находим в карточке поле с именем
  const cloneCardImage = card.querySelector('.card__image');

  // добавляем в поле имя и альтернативное описание
  cloneCardImage.src = cardLink;
  cloneCardImage.alt = cardName;

  // устанавливаем имя карточке
  card.querySelector('.card__title').textContent = cardName;

  // вешаем слушатели событий на кпонку лайк и удаление
  card.querySelector('.card__like').addEventListener('click', getLike);
  card.querySelector('.card__delete').addEventListener('click', deleteCard);
  
  return card;
};

// функция добавляет карточки на страницу
const addCard = (card) => {
  // добавим каждую новую карточку в начало списка
  cardContainer.prepend(card);
};

// выведем карточки из массива на страницу с помощью цикла forEach
initialCards.forEach((item) => {
  // создаём и добавляем карточку
  addCard(createCard(item.name, item.link));
});

// функция открывает нужный popup в зависимости от контекста вызова
const popupOpen = (event) => {
  // определим кто запрашивает открытие popup
  const target = event.target.getAttribute('id');
  
  if(target === 'edit-btn') { // popup открывает кнопка edit
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
    popupEdit.classList.add('popup_opened'); // добавляем класс-модификатор открытия popup
  } else if(target === 'add-btn') { // popup открывает кнопка add
    popupAdd.classList.add('popup_opened'); // добавляем класс-модификатор открытия popup
  }
}

// функция закрывает нужный popup в зависимости от контекста вызова
const popupClose = (event) => {
  // определим кто закрывает popup
  const target = event.target.getAttribute('id');

  if(target === 'close-popup-edit' || target === 'form-profile-edit') {
    // удаляем класс-модификатор открытия popup-edit
    popupEdit.classList.remove('popup_opened');
  } else if(target === 'close-popup-add' || target === 'form-card-add') {
    // очистим поля формы
    inputNameCard.value = '';
    inputLinkCard.value = '';

    // удаляем класс-модификатор открытия popup-add
    popupAdd.classList.remove('popup_opened');
  }
}

// функция сохраяет изменения в профайле
const saveChangeProfile = (event) => {
  // отменяем событие отправки формы
  event.preventDefault();

  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;

  // закрываем popup
  popupClose(event);
}

// функция принимает из формы данные для создания новой карточки
const getFormAddData  = (event) => {
  // отменяем событие отправки формы
  event.preventDefault();

  const nameCard = inputNameCard.value;
  const linkCard = inputLinkCard.value;

  // если поля формы не пустые
  if(nameCard != '' && linkCard != '') {
    // создадим и добавим новую карточку
    addCard(createCard(nameCard, linkCard));

    // очистим поля формы
    inputNameCard.value = '';
    inputLinkCard.value = '';

    // закроем popup
    popupClose(event);
  }
};

// слушатели событий
editButton.addEventListener('click', popupOpen); // открыть popup для редактирования данных
addButton.addEventListener('click', popupOpen); // открыть popup для добавления новых мест

closeEditButton.addEventListener('click', popupClose); // закрыть popup без сохранения изменений
closeAddButton.addEventListener('click', popupClose); // закрыть popup без сохранения изменений

formProfileEdit.addEventListener('submit', saveChangeProfile); // отправка данных из формы редактирования профиля
formCardAdd.addEventListener('submit', getFormAddData); // отправка данных из формы добавлеия новой карточки

/* формам задал id, с их помощью определим от какой формы пришло событие*/