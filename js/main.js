const fetchDataBtn = document.querySelector('#addPubButton');
const result = document.querySelector('#publication_list');
var nextArticle = 0

const getData = function() {
  
  fetch("https://api.frc.org/api/webjson/frc/script-generated/front-end-assessment.json")
  .then((res) => res.json())
  .then((data) => { buildPubList(data, nextArticle)})
  .catch((error) =>
        console.log(error));
  if (nextArticle < 48) {
    nextArticle += 1
  } else {
    alert("No more publications to load")
  }
  
};

fetchDataBtn.addEventListener("click", getData);

/*
At this point, everything with in the <article> tag is appended but not pulling from the array for some reason...
*/

function buildPubList(jsonObj, position){
  const listItem = document.createElement('article', { id : `item-${jsonObj[position].ITEM_CODE}` } );
  const listImage = document.createElement('img', { src : `${jsonObj[position].SCREENCAP_IMAGE}` } );
  const listHeading = document.createElement('h2', `${jsonObj[position].ITEM_DESC}` );
  const listText = document.createElement('p', `${jsonObj[position].DISPLAY_MEDIA_DATE}` );
  listItem.append(listImage, listHeading, listText);
  result.append(listItem);
}

(function(){
    "use strict";
    console.log("js file loaded sucessfully");
}());
