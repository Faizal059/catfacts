async function apicall(){
    let data=await fetch('https://meowfacts.herokuapp.com/');
    let finaldata=await data.json()
    let ultimatedata=finaldata.data[0];
    document.getElementById('finalfact').innerText=ultimatedata
} 