  const productForm = document.getElementById('productForm');
  const productName = document.getElementById('productName');
  const productPrice = document.getElementById('productPrice');
  const productDescription = document.getElementById('productDescription');
  const productImage = document.getElementById('productImage');
  const productList = document.getElementById('productList');

  // 🧱 Default "Add Product" handler
  const defaultSubmitHandler = (e) => {
    e.preventDefault();
    const file = productImage.files[0];
    if (!file) return alert("Please upload an image.");

    const reader = new FileReader();
    reader.onload = () => {
      const newProduct = {
        name: productName.value.trim(),
        price: parseFloat(productPrice.value).toFixed(2),
        description: productDescription.value.trim(),
        image: reader.result
      };

      const products = JSON.parse(localStorage.getItem('products')) || [];
      products.unshift(newProduct);
      localStorage.setItem('products', JSON.stringify(products));

      productForm.reset();
      loadProducts();
    };
    reader.readAsDataURL(file);
  };

  productForm.addEventListener('submit', defaultSubmitHandler);

  // 🧾 Load products into the UI
  function loadProducts() {
    productList.innerHTML = "";
    const products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach((product, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${product.name}</strong> - $${product.price}<br/>
        <p>${product.description}</p>
        <img src="${product.image}" alt="${product.name}" style="max-width: 100px; display:block; margin-top: 5px;" />
        <button onclick="editProduct(${index})">Edit</button>
        <button onclick="deleteProduct(${index})">Delete</button>
      `;
      productList.appendChild(li);
    });
  }

  // ❌ Delete a product
  function deleteProduct(index) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    if (confirm(`Delete "${products[index].name}"?`)) {
      products.splice(index, 1);
      localStorage.setItem('products', JSON.stringify(products));
      loadProducts();
    }
  }

  // ✏️ Edit a product
  function editProduct(index) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const product = products[index];

    productName.value = product.name;
    productPrice.value = product.price;
    productDescription.value = product.description;

    alert("Edit the form fields, then click 'Update Product'");

    productForm.onsubmit = function (e) {
      e.preventDefault();
      product.name = productName.value.trim();
      product.price = parseFloat(productPrice.value).toFixed(2);
      product.description = productDescription.value.trim();

      const file = productImage.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          product.image = reader.result;
          finishEdit();
        };
        reader.readAsDataURL(file);
      } else {
        finishEdit();
      }

      function finishEdit() {
        products[index] = product;
        localStorage.setItem('products', JSON.stringify(products));
        productForm.reset();
        productForm.onsubmit = defaultSubmitHandler;
        loadProducts();
      }
    };
  }

  window.addEventListener('load', loadProducts);
