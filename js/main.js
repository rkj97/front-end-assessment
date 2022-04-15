const fetchDataBtn = document.querySelector("#addPubButton");
const result = document.querySelector("#publication_list");

var nextArticle = 0;

const getData = function () {
  fetch(
    "https://api.frc.org/api/webjson/frc/script-generated/front-end-assessment.json"
  )
    .then((res) => res.json())
    .then((data) => {
      buildPubList(data, nextArticle);
      if (nextArticle < data.length) {
        nextArticle += 1;
      } else {
        alert("No more publications to load");
      }
    })
    .catch((error) => console.log(error));
};

fetchDataBtn.addEventListener("click", getData);

function buildPubList(jsonObj, position) {
  const listItem = document.createElement("article");
  listItem.id = `item-${jsonObj[position].ITEM_CODE}`;

  const listImage = document.createElement("img");
  listImage.src = `${jsonObj[position].SCREENCAP_IMAGE}`;

  const listHeading = document.createElement("h2");
  listHeading.textContent = `${jsonObj[position].ITEM_DESC}`;

  const listText = document.createElement("p");

  listText.textContent =
    "Published on " + `${jsonObj[position].DISPLAY_MEDIA_DATE}`;

  listItem.append(listImage, listHeading, listText);
  result.append(listItem);
}

(function () {
  "use strict";
  console.log("js file loaded sucessfully");
})();
