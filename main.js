window.addEventListener("load", () => {
  const CICASLISTA = [
    {
      eleresiUt: "../kepek/cica1.jpg",
      szoveg: "Nagyon cukkedli, bambán néző minicica",
    },
    {
      eleresiUt: "../kepek/cica6.jpg",
      szoveg: "Nagyon cukkedli, aranyosan mosolygó cicuka",
    },
    {
      eleresiUt: "../kepek/cica7.jpg",
      szoveg: "Nagyon cukkedli, őrülten mosolygó cicuka",
    },
    {
      eleresiUt: "../kepek/cica2.jpg",
      szoveg: "Nagyon cukkedli, kedvesen meglepődő micucicu",
    },
    {
      eleresiUt: "../kepek/cica4.jpg",
      szoveg: "Nagyon cukkedli, aranyosan feltekintő micuka",
    },
  ];
  const CONTAINER = document.querySelectorAll("article");
  megjelenit(CICASLISTA, CONTAINER);
  const KEPELEM = document.querySelectorAll("article .kepek img");

  /*Kattintásos eseménykezelő*/
  for (let index = 0; index < CICASLISTA.length; index++) {
    KEPELEM[index].addEventListener("click", () => {
      console.log(event.target.src); /*Ez az elem váltotta ki az eseményt.*/
      const NAGYKEP = document.querySelectorAll("article #nagykep img"); /*Megfogja a kép helyét*/
      NAGYKEP[0].src = CICASLISTA[index].eleresiUt; /*Megváltoztatja a képet*/
    });
  }
});

function megjelenit(lista, container) {
  let txt = "<div class='kepek'>";
  for (let index = 0; index < lista.length; index++) {
    txt += `<div>
        <img src=${lista[index].eleresiUt} alt=cica(${index + 1})>
        </div>`;
  }
  txt += "</div>";
  container[0].innerHTML += txt;
}
