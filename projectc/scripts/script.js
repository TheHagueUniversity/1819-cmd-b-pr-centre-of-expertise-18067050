/*
 * Deze functie opent de aangeklikte tab en sluit alle andere tabs
 */
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Pakt alle content dingen
  tabcontent = document.getElementsByClassName("tabcontent");

  // Hier sluit hij alle content dingen
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Hier pakt hij alle knoppen bij de tabladen bovenaan
  tablinks = document.getElementsByClassName("tablinks");

  // Zet alle knoppen op niet active
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Zet de display op black van het aangeklikte tabblad zodat deze weer te zien is
  document.getElementById(tabName).style.display = "block";

  // Geef de aangeklikte knop de klasse active
  evt.currentTarget.className += " active";


}

// Open het event tab wanneer de pagina laadt
document.getElementById('eventButton').click();
