
// Lista piatti con categorie, prezzi e scorte
const piatti = [
  { id: 1, nome: "Acqua Gassata 0,5L", categoria: "Bibite", prezzo: 1.0, scorte: Infinity },
  { id: 2, nome: "Acqua Naturale 0,5L", categoria: "Bibite", prezzo: 1.0, scorte: Infinity },
  { id: 3, nome: "Vino sfuso 0,5L", categoria: "Bibite", prezzo: 2.0, scorte: Infinity },
  { id: 4, nome: "Vino sfuso 1L", categoria: "Bibite", prezzo: 3.5, scorte: Infinity },
  { id: 5, nome: "Vino in bottiglia", categoria: "Bibite", prezzo: 8.0, scorte: Infinity },
  { id: 6, nome: "Cola lattina", categoria: "Bibite", prezzo: 1.5, scorte: Infinity },
  { id: 7, nome: "Birra alla spina", categoria: "Bibite", prezzo: 2.0, scorte: Infinity },
  { id: 8, nome: "Birra in bottiglia 0,66L", categoria: "Bibite", prezzo: 3.0, scorte: Infinity },
  { id: 9, nome: "Sangria 0,3L", categoria: "Bibite", prezzo: 3.0, scorte: Infinity },
  { id: 10, nome: "Sangria 0,5L", categoria: "Bibite", prezzo: 5.0, scorte: Infinity },
  { id: 11, nome: "Sangria 1L", categoria: "Bibite", prezzo: 9.0, scorte: Infinity },

  { id: 12, nome: "Bruschette", categoria: "Antipasti", prezzo: 4.0, scorte: Infinity },
  { id: 13, nome: "Affettati misti", categoria: "Antipasti", prezzo: 7.0, scorte: Infinity },
  { id: 14, nome: "Antipasto misto (affettati, tomino, lingua in salsa, pesce in carpione)", categoria: "Antipasti", prezzo: 9.0, scorte: Infinity },
  { id: 15, nome: "Prosciutto crudo e melone", categoria: "Antipasti", prezzo: 7.5, scorte: Infinity },
  { id: 16, nome: "Insalata di fagioli", categoria: "Antipasti", prezzo: 4.5, scorte: Infinity },
  { id: 17, nome: "Insalata di mare", categoria: "Antipasti", prezzo: 7.0, scorte: Infinity },
  { id: 18, nome: "Lingua in salsa", categoria: "Antipasti", prezzo: 6.5, scorte: Infinity },
  { id: 19, nome: "Pesce in carpione", categoria: "Antipasti", prezzo: 7.0, scorte: Infinity },
  { id: 20, nome: "Carne in carpione", categoria: "Antipasti", prezzo: 6.5, scorte: Infinity },
  { id: 21, nome: "Tomini", categoria: "Antipasti", prezzo: 5.0, scorte: Infinity },
  { id: 22, nome: "Vitello tonnato", categoria: "Antipasti", prezzo: 7.5, scorte: Infinity },
  { id: 23, nome: "Insalata Pantesca", categoria: "Antipasti", prezzo: 5.0, scorte: Infinity },

  { id: 24, nome: "Agnolotti al Ragù", categoria: "Primi", prezzo: 8.0, scorte: Infinity },
  { id: 25, nome: "Agnolotti Burro e Salvia", categoria: "Primi", prezzo: 7.5, scorte: Infinity },
  { id: 26, nome: "Penne al ragù", categoria: "Primi", prezzo: 7.0, scorte: Infinity },
  { id: 27, nome: "Penne all’arrabbiata", categoria: "Primi", prezzo: 7.0, scorte: Infinity },
  { id: 28, nome: "Penne al pesto", categoria: "Primi", prezzo: 7.0, scorte: Infinity },

  { id: 29, nome: "Capocollo", categoria: "Secondi", prezzo: 9.0, scorte: Infinity },
  { id: 30, nome: "Costine", categoria: "Secondi", prezzo: 9.5, scorte: Infinity },
  { id: 31, nome: "Grigliata mista (capocollo,costine,wurstel,Salsiccia,salamella,alette di pollo)", categoria: "Secondi", prezzo: 12.0, scorte: Infinity },
  { id: 32, nome: "Wurstel", categoria: "Secondi", prezzo: 5.0, scorte: Infinity },
  { id: 33, nome: "Salamella", categoria: "Secondi", prezzo: 5.0, scorte: Infinity },
  { id: 34, nome: "Salsiccetta", categoria: "Secondi", prezzo: 5.0, scorte: Infinity },
  { id: 35, nome: "Roastbeef", categoria: "Secondi", prezzo: 11.0, scorte: Infinity },
  { id: 36, nome: "Alette di pollo", categoria: "Secondi", prezzo: 6.0, scorte: Infinity },
  { id: 37, nome: "Maialino al forno", categoria: "Secondi", prezzo: 12.0, scorte: Infinity },
  { id: 38, nome: "Pulled Pork", categoria: "Secondi", prezzo: 10.0, scorte: Infinity },

  { id: 39, nome: "Insalata mista", categoria: "Contorni", prezzo: 3.5, scorte: Infinity },
  { id: 40, nome: "Patatine fritte", categoria: "Contorni", prezzo: 3.0, scorte: Infinity },
  { id: 41, nome: "Patatine al gorgonzola", categoria: "Contorni", prezzo: 4.5, scorte: Infinity },

  { id: 42, nome: "Formaggi misti (gorgonzola,maccagno,toma)", categoria: "Formaggi", prezzo: 8.0, scorte: Infinity },
  { id: 43, nome: "Gorgonzola", categoria: "Formaggi", prezzo: 3.0, scorte: Infinity },
  { id: 44, nome: "Maccagno", categoria: "Formaggi", prezzo: 3.0, scorte: Infinity },
  { id: 45, nome: "Toma", categoria: "Formaggi", prezzo: 3.0, scorte: Infinity },

  { id: 46, nome: "Macedonia", categoria: "Dolci", prezzo: 3.5, scorte: Infinity },
  { id: 47, nome: "Meringata", categoria: "Dolci", prezzo: 4.0, scorte: Infinity },
  { id: 48, nome: "Profitteroles", categoria: "Dolci", prezzo: 4.5, scorte: Infinity },
  { id: 49, nome: "Gelato", categoria: "Dolci", prezzo: 3.5, scorte: Infinity }
];

