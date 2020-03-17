function createTable(object) {
    const resultUI = document.querySelector('#results');
    const div = document.createElement('div');
    div.innerHTML = `
                        <div class="table-responsive">
                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Label</th>
                                        <th scope="col">Score</th>
                                        <th scope="col">Confident</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">${object.id}</th>
                                        <td>${object.label}</td>
                                         ${object.score >= 0.60 ?
            `<td style='color:green' >${object.score}</td>`
            :
            `<td style='color:red'>${object.score}</td>`
        }
                                         ${object.confident === 'yes' ?
            `<td style='color:green' >${object.confident}</td>`
            :
            `<td style='color:red'>${object.confident}</td>`
        }
                                    </tr>
                                </tbody>
                            </table>
    `;
    resultUI.append(div);
}
export { createTable }