const firstChildTitles = document.getElementsByClassName("firstChildTitle"),
  linkBtns = document.getElementsByClassName("linkBtn");

const ELEMENTS_TITLES = ["HTML", "CSS", "JavaScript"];

function showChild(event) {
  const firstChilds = event.target.parentNode.parentNode,
    secondChilds = firstChilds.childNodes[3];

  secondChilds.classList.toggle("deactivation");
}

function moveSite(event) {
  const firstChilds = event.target.parentNode.parentNode;
  let firstChild;

  if (event.target.tagName === "I") {
    firstChild = event.target.parentNode;
  } else if (event.target.tagName === "SPAN") {
    firstChild = firstChilds.childNodes[1];
  }

  const firstChildTitle = firstChild.childNodes[1].innerText;
  
  for (let elementTitle of ELEMENTS_TITLES) {
    if (firstChildTitle === elementTitle) {
      location.href = `../front/elements/${firstChildTitle}.html`;
    }
  }
}

function init() {
  Array.from(firstChildTitles).forEach((firstChildTitle) => {
    firstChildTitle.addEventListener("click", showChild);
  });

  Array.from(linkBtns).forEach((linkBtn) => {
    linkBtn.addEventListener("click", moveSite);
  });
}

init();