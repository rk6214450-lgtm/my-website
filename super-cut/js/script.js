document.getElementById('orderForm').addEventListener('submit', function(e){
    e.preventDefault();
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    let newOrder = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        style: document.getElementById('style').value,
        date: document.getElementById('date').value
    };
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    alert('Order booked successfully!');
    this.reset();
});