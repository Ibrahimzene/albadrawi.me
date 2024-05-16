const scriptURL =
  "https://script.google.com/macros/s/AKfycbxbL72DgkKCyaiQdnw5Ly-T9E0gy5cg4zM6CuY-GoARAm_jBHe4cakYoYPTT59ANGBV/exec"
const form = document.forms["submit-to-google-sheet"]
const msg = document.getElementById("msg")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!"
      setTimeout(() => {
        msg.innerHTML = ""
      }, 3000)
      form.reset(response)
    })
    .catch((error) => console.error("Error!", error.message))
})
