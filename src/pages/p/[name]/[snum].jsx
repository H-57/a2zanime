import VideoCards from "../../../components/VideoCards";
import {useState} from 'react'
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
      const[video,setvideo]=useState("OINV7mrQTL8");
const [vid, setvid] = useState(0)


let t=5;
const handelBack=()=>{
  if(video!=0){
    setvideo(lo1[t--])
  }
}
const handelNext=()=>{
  if(video!=data.length){
    setvideo(lo1[t++])
  }
}
      

        var lo1 = ["OINV7mrQTL8", "EFFqX4ot0h4", "kaNOVzly9iF", "g1jjiLoTmst", "GYS96P7BcnU", "qlMR0236gRP", "UltbgrZJHIr", "ljhWOYwBmIh", "8TI7tCNdPTB", "iMhB7DCyFvh", "roW6AK8YN8Y", "HOGf0NCZcrO", "LcHzYWe1j1M", "hEay3avgSIE", "sRMjt39gE8j", "8pIZydnDbDs", "8P8aag0EKxs", "FqXIqi3j5g5", "KEaamCSIzwj", "7XC8t9dtpyQ", "MzKXioJTo1z", "XU2PP9yp3Ht", "ABgHHogz6yr", "vcuxjkHllyZ", "oC2aZjnWNhO", "0SlkZwahbcP", "4f63iNC8JQF", "aLKlVD5qLPK", "zSO9VBUeemW", "2SsfadPESUa", "CwyeMsoBXUt", "tvaBp5xRAqv", "cKPVKa9T1TK", "fEXj5jsaPA6", "zfbhUne9RnD", "0juMi5ANesS", "nU0eHhrJ44B", "W2s5lK3GqZA", "sXds4DKAK7L", "D57HCLzCAum", "CIvnNZudEnB", "P0x0GAEWTvL", "0qEGbr3Mb94", "VCQByFAeLtX", "fa8zwHBOnvQ", "sST4zvwpjjj", "0YBV3Nrnadl", "OlSyp2TUwjn", "3uG7UuaHSTC", "5LUvacvZnR9", "y6bs43tcrYv", "l14PWfAgeNF", "Mag2xK0uobv", "RtXBWpre4Q0", "21gQLSPailu", "hyRrV963Lhh", "OdBryzjecsa", "ephfWFPshFc", "WWlR7lFT3rZ", "j4HlImLOvXs", "tEqCOUT2YDf", "w1AueDv5QuK", "tVc2Rn2MK42", "T1EZH1L8uBd", "MkybF6YFx3w", "OnV44oPSa0K", "PIFibGlq70p", "htdiVQ6PLgy", "3pGwdO8LAXn", "wqqMu5KUPFW", "XwZ5Z6s1BV8", "AYbxDO2Po97", "QIaneTQSHs3", "oqPPq03osmW", "NDJfm9iqdKV", "44wiCWCCEaZ", "8Sa4WJIybIh", "5iaoSkzqZ9M", "n9JZrRXPpZG72", "9dbmXv5n1QyEO", "q3LmYn3aEAENw", "r6qQNRg3YQX7w", "3YMmkeP79QByv", "8zWZ76Mw6Q6L4", "JdpmLRN5LQe7K", "LznARvp4WA6xd", "3YMmkePV9QByv", "w1ymMv3O7AJrb", "gLeZy5k0YZrKN", "n9JZrRXdpZG72", "Lo2Q8YrD6ZqY5", "74GA0GbX4mYBk", "9dbmXv511QyEO", "apwQE1o3LQPKe", "zKWm6rx5om85P", "ExamD4NypmR8M", "bNPm3lzjvAKWe", "74GA0GbN4mYBk", "k4rZeDY1dQjdb", "dwPAVvBPPAR09", "dloAB3nMaQzRJ", "YnqAK2Lgwm2PJ", "k4rZeDY1qQjdb", "9B6Z4lNVrZJGj", "ExamD4N32mR8M", "n9JZrRXJyZG72", "ExamD4NdpmR8M", "3YMmkeP7qQByv", "vGqm2lKk2QenO", "6k9Qg6kvpAvxa", "r6qQNRgPlQX7w", "5MVQGa08vmEPj", "dloAB3nMjQzRJ", "n9JZrRX1yZG72", "2KGZ9L69YQ4Bn", "q3LmYn3qEAENw", "dwPAVvBKJAR09", "P0RQwaYVomG34", "6RbAxgXwqmEvV", "Ng9QnxnJ7mVKb", "lWJQjkXEXZdXn", "RaqAlVXqOZbXp", "72lQbvkELQe9G", "RkaA5Dg4nmVnp", "8bMZJJdRXZvOa", "aRvmOGPpBmkGE", "zKWm6rxP4m85P", "dwPAVvBOJAR09", "pnXQpBNyRmqeE", "dwPAVvBOPAR09", "zKWm6rxa4m85P", "76VAqNV4yQoqy", "ExamD4Nn2mR8M", "LjKAWvy52mEBM", "74GA0GbRRmYBk", "YnqAK2Lnwm2PJ", "e9BZaO9XKAwXx", "RaqAlVX4OZbXp", "apwQE1oz8QPKe", "8zWZ76MpOQ6L4", "9B6Z4lNwrZJGj", "goVAd8Vy9AJnE", "bNPm3lzWqAKWe", "9dbmXv51YQyEO", "8bMZJJdKXZvOa", "JdpmLRN0LQe7K", "GbJQPvqnom7rw", "r6qQNRgKlQX7w", "RkaA5DgwnmVnp", "5MVQGa0NvmEPj", "6k9Qg6kKpAvxa", "8ogAvEXNymGMD", "8zWZ76MzOQ6L4", "72lQbvk8LQe9G", "goVAd8Vg9AJnE", "5YRQoKyJMQ0aN", "gQwu3dLi-J", "szSArMgNv", "M9SWB14Ew", "TtDTwl_FJ", "Dx8NBCVoN", "rXXN3-EN_", "h28_2w8w2", "aC-kicZaHW", "3LJY0kl_9", "iZ-R4eQRZ", "emrXFN9Iz", "QEbSk-S0d", "Bu0mJL3jv", "cewXsYFww", "LYeX3G-ve", "uGrQWy1Vu", "vbS1YPw-N", "zLUuVhRAd", "Erwm-AJLHx", "F1si2r8vK", "vaHlPYEIV", "FyGoUlGzQ", "768bmmOjW", "cHHonbVWZ", "a41olYHj4", "_yYFOi4h7", "0baQE4XVP", "pgAGNkv2d", "uOtXDr7MV", "_F339oZ_W", "s2G40Jn_J", "fkVUUS5-yW", "OwE67AglB", "jGlBux3f9", "SX946Od3S", "kEBcDC4Mc", "JwhtNEbtL", "qz-WRvzyR", "YnpOWMh4F", "igr8YiY__", "KPULn8VIU", "8bwL7Wujr", "4-wGycDc5", "uU3mWMnyx", "sDhhymbG3", "leBOxc7P4", "RJkdsOMlk", "JM7Rn5D86", "Cy6eKMSda", "2vbyfMGO5", "ktudERR10", "50oUXbnj9", "y2TkDsSK_", "DRIvX_Fza", "jDDfRqNH1", "_0JsGUXVxn", "U_oMC31g6", "KPaL9Pq91", "i1Tiq3H8p", "ZV1rhMAOy", "X5o03XBew", "Pkq_kE4gs", "9b7v_Fdaz", "Zln21936A", "xrFtG8r0_", "06pV_sKfn", "hgsGaNCFf", "8qmBuOyg3", "H6XK7Xai8", "wxUCzLVd5", "CSMAOGTGZ", "rIUHuyyS-", "bHfJDn4dS", "3xUbo4dhI", "bWV6GwRqE", "HU8iX2bYp", "9KYZkeutu", "JkNSyG-syG", "B6hfq8z1u2", "x1heqbz4ud", "54h4qaz0u1", "5bf1q6z3u8", "L1feqezfuc", "ndg6qaz3u9", "77f7qczcu5", "J7fdq7zaue", "T4f2q6z7u9", "Vcfeq7z8u3", "R7f0qdzaua", "ddg0q8z9u5", "bbg7q4zau2", "Zbfaq2zbud", "f4g3qfz0u0", "vbgbq5zfu8", "55gfq4z6ud", "10g3q9z7u1", "x3gdq4z8u4", "7ahaq3zcu6", "R1k0qfz1u2", "94icq6z1ua", "Bfidqezeu6", "D3i6q4z8u7", "H6i7q9z3u0", "h2k4q0z3u7", "Ndj1qfz7u3", "Vbj7qcz0ud", "Z3j6q3z5ua", "14k7q2zbu1", "72k6qfzaue", "3bkaqez1uc", "53kfq2zduf", "H8k4q6z4u7", "Fek2q1z1u8", "Jek8q8zeu7", "Dck8qfzau3", "Tek2q3z5u7", "Zfkbq3z3u5", "X8k1q2zbu4", "R1laq0z7u5", "n6l7q5zfuc", "jel1q0z3uf", "pbl3q6zfuf", "l6lcqcz4u8", "valfq3z9uf", "x8l0q7z6ub", "r7ldq0z2u5", "t6l0qez3u0", "1bl6qfz4uc", "53l2q6z3ub", "31lfqazbu8", "7elfq6zau3", "H0l6q6z5u4", "Lal3q9z7uf", "J1lbqfzeu0", "Dcl8q5z7uc", "X9l7q2z9uc", "Pfl7q8z9u7", "V5l1qdz9u8", "Tem5qdz5u8", "Vfm3qfz2u1", "f5m0q5z1ud", "d3mfqdzcu3", "j9m2q8z1u5", "ham7q0z3u6", "xcmdq3z4u2", "rcm2q3z1u9", "zdm9qcz0u8", "v8mbqez0u4", "D5mdq6zau3", "F9m4q8z2u4", "9cmbq9z0uc", "B5mfq7z4u3", "Rdm9q4z2uf", "Pdm4q0z0u1", "N6meq7z2ub", "L7m9q1zcu6"];
        let videoNo;
        
        
          return (
            <>
              <Head>
                <title>Pokemon Season 01 Indigo League All Episodes Download In Hindi </title>
                <meta name="description" content="Pokemon Indigo League in Hindi, Pokemon Season - 01 in Hindi, Pokemon Season 01 hindi, Pokemon Hindi Episodes, Pokemon Indigo League Episodes in Hindi English | 480p 720p 1080p"/>
                  <meta name="keywords" content="all anime videos,video,pokemon"/>
              </Head>
              <h1>
Pokemon Season 01 Indigo League All Episodes Download In Hindi In 720P, 1080P</h1>
          <div style={{height: "400px"}}><iframe style={{height: "400px"}} allowFullScreen="" frameBorder={0}  id="myFrame"
                src={`https://www.short.ink/${video}`}
                
                width="100%"></iframe></div>
                
      <div className="conbtn">

        <button onClick={handelBack}  className="btn " >back</button>
        <button onClick={handelNext} className="btn ">next</button>
      </div>
      <h2>It’s Ash Ketchum’s tenth birthday, and he’s ready to do what many 10-year-olds in the Kanto region set out to do—become a Pokémon Trainer! Things don’t go exactly the way he planned when he ends up with a Pikachu instead of a standard first Pokémon, and winning Gym Badges turns out to be much tougher than he thought. Luckily he’s got former Gym Leaders Brock and Misty at his side, along with a bevy of new Pokémon friends, including Bulbasaur, Squirtle, and Charmander.</h2>
              <ul id="video" className="video">
                {data.map((elem, index) => {
                  return <VideoCards event={(e)=>{setvideo(lo1[index]);document.getElementById("myFrame").scrollIntoView();console.log(e.this)}} key={index} title={elem.title} image={elem.image} number={index} />;
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
