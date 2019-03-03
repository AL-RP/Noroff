// refer to question 3 before development starts for scope document

//Function to replace Magic with Something
function replace(){
    var text = document.getElementById('aboutText').innerHTML;
    document.getElementById('aboutText').innerHTML = text.replace(/Magic/g, 'Something');
} replace();

//Function to open the about box
function openTooltip(){
    document.getElementById('moreInfoContent').style.cssText = 'Display: block;';
    document.getElementById('moreInfoTrigger').setAttribute("onclick", "closeTooltip()");
}

//Function to close the about box
function closeTooltip(){
    document.getElementById('moreInfoContent').style.cssText = 'Display: none;';
    document.getElementById('moreInfoTrigger').setAttribute("onclick", "openTooltip()");
}