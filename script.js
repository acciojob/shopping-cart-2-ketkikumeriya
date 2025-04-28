//your code here
  const addButton = document.getElementById('add-button');
  const itemNameInput = document.getElementById('item-name-input');
  const itemPriceInput = document.getElementById('item-price-input');
  const tableBody = document.getElementById('table-body');
  const grandTotal = document.querySelector('[data-ns-test="grandTotal"]');

  let total = 0;

  addButton.addEventListener('click', function() {
    const itemName = itemNameInput.value.trim();
    const itemPrice = parseFloat(itemPriceInput.value.trim());

    // Validate input
    if (!itemName || isNaN(itemPrice) || itemPrice < 0) {
      alert('Please enter a valid item name and a valid positive price.');
      return;
    }

    // Create a new table row
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.setAttribute('data-ns-test', 'item-name');
    nameCell.innerText = itemName;

    const priceCell = document.createElement('td');
    priceCell.setAttribute('data-ns-test', 'item-price');
    priceCell.innerText = itemPrice.toFixed(2);

    row.appendChild(nameCell);
    row.appendChild(priceCell);
    tableBody.appendChild(row);

    // Update grand total
    total += itemPrice;
    grandTotal.innerText = total.toFixed(2);

    // Clear input fields
    itemNameInput.value = '';
    itemPriceInput.value = '';
  });

