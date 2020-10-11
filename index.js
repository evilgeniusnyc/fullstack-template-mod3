
const regionsURL = 'http://localhost:3000/regions'
const regionList = document.getElementById("list")
const showPanel = document.getElementById("show-panel")
const selectId = document.getElementById("countries")
const formFunFact = document.getElementById("form-funfact")

// console.log(formFunFact)
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
        selectId.innerHTML = " "
            region.countries.forEach(country => {
                displayCountry(country, regionLi)
                //console.log(regionLi)
                makeOption(country)
            })
        })
}  
// end of show region function 
        // Options for form
const makeOption = (country) => {
  let countryElement = document.createElement("option")
  countryElement.innerText = country.name
  countryElement.value = country.id
  selectId.append(countryElement)
}

//  function to display countries below

let displayCountry = (country, regionLi) => {
  // console.log(country.fun_facts)
      let countryLi = document.createElement("li")
      countryLi.innerText = country.name
      let img = document.createElement("img")
      img.src = country.flag
      // let funFactDiv = document.createElement("div")
      country.fun_facts.forEach(fun_fact => {    // THIS LINE IS CAUSING ALL THE PROBLEMS!
        let funFactDiv = document.createElement("div")
        funFactDiv.innerText = fun_fact.first
        countryLi.append(funFactDiv)
          createFunFact(funFactDiv)   // SHOULDN'T CALL THE FUNCTION HERE!!
        })
        regionLi.append(countryLi, img)   
  }

  let createFunFact = (funFactDiv) => {
    formFunFact.addEventListener('submit', (event) => {
    event.preventDefault()
    let firstFunFact = event.target[0].value
    let countryId = event.target[1].value 
      fetch("http://localhost:3000/fun_facts", {
        method: "POST", 
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          first: firstFunFact, 
          second: "", 
          third: "", 
          country_id: countryId
        })
      })
      .then(resp => 
        resp.json())
      .then(funFact => {
        funFactDiv.innerText = funFact.first
console.log(funFact)
      })
  // console.log("hello!")
    })

  }

  


 



//     const submitval = $(this).val()
//     alert (submitval)
  // event.target.countries.value
  // let funFactContent = inputField.value }

  // let form = document.getElementById("form-for") 
  // submitForm = selectId.add 
