import VideoCards from "../../components/VideoCards";



export const getServerSideProps = async () => {
  
  let res = await fetch(
    `https://animeweb-d093d-default-rtdb.firebaseio.com/p/lookism/season1.json`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

function season({ data }) {


  
  return (
    <>
  
     
        <div style={{height: "400px"}}><iframe style={{height: "400px"}} allowFullScreen="" frameBorder={0}  id="myFrame"
                src="https://www.short.ink/OINV7mrQTL8"
                
                width="100%"></iframe></div>
      <div className="conbtn">
        <button id="back" className="btn " >back</button>
        <button id="next" className="btn ">next</button>
      </div>
      <ul id="video" className="video">
        {data?.map((elem, index) => {
          return <VideoCards event={console.log("click")} key={index} title={elem.title} image={elem.image} number={index} />;
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




.conbtn {
    margin: auto;
    width: 18rem;
    display: flex;
    justify-content: space-between;
}

.btn {
    
    width: 7rem;
    height: 3rem;
    background: linear-gradient(to bottom right, #380036, #0CBABA, #7F5A83);
    border-radius: 25px;
    color: #e60000;
    font-size: 2rem;
    text-shadow: 0px 0px 10px red, 0px 0px 20px red, 0px 0px 30px red;
    border: none;
    cursor: pointer;
    margin-top: 14px;
}



`}</style>
    </>
  );
}

export default season;
