// // function saveLead(){
// //   console.log("Button Clicked!!")
// // }
// let myLeads =[]
// let oldLeads =[]
// // JSON.parse(value) used to convert strings to array
// //JSON.stringify(variable) used to convert array to string

// const inputEl =document.getElementById("input-el")
// const inputBtn =document.getElementById("input-btn")
// const ulEl =document.getElementById("ul-el")
// const deleteBtn =document.getElementById("delete-btn")
// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// const tabBtn = document.getElementById("tab-btn")
// // console.log(leadsFromLocalStorage)
// if(leadsFromLocalStorage){
//   myLeads = leadsFromLocalStorage
//   render(myLeads)
// }

// tabBtn.addEventListener("click",function(){
//   chrome.tabs.query({active: true, currentWindow: true},function(tabs){
    
//     // console.log(tabs[0].URL)
//     myLeads.push(tabs[0].Url)
//   localStorage.setItem("myLeads",JSON.stringify(myLeads))
//   render(myLeads)
//   })
//   })
// function render(leads){
//   let listItems = ""
//   for(let i=0;i<leads.length;i++)
//   {
//     //listItems+="<li><a target = '_blank' href = '" + leads[i]+"'>"+ leads[i] + "</a></li>"
//     listItems +=`
//     <li>
//          <a target = '_blank' href = '${leads[i]}'>  ${leads[i]} 
//          </a>
//     </li>
//     `
//     // ulEl.innerHTML+="<li>"+ leads[i]+"</>"
//     //---alternate---
//     //create element
//     //set text content
//     // append to ul
//   //  const li = document.createElement("li")
//     //  li.textContent = leads[i]
//     //  ulEl.append(li)
//   }
//   //innerHTML parses the html in a sentence
//   ulEl.innerHTML=listItems
//   }
//  deleteBtn.addEventListener("click",function(){
//   //  console.log("double clicked!")
//    localStorage.clear()
//    myLeads =[]
//    render(myLeads)
//  })

// inputBtn.addEventListener("click",function(){
// myLeads.push(inputEl.value)
// inputEl.value = null
// localStorage.setItem("myLeads",JSON.stringify(myLeads))
// console.log(localStorage.getItem("myLeads"))
// render(myLeads)
// } )

// // falsy values
// // false
// // 0
// // NaN
// // undefined --> how javascript signalize emptiness
// // ""
// // null   ->how you as amdeveloper signalize emptiness
// // to check truFalse
// // let trueOrFalse = Boolean("")
// // console.log(trueOrFalse)



let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})