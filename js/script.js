  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".video-parallax").css({
      transform: "translateY(" + -0.5*scroll + "px)"
    });
    $(".overlay").css({
      transform: "translateY(" + -0.5*scroll + "px)"
    });
    $(".intro-text").css({
      transform: "translateY(" + -0.3*scroll + "px)"
    });

    $(".circle").css({
      transform: "translateY(" + -0.1*scroll + "px)"
    });
    $(".circle2").css({
      transform: "translateY(" + -0.09*scroll + "px)"
    });
    $(".circle3").css({
      transform: "translateY(" + -0.2*scroll + "px)"
    });
    $(".circle4").css({
      transform: "translateY(" + -0.5*scroll + "px)"
    });

      
  });

// Parse cookies into an object
const cookies = document.cookie.split(';').reduce((cookies, item) => {
  const [name, value] = item.split('=');
  cookies[name.trim()] = value;
  return cookies;
}, {});

// Get language from cookies or use default
const lang = cookies.lang || 'de';

 //JSON-Daten abrufen und anzeigen Deutsch
fetch(`https://infodeepfake.projekte.fh-hagenberg.at/php/MariaDBConnector.php?lang=${lang}`)
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

      //HTML-Elemente mit den Daten aus der JSON-Datei füllen
      titleElement.textContent = item.Title;
      previewTextElement.textContent = item.IntroText;

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
          fullTextElement.innerHTML = linkify(item.MainText);

          // HTML-Element mit der Klasse "mainHeading" in der aktuellen Section finden
          const headingElement = section.querySelector('.mainHeading');

          // Heading aus den Daten in das HTML-Element einfügen
          headingElement.innerHTML = linkify(item.Title);
            }
          }
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

$(document).ready(function(){
    $(".dropdown-item").click(function(){
        var selectedLanguage = $(this).attr("data-value"); // Get the selected language
        var selectedFlag = $(this).attr("data-flag"); // Get the flag image URL

        // Set the button text and flag to the selected language
        $("#languageDropdown").html('<img id="selectedFlag" src="' + selectedFlag + '" alt="' + selectedLanguage + '" width="20" height="20"> ' + selectedLanguage);

        // Set the cookie
        var cookieValue = selectedLanguage == "English" ? "en" : "de";
        document.cookie = "lang=" + cookieValue + ";path=/;";

        window.location.reload(); // Reload the page
    });

    // Check if the 'lang' cookie is set on page load
    var cookies = decodeURIComponent(document.cookie).split(';');
    for(var i = 0; i < cookies.length; i++) {
        var c = cookies[i].trim();
        if (c.indexOf("lang=") == 0) {
            var lang = c.substring(5, c.length);
            var selectedLanguage = lang == "en" ? "English" : "German";
            var selectedFlag = lang == "en" ? "assets/english.png" : "assets/german.webp";

            // Set the dropdown button text and flag image
            $("#languageDropdown").html('<img id="selectedFlag" src="' + selectedFlag + '" alt="' + selectedLanguage + '" width="20" height="20"> ' + selectedLanguage);
        }
    }
});


function linkify(inputText) {
  var replacedText;

  // URLs starting with http://, https://, or ftp://
  var urlPattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  replacedText = inputText.replace(urlPattern, '<a href="$1" target="_blank">$1</a>');

  // URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  var wwwPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  replacedText = replacedText.replace(wwwPattern, '$1<a href="http://$2" target="_blank">$2</a>');

  return replacedText;
}


