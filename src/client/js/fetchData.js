const fetchData = async (value) => {
    const response = await fetch(`http://localhost:3300/text/${value}`, {
        method: 'get',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

export { fetchData }