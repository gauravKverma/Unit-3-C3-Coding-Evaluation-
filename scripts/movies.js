// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amount=JSON.parse(localStorage.getItem("amount"));

document.querySelector("#wallet").innerText=amount


console.log('amount:', amount)

const searchMovies= async () => {
    try
    {
    document.querySelector("#movies").innerHTML="";
    let title=document.querySelector("#search").value
    let movies= await fetch(`https://www.omdbapi.com/?s=${title}&apikey=7a4c3726`)
    let data=await movies.json();

    let movie=data.Search;
    console.log('movie:', movie)

    movie.map(function (ele){
        let div=document.createElement("div");
        div.setAttribute("id","box");

        let img=document.createElement("img");
        img.src=ele.Poster;

        let h3=document.createElement("h3");
        h3.innerText=ele.Title;

        let button=document.createElement("button");
        button.setAttribute("class", "book_now")
        button.innerText="Book Now";
        button.onclick = function (){
            checkout(ele);
        }

        div.append(img,h3,button);

        document.querySelector("#movies").append(div);
    })
    
    }
    catch(err){
        console.log(err);
    }
    // console.log('data:', data)

}
let id;
const debounce = () => {
    if(id)
    {
        clearTimeout(id);
    }
    id=setTimeout(function (){
        searchMovies();
    },1000);
}

function checkout(ele){
    window.location.href="checkout.html"
    localStorage.setItem("movie", JSON.stringify(ele));

}