// Stato carrello e numero coperti
let carrello = [];
let numeroCoperti = 1;

const menuContainer = document.getElementById("menu-container");
const carrelloList = document.getElementById("carrello-list");
const copertiInput = document.getElementById("coperti");
const confermaOrdineBtn = document.getElementById("conferma-ordine");

copertiInput.addEventListener("change", () => {
  numeroCoperti = parseInt(copertiInput.value) || 1;
  aggiornaDisponibilita();
});

function aggiornaDisponibilita() {
  // Per ora non limitiamo le quantità, solo disabilitiamo se scorte 0
  const piattoDivs = document.querySelectorAll(".piatto");
  piattoDivs.forEach(div => {
    const id = parseInt(div.dataset.id);
    const piatto = piatti.find(p => p.id === id);
    if (!piatto) return;
    if (piatto.scorte === 0) {
      div.classList.add("esaurito");
      div.classList.remove("disponibile");
    } else {
      div.classList.add("disponibile");
      div.classList.remove("esaurito");
    }
  });
}

function creaMenu() {
  menuContainer.innerHTML = "";
  // Raggruppa per categoria
  const categorie = [...new Set(piatti.map(p => p.categoria))];
  categorie.forEach(categoria => {
    const catDiv = document.createElement("div");
    catDiv.classList.add("menu-categoria");
    const titolo = document.createElement("h3");
    titolo.textContent = categoria;
    catDiv.appendChild(titolo);

    piatti.filter(p => p.categoria === categoria).forEach(piatto => {
      const piattoDiv = document.createElement("div");
      piattoDiv.classList.add("piatto");
      piattoDiv.dataset.id = piatto.id;
      piattoDiv.textContent = `${piatto.nome} - €${piatto.prezzo.toFixed(2)}`;
      if (piatto.scorte === 0) {
        piattoDiv.classList.add("esaurito");
      } else {
        piattoDiv.classList.add("disponibile");
        piattoDiv.addEventListener("click", () => aggiungiAlCarrello(piatto.id));
      }
      catDiv.appendChild(piattoDiv);
    });

    menuContainer.appendChild(catDiv);
  });
}

function aggiungiAlCarrello(id) {
  const piatto = piatti.find(p => p.id === id);
  if (!piatto || piatto.scorte === 0) return;
  // Aggiungi o aumenta quantità
  let item = carrello.find(c => c.id === id);
  if (item) {
    item.quantita++;
  } else {
    carrello.push({ id: id, quantita: 1 });
  }
  aggiornaCarrello();
}

function aggiornaCarrello() {
  carrelloList.innerHTML = "";
  carrello.forEach(item => {
    const piatto = piatti.find(p => p.id === item.id);
    if (!piatto) return;
    const li = document.createElement("li");
    li.textContent = `${piatto.nome} x ${item.quantita} - €${(piatto.prezzo * item.quantita).toFixed(2)}`;
    // Bottone rimuovi
    const btnRimuovi = document.createElement("button");
    btnRimuovi.textContent = "✕";
    btnRimuovi.addEventListener("click", () => {
      rimuoviDalCarrello(item.id);
    });
    li.appendChild(btnRimuovi);
    carrelloList.appendChild(li);
  });
}

function rimuoviDalCarrello(id) {
  carrello = carrello.filter(item => item.id !== id);
  aggiornaCarrello();
}

confermaOrdineBtn.addEventListener("click", () => {
  if (carrello.length === 0) {
    alert("Seleziona almeno un piatto prima di confermare.");
    return;
  }
  let totale = 0;
  let testoOrdine = `Ordine per ${numeroCoperti} coperti:\n\n`;
  carrello.forEach(item => {
    const piatto = piatti.find(p => p.id === item.id);
    const costo = piatto.prezzo * item.quantita;
    totale += costo;
    testoOrdine += `${piatto.nome} x ${item.quantita} = €${costo.toFixed(2)}\n`;
  });
  testoOrdine += `\nTotale: €${totale.toFixed(2)}`;
  alert(testoOrdine);
  window.print();
});

creaMenu();
aggiornaDisponibilita();
