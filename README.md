# FRC Front End Developers Assessment
This is a template for a simple assessment of an applicant's basic front-end skills (HTML, CSS, JS). The basic requirements are below as well as outlines for optional "bonus points" for additional functionality.

## Basic requirements

### JS Functionality
Fork this existing repository into a private repository of your own. Without modifying the `index.html` file and using only pure HTML, CSS, and JS, modify the existing files to do the following:
  - retrieve example data that represents a listing of publications from the following URL https://api.frc.org/api/webjson/frc/script-generated/front-end-assessment.json and place it into an array. This can be done with a single request, either via a `fetch()` or `XMLHttpRequest()`
  - As the provided `<button id="addPubButton">` is clicked, the page should populate and append to the `<div id="publication_list">` with each publication in the array fetched earlier. The publication listing should use the following HTML, which should be generated via JS, either by using `document.createElement()`, Template Literals, or String concatenation. The text between each set of `{}` represents the key name in the object you should find in each index of the array. 
```
<article id="item-{ITEM_CODE}">
    <img src="{SCREENCAP_IMAGE}">
    <h2>{ITEM_DESC}</h2>
    <p><small>{DISPLAY_MEDIA_DATE}</small></p>
</article>
```

### CSS
Additional though should be given to how the page is styled. Specifics of color and spacing are up to the developer, but work should display and understanding of responsive web design that will display content in a digestible way based on screen width, as well as some simple aesthetic changes to the `<button` as well as spacing on the generated publication list. Displaying understanding of css `grid` and/or `flexbox` is encouraged. 

The resulting page would look something like the following

![one-at-a-time](https://raw.githubusercontent.com/FamilyResearchCouncil/front-end-assessment/main/example-gifs/one-at-a-time.gif)


## Bonus Points 

### Check for the end of available data
Account for the point at which there are no other publications to display. The expected length of the array is 48 publications, but your solution should be able to accommodate any number of items in the listing. When the limit has been reached, alert the user. 

![no-more-data](https://raw.githubusercontent.com/FamilyResearchCouncil/front-end-assessment/main/example-gifs/no-more-data.gif)

### Detect Screen Width
Use JS to detect the screen width and change the functionality of the `<button>` to generate the number of publications the CSS is set to display on each row of the listing. Examples below:

#### 2 publications per row for medium screens

![three-at-a-time](https://raw.githubusercontent.com/FamilyResearchCouncil/front-end-assessment/main/example-gifs/two-at-a-time.gif)

#### 3 publications per row for large screens

![two-at-a-time](https://raw.githubusercontent.com/FamilyResearchCouncil/front-end-assessment/main/example-gifs/three-at-a-time.gif)

### Allow User Input 
Provide an additional input field of your choice that will let the user select the number of items to add each time the button is clicked. The below example uses a `<select>` as the input, but discretion is left to the developer. 

![with-user-input](https://raw.githubusercontent.com/FamilyResearchCouncil/front-end-assessment/main/example-gifs/user-selection.gif)

## EXTRA BONUS POINTS

If you have any familiarity with React JS and/or Next JS, feel free to decline to clone this repository and instead create your own `git` repository that produces the same functionality with the same data, the only caveat being that you should not use any third party components or libraries. All work should be done in "pure" React with components that were built by the developer. 