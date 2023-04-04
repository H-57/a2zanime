import VideoCards from "../../../components/VideoCards";
import {useState,useRef} from 'react'
import Head from "next/head";






export async function getStaticPaths() {
 
    
  
  let Aname=await (
    await fetch(`${process.env.API_URL}/.json`)
  ).json();
  
  Aname=Object.keys(Aname)
  let paths = [];

// console.log(Aname)
for(let i=0;i<Aname.length;i++){

  const data = await (
    await fetch(`${process.env.API_URL}/${Aname[i]}/season.json`)
  ).json();

  const newPaths  = data.map((elem,index) => {
    
    return {
      params: {name: (Aname[i]).toString(),
        snum: ("season"+(index+1)).toString(),
      }
    };
  
  })
  
  paths = paths.concat(newPaths);
  
}

return { paths,
 fallback: false }
}

  
 


export const getStaticProps = async (context) => {
    const Season=context.params.snum
    const AnimeName=context.params.name

    console.log(AnimeName)
      let res = await fetch(
        `${process.env.API_URL}/${AnimeName}/${Season}.json`
      );
      const data = await res.json();
      return {
        props: {
          data,
        },
      };
    };
    
    function AnimeName({data}) {
      


      let videonumber=0;
      const print=(no)=>{
      videonumber=no
      console.log(videonumber)
      }
   



const handelBack=()=>{
  if(videonumber!=0){
    document.getElementById("myFrame").setAttribute("src",  "https://www.short.ink/"+lo1[(videonumber)-1])
  }
}
const handelNext=()=>{
  if(videonumber!=data.length){
    document.getElementById("myFrame").setAttribute("src",  "https://www.short.ink/"+lo1[(videonumber)-1])
  }
}
 let lo1 = ["OINV7mrQTL8", "EFFqX4ot0h4", "kaNOVzly9iF", "g1jjiLoTmst", "GYS96P7BcnU", "qlMR0236gRP", "UltbgrZJHIr", "ljhWOYwBmIh", "8TI7tCNdPTB", "iMhB7DCyFvh", "roW6AK8YN8Y", "HOGf0NCZcrO", "LcHzYWe1j1M", "hEay3avgSIE", "sRMjt39gE8j", "8pIZydnDbDs", "8P8aag0EKxs", "FqXIqi3j5g5", "KEaamCSIzwj", "7XC8t9dtpyQ", "MzKXioJTo1z", "XU2PP9yp3Ht", "ABgHHogz6yr", "vcuxjkHllyZ", "oC2aZjnWNhO", "0SlkZwahbcP", "4f63iNC8JQF", "aLKlVD5qLPK", "zSO9VBUeemW", "2SsfadPESUa", "CwyeMsoBXUt", "tvaBp5xRAqv", "cKPVKa9T1TK", "fEXj5jsaPA6", "zfbhUne9RnD", "0juMi5ANesS", "nU0eHhrJ44B", "W2s5lK3GqZA", "sXds4DKAK7L", "D57HCLzCAum", "CIvnNZudEnB", "P0x0GAEWTvL", "0qEGbr3Mb94", "VCQByFAeLtX", "fa8zwHBOnvQ", "sST4zvwpjjj", "0YBV3Nrnadl", "OlSyp2TUwjn", "3uG7UuaHSTC", "5LUvacvZnR9", "y6bs43tcrYv", "l14PWfAgeNF", "Mag2xK0uobv", "RtXBWpre4Q0", "21gQLSPailu", "hyRrV963Lhh", "OdBryzjecsa", "ephfWFPshFc", "WWlR7lFT3rZ", "j4HlImLOvXs", "tEqCOUT2YDf", "w1AueDv5QuK", "tVc2Rn2MK42", "T1EZH1L8uBd", "MkybF6YFx3w", "OnV44oPSa0K", "PIFibGlq70p", "htdiVQ6PLgy", "3pGwdO8LAXn", "wqqMu5KUPFW", "XwZ5Z6s1BV8", "AYbxDO2Po97", "QIaneTQSHs3", "oqPPq03osmW", "NDJfm9iqdKV", "44wiCWCCEaZ", "8Sa4WJIybIh", "5iaoSkzqZ9M",];
       
        //refferancwe for the li cards access  id no

        


        
          return (
            <>
              <Head>
                <title>Pokemon Season 01 Indigo League All Episodes Download In Hindi </title>
                <meta name="description" content="Pokemon Indigo League in Hindi, Pokemon Season - 01 in Hindi, Pokemon Season 01 hindi, Pokemon Hindi Episodes, Pokemon Indigo League Episodes in Hindi English"/>
                  <meta name="keywords" content="all anime videos,video,pokemon"/>
              </Head>
              <h1>
Pokemon Season 01 Indigo League All Episodes Download In Hindi In 720P, 1080P</h1>
          <div style={{height: "400px"}}><iframe style={{height: "400px"}} allowFullScreen={true} frameBorder={0}  id="myFrame"
                src={`https://www.short.ink/OINV7mrQTL8`}
                
                width="100%"></iframe></div>
                
      <div className="conbtn">

        <button onClick={handelBack}  className="btn " >back</button>
        <button onClick={handelNext} className="btn ">next</button>
      </div>
      <h2>It’s Ash Ketchum’s tenth birthday, and he’s ready to do what many 10-year-olds in the Kanto region set out to do—become a Pokémon Trainer! Things don’t go exactly the way he planned when he ends up with a Pikachu instead of a standard first Pokémon, and winning Gym Badges turns out to be much tougher than he thought. Luckily he’s got former Gym Leaders Brock and Misty at his side, along with a bevy of new Pokémon friends, including Bulbasaur, Squirtle, and Charmander.</h2>
             
             
             
              <ul id="video" className="video">

                {data.map((elem, index) => {
                  return <VideoCards print={print}  lo1={lo1}   key={index} title={elem.title} image={elem.image} number={index} />;
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
