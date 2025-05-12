import "./styles.css";

// GIPHY
const img = document.querySelector("img");
fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=mc5mG0JWFoAUnogxO2r7DcxFqyyhm3Yu&s=cats",
  { mode: "cors" },
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });

const newCatGifBtn = document.querySelector("#newCatGifBtn");
newCatGifBtn.addEventListener("click", function () {
  img.src = "";
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=mc5mG0JWFoAUnogxO2r7DcxFqyyhm3Yu&s=cats",
    { mode: "cors" },
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
      GifHeading.textContent = "Random Cat GIF";
    });
});

const GifSearchBtn = document.querySelector("#GifSearchBtn");
const GifSearchInput = document.querySelector("#GifSearchInput");
const GifHeading = document.querySelector("#GifHeading");
GifSearchBtn.addEventListener("click", function () {
  img.src = "";
  let s = GifSearchInput.value;
  console.log(s);
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=mc5mG0JWFoAUnogxO2r7DcxFqyyhm3Yu&s=" +
      s,
    { mode: "cors" },
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
      GifHeading.textContent = "Random " + s + " GIF";
      GifSearchInput.value = "";
    })
    .catch(function (err) {});
});

// Visual Crossing
const p = document.querySelector(".weather-container");
fetch(
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Sydney?unitGroup=us&key=Z8MVH2E3J6MWQFJL75YCGKAYV&contentType=json",
  { mode: "cors" },
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    p.textContent =
      response.resolvedAddress +
      " " +
      response.currentConditions.datetime +
      " " +
      response.currentConditions.conditions;
  });
