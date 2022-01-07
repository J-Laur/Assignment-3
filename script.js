//1) Select the section with an id of container without using querySelector.
const cont = document.getElementById("container");
console.log(cont);


//2) Select the section with an id of container using querySelector.
const contQuery = document.querySelector("container");
console.log(contQuery);


//3) Select all of the list items with a class of "second".
const sec = document.getElementsByClassName("second");
console.log(sec);


//4) Select a list item with a class of third, but only the list item inside of the ol tag.
const class3 = document.querySelector("ol.third");
console.log(class3);

//5) Give the section with an id of container the text "Hello!".
const text = document.getElementsById("container").innerText = "Hello world!";
console.log(text);

//6) Add the class main to the div with a class of footer.
const foot = document.querySelector(".footer"); 
foot.classList.add("main"); 
console.log(foot); 

//7) Remove the class main on the div with a class of footer.
foot.classList.remove("main");
console.log(foot);

//8) Create a new li element.
const newLi = document.createElement("li");
console.log(newLi);


//9) Give the li the text "four".
newLi.innerText("four");
console.log(newLi);

//10) Append the li to the ul element.
const appendElement = document.querySelector("ul");
console.log(appendElement.appendChild(newLi));

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const loop = document.querySelectorAll("ol li");
for(let i = 0 ; i < loop.length; i++) { 
    loop[i].style.backgroundColor = "green"; 
}

//13) Remove the div with a class of footer.
const divRemove = document.querySelector(".footer");
console.log(divRemove.remove()); 