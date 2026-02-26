const numbers = [];

function createInitialTable() {
    for (let i = 0; i < 30; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }

    const container = document.getElementById('table-container');
    const table = document.createElement('table');
    table.id = 'data-table';

    let index = 0;
    for (let row = 0; row < 5; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < 6; col++) {
            const td = document.createElement('td');
            const value = numbers[index];
            td.textContent = value;
            if (value >= 50) {
                td.classList.add('orange-bg');
            }
            tr.appendChild(td);
            index++;
        }
        table.appendChild(tr);
    }

    container.appendChild(table);
}