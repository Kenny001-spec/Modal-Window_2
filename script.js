'use strict';
// Select The Dom Element
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

function closeModalFn () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

function showModalFn () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// console.log(showModalFn);
for (let i = 0; i < showModal.length; i++) {
    // console.log(modal[i]);

    showModal[i].addEventListener('click', showModalFn);
    
}

closeModal.addEventListener('click', closeModalFn);
overlay.addEventListener('click', closeModalFn);

/**KEY EVENTS
 * KEY UP- When you lift your finger off a button.
 * KEY PRESS- When a button is pressed continuously.
 * KEY-DOWN - Exactly when you press button
 */

