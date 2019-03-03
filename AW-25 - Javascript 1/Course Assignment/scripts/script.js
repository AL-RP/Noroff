// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards

fetch('https://api.magicthegathering.io/v1/cards')
    .then(result => result.json())
  .then((res) => {
    listCards(res);
  })
.catch(err => console.log(err))


// Code that display the cards from the API to the webpage, and also checks to see if the card has images, if not it adds a placeholder image.
function listCards(result){
    for(var i=0; i < result.cards.length; i++){
        var displayCards = document.getElementById('cards')
        if (result.cards[i].imageUrl === undefined){
            result.cards[i].imageUrl = "https://via.placeholder.com/223x310"
        }
        displayCards.innerHTML +=
          "<div class=\"col-sm-4\">" +
            "<div class=\"card-container\">" +
              "<h4 class=\"card-title\">" + result.cards[i].name + "</h4>" +
              "<img class = responsive src=\"" + result.cards[i].imageUrl +"\" width=\"100%\" />" +
              "<a href=\"card-specific.html?id="+result.cards[i].id+"\" class=\"btn btn-success\"> View More </a>" +
            "</div>" +
          "</div>";
  }
}

//Search functionality that removes all cards, and only displays the one searched for, or an error message.
function startSearch(){
fetch('https://api.magicthegathering.io/v1/cards')
    .then(searchres => searchres.json())
  .then((res) => {
    searchCards(res);
  })
.catch(err => console.log(err))
}

function searchCards(searchres){
  document.getElementById('cards').innerHTML = "";
  
  window.input = document.getElementById('search').value;

  for(var i=0; i < searchres.cards.length; i++){
    var displayCards = document.getElementById('cards')
    if (searchres.cards[i].imageUrl == undefined){
        searchres.cards[i].imageUrl = "https://via.placeholder.com/223x310" 
    }
    if (input === searchres.cards[i].name){
      displayCards.innerHTML +=
          "<div class=\"col-sm-4\">" +
            "<div class=\"card-container\">" +
              "<h4 class=\"card-title\">" + searchres.cards[i].name + "</h4>" +
              "<img class = responsive src=\"" + searchres.cards[i].imageUrl +"\" width=\"100%\" />" +
              "<a href=\"card-specific.html?id="+searchres.cards[i].id+"\" class=\"btn btn-success\"> View More </a>" +
            "</div>" +
          "</div>";
    } else {
      document.getElementById('search').value = "Not what you were looking for? Either you misspelt the name of the card, or it doesn't exist!";
      document.getElementById('searchError').style.cssText = "display: block;";
      document.getElementById('search').style.cssText = "border-color: red;";
    } 
  }
}