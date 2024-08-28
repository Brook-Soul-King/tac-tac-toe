let fields = [
    null,
    'circle',
    'circle',
    'circle',
    null,
    null,
    'cross',
    'cross',
    null,
];

function init() {
    render();
}

function render() {
    let html = '<table>';

    for (let i = 0; i < 3; i++) {
        html += '<tr>';

        for (let j = 0; j < 3; j++) {
            const field = fields[i * 3 + j];
            let symbol = '';

            if (field === 'circle') {
                symbol = 'o';
            } else if (field === 'cross') {
                symbol = 'x';
            }

            html += `<td>${symbol}</td>`;
        }

        html += '</tr>';
    }

    html += '</table>';
    document.getElementById('content').innerHTML = html;
}

