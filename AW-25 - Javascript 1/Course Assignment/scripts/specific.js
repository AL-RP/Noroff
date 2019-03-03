// refer to question 2 before development starts for scope document
// get URL query string
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");

fetch('https://api.magicthegathering.io/v1/cards/'+id)
    .then(result => result.json())
  .then((res) => {
    infoCards(res);
  })
.catch(err => console.log(err))

//Function that uses the ID from the card clicked to fetch more information on the card from the API
function infoCards(result){
    if (result.card.imageUrl === undefined){
        result.card.imageUrl = "https://via.placeholder.com/223x310"
    }
    var cardImage = document.getElementById('cardImage')
    var cardDetails = document.getElementById('cardDetails')
  
    cardImage.innerHTML +=
     "<img src=\""+result.card.imageUrl+"\" width=\"100%\">";

    cardDetails.innerHTML +=
    "<h2> "+result.card.name+" </h2>" +
    "<div><b>About: </b>"+result.card.text+"</div>" +
    "<div><b>Rarity: </b>"+result.card.rarity+"</div>" +
    "<div><b>Color: </b>"+result.card.colors+"</div>";
  }