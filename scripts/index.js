// определяем переменные
const profileEdit = document.querySelector('.profile__button-edit'); // кнопка редактирования профиля
const popup = document.querySelector('.popup'); // popup
const popupCloseBtn = document.querySelector('.popup__close-btn'); // кнопка закрытия popup
const profileName = document.querySelector('.profile__name'); // имя
const profileAbout = document.querySelector('.profile__about'); // о себе
const inputName = document.querySelector('#input-name'); // input с именем
const inputAbout = document.querySelector('#input-about'); // input о себе
const form = document.querySelector('.form'); // форма редактирования данных пользователя
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

// функция создаёт карточки
const createCard = (cardName, cardLink) => {
  const card = cardTemplate.content.querySelector('.elements__list-item').cloneNode(true);
  const cloneCardImage = card.querySelector('.card__image');
  cloneCardImage.src = cardLink;
  cloneCardImage.alt = cardName;
  card.querySelector('.card__title').textContent = cardName;
  
  return card;
};

// функция добавляет карточки на страницу
const addCard = (card) => {
  // добавим каждую новую карточку в начало списка
  cardContainer.prepend(card);
};

// выведем карточки из массива на страницу
initialCards.forEach((item) => {
  addCard(createCard(item.name, item.link));
});

// функция открывает popup
const popupOpen = () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.add('popup_opened'); // добавляем класс-модификатор открытия popup
}

// функция закрывает popup
const popupClose = () => {
  popup.classList.remove('popup_opened'); // удаляем класс-модификатор открытия popup
}

// функция сохраяет изменения в профайле
const saveChangeProfile = (event) => {
  event.preventDefault(); // отменяем событие отправки формы
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popupClose(); // закрываем popup
}

// слушатели событий
profileEdit.addEventListener('click', popupOpen); // открыть popup
popupCloseBtn.addEventListener('click', popupClose); // закрыть popup без сохранения изменений
form.addEventListener('submit', saveChangeProfile); // сохранить изменения и закрыть popup

