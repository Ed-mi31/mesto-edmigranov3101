
const popups = [...document.querySelectorAll('.popup')];
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const openProfilePopupButton = document.querySelector('.profile__button-edit');
const openAddPicPopupButton = document.querySelector('.profile__button');
const overlayProfile = document.querySelector('.popup_type_profile');
const profileForm = document.querySelector('.popup__profile-input-fields');
const submitButtons = [...document.querySelectorAll('.popup__submit-button')];
const placeSubmitButton = document.querySelector('.popup__place-submit-button');
const profileSubmitButton = document.querySelector('.popup__profile-submit-button');
const openedPopup = document.querySelector('.popup_opened');
const popupOpened = 'popup_opened';
const inputName = profileForm.elements['name'];
const inputAbout = profileForm.elements['about'];


/*Изменение данных*/
function changeProfile(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(overlayProfile);
}

/*открытие Popup*/
function openPopup(popupType) {
  popupType.classList.add(popupOpened);
  document.addEventListener('keydown');
}

/*закрытие Popup*/
function closePopup(popupType) {
  popupType.classList.remove(popupOpened);
  document.removeEventListener('keydown');
}

popups.forEach((popupType) => {
  popupType.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popupType);
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popupType);
    }
  })
})

openProfilePopupButton.addEventListener('click', function () {
  openPopup(overlayProfile)
})
profileForm.addEventListener('submit', changeProfile);



