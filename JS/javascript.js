`use strict`;

const click_portfolio = document.querySelector(`.clickmore-portfolio`);
const portfolio = document.querySelector(`.portfolio-option`);
const close_portfolio = document.querySelector(`.close-portfolio`);
const portfolio_bg = document.querySelector(`.portfolio-option-bg`);
const mainPortfolio = document.getElementById(`portfolio`);

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzAYrw6DTAi6RMZB2vWIkqYRQP4bl_3MgzqlUnklzbzUQ0UAsuw9CeCLy__YWS4Ilgw_Q/exec";
const form = document.forms["cv-contact-form"];
const btnSend = document.querySelector(`.btn-send`);
const btnLoading = document.querySelector(`.btn-loading`);

const btnClosed = document.querySelector(`.btn-closed`);
const contactSend = document.querySelector(`.success-notif`);

// portfolio
click_portfolio.addEventListener(`click`, function () {
  portfolio.classList.remove(`d-none`);
  mainPortfolio.classList.add(`portfolio-option-bg`);
});
close_portfolio.addEventListener(`click`, function () {
  portfolio.classList.add(`d-none`);
  mainPortfolio.classList.remove(`portfolio-option-bg`);
});

// contact-form
btnClosed.addEventListener(`click`, function () {
  contactSend.classList.toggle(`d-none`);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // toggle send button
  btnSend.classList.toggle(`d-none`);
  btnLoading.classList.toggle(`d-none`);

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // toggle loading button
      btnSend.classList.toggle(`d-none`);
      btnLoading.classList.toggle(`d-none`);

      // success notif
      contactSend.classList.remove(`d-none`);

      form.reset();

      console.log("Success!", response);
    })
    .catch((error) => {
      alert(`Somehow we failed to send your message...
      maybe try again later`);
      form.reset();

      console.error("Error!", error.message);
    });
});
