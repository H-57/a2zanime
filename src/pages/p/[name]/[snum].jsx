import VideoCards from "../../../components/VideoCards";
import {useState,useEffect} from 'react'
import Head from "next/head";







export async function getStaticPaths() {
 
    
  
  let Aname=await (
    await fetch(`${process.env.API_URL}/.json`)
  ).json();                //fetch data present in database 
  
  Aname=Object.keys(Aname)   //convert object into keys array
  let paths = [];

// console.log(Aname)
for(let i=0;i<Aname.length;i++){ //for loop for formed path for each anime for its all seasons

  const data = await (
    await fetch(`${process.env.API_URL}/${Aname[i]}/season.json`)
  ).json();                   //fetch data for present particular anime all seasons data 

  const newPaths  = data.map((elem,index) => {      //return s complete path for static pages
    
    return {
      params: {name: (Aname[i]).toString(),
        snum: ("season"+(index+1)).toString(),
      }
    };
  
  })
  
  paths = paths.concat(newPaths); //add path of all anime seasons and append next anime path data 
  
}

return { paths,
 fallback: false }
}

  
 


export const getStaticProps = async (context) => {
    const Season=context.params.snum //variable for store season no
    const AnimeName=context.params.name// var for store anime name 

    // console.log(AnimeName)
      let res = await fetch(
        `${process.env.API_URL}/${AnimeName}/${Season}.json`//fetch data for a particular anime and its season number
      );
      let lo3 =await fetch(`${process.env.API_URL}/${AnimeName}/${Season}ep.json`)
      const lo1data=await lo3.json();

      const data = await res.json();
      return {
        props: {
          data,
          lo1data,
        },
      };
    };
    
    function AnimeName({data,lo1data}) {
      let lo1=lo1data.server1;
      let SERVER1=lo1data.server1;
      let SERVER2=lo1data.server2;
      let SERVER3=lo1data.server3;
      let SERVER4=lo1data.server4;
      let SERVER5=lo1data.server5;
     




     
const [iframe, setiframe] = useState(lo1[0])
const [videoNumber, setvideoNumber] = useState(1)
const [Server, setServer] = useState(SERVER1)
   
      const print=(no)=>{

        setvideoNumber(parseInt(no.current.id));
      console.log(no.current.id)

      }
   
useEffect(() => {


  
  document.getElementsByClassName('card')[videoNumber-1].classList.add('check')
}, [])

      
const handelBack=()=>{
  if(videoNumber>=2){
    let lielm=document.getElementsByClassName('check')
    // console.log(lielm)
    Array.from(lielm).forEach((element) => {                //travel all card and remove check class
      element.classList.remove('check')})
      console.log(videoNumber);
      setvideoNumber(videoNumber-1)
      setiframe(Server[(videoNumber-2)])
      console.log(videoNumber);
document.getElementsByClassName('card')[videoNumber-2].classList.add('check')
  }
}
const handelNext=()=>{
  if(videoNumber!=data.length){
    let lielm=document.getElementsByClassName('check')
    // console.log(lielm)
        Array.from(lielm).forEach((element) => {                //travel all card and remove check class
            element.classList.remove('check')})
            setiframe(Server[(videoNumber)])
            setvideoNumber(videoNumber+1)
    document.getElementsByClassName('card')[videoNumber].classList.add('check')
    console.log(videoNumber);
  }
} 

       



        
          return (
            <>
              <Head>
                <title>Pokemon Season 01 Indigo League All Episodes Download In Hindi </title>
                <meta name="description" content="Pokemon Indigo League in Hindi, Pokemon Season - 01 in Hindi, Pokemon Season 01 hindi, Pokemon Hindi Episodes, Pokemon Indigo League Episodes in Hindi English"/>
                  <meta name="keywords" content="all anime videos,video,pokemon"/>
              </Head>
              <h1>
Pokemon Season 01 Indigo League All Episodes Download In Hindi In 720P, 1080P</h1>
          <div style={{height: "400px"}}><iframe style={{height: "400px",width:"70%"}} allowFullScreen={true} frameBorder={0}  id="myFrame"
                src={iframe}
                
                width="100%"></iframe></div>
                
      <div className="conbtn">

        <button onClick={handelBack}  className="btn " >back</button>
        <button onClick={handelNext} className="btn ">next</button>
      </div>
      <div id="episodeno" >Episode {videoNumber}</div>
<div className="server conbtn">
  <button className="btn " onClick={()=>{setServer(SERVER1);setiframe(Server[(videoNumber)]); console.log(Server)}}>server 1</button>
 
  <button className="btn " onClick={(videoNumber)=>{setServer(SERVER2); setiframe(Server[(videoNumber)]); console.log(Server,iframe)}}>server 2</button>
  <button className="btn " onClick={()=>{setServer(SERVER3);setiframe(Server[(videoNumber)]); console.log(Server)}}>server 3</button>
  <button className="btn " onClick={()=>{setServer(SERVER4);setiframe(Server[(videoNumber)]); console.log(Server)}}>server 4</button>
  <button className="btn " onClick={()=>{setServer(SERVER5);setiframe(Server[(videoNumber)]); console.log(Server)}}>server 5</button>
</div>

      <h2>It’s Ash Ketchum’s tenth birthday, and he’s ready to do what many 10-year-olds in the Kanto region set out to do—become a Pokémon Trainer! Things don’t go exactly the way he planned when he ends up with a Pikachu instead of a standard first Pokémon, and winning Gym Badges turns out to be much tougher than he thought. Luckily he’s got former Gym Leaders Brock and Misty at his side, along with a bevy of new Pokémon friends, including Bulbasaur, Squirtle, and Charmander.</h2>
             
             
             
              <ul id="video" className="video">

                {data.map((elem, index) => {
                  return <VideoCards setiframe={setiframe} print={print}  lo1={Server}   key={index} title={elem.title} image={elem.image} number={index} />;
                })}
              </ul>
             <style jsx>{`
        
        
        /* for ul list store all video cards */
        .video {
        
            display: flex;
            flex-wrap: wrap;
          
            row-gap: 20px;
            column-gap: 40px;
        }
        
        
        
        
        .conbtn {
            margin: auto;
            width: 18rem;
            display: flex;
            justify-content: space-between;
            margin-bottom:30px;
        }
        
        .btn {
            
            width: 7rem;
            height: 3rem;
            background: linear-gradient(to bottom right, #380036, #0CBABA, #7F5A83);
            border-radius: 25px;
            color: #e60000;
            font-size: 2rem;
            text-shadow: 0px 0px 10px red, 0px 0px 20px red, 0px 0px 30px red;
            border: none;
            cursor: pointer;
            margin-top: 14px;
        }
        
        
        
        `}</style>
            </>
          );
        
        
        
        
        }
        
        export default AnimeName;
