  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".video-parallax").css({
      transform: "translateY(" + -0.5*scroll + "px)"
    });
    $(".overlay").css({
      transform: "translateY(" + -0.5*scroll + "px)"
    });
    $(".intro-text").css({
      transform: "translateY(" + -0.5*scroll + "px)"
    });

      
  });

 //JSON-Daten abrufen und anzeigen
fetch('https://infodeepfake.projekte.fh-hagenberg.at/php/MariaDBConnector.php')
  .then(response => response.json())
  .then(data => displayJSONData(data))
  .catch(error => console.log(error));

function displayJSONData(data) {
  const boxes = document.getElementsByClassName('previewBody');

  //Überprüfen, ob die JSON-Daten vorhanden sind
  if (data && data.length > 0) {

    //Schleife über die JSON-Daten und die Boxen
    for (let i = 0; i < data.length && i < boxes.length; i++) {
      const item = data[i];
      const box = boxes[i];

      //JSON-Daten auf die entsprechenden HTML-Elemente in der Box mappen
      const titleElement = box.querySelector('.previewTitle');
      const previewTextElement = box.querySelector('.previewText');
      //const fullTextElement = box.querySelector('.full-text');

      //HTML-Elemente mit den Daten aus der JSON-Datei füllen
      titleElement.textContent = item.Title;
      previewTextElement.textContent = item.IntroText;
      //fullTextElement.textContent = item.fullText;

      //Überprüfen, welche Sprache ausgewählt ist und entsprechend die Daten setzen
      //const selectedLanguage = item.sprache;
      // if (selectedLanguage === 'EN') {
      //  titleElement.textContent = item.TitleEN;
      //  previewTextElement.textContent = item.IntroTextEN;
      //  fullTextElement.textContent = item.MainTextEN;

      //} else {
      //  titleElement.textContent = item.Title;
      //  previewTextElement.textContent = item.IntroText;
      //  fullTextElement.textContent = item.MainText;
      //}

      // Klickereignis für die Box hinzufügen
      //box.addEventListener('click', toggleFullText);
    }
  }
}

//function toggleFullText(event) {
//  const box = event.currentTarget;
//  const fullTextElement = box.querySelector('.full-text'); -> full-text div definieren??
//
//  fullTextElement.style.display = fullTextElement.style.display === 'none' ? 'block' : 'none';
//}






