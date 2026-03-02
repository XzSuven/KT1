const table = document.getElementById('table');
const cols = 6;
let totalCells = 0;

function createCell() {
    const td = document.createElement('td');
    const num = Math.floor(Math.random() * 101);

    td.textContent = num;

    if (num <= 30) td.className = 'red';
    else if (num <= 70) td.className = 'orange';
    else td.className = 'green';

    return td;
}

for (let i = 0; i < 5; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
        tr.appendChild(createCell());
        totalCells++;
    }
    table.appendChild(tr);
}

function foo() {
    let lastRow = table.rows[table.rows.length - 1];

    if (lastRow.cells.length === cols) {
        lastRow = document.createElement('tr');
        table.appendChild(lastRow);
    }

    lastRow.appendChild(createCell());
    totalCells++;
}