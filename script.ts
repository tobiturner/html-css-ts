//Removes the cannot redeclare block element...
export {};
// Not adding this here, move to the other website, commit afterwards

// not required optional uses ? (when hovering the function)

//Console is the only way to see javascript and to see what is working

//prompt("hi");
// document is an object with methods and properties
// functions are block scope I think

console.log(document.getElementsByClassName("buy-button"));

let purchaseButtons2 = document.getElementsByClassName("buy-button");

console.log(purchaseButtons2[0]);
console.log(purchaseButtons2[1]);

purchaseButtons2[0].addEventListener("click", () => {
    alert("Addedto cart");
});