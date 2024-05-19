const wrapper = document.querySelector(".shoesWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "New Balance 2002R",
      price: 150,
      colors: [
        {
          code: "black",
          img:"./images/nb2002R.png"
        },
        {
          code: "darkblue",
          img: "./images/crater.png",
        },
      ],
    },
    {
      id: 2,
      title: "Samba",
      price: 100,
      colors: [
        {
          code: "white",
          img: "./images/samba.png",
        },
        {
          code: "green",
          img: "./images/crater.png",
        },
      ],
    },
    {
      id: 3,
      title: "Air Force-1",
      price: 120,
      colors: [
        {
          code: "white",
          img: "./images/air1.png",
        },
        {
          code: "green",
          img: "./images/air2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Blazer",
      price: 105,
      colors: [
        {
          code: "white",
          img: "./images/blazer.png",
        },
        {
          code: "lightgray",
          img: "./images/blazer2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Converse",
      price: 115,
      colors: [
        {
          code: "white",
          img: "./images/converse.png",
        },
        {
          code: "black",
          img: "./images/crater.png",
        },
      ],
    },
  ];

  let choosenProduct = products[0]
  
  const currentProductImg = document.querySelector(".productImage");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
      //change the current slide
        wrapper.style.transform= `translateX(${-100 * index}vw)`;
      //change the choosen product
        choosenProduct = products[index]
      //change the texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$"+choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img
     
    });
});

currentProductColors.forEach((color,index)=>{
  color.addEventListener("click",()=>{
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productBuyNow");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});





document.querySelector('.add-to-cart-button').addEventListener('click', () => {
  const productElement = document.querySelector('.product');
  const productTitle = productElement.querySelector('.product-title').innerText;
  const productPrice = productElement.querySelector('.product-price').innerText;

  document.getElementById('cart-item-title').innerText = `Product: ${productTitle}`;
  document.getElementById('cart-item-price').innerText = `Price: ${productPrice}`;

  document.getElementById('cart-item-details').classList.remove('hidden');
});

document.getElementById('close-button').addEventListener('click', () => {
  document.getElementById('cart-item-details').classList.add('hidden');
});


