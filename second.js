// console.log(document.querySelectorAll('p'));

// console.log(document.querySelector('.name'));

// console.log(document.querySelector('#image'));

// // document.querySelector('#para2').innerText="<h2>Saurabh</h2>";

// document.querySelector('#para2').innerHTML="<h2>Saurabh</h2>";

function changeimage(){
document.querySelector('#image').src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TqqP0vBccnKAWe8UkfwouAAAAA%26pid%3DApi&f=1";
}

// changeimage()

function getValue(){
    console.log(document.querySelector("#inp").value);
}

function changeStyle(){
    console.log("hi works")
    document.querySelector('#one').style.height="200px";
    document.querySelector('#one').style.backgroundColor="blue";

}