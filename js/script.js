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

 //JSON-Daten abrufen und anzeigen Deutsch
fetch('https://infodeepfake.projekte.fh-hagenberg.at/php/MariaDBConnector.php?lang=de')
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
    }
  }
}

fetch('https://infodeepfake.projekte.fh-hagenberg.at/php/MariaDBConnector.php?lang=de')
  .then(response => response.json())
  .then(data => displayFullText(data))
  .catch(error => console.log(error));

function displayFullText(data) {
  const sections = document.getElementsByClassName('sectionfulltext');

  // Überprüfen, ob die JSON-Daten vorhanden sind und die Anzahl der Sections korrekt ist
  if (data && data.length >= sections.length) {

    // Schleife über die Sections und die JSON-Daten
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const item = data[i];

      // HTML-Element mit der Klasse "fullText" in der aktuellen Section finden
      const fullTextElement = section.querySelector('.fullText');

      // MainText aus den Daten in das HTML-Element einfügen
      fullTextElement.textContent = item.MainText;
    }
  }
}

// Funktion, um auf die entsprechende Section zu springen
function goToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Event-Handler für die Boxen
document.addEventListener('DOMContentLoaded', function() {
  const box1 = document.getElementById('box1');
  const box2 = document.getElementById('box2');
  const box3 = document.getElementById('box3');
  const box4 = document.getElementById('box4');
  const box5 = document.getElementById('box5');
  const box6 = document.getElementById('box6');

  box1.addEventListener('click', function() {
    goToSection('intro');
  });

  box2.addEventListener('click', function() {
    goToSection('einsatz');
  });

  box3.addEventListener('click', function() {
    goToSection('quellen');
  });

  box4.addEventListener('click', function() {
    goToSection('tipps');
  });

  box5.addEventListener('click', function() {
    goToSection('regierung');
  });

  box6.addEventListener('click', function() {
    goToSection('news');
  });
});









