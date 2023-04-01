export default async function handler(req, res) {
// console.log(req)


  
     let   data=await fetch("https://hacker57.netlify.app/src/api/pokemon/pkmns1.json");
    //  let resp=await JSON.parse(data);
    //  let orgdata=await JSON.stringify(resp)


        res.send(data)
    
}