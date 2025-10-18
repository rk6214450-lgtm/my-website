let orders = JSON.parse(localStorage.getItem('orders')) || [];
let tbody = document.querySelector('#ordersTable tbody');
orders.forEach(order => {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${order.name}</td><td>${order.phone}</td><td>${order.style}</td><td>${order.date}</td>`;
    tbody.appendChild(tr);
});