import { createTable } from './createTable';
export function checkForName(inputText) {
    console.log('input text = ', inputText);
    //Check before Pass value to aylien api 
    if (inputText === '' || inputText === null) {
        alert('please put some text or sentience 🥰');
        return; // to avoid create table with null values.
    }
    // regex to remove http:// 
    // const result = inputText.replace(/(^\w+:|^)\/\//, '');
    fetch(`http://localhost:3300/${inputText}`, {
        method: 'get',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': '*/*'
        }
    })
        .then(res =>
            res.json()
        )
        .then(data => {
            // Here we receive data as array,then
            // Get all categories values.
            data.forEach(item => {
                const { id, label, score, confident } = item
                createTable({ id, label, score, confident });
            })
        })
        .catch(err => console.log(err))
}

