let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const totalBox = document.getElementById("total");

  if (!cartItems || !totalBox) return;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    totalBox.innerHTML = "Total : ₹0";
    return;
  }

  let html = "";

  cart.forEach((item, index) => {
    html += `
      <p>${index + 1}. ${item.name} - ₹${item.price}</p>
    `;
  });

  cartItems.innerHTML = html;
  totalBox.innerHTML = "Total : ₹" + total;
}

function sendWhatsApp() {

  if(cart.length===0){
    alert("Please add at least one item.");
    return;
  }

  let message="🍔 *London Roll Bar Order*%0A%0A";

  cart.forEach(item=>{
    message+=`• ${item.name} - ₹${item.price}%0A`;
  });

  message+=`%0A💰 Total : ₹${total}%0A`;
  message+=`%0A📍 Near Day To Day Fashion, Jiwan Nagar Road, Rania`;

  window.open("https://wa.me/919996754575?text="+message,"_blank");

}

const search=document.getElementById("search");

if(search){

search.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}

window.onload=updateCart;
