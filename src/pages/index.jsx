import Hero from "../components/hero";
import Link from "next/link";
import SeasonCards from "../components/seasonCards"
import Head from "next/head";

export const getServerSideProps = async () => {
  let series = await ( await fetch(`${process.env.API_URL}/home/series.json`)).json();
  // let sidebar = await ( await fetch(`${process.env.API_URL}/home/sidebar.json`)).json();
  let movies = await ( await fetch(`${process.env.API_URL}/home/movies.json`)).json();

  return {
    props: {
      series,
      movies,
     
    },
  };
};

export default function Home({series,movies}) {
  return (
    <>
    <Head>
    <title>A2zanime - Best Source For Hindi Anime &amp; Cartoons</title>

<meta name="description" content="Best Source For Hindi Anime &amp; Cartoons" />
    </Head>
      <Hero />
      <ul id="video" className="video">
      <h2 style={{width:"100vw"}} className="neonheading">Series</h2>
                {series.map((elem, index) => {
                  
                  return <Link key={index} href={elem.url}> 
                  <SeasonCards   title={elem.title} image={elem.image}  />
                  </Link>
                })}

<h2 style={{width:"100vw"}} className="neonheading">Movies</h2>

{movies.map((elem, index) => {
                  
                  return <Link key={index} href={elem.url}> 
                  <SeasonCards   title={elem.title} image={elem.image}  />
                  </Link>
                })}

              </ul>
      
    </>
  );
}
