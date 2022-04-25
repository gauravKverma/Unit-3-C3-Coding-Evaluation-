// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount=JSON.parse(localStorage.getItem("amount"));
console.log('amount:', amount)

document.querySelector("#wallet").innerText=amount

let movie=JSON.parse(localStorage.getItem("movie"))

        let div=document.createElement("div");
        div.setAttribute("id","box");

        let img=document.createElement("img");
        img.src=movie.Poster;

        let h2=document.createElement("h2");
        h2.innerText=movie.Title;

        div.append(h2,img);

        document.querySelector("#movie").append(div);

const confirm = () => {
    let n=document.querySelector("#number_of_seats").value;
    console.log(n)
    if(n*100>amount)
    {
        alert("Insufficient Balance!")
    }
    else
    {
        alert("Booking successfull!")
        amount=amount-(n*100);
        console.log(amount)
        localStorage.setItem("amount",JSON.stringify(amount));
        document.querySelector("#wallet").innerText=="";
        document.querySelector("#wallet").innerText=amount;
    }
}        
