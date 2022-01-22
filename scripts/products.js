let query = JSON.parse(localStorage.getItem("search"));
data();
async function data() {
  let response = await fetch("./db/data.json");

  let data = await response.json();

  if (query == "mensShoes") {
    display(data.mensShoes);
  } else if (query == "mensShirt") {
    display(data.mensShirt);
  } else if (query == "womenJacket") {
    display(data.womenJacket);
  } else if (query == "womenAccessories") {
    display(data.womenAccessories);
  }
  // console.log(data);
  // console.log(data.query);
  // console.log(query);
}

function display(data) {
  let main = document.getElementById("main");

  data.forEach(function (elem) {
    let div = document.createElement("div");

    div.innerHTML = ` <img src=${elem.imgUrl} alt="">

           <div class="flex">
               <p class='underline'>${elem.prod_name}</p>
               <div>
                   <p style="text-decoration:line-through">₹ ${elem.strikedOffPrice}</p>
                   <p><span>${elem.prod_discount} </span> ₹ ${elem.price}</p>
               </div>
           </div>`;

    div.addEventListener("click", function (e) {
      selectProd(elem);
    });

    main.appendChild(div);
  });
}

// product add to the local storage for carry forward to prod-info page
function selectProd(elem) {
  localStorage.setItem("product", JSON.stringify(elem));
  window.location.href = "./product.html";
}
