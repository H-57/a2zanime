import React from "react";
import Image from "next/image";
import Link from "next/link";
function Hero() {
  return (
    <>
      <div id="hero" className="banner">
        <div id="feature">
          <Link href="/p/lookism">
            <Image
              src="https://sm.ign.com/t/ign_in/screenshot/default/lookism_r6n7.1280.jpg"
              alt="lookism"
              width={350}
              height={300}
            />
            <h2>hello this is title</h2>
          </Link>
        </div>
        <div className="slide">
          <div className="sl1">
            <Link href="/p/pokemon">
              <Image
                src="https://hacker57.netlify.app/src/pokemonallseason.png"
                width={400}
                height={250}
                alt=""
              />
              <h2>hello this is title1</h2>
            </Link>
          </div>
          <div className="sl">
            <Link href="/single-page/pokemon-all-movies.html">
              <Image
                src="https://hacker57.netlify.app/src/pokemonallseason.png"
                width={400}
                height={250}
                alt=""
              />
              <h2>hello this is title2</h2>
            </Link>
          </div>
          <div className="sl">
            <Link href="/">
              <Image
                src="https://hacker57.netlify.app/src/pokemonallseason.png"
                width={400}
                height={250}
                alt=""
              />
              <h2>hello this is title</h2>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
         #feature Image {
            width: 50vw;
            height: 100%;
          }
 
          .slide {
            display: flex;
            flex-wrap: wrap;
            overflow-y: hidden;
          }
          .sl1 {
            width: 100%;
            height: 50%;
            overflow: hidden;
          }
          .banner Image {
            width: 100%;
            height: 100%;
          }
          .sl {
            height: 100%;
            width: 50%;
          }
          .banner h2 {
            color: #120922;
            position: relative;
            bottom: 3rem;
          }
    
          @media only screen and (max-width: 400px) {
            .banner {
              flex-wrap: wrap;
            }
            #feature{
                width:100vw;
            }
            .slide {
              flex-direction: column;
              width: 100%;
              overflow-x: scroll;
              height: 17rem;
            }
            .sl,
            .sl1 {
              width: 80vw;
              height: 100%;
              margin-left: 2px;
              float: right;
            }
          }
      `}</style>
    </>
  );
}
export default Hero;
