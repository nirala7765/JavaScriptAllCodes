var productData = {
  "id": "1",
  "name": "Men Navy Blue Solid Sweatshirt",
  "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  "photos": [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
  ],
  "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  "size": [
    1,
    1,
    0,
    1,
    0
  ],
  "isAccessory": false,
  "brand": "United Colors of Benetton",
  "price": 2599
}





let PreviewSection = document.querySelector(".previewSection")
let PrevieImg = document.createElement("img")
PrevieImg.classList.add("PrevieImage1")
PrevieImg.id="PrevieImage1"

PrevieImg.src = productData["preview"]
PreviewSection.appendChild(PrevieImg)

let ProducrSection = document.querySelector(".ProductDetails");
let Pname = document.createElement("h1")
Pname.innerText = productData["name"]
ProducrSection.appendChild(Pname)

let Pbrand = document.createElement("h3")
Pbrand.innerText = productData["brand"]
ProducrSection.appendChild(Pbrand)

let Pprice = document.createElement("h3")
Pprice.innerText = "Price: Rs  " + productData["price"]
ProducrSection.appendChild(Pprice)
Pprice.style.color = "blue"

let dicription = document.createElement("h3")
dicription.innerText = "Discription"
ProducrSection.appendChild(dicription)

let dicDetails = document.createElement("p")
dicDetails.innerText = productData["description"]
ProducrSection.appendChild(dicDetails)
dicDetails.style.color = "gray"

let PpreviewText = document.createElement("h3")
PpreviewText.innerText = "Product Preview"
ProducrSection.appendChild(PpreviewText)

let imgPreview = document.createElement("div")
imgPreview.classList.add("imgPreview")
ProducrSection.appendChild(imgPreview)



let cartButton = document.createElement("button")
cartButton.innerText = "Add To Cart"
cartButton.classList.add("cartButton")
ProducrSection.appendChild(cartButton)



for (let i = 0; i < productData.photos.length; i++) {
  let PreviewImgA = document.createElement("img")
  PreviewImgA.src = productData.photos[i]
  Image.id="img"+1;
  PreviewImgA.classList.add("PreviewImgA")

  imgPreview.appendChild(PreviewImgA)




}
let image = document.querySelectorAll(".PreviewImgA");
let previewImg = document.querySelector(".PrevieImage1");
image.forEach((element) => {
  element.addEventListener("click", () => {
    let productImg = document.querySelector("#PrevieImage1");
    productImg.src = element.src;
    for (let i = 0; i < image.length; i++) {
      image[i].classList.remove("active");
    }
    element.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  image[0].classList.add("active");
});





// /// preview images

// let heading = document.createElement("h3");
// heading.innerText = "product preview";

// let div = document.createElement("div");
// div.classList.add("previewimg");

// for (let i = 0; i < productData.photos.length; i++) {
//   let image = document.createElement("img");
//   image.id = "img" + i;
//   image.src = productData.photos[i];
//   image.classList.add("image");
//   div.appendChild(image);
// }

// let productPreview = document.createElement("div");
// productPreview.classList.add("product-preview");
// productPreview.appendChild(heading);
// productPreview.appendChild(div);
// productdescription.appendChild(productPreview);

// let image = document.querySelectorAll(".image");
// let previewImg = document.querySelector(".previewimg");
// image.forEach((element) => {
//   element.addEventListener("click", () => {
//     let productImg = document.querySelector("#productimg");
//     productImg.src = element.src;
//     for (let i = 0; i < image.length; i++) {
//       image[i].classList.remove("active");
//     }
//     element.classList.add("active");
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   image[0].classList.add("active");
// });

