let tablinks = document.querySelectorAll(".tab-links")
let tabcontents = document.querySelectorAll(".tab-contents")

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link")
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")
  }
  document
    .querySelector(".tab-links[data-tab='" + tabname + "']")
    .classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab")
}
