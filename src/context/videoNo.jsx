
import { createContext,useState  } from "react";

export const VideoContext=createContext(null);

 const VideoProvider=(props)=>{
const [videoNo,setVideoNo]=useState(0);

return(
    <VideoContext.Provider value={{videoNo,setVideoNo}}>
        {props.children}
    </VideoContext.Provider>
    )
}
export default VideoProvider