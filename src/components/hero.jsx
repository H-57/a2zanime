import React from "react";
import Image from "next/image";
import Link from "next/link";
function Hero() {
  return (
    <>
      <div id="hero" className="banner">
        <div id="feature">
          <Link href="/p/lookism">
            <Image id="1stimg"
              src="https://sm.ign.com/t/ign_in/screenshot/default/lookism_r6n7.1280.jpg"
              alt="lookism"
             layout="fill"
             
    />
        
            <h2 className="episodeno">Lookism All Season </h2>
          </Link>
        </div>
        <div className="slide">
          <div className="sl1" >
            {/* <Link href="/p/pokemon"> */}
              <Image className="h"
                src="https://hacker57.netlify.app/src/pokemonallseason.png"
                layout="responsive"    width={600}
                height={340}
                alt=""
              />
              <h2 className="episodeno">Pokemon All Season</h2>
            {/* </Link> */}
          </div>
          <div className="sl">
            {/* <Link href="/single-page/pokemon-all-movies.html"> */}
              <Image className="h"
                src="https://hacker57.netlify.app/src/pokemonallseason.png"
                layout="responsive"       width={400}
                height={350}
                alt=""
              />
              <h2 className="episodeno">Pokemon All Movies</h2>
            {/* </Link> */}
          </div>
          <div className="sl">
            {/* <Link href="/"> */}
              <Image className="h"
                src="https://hacker57.netlify.app/src/pokemonallseason.png"
                layout="responsive"         width={400}
                height={350}
                alt=""
              />
              <h2 className="episodeno">hello this is title</h2>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <style jsx>{`
     
#hero{
  display:flex;
height:70vh

  
}
#feature{
  width:50%;
 
  position:relative

}
#feature Link{
  display: block;
height: 87%;
position: relative;
}
  #stimg{
  
  }
    .slide {
      display: flex;
      flex-wrap: wrap;
      overflow-y: hidden;
      width:50%;
      
    }
   
    .sl1 {
      width: 100%;
      height: 55%;
      overflow: hidden;
    }
   
    .sl {
      
      width: 50%;
      overflow:hidden
    }
    .banner h2 {
    
      position: relative;
      bottom: 3rem;
      color: #0064ff;
      text-shadow: 0px 2px 3px cyan;
    }
    .sl h2{
      font-size:1.4rem
    }
  
    @media only screen and (max-width: 450px) {
      #hero{
        flex-direction:coloumn;
        height:50%
      }
      .banner {
        flex-wrap: wrap;
      }
      
      
      .slide {
        flex-direction: column;
        width: 100%;
        overflow-x: scroll;
        height: 153px;
      }
      .sl,
      .sl1 {
        width:70%;
        
        height:100%;
      
      }
      
      #feature{
        width: 100%;
        height: 35vh;}
    }
    #feature h2{
      position:absolute
    }
      `}</style>
    </>
  );
}
export default Hero;
