import Head from "next/head";
import Link from "next/link";

import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import VideoCards from "../../../components/VideoCards";
import{IframeContext,SeasonContext,VideoNoContext}from'../../../context/videoData'



export const getServerSideProps = async (context) => {
  const Season = context.params.snum; //variable for store season no
  const AnimeName = context.params.name; // var for store anime name
try {
  let res = await fetch(
    `${process.env.API_URL}/anime/${AnimeName}/${Season}.json` //fetch data for a particular anime and its season number
  );
  const data = await res.json();
  let serverEpisodeData = await fetch(
    `${process.env.API_URL}/anime/${AnimeName}/${Season}ep.json`
  );
  const serverEpisode = await serverEpisodeData.json();

  let Seasons = await (
    await fetch(`${process.env.API_URL}/anime/${AnimeName}/season.json`)
  ).json();
  let Sbutton = await (
    await fetch(`${process.env.API_URL}/anime/${AnimeName}/${Season}ep.json`)
  ).json();
  let Content = await (
    await fetch(
      `${process.env.API_URL}/anime/${AnimeName}/${Season}Content.json`
    )
  ).json();
  if (data === null) {
    return {
      props: {
        
        error: true,
      },
    };
  }
  return {
    props: {
      data,
      serverEpisode,
      Seasons,
      Sbutton,
      Content,
    },
  };
} catch (error) {
  return {
    props: {
      error:true
    },
  };
}
 
 
};

