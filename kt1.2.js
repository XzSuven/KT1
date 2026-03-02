const table = document.getElementById('table');
const numbers = [];

for (let i = 0; i < 30; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

let index = 0;

for (let i = 0; i < 5; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < 6; j++) {
        const td = document.createElement('td');
        const value = numbers[index++];
        td.textContent = value;

        if (value >= 50) {
            td.classList.add('orange');
        }

        tr.appendChild(td);
    }

    table.appendChild(tr);
}