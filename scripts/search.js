load();

async function load() {
  let response = await fetch("./db/data.json");

  let data = await response.json();

  showshirts(data.mensShirt);
  showshoes(data.mensShoes);
  showwomenAccessories(data.womenAccessories);
  showwomenjacket(data.womenJacket);

  console.log(data);
  // console.log(data.mensShirt)
}

// show Women jacket function
function showwomenjacket(elem) {
  console.log("womenjacket:", elem);
  let proddiv = document.querySelector("#women-jacket");
  elem.forEach(function (data) {
    let contdiv = document.createElement("div");
    let img = document.createElement("img");
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    img.src = data.imgUrl;
    p1.innerText = data.prod_name;
    p2.innerText = data.price;

    div.append(p1, p2);
    contdiv.addEventListener('click', function (e) {
      selectProd(data)
    })
    contdiv.append(img, div);
    proddiv.append(contdiv);
  });
}

//show Women Accessories function

function showwomenAccessories(elem) {
  console.log("womenAccessories:", elem);
  let proddiv = document.querySelector("#womenAccessories-products");
  elem.forEach(function (data) {
    let contdiv = document.createElement("div");
    let img = document.createElement("img");
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    img.src = data.imgUrl;
    p1.innerText = data.prod_name;
    p2.innerText = data.price;

    div.append(p1, p2);
     contdiv.addEventListener("click", function (e) {
       selectProd(data);
     });
    contdiv.append(img, div);
    proddiv.append(contdiv);
  });
}

//show shoes function

function showshoes(elem) {
  console.log("shoes:", elem);
  let proddiv = document.querySelector("#shoes-products");
  elem.forEach(function (data) {
    let contdiv = document.createElement("div");
    let img = document.createElement("img");
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    img.src = data.imgUrl;
    p1.innerText = data.prod_name;
    p2.innerText = data.price;

    div.append(p1, p2);
     contdiv.addEventListener("click", function (e) {
       selectProd(data);
     });
    contdiv.append(img, div);
    proddiv.append(contdiv);
  });
}

//show shirts function

function showshirts(elem) {
  // console.log(elem)
  let proddiv = document.querySelector("#shirt-products");
  elem.forEach(function (data) {
    let contdiv = document.createElement("div");
    let img = document.createElement("img");
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    img.src = data.imgUrl;
    p1.innerText = data.prod_name;
    p2.innerText = data.price;

    div.append(p1, p2);
     contdiv.addEventListener("click", function (e) {
       selectProd(data);
     });
    contdiv.append(img, div);
    proddiv.append(contdiv);
  });
}

// all toggle functions
// shirt toggle
function shirts(event) {
  event.preventDefault();

  document.querySelector("#shirt-products").classList.toggle("none");
  document.querySelector("#shoes-products").classList.add("none");
  document.querySelector("#womenAccessories-products").classList.add("none");
  document.querySelector("#women-jacket").classList.add("none");
}

// women jacket toggle
function womenjacket(event) {
  event.preventDefault();

  document.querySelector("#women-jacket").classList.toggle("none");
  document.querySelector("#womenAccessories-products").classList.add("none");
  document.querySelector("#shoes-products").classList.add("none");
  document.querySelector("#shirt-products").classList.add("none");
}

// women Accessories toggle
function womenAcc(event) {
  event.preventDefault();

  document.querySelector("#womenAccessories-products").classList.toggle("none");
  document.querySelector("#shoes-products").classList.add("none");
  document.querySelector("#shirt-products").classList.add("none");
  document.querySelector("#women-jacket").classList.add("none");
}

//   shoes toggle
function shoes(event) {
  event.preventDefault();

  document.querySelector("#shoes-products").classList.toggle("none");
  document.querySelector("#shirt-products").classList.add("none");
  document.querySelector("#womenAccessories-products").classList.add("none");
  document.querySelector("#women-jacket").classList.add("none");
}

function selectProd(elem) {
  localStorage.setItem("product", JSON.stringify(elem));
  window.location.href = "./product.html";
}
