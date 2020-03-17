export function handleSubmit(checkForName) {
    const formSubmitUI = document.querySelector('.form-submit');
    formSubmitUI.addEventListener('submit', (e) => {
        const inputText = document.querySelector('#name').value;
        checkForName(inputText);
        e.preventDefault();
    });
}
