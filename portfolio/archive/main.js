// Calculate the offset of each card and stores it in an object
const cardOffsets = {};
// Scrolls to the card with the given id using the stored offsets
function scrollToCard(cardId) {
  cardId = "card_" + cardId;
  const offset = cardOffsets[cardId];
  if (offset !== undefined) {
    window.scrollTo({
      top: offset,
      behavior: "smooth", // Adds smooth scrolling behavior
    });
  } else {
    console.error(`Offset not found for card with id ${cardId}.`);
  }
}

// Change the active button when scrolling - Closed for debugging
// window.addEventListener("scroll", () => {
//   const scrollPos = window.scrollY;
//   let activeBtn = document.querySelector(".active-btn");
//   // If the object is empty, then the offsets have not been calculated
//   if (Object.keys(cardOffsets).length === 0 && scrollPos === 0) {
//     const cards = document.querySelectorAll(".card"); // Assuming you have a class 'card' for your cards
//     cards.forEach((card) => {
//       cardOffsets[card.id] = card.offsetTop;
//     });
//   }
//   if (Object.keys(cardOffsets).length === 0) {
//     // Store the current scroll position
//     if (scrollPos !== 0) {
//       window.scrollTo({
//         top: 0,
//         behavior: "auto",
//       });
//     }
//   }
//   if (
//     scrollPos < cardOffsets["card_1"] - 200 ||
//     scrollPos > cardOffsets["card_3"] + 200
//   ) {
//     if (activeBtn) {
//       activeBtn.classList.remove("active-btn");
//     }
//   } else if (scrollPos < cardOffsets["card_2"]) {
//     if (activeBtn) {
//       activeBtn.classList.remove("active-btn");
//     }
//     document.querySelector("#about-btn").classList.add("active-btn");
//   } else if (
//     scrollPos >= cardOffsets["card_2"] &&
//     scrollPos < cardOffsets["card_3"]
//   ) {
//     if (activeBtn) {
//       activeBtn.classList.remove("active-btn");
//     }
//     document.querySelector("#skills-btn").classList.add("active-btn");
//   } else if (scrollPos >= cardOffsets["card_3"]) {
//     if (activeBtn) {
//       activeBtn.classList.remove("active-btn");
//     }
//     document.querySelector("#projects-btn").classList.add("active-btn");
//   }
// });

// Idea: If at top, scroll to whatever card is asked for by using scrollTO(cardId)

// Navbar buttons
document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (document.querySelector(".active-btn")) {
      document.querySelector(".active-btn").classList.remove("active-btn");
    }
    switch (btn.innerText) {
      case "ABOUT":
        scrollToCard("1");
        break;
      case "SKILLS":
        scrollToCard("2");
        break;
      case "PROJECTS":
        scrollToCard("3");
        break;
      case "CONTACT":
        // TBD
        alert("Contact me!");
        break;

      default:
        break;
    }
  });
});
// Read More Button on About Card
document.querySelectorAll(".ui-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let innerSpan = btn.querySelector("span");
    let text = innerSpan.innerText;
    let child = btn.parentElement.querySelector(".ui-text");
    child.classList.toggle("show");
    text = "Read More" === text ? "Read Less" : "Read More";
    btn.querySelector("span").innerText = text;
  });
});

// Skill Selector
let select = document.querySelector(".skill-selector");
// Check current selected option
let selected = select.querySelector(".selected");
// Whene the select is changed
select.addEventListener("change", (e) => {
  // Get the selected option number
  // 0 -> All; 1-> Frontend; 2-> Backend; 3-> Android
  let option = select.options[select.selectedIndex];
  // Print the numberof the selected option
  alert(option.value);
});

// Skill Icons -> Draggable
// Replace 'scrollable-element' with the ID or class of your horizontally scrollable element
var skillsContainer = document.querySelector(".skills-container");
var isMouseDown = false;
var startX;
var scrollLeft;

skillsContainer.addEventListener("mousedown", function (e) {
  isMouseDown = true;
  startX = e.pageX - skillsContainer.offsetLeft;
  scrollLeft = skillsContainer.scrollLeft;
});

skillsContainer.addEventListener("mouseup", function () {
  isMouseDown = false;
});

skillsContainer.addEventListener("mouseleave", function () {
  isMouseDown = false;
});

skillsContainer.addEventListener("mousemove", function (e) {
  if (!isMouseDown) return;
  e.preventDefault();
  var x = e.pageX - skillsContainer.offsetLeft;
  var walk = x - startX;
  skillsContainer.scrollLeft = scrollLeft - walk;
});
