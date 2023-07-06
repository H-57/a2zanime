
import SeasonCards from "../../../components/seasonCards";
import Link from "next/link";




export async function getStaticPaths() {


  let data = await (
    await fetch(`${process.env.API_URL}/movie/.json`)).json();      //get data for exists all animes                                     
  data = Object.keys(data)

  const paths = data.map((elem) => {                //return present anime pages
    return {
      params: {
        name: (elem).toString(),
      },
    };
  });
  return {

    paths,

    fallback: false,

  }
}


export const getStaticProps = async (context) => {
  const name = context.params.name
  console.log(name)
  let data = await (await fetch(
    `${process.env.API_URL}/movie/${name}/movie.json` //get data for present animes and thir seasons and show all season cards
  )).json();

  return {
    props: {
      data,
    },
  };
};

function AnimeName({ data }) {






  return (
    <>


      <ul id="video" className="video">
        {data.map((elem, index) => {

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
