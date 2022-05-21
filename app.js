const priceRange = document.getElementById("priceRange");
const value = document.querySelector(".value");

// updating displayed value
function updateMonth() {
  value.textContent = "$" + priceRange.value + ".00";
}

function updateYear() {
  value.textContent = "$" + ((priceRange.value * 12) - (priceRange.value * 0.25));
}


// slider
const slider1 = document.querySelector(".slider1");
const slider2 = document.querySelector(".slider2");

function handleUpdate() {
  document.documentElement.style.setProperty(`--${"width1"}`, priceRange.value + "%");
  document.documentElement.style.setProperty(`--${"width2"}`, (100 - priceRange.value) + "%");
  }

priceRange.addEventListener("change", handleUpdate);
priceRange.addEventListener("mousemove", handleUpdate);

// changing billing
const btn = document.getElementById("checkbox");
const month = document.querySelector(".month");

btn.addEventListener("click", function() {
  if (btn.checked) {
    month.textContent = "/ year";
    updateYear();
    priceRange.addEventListener("change", updateYear);
    priceRange.addEventListener("mousemove", updateYear);
  } if (! btn.checked) {
    month.textContent = "/ month";
    updateMonth();
    priceRange.addEventListener("change", updateMonth);
    priceRange.addEventListener("mousemove", updateMonth);
  }
});

priceRange.addEventListener("change", function() {
  if (btn.checked) {
    updateYear();
  } else {
    updateMonth();
  }
});
