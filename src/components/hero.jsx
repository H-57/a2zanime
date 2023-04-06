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
              width={360}
              height={300}
            />
            <h2>hello this is title</h2>
          </Link>
        </div>
        <div className="slide">
          <div className="sl1">
            {/* <Link href="/p/pokemon"> */}
              <Image
                src="https://hacker57.netlify.app/src/pokemonallseason.png"
                width={400}
                height={250}
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
     
      `}</style>
    </>
  );
}
export default Hero;
