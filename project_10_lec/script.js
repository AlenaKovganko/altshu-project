console.clear();

let thisParagraph = document.getElementById("thisParagraph");
console.log(thisParagraph.style);

// thisParagraph.style.background = "blue";

let paragraphTags = document.getElementsByTagName("p");
console.log(paragraphTags);
console.log(paragraphTags[2]);

let thisClassParagraphs = document.getElementsByClassName("thisParagraphClass");
console.log(thisClassParagraphs);
console.log(thisClassParagraphs[0], thisClassParagraphs[1]);

let queryId = document.querySelector('#thisParagraph');
console.log(queryId);

let paragraphArray = document.querySelectorAll('.thisParagraphClass');

for (let i = 0; i < paragraphArray.length; i++) {
  paragraphArray[i].style.background = 'lightblue';
}
// thisParagraph.style.background = "blue";
let div = document.querySelector('div');
console.log(thisParagraph.parentElement);

let img = document.querySelector('img');
img.setAttribute("alt", "Pretty dog!");
img.setAttribute("src", "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn");

let newNode = document.createElement('h1');
newNode.innerHTML = img.hasAttribute("alt") 
  ? img.getAttribute("alt")
  : "Cat";
console.log(newNode);

div.insertBefore(newNode, paragraphArray[0]);

//img.removeAttribute("src");

let paragraphToRemove = document.querySelector('.removeMe');
let paragraphToRemoveParent = paragraphToRemove.parentElement;
// paragraphToRemove.parentElement.removeChild(paragraphToRemove);
let removedElement = paragraphToRemoveParent.removeChild(paragraphToRemove);

document.querySelector('div').append(removedElement);

//appendChild 
// removeChild





