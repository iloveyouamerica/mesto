// определяем переменные
const profileEdit = document.querySelector('.profile__button-edit'); // кнопка редактирования профиля
const popup = document.querySelector('.popup'); // popup
const popupCloseBtn = document.querySelector('.popup__close-btn'); // кнопка закрытия popup
const profileName = document.querySelector('.profile__name'); // имя
const profileAbout = document.querySelector('.profile__about'); // о себе
const inputName = document.querySelector('.input-name'); // input с именем
const inputAbout = document.querySelector('.input-about'); // input о себе
const form = document.querySelector('.form');

// функция открытия popup
function popupOpen() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.add('popup_opened'); // добавляем класс-модификатор открытия popup
}

// функция закрытия popup
function popupClose() {
  popup.classList.remove('popup_opened'); // удаляем класс-модификатор открытия popup
}

// функция сохранения изменений в профайле
function saveChangeProfile(event) {
  event.preventDefault(); // отменяем событие отправки формы
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popupClose(); // закрываем popup
}

// слушатели событий
profileEdit.addEventListener('click', popupOpen); // открыть popup
popupCloseBtn.addEventListener('click', popupClose); // закрыть popup без сохранения изменений
form.addEventListener('submit', saveChangeProfile); // сохранить изменения и закрыть popup

