window.addEventListener("load", () => {
  const CICASLISTA = [
    {
      eleresiUt: "../kepek/bagrol.jpg",
      nev: "DJ Bagrol"
    },
    {
      eleresiUt: "../kepek/climo.jpg",
      nev: "DJ Climo"
    },
    {
      eleresiUt: "../kepek/djkaka.jpg",
      nev: "DJ KAKA"
    },
    {
      eleresiUt: "../kepek/klimon.jpg",
      nev: "DJ Klimon"
    },
    {
      eleresiUt: "../kepek/knassix.jpg",
      nev: "DJ Knassix"
    },
    {
      eleresiUt: "../kepek/malos.jpg",
      nev: "DJ Malos"
    },
    {
      eleresiUt: "../kepek/przemooo.jpg",
      nev: "DJ Przemooo"
    },
    {
      eleresiUt: "../kepek/virgo.jpg",
      nev: "DJ Virgo Nightbasse"
    },
  ];
  const ARTICLE = document.querySelectorAll("article");
  fokepMegjelenit(CICASLISTA, ARTICLE)
  megjelenit(CICASLISTA, ARTICLE);
  const KEPELEM = document.querySelectorAll("article .kepek img");
  const ELOZO_ELEM = document.querySelectorAll("article #fokep #elozo");
  const KOVETKEZO_ELEM = document.querySelectorAll("article #fokep #kovetkezo");

  /*Kattintásos eseménykezelő*/
  for (let index = 0; index < CICASLISTA.length; index++) {
      if(KEPELEM){
        KEPELEM[index].addEventListener("click", () => {
        console.log(event.target.src); /*Ez az elem váltotta ki az eseményt.*/
        const NAGYKEP = document.querySelectorAll("article #nagykep img"); /*Megfogja a kép helyét*/
      NAGYKEP[0].src = CICASLISTA[index].eleresiUt; /*Megváltoztatja a képet*/
      console.log(index);
      })};
      if(ELOZO_ELEM){
        ELOZO_ELEM[0].addEventListener("click", () => {
        console.log(event.target.src);
        const NAGYKEP = document.querySelectorAll("article #nagykep img");        
        NAGYKEP[0].src = CICASLISTA[index].eleresiUt;
        index--;
      })};
      if(KOVETKEZO_ELEM){KOVETKEZO_ELEM[0].addEventListener("click", () => {
        console.log(event.target.src);
        const NAGYKEP = document.querySelectorAll("article #nagykep img");
        NAGYKEP[0].src = CICASLISTA[index + 1].eleresiUt;
        index++;
      })};
    };
  }
);

function fokepMegjelenit(lista, container){
  let txt = "<div id='fokep'> <button id='elozo'>Balra</button>";
  txt += `<div id="nagykep">
        <img src=${lista[0].eleresiUt} alt=kep('FO')>
        </div>`;
  txt += "<button id='kovetkezo'>Jobbra</button>"
  "</div>";
  container[0].innerHTML += txt;
}

function megjelenit(lista, container) {
  let txt = "<div class='kepek'>";
  for (let index = 0; index < lista.length; index++) {
    txt += `<div>
        <img src=${lista[index].eleresiUt} alt=kep(${index + 1})>
        </div>`;
  }
  txt += "</div>";
  container[0].innerHTML += txt;
}
