
import SeasonCards from "../../../components/seasonCards";
import Link from "next/link";
import { useEffect } from "react";
import Router from "next/router";







export const getServerSideProps = async (context) => {
  const name = context.params.name;

  try {
    let data = await (await fetch(
      `${process.env.API_URL}/movie/${name}/movieCards.json`
    )).json();

    if (data === null) {
      return {
        props: {
          data: null,
          error: true,
        },
      };
    }

    return {
      props: {
        data, // Move 'data' property under 'props' key
        error: false, // Make sure 'error' property is nested under 'props' key
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
        error: true,
      },
    };
  }
};

function AnimeName({ data ,error}) {
  // console.log(error,data)
  useEffect(() => {
    if(error){

     
      Router.push("/")
    }
 
  }, [])
  
  

 




  return (
    <>


      <ul id="video" className="video">
        {data?.map((elem, index) => {

          return <Link key={index} href={elem.url}>
            <SeasonCards title={elem.title} image={elem.image} />
          </Link>
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
