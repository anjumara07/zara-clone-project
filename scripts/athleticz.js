async function getdata() {
  try {
    let res = await fetch("./db/data.json");

    let data = await res.json();

    appenddata(data.mensShoes);
    appenddata(data.mensShirt);
    appenddata(data.womenJacket);
    appenddata(data.womenAccessories);

    // appenddata(data.mensShoes);

    console.log("data:", data);
  } catch (err) {
    console.log("err:", err);
  }
}

getdata();

function appenddata(arr) {
  arr.forEach((elem) => {
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "main_div2");

    let img = document.createElement("img");
    img.setAttribute("src", elem.imgUrl);
    img.setAttribute("id", "product_image");

    let aTag = document.createElement("a");
    aTag.setAttribute("href", "product2.html");

    let buy_btn = document.createElement("button");
    buy_btn.textContent = "Buy Now";
    aTag.innerHTML = "<button>Buy Now</button>";
    // buy_btn.setAttribute("id","buy_btn1")

    let discount = document.createElement("p");
    discount.textContent = elem.prod_discount;

    let prod_name = document.createElement("P");
    prod_name.textContent = elem.prod_name;
    prod_name.setAttribute("id", "item_name");

    let smallDiv = document.createElement("div");
    smallDiv.setAttribute("id", "small_div");

    let price = document.createElement("p");
    price.textContent = elem.price;
    price.setAttribute("id", "actual_price");

    let strikedOffPrice = document.createElement("p");
    strikedOffPrice.textContent = elem.strikedOffPrice;
    strikedOffPrice.setAttribute("id", "strike");

    smallDiv.append(strikedOffPrice, price);

    mainDiv.append(img, discount, prod_name, smallDiv, aTag);

    document.getElementById("body_div").append(mainDiv);
  });
}
