'use strict';
//Declaring all the variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');
// Creating all the actions need to happen whenever the modal is closed
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// Creating all the actions need to happen whenever the button is opened
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// Creating a loop to iterate the button press event
for (let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener('click', openModal);
//Creating a actions to close the button
btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// This function would enable us to press escape button to close the modal
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
