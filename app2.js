const priceRange = document.getElementById("priceRange");
const value = document.querySelector(".value");

// slider
const slider1 = document.querySelector(".slider1");
const slider2 = document.querySelector(".slider2");

const btn = document.getElementById("checkbox");
const pageviews = document.querySelector(".pageviews");

//updates price
function updatePrize() {
  if (btn.checked) {
    value.textContent = "$" + ((priceRange.value * 12) - (priceRange.value * 12 * 0.25)) + ".00";
  } else {
    value.textContent = "$" + priceRange.value + ".00";
  }
  switch (priceRange.value) {
    case "8":
      pageviews.textContent = "10K pageviews";
      break;
    case "16":
      pageviews.textContent = "50K pageviews";
      break
    case "24":
      pageviews.textContent = "100K pageviews";
      break
    case "32":
      pageviews.textContent = "1M pageviews";
      break
    default:
  }
}

//changes slider and updates price
function handleUpdate() {
  document.documentElement.style.setProperty(`--${"width1"}`, (((priceRange.value-8) / 24) * 100) + "%");
  document.documentElement.style.setProperty(`--${"width2"}`, (100 - ((priceRange.value-8) / 24) * 100) + "%");
  updatePrize();
  }

priceRange.addEventListener("change", handleUpdate);
priceRange.addEventListener("mousemove", handleUpdate);

// changes prize when button toggled
const month = document.querySelector(".month");

btn.addEventListener("click", function() {
  if (btn.checked) {
    month.textContent = "/ year";
    updatePrize();
  } if (! btn.checked) {
    month.textContent = "/ month";
    updatePrize();
  }
});
