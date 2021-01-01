//edit your code 
fetch('http://localhost:3000/user?name="Noor"',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})


fetch('http://localhost:3000/user/Noor',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
    body: 
    JSON.stringify({massage: "hello everyone", name: 'Noor'}),
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})


fetch('http://localhost:3000/user/Noor',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})