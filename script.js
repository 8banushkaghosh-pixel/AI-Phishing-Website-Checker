 function checkURL(){

let url=document.getElementById("urlInput").value;

let result=document.getElementById("result");

if(url==""){
    result.innerHTML="Please enter a URL";
    result.style.color="orange";
    return;
}

let suspicious=0;

// IP Address
if(/\d+\.\d+\.\d+\.\d+/.test(url))
    suspicious++;

// @ Symbol
if(url.includes("@"))
    suspicious++;

// Too many hyphens
if((url.match(/-/g)||[]).length>2)
    suspicious++;

// Long URL
if(url.length>75)
    suspicious++;

// HTTPS check
if(!url.startsWith("https://"))
    suspicious++;

if(suspicious>=3){
    result.innerHTML="⚠️ High Risk - Possible Phishing Website";
    result.style.color="red";
}
else if(suspicious>=1){
    result.innerHTML="⚠️ Suspicious Website";
    result.style.color="orange";
}
else{
    result.innerHTML="✅ Looks Safe";
    result.style.color="green";
}
}
