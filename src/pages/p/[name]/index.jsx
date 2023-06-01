import SeasonCards from "../../../components/seasonCards";
import Link from "next/link";
import {useRouter} from "next/router";
import Head from "next/head";


export async function getStaticPaths() {
 
    
  let data = await (
    await fetch(`${process.env.API_URL}/anime/.json`)).json();      //get data for exists all animes                                     
  data=Object.keys(data)
  
  const paths = data.map((elem) => {                //return present anime pages
    return {
      params: {
        name:(elem).toString(),
      },
    };
  });
  return {
     
    paths,
    
    fallback: false, 

  }
}

export const getStaticProps = async (context) => {
    const name=context.params.name
    console.log(name)
      let res = await fetch(
        `${process.env.API_URL}/anime/${name}/season.json` //get data for present animes and thir seasons and show all season cards
      );
      const data = await res.json();
      return {
        props: {
          data,
        },
      };
    };
    
    function AnimeName({data}) {
      const router = useRouter()
     

          
        
        
          return (
            <>
           <Head>
           <title>Azanime - Best Source For Hindi Anime &amp; Cartoons</title>

<meta name="description" content="Best Source For Hindi Anime &amp; Cartoons" />
        <meta name="keywords" content="all anime videos,video,pokemon" />
        
      </Head>
             
              <ul id="video" className="video">
                {data.map((elem, index) => {
                  
                  return <li key={index}><Link  href={`/p/${router.query.name}/season${index+1}`}> 
                  <SeasonCards   title={elem.title} image={elem.image}  />
                  </Link>
                  </li>
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
        
        
        
        `}</style>
            </>
          );
        
        
        
        
        }
        
        export default AnimeName;
