function loadjson(file, callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", file, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status == "200") {
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}

loadjson("data.json", function (text) {
  var data = JSON.parse(text);
  // console.log(data);
  // console.log(data.cards);
  // console.log(data.cards[0].name);

  display(data.cards);
});

function display(data1) {
  // console.log(data1[0].name);

  var grp = document.createElement("div");
  grp.classList.add("card-group", "text-center", "border", "border-primary");
  document.body.appendChild(grp);

  for (var i in data1) {
    var div = document.createElement("div");
    div.classList.add("card", "m-2");
    div.style.width = "20%";
    div.style.fontSize = "10px";

    grp.appendChild(div);
    // console.log(div);

    var img = document.createElement("img");
    img.src = data1[i].img;
    img.style.width = "50px";
    img.style.height = "100px";

    div.appendChild(img);
    console.log(div);

    var name = document.createElement("h4");
    name.textContent = data1[i].name;
    div.appendChild(name);

    var mrp = document.createElement("span");
    mrp.innerHTML = "M.R.P : " + "<s>" + data1[i].mrp + "</s>";
    // console.log(mrp);
    div.appendChild(mrp);

    var offer = document.createElement("p");
    offer.textContent = "OfferPrice : " + data1[i].offerprice;
    // console.log(offer);
    div.appendChild(offer);

    var btn1 = document.createElement("button");
    btn1.textContent = data1[i].button;
    btn1.classList.add("btn", "btn-primary");
    btn1.style.fontSize = "10px";
    div.appendChild(btn1);

    var btn2 = document.createElement("button");
    btn2.textContent = "BuyNow";
    div.appendChild(btn2);
  }
}
