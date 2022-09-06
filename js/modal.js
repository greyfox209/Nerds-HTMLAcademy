const modal = document.querySelector('.modal-container');
const contactsBtn = document.querySelector('.button-contacts');
const modalClose = document.querySelector('.modal-close-button');
const login = modal.querySelector('.feedback-form-field-login');
const form = modal.querySelector('form');
const email = modal.querySelector('.feedback-form-field-email');
const storage = localStorage.getItem('login');


contactsBtn.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal-show');
  login.focus();
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

modalClose.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (modal.classList.contains('modal-show')) {
      evt.preventDefault();
      modal.classList.remove('modal-show');
    }
  }
});