function AnimeName({ data, serverEpisode, Seasons, Sbutton, Content,error }) {
  const router = useRouter();

  useEffect(() => {
    if(error){

   
      router.push("/")
    }
 
  }, [])
const{iframe,setIframe}=useContext(IframeContext)
const {videoNo,setVideoNo}=useContext(VideoNoContext)

  let SERVER1 = serverEpisode?.server1;
  let SERVER2;
  let SERVER3;
  let SERVER4;
  let SERVER5;
  

 
  const [Server, setServer] = useState(SERVER1);
  const [ServerName, setServerName] = useState("Server-1");
  let SbuttonArray
if(Sbutton){
  SbuttonArray =Object.keys(Sbutton);
 
}
  useEffect(() => {
    if(data){
      setIframe(SERVER1[0]);
      document.getElementsByClassName("card")
        [0].classList.add("check");
    }
    
  }, []);

  useEffect(()=>{
    if(data){
    setIframe(Server[videoNo ]);
    }
  },[Server,videoNo])


 
const handleLinkClick = () => {
  setTimeout(()=>{
    router.reload(window.location.pathname)

  },1500)
};



  const lang = (index) => {
    switch (index) {
      case 0:
        return Sbutton.server1.language;

      case 1:
        return Sbutton.server2.language;

      case 2:
        return Sbutton.server3.language;

      case 3:
        return Sbutton.server4.language;

      case 4:
        return Sbutton.server5.language;
    }
  };
  const SERVER = (index) => {
    switch (index) {
      case 0:
        return SERVER1;
      case 1:
        SERVER2 = serverEpisode.server2;
        return SERVER2;
      case 2:
        SERVER3 = serverEpisode.server3;
        return SERVER3;
      case 3:
        SERVER4 = serverEpisode.server4;
        return SERVER4;
      case 4:
        SERVER5 = serverEpisode.server5;
        return SERVER5;
    }
  };

  const ServerChange = (e, index) => {
    setServer(SERVER(index));
    setServerName(e.target.innerText)
    // console.log(serverNo);
  };
  const handelBack = () => {
    if (videoNo<=0)return false; 
      let lielm = document.getElementsByClassName("check");
      // console.log(lielm)
      Array.from(lielm).forEach((element) => {
        //travel all card and remove check class
        element.classList.remove("check");
      });

      document
      .getElementsByClassName("card")
      [videoNo-1].classList.add("check");
      // console.log(videoNumber);
      setVideoNo(videoNo - 1);
      
      // console.log(videoNumber);
     
    
  };
  const handelNext = () => {
    if (videoNo != data.length-1) {
      let lielm = document.getElementsByClassName("check");
      // console.log(lielm)
      Array.from(lielm).forEach((element) => {
        //travel all card and remove check class
        element.classList.remove("check");
      });
     
      setVideoNo(videoNo + 1);
      document
        .getElementsByClassName("card")
        [videoNo+1].classList.add("check");
      // console.log(videoNumber);
    }
  };

  return (
    <>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6866623175181631"
     crossOrigin="anonymous"></script>
        <title>{Content?.title}</title>
        <meta name="description" content={Content?.description} />
        <meta name="keywords" content="all anime videos,video,pokemon" />
      </Head>
      <h1>{Content?.heading1}</h1>
      <div style={{ height: "400px" }}>
        <iframe
          allowFullScreen={true}
          frameBorder={0}
          id="myFrame"
          src={iframe}
          width="100%"
        ></iframe>
      </div>

      <div className="conbtn">
        <button onClick={handelBack} className="btn ">
          back
        </button>

        <button onClick={handelNext} className="btn ">
          next
        </button>
      </div>
      


      <div className="seasonlist">
        <button
          onClick={() => {
            document.getElementById("slist").classList.toggle("hide");
            document.getElementById("licon").classList.toggle("rotate");
          }}
          className="listbtn"
        >
          All Seasons <i id="licon" className="fa fa-chevron-down"></i>
        </button>
{/* populate season lists */}
        <ul id="slist" className="hide">
          {Seasons?.map((_elem, index) => {
            return (
              <Link onClick={()=>{ handleLinkClick()}}
                key={index}
                href={`/p/${router.query.name}/season${index + 1}`}
              >
                {" "}
                <li >seaon{index + 1}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div id="episodeno">
        Episode {videoNo+1} ({ServerName})
      </div>
      <div className="server">
        {SbuttonArray?.map((elem, index) => {
          return (
            <button
              key={elem}
              className="button-63 "
              onClick={(e) => {
                ServerChange(e, index);
              }}
            >
              Server-{index + 1} ({lang(index)})
            </button>
          );
        })}
      </div>

      <h2>{Content?.heading2}</h2>

      <ul id="video" className="video">
        {data?.map((elem, index) => {
          if(elem.title==="") elem.title=`${router.query.name}:Episode-${index+1}`
          if(elem.image==="") elem.image=Content?.image
          return (
            <VideoCards
            cardname={"Episode"}
              videoUrl={Server}
              key={index}
              title={elem.title}
              image={elem.image}
              number={index}
            />
          );
        })}
      </ul>
      <style jsx>{`
        /* for ul list store all video cards */
        .listbtn {
          background: #6a0c6a;
          font-size: 1rem;
          cursor: pointer;
          height: 3rem;
        }
        .rotate {
          transform: rotate(180deg);
        }
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
          margin-bottom: 30px;
        }

        .btn {
          width: 7rem;
          height: 3rem;
          background: linear-gradient(
            to bottom right,
            #380036,
            #0cbaba,
            #7f5a83
          );
          border-radius: 25px;
          color: #e60000;
          font-size: 2rem;
          text-shadow: 0px 0px 10px red, 0px 0px 20px red, 0px 0px 30px red;
          border: none;
          cursor: pointer;
          margin-top: 14px;
        }
        #myFrame {
          height: 100%;
          width: 70%;
        }
        .server {
          display: flex;
          position: absolute;
          right: 0;
          top: 126px;
          width: 30%;
          height: 345px;
          flex-direction: column;
        }
        .Sbtn {
          color: black;
          margin: auto;
          background: cornflowerblue;
          border-radius: 5px;
          font-size: 34px;
        }
        .btn:hover {
          font-size: larger;
        }

        .seasonlist {
          margin-left: 2rem;
        }
        .seasonlist ul {
          width: fit-content;
          background: blueviolet;
          font-size: x-large;
          position: relative;
        }
        .seasonlist ul li {
          background: #5e0288;
          margin-bottom: 5px;
        }
        .seasonlist ul li:hover {
          background: #8b0ac6;
        }

        @media only screen and (max-width: 400px) {
          .server {
            display: flex;
            position: relative;
            height: auto;
            flex-direction: row;
            overflow-x: scroll;
            top: 0;
            width: 100%;
          }
          #myFrame {
            width: 100%;
          }
          .Sbtn {
            margin-right: 20px;
          }
        }

        .button-63 {
          margin: auto;

          align-items: center;
          background-image: linear-gradient(
            144deg,
            #af40ff,
            #5b42f3 50%,
            #00ddeb
          );
          border: 0;
          border-radius: 50px;
          box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
          box-sizing: border-box;
          color: #ffffff;
          display: flex;
          font-family: Phantomsans, sans-serif;
          font-size: 20px;
          justify-content: center;
          line-height: 1em;
          max-width: 100%;
          min-width: 140px;
          padding: 19px 24px;
          text-decoration: none;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          white-space: nowrap;
          cursor: pointer;
          margin-right: 20px;
          margin-bottom: 10px;
        }

        .button-63:active,
        .button-63:hover {
          outline: 0;
          font-size: larger;
        }

        @media (min-width: 768px) {
          .button-63 {
            margin-right: 20px;
            font-size: 1.5rem;
            min-width: 196px;
          }
        }
      `}</style>
    </>
  );
}

export default AnimeName;
