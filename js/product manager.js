import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDb1yerEIWp6bXxVi1azqrRoddFDue3a7U",
  authDomain: "pawsandpeaks.firebaseapp.com",
  projectId: "pawsandpeaks",
  storageBucket: "pawsandpeaks.firebasestorage.app",
  messagingSenderId: "637494651303",
  appId: "1:637494651303:web:081b5f7a50609db86a6e82",
  measurementId: "G-FFFW368Z2D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const productForm = document.getElementById('productForm');
const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const productDescription = document.getElementById('productDescription');
const productImage = document.getElementById('productImage');
const productList = document.getElementById('productList');

let currentUserId = null;

onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUserId = user.uid;
    loadProducts();
  } else {
    alert("You must be logged in to manage products.");
    window.location.href = "account.html";
  }
});

productForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const file = productImage.files[0];
  if (!file) return alert("Please upload an image.");

  const reader = new FileReader();
  reader.onload = async () => {
    const newProduct = {
      name: productName.value.trim(),
      price: parseFloat(productPrice.value).toFixed(2),
      description: productDescription.value.trim(),
      image: reader.result,
      owner: currentUserId,
      createdAt: new Date()
    };

    await addDoc(collection(db, "products"), newProduct);
    productForm.reset();
    loadProducts();
  };
  reader.readAsDataURL(file);
});

async function loadProducts() {
  productList.innerHTML = "";
  const snapshot = await getDocs(collection(db, "products"));
  snapshot.forEach(docSnap => {
    const product = docSnap.data();
    if (product.owner !== currentUserId) return;

    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${product.name}</strong> - $${product.price}<br/>
      <p>${product.description}</p>
      <img src="${product.image}" alt="${product.name}" style="max-width: 100px; display:block; margin-top: 5px;" />
      <button onclick="editProduct('${docSnap.id}')">Edit</button>
      <button onclick="deleteProduct('${docSnap.id}')">Delete</button>
    `;
    productList.appendChild(li);
  });
}

window.deleteProduct = async function (id) {
  if (confirm("Delete this product?")) {
    await deleteDoc(doc(db, "products", id));
    loadProducts();
  }
};

window.editProduct = async function (id) {
  const docRef = doc(db, "products", id);
  const productSnap = await getDocs(collection(db, "products"));
  let productData;
  productSnap.forEach(p => {
    if (p.id === id) productData = p.data();
  });

  productName.value = productData.name;
  productPrice.value = productData.price;
  productDescription.value = productData.description;

  alert("Edit the form fields, then click 'Update Product'");

  productForm.onsubmit = async function (e) {
    e.preventDefault();
    productData.name = productName.value.trim();
    productData.price = parseFloat(productPrice.value).toFixed(2);
    productData.description = productDescription.value.trim();

    const file = productImage.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        productData.image = reader.result;
        await updateDoc(docRef, productData);
        finishEdit();
      };
      reader.readAsDataURL(file);
    } else {
      await updateDoc(docRef, productData);
      finishEdit();
    }

    function finishEdit() {
      productForm.reset();
      productForm.onsubmit = null;
      productForm.addEventListener('submit', defaultSubmitHandler);
      loadProducts();
    }
  };
};
