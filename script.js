"use strict";

let numberOfSeries;

function startApp() {
  numberOfSeries = prompt("nechta serial kordingiz?");
  while (
    numberOfSeries == "" ||
    numberOfSeries == null ||
    isNaN(numberOfSeries)
  ) {
    numberOfSeries = prompt("nechta serial kordingiz?");
  }
}

startApp();

let seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false,
};
function remenberMySeries() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("oxiri korgan serializ"),
      b = prompt("nechchi baxo berasiz");

    if (a != "" && a != null && b != "" && b != null) {
      seriesDB.series[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

remenberMySeries();

function deteclEVELseries() {
  if (seriesDB.count < 5) {
    console.log("kam serial koribsiz");
  } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
    console.log("Siz classik tomoshabin ekansiz");
  } else if (seriesDB.count >= 10) {
    console.log("Siz serialchi zvezda ekansiz");
  } else {
    console.log("error");
  }

  console.log(seriesDB);
}
deteclEVELseries();
