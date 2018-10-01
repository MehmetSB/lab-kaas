/* Mehmet Batur
Applicatieontwikkelaar */
function vraag0() {
  console.log("vraag0")
  vraag0 = prompt("Is de kaas geel?")
  if (vraag0 === "ja"){
    vraag1();
  }else {
    vraag2();
  }
}

function vraag1() {
  console.log("vraag1")
  vraag1 = prompt("Zitten er gaten in?")
  if (vraag1 === "ja"){
    vraag4();
  }else {
    vraag5();
  }
}

function vraag2() {
  console.log("vraag2")
  vraag2 = prompt("Heeft de kaas blauwe schimmels?")
  if (vraag2 === "ja"){
    vraag6();
  }else {
    vraag3();
  }
}

function vraag3() {
  console.log("vraag3")
  vraag3 = prompt("Heeft de kaas een korst?")
  if (vraag3 === "ja") {
    alert("Camembert");
  }else {
    alert("Mozzarella");
  }
}

function vraag4() {
  console.log("vraag4")
  vraag4 = prompt("Is de kaas belachelijk duur?")
  if (vraag4 === "ja") {
    alert("Emmenthaler");
  }else {
    alert("Leerdammer");
  }
}

function vraag5() {
  console.log("vraag5")
  vraag5 = prompt("Is de kaas hard als steen?")
  if (vraag5 === "ja") {
    alert("Pammigiano Reggiano");
  }else {
    alert("Goudse kaas");
  }
}

function vraag6() {
  console.log("vraag6")
  vraag6 = prompt("Heeft de kaas een korst?")
  if (vraag6 === "ja") {
    alert("Bleu de Rochbaron");
  }else {
    alert("Foume d'Ambert");
  }
}

function restart(){
  console.log("restart")
  location.reload();
}
