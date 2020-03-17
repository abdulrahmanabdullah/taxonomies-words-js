export function handleSubmit(checkForName) {
    const formSubmitUI = document.querySelector('.form-submit');
    const values = [];
    formSubmitUI.addEventListener('submit', (e) => {
        const inputText = document.querySelector('#name').value;
        // To avoid extract same values twice.
        if (!values.includes(inputText)) {
            values.push(inputText);
            checkForName(inputText);
        }
        e.preventDefault();
    });
}
