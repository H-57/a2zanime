import Image from "next/image"

function SeasonCards(props) {
  return (
    <>
    <li className="card">
         
          <figure><Image src={props.image} alt={props.title} className="thumbnail" width={200} height={200}/>
            <span className="material-symbols-outlined play">
              play_circle
              </span>
            </figure>
         
   <h2> <header>{props.title}</header></h2>
  </li>
  <style jsx>{`

/* for define size of video cards */
   .card{
   width: 10rem;
   height: 14rem;
   color: aliceblue;
   /* border: solid 1px red; */
   /* margin: 5px; */
   background: #00abff87;
   border-radius: 9px;
   cursor:pointer;
   overflow: hidden;
   }
   figure{
     
   
    margin:9px;
  
  
 }
   /* for define image in card */
   .thumbnail{
   position:relative;
   width: 90%;

   top: 2%;
   left: 5%;
   border-radius: 10px;
   transform: scale(1);
   transition: all .4s ease-in-out;
   height: 100%;
   
   
   }
   /*  for stop over floew of image from card */
   figure{
   overflow: hidden; 
   height: 70%;
   }
   
   
   .thumbnail:hover {
   /* color: aquamarine; */
   width: 90%;
   transform: scale(1.5);
   
   }
   /* for episode number shows */
   .epnumber{
   
   font-size: 21px;
   text-shadow: 0px 2px 3px aqua;
   color: aqua;
   }
   /* for title of video shows */
   .card header{
   /* color: tomato; */
   color: white;
   text-shadow:1px 1px 3px tomato ;
   margin-left: 5px;
   }
   .play{
   display:none;
   position: relative;
   
   
   top: -58%;
   left: 36%;
   font-size: 50px!important;
   width: fit-content;
   }
   
   
   li:hover .play{
   display: block;
   }
 
   @media only screen and (max-width: 400px){
    
        .card{
            justify-content: space-around;
            width: 80vw;
            height: 45vh;
        }
    
    
    
   
    
    .play{
      display:block;
      left: 35%;
      font-size: 100px !important;
    }
    header{
     overflow:hidden;
        font-size: 1.7rem;
    
    }
    

    

  `}</style>
    </>
  )
}

export default SeasonCards