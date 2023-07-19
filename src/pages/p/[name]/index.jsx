import SeasonCards from "../../../components/seasonCards";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";


export const getServerSideProps = async (context) => {
  const name = context.params.name;

  try {
    let data = await (await fetch(
      `${process.env.API_URL}/anime/${name}/season.json`
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
        data, 
        error: false, 
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

function AnimeName({ data,error }) {
  const router = useRouter();

  useEffect(() => {
    if(error){

     
      router.push("/")
    }
 
  }, [])

  return (
    <>
      <Head>
        <title>Azanime - Best Source For Hindi Anime &amp; Cartoons</title>

        <meta
          name="description"
          content="Best Source For Hindi Anime &amp; Cartoons"
        />
        <meta name="keywords" content="all anime videos,video,pokemon" />
      </Head>

      <ul id="video" className="video">
        {data?.map((elem, index) => {
          return (
            
              <Link key={index} href={`/p/${router.query.name}/season${index + 1}`}>
                <SeasonCards title={elem.title} image={elem.image} />
              </Link>
            
          );
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
