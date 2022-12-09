// определяем переменные
const buttonEdit = document.querySelector('#edit-btn'); // кнопка редактирования профиля
const buttonAdd = document.querySelector('#add-btn'); // кнопка добавления карточки

const popupEdit = document.querySelector('#popup-edit'); // popup редактирования данных пользователя
const popupAdd = document.querySelector('#popup-add'); // popup добавления новых фотокарточек
const popupImageView = document.querySelector('#popup-image-view'); // popup для большой картинки

const buttonCloseEdit = document.querySelector('#close-popup-edit'); // кнопка закрытия popup-edit
const buttonCloseAdd = document.querySelector('#close-popup-add'); // кнопка закрытия popup-add
const buttonCloseImagePopup = document.querySelector('#close-popup-image-view'); // кнопка закрытия popup-image

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

const bigImage = document.querySelector('.view-image__image'); // находим большую картинку в popup'е просмотра
const bigImageTitle = document.querySelector('.view-image__title'); // находим title большой картинки в popup'е просмотра

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

// функция открывает popup с картинкой
const openPopupImage = () => {
  popupImageView.classList.add('popup_opened'); // добавляем класс-модификатор открытия popup
};

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

// функция создаёт большую картинку для просмотра в полном размере
const createBigViewImage = (name, link) => {
  bigImage.src = link;
  bigImage.alt = name;
  bigImageTitle.textContent = name;

  // откроем popup
  openPopupImage();
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
  cloneCardImage.addEventListener('click', () => {createBigViewImage(cardName, cardLink)});
  
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

// функция открывает popup с формой редактирования профиля
const openPopupEdit = () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popupEdit.classList.add('popup_opened'); // добавляем класс-модификатор открытия popup
};

//функция открывает popup с формой добавления карточки
const openPopupAdd = () => {
  popupAdd.classList.add('popup_opened'); // добавляем класс-модификатор открытия popup
};

// функция закрывает popup с формой редактирования профиля
const closePopupEdit = () => {
  // удаляем класс-модификатор открытия popup-edit
  popupEdit.classList.remove('popup_opened');
};

// функция закрывает popup с формой добавления новой карточки
const closePopupAdd = () => {
  // очистим поля формы
  inputNameCard.value = '';
  inputLinkCard.value = '';

  // удаляем класс-модификатор открытия popup-add
  popupAdd.classList.remove('popup_opened');
};

// функция закрывает popup с просмотром картинки
const closePopupViewImage = () => {
  // удаляем класс-модификатор открытия popup-add
  popupImageView.classList.remove('popup_opened');
};

// функция сохраяет изменения в профайле
const saveChangeProfile = (event) => {
  // отменяем событие отправки формы
  event.preventDefault();

  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;

  // закрываем popup
  closePopupEdit();
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
    closePopupAdd();
  }
};

// слушатели событий
buttonEdit.addEventListener('click', openPopupEdit); // открыть popup для редактирования данных
buttonAdd.addEventListener('click', openPopupAdd); // открыть popup для добавления новых мест

buttonCloseEdit.addEventListener('click', closePopupEdit); // закрыть popup без сохранения изменений
buttonCloseAdd.addEventListener('click', closePopupAdd); // закрыть popup без сохранения изменений
buttonCloseImagePopup.addEventListener('click', closePopupViewImage); // закрыть popup с просмотром картинки

formProfileEdit.addEventListener('submit', saveChangeProfile); // отправка данных из формы редактирования профиля
formCardAdd.addEventListener('submit', getFormAddData); // отправка данных из формы добавлеия новой карточки

/* формам задал id, с их помощью определим от какой формы пришло событие*/