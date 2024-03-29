import {useRef,useContext, useEffect} from 'react'
import Image from 'next/image'
import{IframeContext,VideoNoContext}from'../context/videoData'

function VideoCards({videoUrl,number,image,title,cardname}) {
const {setIframe,iframe}=useContext(IframeContext);
const {videoNo,setVideoNo}=useContext(VideoNoContext)
  useEffect(()=>{
   
    setIframe(videoUrl[(videoNo)])
  },[videoNo])

   const playCard = useRef();
 

const vid=()=>{
let liElements=document.getElementsByClassName('check')
// console.log(liElements)
    Array.from(liElements).forEach((element) => {                //travel all card and remove check class
        element.classList.remove('check')})
        
        setVideoNo(number)
       
      
       
       playCard.current.classList.add('check')
    document.getElementById("myFrame").scrollIntoView();
    
    
}

const setVideo=()=>{
    console.log(image,title,lo2[(videoNo.current.id)-1])
}

  return (
   <>
  
    <li ref={playCard} className="card" onClick={vid} id={number+1} >
    
<figure><Image src={image} alt={title} className="thumbnail" width={150} height={20}/></figure>

<span className="epnumber">{cardname}  {number +1}</span>
<header><h3> {title}</h3></header>
<span className="material-symbols-outlined play">
 play_circle
 </span>
</li>

<style jsx>{`
/* for define size of video cards */
.card {
    width: 10rem;
    height: 15rem;
    color: aliceblue;
    
    background: #1b0f30;
    border-radius: 9px;
    cursor: pointer;
    overflow:hidden
}

/* for define image in card */
.thumbnail {
    position: relative;

    


    
    top: 2%;
    left: 5%;
    border-radius: 10px;
   
    transition: all 1s ease-in-out;
    height: 100%;


}

/*  for stop over floew of image from card */
figure {
    overflow: hidden;
    height: 70%;
}

li:hover .thumbnail {
    /* color: aquamarine; */
    width: 90%;
    transform: scale(1.5);

}

/* for episode number shows */
.epnumber {

    font-size: 21px;
    text-shadow: 0px 2px 3px aqua;
    color: aqua;
}

/* for title of video shows */
.card header {
    /* color: tomato; */
    color: white;
    text-shadow: 1px 1px 3px tomato;
    margin-left: 5px;
    height:36px;
}






.card:hover~.play {
    display: block !important;
}

@media only screen and (max-width: 600px) {


  .card {
      width: 80vw;
      height: 55vh;
  }
  .thumbnail{
    width: 100%;
    height:100%
  }
  .play {
      left: 35%;
      font-size: 100px !important;
  }

  .epnumber {
      font-size: 3rem;
  }

  header {
      font-size: 1.5rem;
  }

}

.check {
  
  opacity: 0.3;
}
#episodeno{
  font-size: 2rem;
  margin: auto;
display: block;
width: fit-content;
}`}</style>
</>
  )
}

export default VideoCards
