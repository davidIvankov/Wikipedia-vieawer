var url = "https://en.wikipedia.org/w/api.php"; 
let milorad = document.getElementById("milorad")
let input = document.getElementById("search")
let instruction = document.getElementById("instruction")
var params = {
    action: "query",
    list: "search",
    srsearch: "",
    format: "json"
};
let divs = document.querySelectorAll("div")
function divrem(){
 milorad.innerHTML=""
 
}
 function result(){
  params.srsearch = input.value
url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
  console.log(response.query.search[0].title.replace(" ", "_"))
           let length= response.query.search.length
 for(var i=0; i<length ;i++){
  const para = document.createElement("div");
para.innerHTML = `<a href="https://en.wikipedia.org/wiki/${response.query.search[i].title.replace(" ", "_")}" target="_blank"><h4>${response.query.search[i].title}</h4>${response.query.search[i].snippet}</a>`
milorad.appendChild(para);
 }
          
    })
    .catch(function(error){console.log(error);});
  
 }
document.getElementById("submit").addEventListener("click",()=>{
  if (params.srsearch === ""){
 result()
  } else{
    divrem()
    result()
  }
})

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
      if (params.srsearch === ""){
 result()
  } else{
    divrem()
    result()
  }
    }
});

document.getElementById("start").addEventListener("click", function(){
  instruction.style= "display:none"
   document.getElementById("start").style = "transform: scale(0)"
  setTimeout(function() {
  //your code to be executed after 1 second
    document.getElementById("start").style = "display:none"
}, 250);
  setTimeout(function() {
  //your code to be executed after 1 second
   
    document.getElementById("input-icons").style = "transform: scale(1)"
    document.getElementById("submit").style = "transform: scale(1)"
}, 250);
})

document.getElementById("exit").addEventListener("click", function(){
  
   divrem()
  input.value=""
    document.getElementById("input-icons").style = "transform: scale(0)"
    document.getElementById("submit").style = "transform: scale(0)"
   
  setTimeout(function() {
  //your code to be executed after 1 second
    document.getElementById("start").style = "transform: scale(1)"
}, 250);
  instruction.style = "display:block"
})
