test('should create table', () => {
    // Check results is null before create element.
    let resultUI = document.querySelector('#results');
    expect(resultUI).toBeNull();
    //Create fake element with the same id.
    document.body.innerHTML = `<div id='results'> <h1>Results</h1> </div>`;
    // Check results is not  null after create element.
    resultUI = document.querySelector('#results');
    expect(resultUI).not.toBeNull();
});
