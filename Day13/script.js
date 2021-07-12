const btn = document.querySelector("button");
const get = document.querySelector(".print");
// btn.addEventListener("click", dotask);

// async function dotask(e) {
//   const res = await fetch("https://free-quotes-api.herokuapp.com/");

//   const data = await res.json();
//   get.innerHTML = data.quote;
// }
//   console.log(data.quote);

btn.addEventListener("click", () => {
  fetch("https://free-quotes-api.herokuapp.com/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      get.innerHTML = data.quote;
      console.log(data.quote);
    });
});
