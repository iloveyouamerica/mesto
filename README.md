# Проект: МЕСТО

Спринт 4. Учебный проект по основам JavaScript. Проект включает в себя адаптивную вёрстку сайта по макету Figma и взаимодействие пользователя со страницей с помощью DOM - JavaScript. На данном этапе пользователь может редактировать информацию о себе (поля: имя и о себе), загружать новые и удалять старые места (фотокарточки с названием места), ставить и убирать лайки, просматривать фотографию в полном размере по клику на неё. Текстовые блоки могут переполняться, но стоит ограничение на длину, отображаемой информации. Все формы в документе валидируются (проверяются на правильность заполнения). Данные из формы можно отправить только в 
том случае, если каждое поле успешно пройдёт валидацию, иначе кнопка 'submit' будет неактивной. Все оверлеи можно закрыть кликом 
в пустое место, нажатием клавиши Esc, или стандратным способом - нажатием на крестик. Проект переписан по концепции ООП, почти всё управляется через экземпляры классов (до этого всё работало в функциональном стиле). В этой версии все данные пользователя (имя, о себе, аватар) и карточки загружаются с сервера, для реализации этой идеи используются новые возможности JS (fetch и Promise).

## Используемые технологии
- HTML5,
- CSS3,
- JavaScript,
- JavaScript (ООП, модули, fetch, Promise)
- БЭМ (nested),
- GIT (Git Bash, Git Branch)
- WebPack

### Функционал страницы
- Файловая стуктура БЭМ,
- Именование классов БЭМ,
- Адаптивная вёрстка (максимальная ширина 1280px и выше, минимальная ширина 320 px),
- Возможность редактировать данные в профиле пользователя,
- Возможность загружать новые карточки мест (фото и название места),
- Возможность оставлять лайки любой карточке,
- Возможность удалять любую карточку,
- Возможность просматривать фотографии в полном размере по клику на неё,
- Валидация форм и каждого поля формы отдельно. В случае ошибок под полем ввода появляется текст с ошибкой,
- Отправка данных из формы возможно только при прохождении валидации. Иначе 'submit' будет заблокирован,
- Оверлеи можно закрыть нажатием клавиши Esc, кликом по пустому месту или нажатием на крестик,
- Проект полностью переписан по парадигме ООП (до этой версии был в функциональном стиле),
- Используем Fetch и Promise для взаимодействия с сервером.

#### Ссылки
[GitHub Pages](https://iloveyouamerica.github.io/mesto "GitHub Pages")

[Макет Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1 "Макет Figma")
