var bookInfor = [
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81D-gdnku+L.jpg",
    title: "They Both Die at the End",
    author: "Adam Silvera",
    price: "10$",
    category: "Romance Horror",
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/71I0yJf5h8L.jpg",
    title: "To all the boys I've loved before",
    author: "Jenny Han",
    price: "10$",
    category: "Romance",
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/61JS5pSCQqL.jpg",
    title: "P.S. I still love you",
    author: "Jenny Han",
    price: "10$",
    category: "Romance",
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/71aKL1ss9KL.jpg",
    title: "Always and Forever",
    author: "Jenny Han",
    price: "10$",
    category: "Romance",
  },
  {
    url: "https://m.media-amazon.com/images/I/41nngxCNKxL.jpg",
    title: "IT",
    author: "Stphen King",
    price: "10$",
    category: "Horror",
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81uQocUlNcL.jpg",
    title: "Green Mile",
    author: "Stephen King",
    price: "10$",
    category: "Horror",
  },
  {
    url: "http://prodimage.images-bn.com/pimages/9780345806789_p0_v2_s1200x630.jpg",
    title: "The Shinning",
    author: "Stephen King",
    price: "10$",
    category: "Horror",
  },
  {
    url: "https://m.media-amazon.com/images/I/41tATg+hmiL.jpg",
    title: "The Long Walk",
    author: "Stephen King",
    price: "10$",
    category: "Horror",
  },
  {
    url: "https://m.media-amazon.com/images/I/51jv4ITqI6L.jpg",
    title: "The Outsider",
    author: "Stephen King",
    price: "10$",
    category: "Horror",
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/918KkftCUFL.jpg",
    title: "13 Reasons Why",
    author: "Jay Asher",
    price: "10$",
    category: "Romance",
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/81zqDem9OvL.jpg",
    title: "Salem's Lot",
    author: "Stephen King",
    price: "10$",
    category: "Romance",
  },
  {
    url: "https://m.media-amazon.com/images/I/812jTyNSu1L._AC_UY218_.jpg",
    title: "Can't Hurt Me",
    author: "David Goggins",
    price: "10$",
    category: "Motivation",
  },
  {
    url: "https://m.media-amazon.com/images/I/811oWX6bKES._AC_UY218_.jpg",
    title: "Unwinding Anxiety",
    author: "Judson Brewer",
    price: "10$",
    category: "Motivation",
  },
  {
    url: "https://m.media-amazon.com/images/I/91lOmoKT38L._AC_UY218_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    price: "10$",
    category: "Motivation",
  },
  {
    url: "https://m.media-amazon.com/images/I/91ta1HTUZjL._AC_UY218_.jpg",
    title: "The Four Agreements",
    author: "JDon Miguel Ruiz and Janet Mills",
    price: "10$",
    category: "Motivation",
  },
];
var getElement = document.getElementsByClassName("pic")[0];
bookInfor.map((item, index) => {
  getElement.innerHTML =
    getElement.innerHTML +
    `
        <div class="hi">
            <a href="/html/bookDetail.html" target="_blank"> <img src="${item.url}" alt="book"></a>
            <h4>Title: ${item.title}</h4>
            <span>Author: ${item.author}</span><br>
            <span><b style="color:red;">Price from : ${item.price}</b></span>
        </div>
  `;
});
function filter(x) {
  document.getElementsByClassName("textArrival")[0].innerHTML = x;
}
bookInfor = JSON.parse(localStorage.getItem("books"));
console.log(bookInfor);
var getElement = document.getElementsByClassName("pic")[0];
bookInfor.map((item) => {
  getElement.innerHTML =
    getElement.innerHTML +
    `
          <div class="hi">
              <a href="/html/bookDetail.html" target="_blank"> <img src="${item.bookLink}" alt="book"></a>
              <h4>Title: ${item.bookTitle}</h4>
              <span>Author: ${item.bookAuthor}</span><br>
              <span><b style="color:red;">Price from : ${item.bookPrice}$</b></span>
          </div>
    `;
});

// //show book informations on home page

//   bookInfor=JSON.parse(localStorage.getItem("books"))
//   console.log(bookInfor);
//   var getElement = document.getElementsByClassName("pic")[0];
//   bookInfor.map((item) => {
//     getElement.innerHTML =
//       getElement.innerHTML +
//       `
//           <div class="hi">
//               <a href="../html/bookDetail.html" target="_blank"> <img src="${item.bookLink}" alt="book"></a>
//               <h4>Title: ${item.bookTitle}</h4>
//               <span>Author: ${item.bookAuthor}</span><br>
//               <span><b style="color:red;">Price from : ${item.bookPrice}</b></span>
//           </div>
//     `;
//   });
