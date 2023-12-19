//Codigo para login

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "Admin" && password === "123") {
        // Redireciona para a página homepage.html
        window.location.href = 'homepage.html';
    } else {
        document.getElementById('login-error').textContent = 'Usuário ou senha incorretos!';
    }
});

//A fazer

function toggleMenu() {
    var menu = document.getElementById('menu-itens');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

//Card 
function changeQuantity(change, element) {
    let quantityElement = element.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity += change;
    if (quantity < 0) {
        quantity = 0; // Evita quantidades negativas
    }
    quantityElement.textContent = quantity;

    // Atualiza o contador total no carrinho
    updateCartTotal();
}

function updateCartTotal() {
    let total = 0;
    let quantities = document.querySelectorAll('.product-card .quantity');
    quantities.forEach(element => {
        total += parseInt(element.textContent);
    });
    document.getElementById('cart-count').textContent = total;
}
