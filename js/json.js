let img_area = document.getElementById("img-area")

init()

function init() {
  getProductAPI()
}

async function getProductAPI() {
  let data = await fetch('data.json')
    .then(response => response.json())
    .then(json => json)
  loadImg(data)
}

function loadImg(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i])
    let output = `
    <div class="col-sm-6 col-md-4 px-0">
      <div class="flip-container">
        <div class="flipper">
          <div clas="front">
            <div class="img-box">
              <img src="${data[i].img}" alt=""  width="100%" height="300px">
            </div>
          </div>
          <div class="back">
            <h1>${data[i].name}</h1>
            <h2>${data[i].info}</h2>
          </div>
        </div>
      </div>
    </div>`
    img_area.innerHTML += output
  }
}