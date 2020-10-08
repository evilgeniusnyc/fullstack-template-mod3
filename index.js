// // long in form 
// const attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){
// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
// if ( username == "Formget" && password == "formget#123"){
// alert ("Welcome to Geography Nerd!");
// window.location = "success.html"; // Redirecting to other page.
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }


const regionsURL = 'http://localhost:3000/regions'
const regionList = document.getElementById("list")
const showPanel = document.getElementById("show-panel")
const countryURL = ('http://localhost:3000/countries')
const funFactURL = ('http://localhost:3000/fun_facts')

// console.log(regionList)

fetch(`http://localhost:3000/regions`) 
.then(response => response.json())
.then(regionsArray => {
 regionsArray.forEach(region => {
    showRegion(region)  // invoke function showRegion - passing 'element' as argument in (parameter in line 17)
 });
})

const showRegion = (region) => {
        let regionLi = document.createElement("li")
        regionLi.innerText = region.name
        // console.log(regionLi)
        regionList.append(regionLi)
        // adding event listener
        regionLi.addEventListener('click',(event) => {
            //console.log("hello")  -> clicking on region name shows countries array
        //console.log(region.countries)
            region.countries.forEach(country => {
                displayCountry(country, regionLi)
                //console.log(regionLi)

            })
        })

}  // end of show region function 

// create a function to display countries 

let displayCountry = (country, regionLi) => {
console.log(country)
    let countryLi = document.createElement("li")
    countryLi.innerText = country.name
    let img = document.createElement("img")
    img.src = country.flag
    regionLi.append(countryLi, img)

}

// need to create function to create fun_facts through Patch


function fetchCountry(){
    return fetch(countryURL)
    .then(response => response.json())
}

document.addEventListener('DOMcontentLoaded', () => {
fetchCountries()
.then(results => console.log(results))

})
// should include fun facts based on countries controller
        // def index 
        // countries = Countries.all
        //render json: ... , include: :fun_facts
        //end

function addANewFunFact(event) {
    const countryId = event.target.dataset.countryId
    data = { country_id: countryId}
  
    fetch(funFactURL, {
      method: 'POST',
      headers:  {
        "Content-Type": "full_stack/json",
        "Accept": "full_stack/json"
        // is the above syntax right?
      },
      body: JSON.stringify(data)
        .then(response => response.json())
        .then(result => console.log(result))
    })
  };
// let displayFact = (funFact, countryLi) => {
//     console.log(funFact)
//     let funFactLi = documentElement("li")
//     funFactLi.innerText = funFact.first
//     countryLi.append(funFactLi)
// }
