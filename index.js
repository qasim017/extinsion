//function getFirst(arr ){
   
    // return arr[0]
    
    // }
    
    // let firstCard = getFirst([10,2,5])
    // console.log(firstCard)
    
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("dlt-btn")
const leadsFormLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("save-btn")
console.log(leadsFormLocalStorage)
if (leadsFormLocalStorage){
    myLeads = leadsFormLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click",function(){
  chrome.tabs.query({active: true,currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
  })
})
function render(leads) {
    let listItem = ""
    for (let i = 0; i < leads.length; i++) {
        listItem += `<li>
    <a target ='_blank' href ='${leads[i]}'> 
     ${leads[i]}  
     </a>
    </li> `
    }
    ulEl.innerHTML = listItem
}
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads =[]
    render(myLeads)
})
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})

