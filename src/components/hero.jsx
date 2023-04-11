import React from "react";
import Image from "next/image";
import Link from "next/link";
function Hero() {
  return (
    <>
      <div id="hero" className="banner">
        <div id="feature">
          <Link href="/p/lookism">
            <Image className="1stimg"
              src="https://sm.ign.com/t/ign_in/screenshot/default/lookism_r6n7.1280.jpg"
              alt="lookism"
            width={503} height={500}
            />
            <h2>hello this is title</h2>
          </Link>
        </div>
        <div className="slide">
          <div className="sl1" >
            {/* <Link href="/p/pokemon"> */}
              <Image className="sll"
                src="https://hacker57.netlify.app/src/pokemonallseason.png"
                width={600}
                height={240}
                alt=""
              />
              <h2>hello this is title1</h2>
            {/* </Link> */}
          </div>
          <div className="sl">
            {/* <Link href="/single-page/pokemon-all-movies.html"> */}
              <Image
                src="https://hacker57.netlify.app/src/pokemonallseason.png"
                width={400}
                height={250}
                alt=""
              />
              <h2>hello this is title2</h2>
            {/* </Link> */}
          </div>
          <div className="sl">
            {/* <Link href="/"> */}
              <Image
                src="https://hacker57.netlify.app/src/pokemonallseason.png"
                width={400}
                height={250}
                alt=""
              />
              <h2>hello this is title</h2>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <style jsx>{`
     
#hero{
  display:flex;
  width:100%;
  height:120%;
  overflow:hidden;
}
#feature{
  width:50%;
 
  position:relative

}
  .1stimg{
    object-fit:contain
  }
    .slide {
      display: flex;
      flex-wrap: wrap;
      overflow-y: hidden;
      width:50%;
    }
   
    .sl1 {
      width: 100%;
      height: 42%;
      overflow: hidden;
    }
   
    .sl {
      height: 100%;
      width: 50%;
      overflow:hidden
    }
    .banner h2 {
      color: #120922;
      position: relative;
      bottom: 3rem;
    }
 
    @media only screen and (max-width: 400px) {
      #hero{
        flex-direction:coloumn
      }
      .banner {
        flex-wrap: wrap;
      }
      
      
      .slide {
        flex-direction: column;
        width: 100%;
        overflow-x: scroll;
        height: 17rem;
      }
      .sl,
      .sl1 {
        width:auto;
        
        height:100%;
      
      }
      .1stimg{
       width:auto;
       position:relative
      }
    }
      `}</style>
    </>
  );
}
export default Hero;
