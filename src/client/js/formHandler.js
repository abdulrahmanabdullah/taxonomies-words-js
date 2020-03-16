export function handleSubmit(checkForName) {
    const formSubmitUI = document.querySelector('.form-submit');
    formSubmitUI.addEventListener('submit', (e) => {
        const inputText = document.querySelector('#name').value;
        checkForName(inputText);
        e.preventDefault();
    });
    // check what text was put into the form field
    // fetch('http://localhost:3300/test')
    //     .then(res =>
    //         res.json()
    //     ).then(data => console.log(data, 'dada'))
    //     .catch(err => console.log(err));
}
