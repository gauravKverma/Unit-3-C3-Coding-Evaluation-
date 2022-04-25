// Store the wallet amount to your local storage with key "amount"
let sum=0;
let amount=JSON.parse(localStorage.getItem("amount"))
const addToWallet = () =>{
    let value=document.querySelector("#amount").value;
    document.querySelector("#wallet").innerHTML=""
    document.querySelector("#amount").value="";
    // let amount=JSON.parse(localStorage.getItem("amount"))
    // if(amount==="")
    // {
    sum=Number(sum)+Number(value);
    // }
    // else
    // {
    //     sum=Number(sum)+amount;
    // }
    console.log('sum:', sum)
    // amount.push(sum);
    localStorage.setItem("amount", JSON.stringify(sum));
    // window.location.reload=localStorage.setItem("amount", JSON.stringify(amount));

    let wallet=document.querySelector("#wallet");
    wallet.innerText=sum;
}