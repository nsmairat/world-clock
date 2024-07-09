setInterval(function () {
  let lasVegasElement = document.querySelector("#las-vegas");
  let lasVegasDateElement = lasVegasElement.querySelector(".date");
  let lasVegasTimeElement = lasVegasElement.querySelector(".time");
  let lasVegasTime = moment().tz("America/Los_Angeles");

  lasVegasDateElement.innerHTML = lasVegasTime.format("MMMM Do YYYY");
  lasVegasTimeElement.innerHTML = lasVegasTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  let milanElement = document.querySelector("#milan");
  let milanDateElement = milanElement.querySelector(".date");
  let milanTimeElement = milanElement.querySelector(".time");
  let milanTime = moment().tz("Europe/Vatican");

  milanDateElement.innerHTML = milanTime.format("MMMM Do YYYY");
  milanTimeElement.innerHTML = milanTime.format("h:mm:ss [<small>]A[</small>]");

  let moscowElement = document.querySelector("#moscow");
  let moscowDateElement = moscowElement.querySelector(".date");
  let moscowTimeElement = moscowElement.querySelector(".time");
  let moscowTime = moment().tz("Europe/Moscow");

  moscowDateElement.innerHTML = moscowTime.format("MMMM Do YYYY");
  moscowTimeElement.innerHTML = moscowTime.format(
    "h:mm:ss [<small>]A[</small>]" //)}<small>${lasVegasTime.format("A")}</small>`;
  );
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
  <a href="index.html">Back to All Cities</a>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
