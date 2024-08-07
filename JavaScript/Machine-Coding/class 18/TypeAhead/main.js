import getCountries from "./fetchData.js";

const input_box = document.getElementById("search_input");
const suggest_box = document.getElementById("suggestion_box");
const noResults = document.getElementById("no_results");
let controller;

const populateSuggestionBox = (countryNameArr) => {
  suggest_box.innerHTML = "";
  if (countryNameArr.length > 0) {
    noResults.classList.remove("visible");
    suggest_box.classList.add("visible");
    const fragment = document.createDocumentFragment();
    countryNameArr.forEach((countryName) => {
      const li = document.createElement("li");
      li.textContent = countryName;
      fragment.appendChild(li);
    });
    suggest_box.appendChild(fragment);
  } else {
    suggest_box.classList.remove("visible");
    noResults.classList.add("visible");
  }
};
const handleSuggestion = async (event) => {
  if (controller) {
    controller.abort();
  }
  controller = new AbortController();
  const signal = controller.signal;
  try {
    const keyword = event.target.value.trim();
    if (keyword.length < 2) {
      suggest_box.classList.remove("visible");
      noResults.classList.remove("visible");
      return;
    }
    let countryNameArr = await getCountries(keyword, signal);
    countryNameArr = countryNameArr.map((country) => country?.name?.common);
    populateSuggestionBox(countryNameArr);
  } catch (error) {
    console.log("Error in fetching data", error);
  }
};

function debounce(fn, delay) {
  let debounceToken;
  return function (...args) {
    if (debounceToken) {
      clearTimeout(debounceToken);
    }
    debounceToken = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// callback
// input_box.addEventListener("input", debounce(handleSuggestion, 500));
input_box.addEventListener("input", debounce(handleSuggestion, 500));

suggest_box.addEventListener("click", (event) => {
  const selectedCountry = event.target?.textContent;
  input_box.value = selectedCountry;
  suggest_box.classList.remove("visible");
});
