let groceryList = {
    item: ["Cheese", "Milk", "Water"],
    quantity: [50, 20, 100],
    amount: [15.00, 5.00, 1.00],
    expiration: [20, 10, 9]
}
let discountList = {
    item: ["Cheese", "Milk", "Water"],
    quantity: [23, 14, 20],
    amount: [6.00, 1.00, 0.50],
    expiration: [2, 4, 5]
}
let shopList = {
    item: [],
    quantity: [],
    total: 0
}
let groceryTable = document.getElementById('grocery');
let shopListTable = document.getElementById('shopList');
let totalTable = document.getElementById('total');
let discountTable = document.getElementById('discount');

function displayGrocery() {
    groceryTable.innerHTML = "";
    for (let i = 0; i < groceryList.item.length; i++) {
        let lowQty = groceryList.quantity[i] <= 5 ? 'low' : '';
        let lowDte = groceryList.expiration[i] <= 5 ? 'low' : '';
        groceryTable.innerHTML += `<tr><td>${groceryList.item[i]}
        </td><td class="${lowQty}">${groceryList.quantity[i]}</td><td>$${groceryList.amount[i]}</td>
        <td class="${lowDte}">${groceryList.expiration[i]} days
        </td><td><button onclick="buyItem(${i})">Buy Item</button>
        </td><td><button onclick="openPopUp(${i})">Discount</button></td></tr>`
    }
}

function displayDiscount(i) {
    discountTable.innerHTML = "";
    let lowQty = discountList.quantity[i] <= 5 ? 'low' : '';
    let lowDte = discountList.expiration[i] <= 5 ? 'low' : '';
    discountTable.innerHTML += `<tr><td>${discountList.item[i]}
        </td><td class="${lowQty}">${discountList.quantity[i]}</td><td>$${discountList.amount[i]}</td>
        <td class="${lowDte}">${discountList.expiration[i]} days
        </td><td><button onclick="buyItem(${i})">Buy Item</button>`
}

function displayShopList() {
    shopListTable.innerHTML = "";
    for (let i = 0; i < shopList.item.length; i++) {
        shopListTable.innerHTML += `<tr><td>${shopList.item[i]}
        </td><td>${shopList.quantity[i]}</td></tr>`
    }
    displayTotal();
}

function displayTotal() {
    totalTable.innerHTML = "";
    totalTable.innerHTML += `<tr><th>Total</th><td>$${shopList.total}</td></tr>`;
}

function addToShopList(i) {
    let check = false;
    let itemIndex = -1;
    for (let j = 0; j < shopList.item.length; j++) {
        if (shopList.item[j] == groceryList.item[i]) {
            itemIndex = j;
            check = true;
            break;
        }

    }
    if (check) {
        shopList.quantity[itemIndex] += 1;

    } else {
        shopList.item.push(groceryList.item[i]);
        shopList.quantity.push(1);
    }
    shopList.total += Number(groceryList.amount[i]);
    displayShopList();
}

function openPopUp(i) {

    if (discountList.item[i] == null) {
        alert(`No Discount for this Item`);
    } else {
        document.getElementById('popUpModel').style.display = "block";
        displayDiscount(i);
    }

}

function closePopUp() {
    document.getElementById('popUpModel').style.display = "none";
}

function buyItem(i) {
    if (groceryList.quantity[i] > 0) {
        groceryList.quantity[i]--;
        addToShopList(i);
    } else {
        alert('No more Stock');
    }

    displayGrocery();
}


document.getElementById('submit').addEventListener('click', function() {

    let item = document.getElementById('itemInput').value.trim();
    let qty = document.getElementById('qtyInput').value.trim();
    let expdte = document.getElementById('expInput').value.trim();
    let amnt = document.getElementById('amount').value.trim();

    groceryList.item.push(item);
    groceryList.quantity.push(Number(qty));
    groceryList.expiration.push(expdte);
    groceryList.amount.push(amnt);

    displayGrocery();

    document.getElementById('itemInput').value = "";
    document.getElementById('qtyInput').value = "";
    document.getElementById('expInput').value = "";
    document.getElementById('amount').value = "";
})

displayGrocery()
displayShopList()