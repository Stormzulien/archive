"use strict";

console.warn("old 404 page: https://stormzulien.github.io/archive/links-old/404.html");

// toggle message here
const showMsg = true;

let newMsgShown = JSON.parse(localStorage.getItem("newMsgShown")) || false;

if (!newMsgShown && showMsg) {
  const msg = document.createElement("div");
    msg.id = "new-msg";
    msg.innerHTML = `
    <a href="https://stormzulien.github.io/links/" target="_parent">Go to the updated (better) version of this page :D</a>

    <button title="Dismiss message" id="new-msg-close-btn">
      <img src="./images/close.svg" alt="Close icon" draggable="false">
    </button>
  `;

  document.body.appendChild(msg);

  document.querySelector("#new-msg-close-btn")
    .addEventListener("click", () => {
      newMsgShown = true;
      localStorage.setItem("newMsgShown", JSON.stringify(newMsgShown));
      msg.remove();
    });
}
