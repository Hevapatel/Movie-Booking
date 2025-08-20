let headlines=document.getElementById('headlines')
let fetchheadlies=async function(){
    let Result= await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=3bff4938637e4e45b500d56977fe5302');
        let data=await Result.json()
        displayheadlines(data.articles);
    


}
fetchheadlies();
let displayheadlines=(data)=>{
    console.log(data)
    data.forEach(element =>{
        let subdiv=document.createElement('div')
        subdiv.style.backgroundImage=`URL(${element.urlToImage})`;
        subdiv.innerHTML=`<p>${element.title}</p>`
        headlines.appendChild(subdiv)
    })
        
    
}
let business=document.getElementById('business')
let fetchbusiness=async function(){
    let result=await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3bff4938637e4e45b500d56977fe5302')
    let data=await result.json()
    displaybusiness(data.articles)
}