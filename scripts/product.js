let product = JSON.parse(localStorage.getItem("product"));

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelector(".image_div").innerHTML = ` <img
          src=${product.imgUrl}
          alt=""
        />`;

document.querySelector(
  ".product_info_rightSide"
).innerHTML = ` <div class="product_name">
          <h2>${product.prod_name}</h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxF6EZhPKz6EhL_9Zf3-E3nn6y-aDwf2jDnmfQmBdTZc7TtSM5zshsfsEboujZ_JJOmg&usqp=CAU"
            alt=""
          />
        </div>
        <p>${product.description}
          
        </p>
        <p>₹ ${product.price}</p>
        <p>MRP incl. of all taxes</p>
        <!-- <hr> -->
        <div class="sizes">
          <p>M (UK M)</p>
          <p>L (UK L)</p>
          <p>XL (UK XL)</p>
        </div>

        <div class="sizeScale">
          <p>FIND YOUR SIZE</p>
          <p>SIZE GUIDE</p>
        </div>
        <button id="addToCart">ADD TO BAG</button>
        <p>CHECK IN-STORE AVAILABILITY</p>
        <p>DELIVERY, EXCHANGES AND RETURNS</p>`;

document.getElementById("addToCart").addEventListener("click", function () {
  addCart();
});

function addCart() {
  console.log("ere");

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
}
