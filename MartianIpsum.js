var martian = [
    "October",
    "Holloway",
    "Nightshade",
    "illustrated",
    "Cooger",
    "dark",
    "Green Town",
    "elephants",
    "Litefoot",
    "dandelion",
    "wine",
    "time machine",
    "Usher",
    "voice clock",
    "seventeen and crazy",
    "dragonfly",
    "crying",
    "books",
    "burn",
    "Salamander",
    "library",
    "sideshow",
    "Venusian",
    "burning",
    "drunk on",
    "carnival",
    "funhouse",
    "reading",
    "Halloween",
    "tree",
    "chaff",
    "couldn't you recognize",
    "ignorance is fatal",
    "numb",
    "third",
    "planet",
    "rocket summer",
    "fireman",
    "dusk",
    "twilight",
    "skeleton",
    "electric",
    "autumn",
    "scientist",
    "shouted itself alive",
    "airlock",
    "soft rains",
    "chronicle",
    "coffin",
    "silent",
    "kaleidoscope",
    "marionettes",
    "April witch",
    "sound of thunder",
    "invisible",
    "jar",
    "Mexico",
    "next in line",
    "ice cream suit",
    "all summer in a day",
    "Lazarus",
    "sunlight",
    "traveler",
    "Ylla",
    "death",
    "Mr. Xxx",
    "LaFarge",
    "calliope",
    "bullet",
    "Mars",
    "Montag"
];


function MakeParagraph(numberOfSentences) {
    var paragraph = [];
    var sentence = "";

    for (var s = 0; s < numberOfSentences; s++) {
        var wordPool = shuffle(martian);
        var sentenceLength = randomIntWithBounds(4, 12);
        sentence.legth > 1 ? delete sentence : sentence = "";

        for (var i = 0; i < sentenceLength; i++) {

            if (i + 1 === sentenceLength) {
                sentence += wordPool[i];
                break;
            }
            if (i === 0) {
                sentence += wordPool[i].firstToUpper() + " ";
                continue;
            }
            if (Math.floor((Math.random() * 10) + 1) < 4) {
                sentence += wordPool[i] + ", ";
            }
            else {
                sentence += wordPool[i] + " ";
            }
        }
        sentence += ". ";
        paragraph.push(sentence);
    }

    return paragraph.join("");
}

var MakeIpsum = function (numberOfParagraphs, domElementToPopulate) {
    if (numberOfParagraphs > 20) return;
    var ipsum = [];
    var numberOfSentences = "";
    for (var p = 0; p < numberOfParagraphs; p++) {
        numberOfSentences = randomIntWithBounds(3,9);
        ipsum.push(MakeParagraph(numberOfSentences));
        ipsum.push(" &#10;&#13; ");
    }

    PrintIpsum(domElementToPopulate, ipsum);
}

function PrintIpsum(domElementToPopulate, ipsum) {
    document.getElementById(domElementToPopulate.id).innerHTML = ipsum.join("");
}

function shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

String.prototype.firstToUpper = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function randomIntWithBounds(a, b) {
    return Math.floor((Math.random() * (a - b)) +  b);
}

document.addEventListener("DOMContentLoaded", function () {
    var fontSize = parseInt(window.height());
    alert(fontSize);
    document.getElementById('blockquote').css('font-size', fontSize);
});
