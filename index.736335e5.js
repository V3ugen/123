var refs={openModalBtn:document.querySelector(".data-open-modal"),closeModalBtn:document.querySelector(".data-close-modal"),backdrop:document.querySelector(".data-backdrop"),body:document.querySelector("body")};function toggleModal(){refs.backdrop.classList.toggle("is-hidden"),refs.body.classList.toggle("no-scroll")}function logBackdropClick(){console.log("Это клик в бекдроп")}refs.openModalBtn.addEventListener("click",toggleModal),refs.closeModalBtn.addEventListener("click",toggleModal),refs.backdrop.addEventListener("click",logBackdropClick);
//# sourceMappingURL=index.736335e5.js.map