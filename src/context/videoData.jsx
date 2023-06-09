
import { createContext,useState  } from "react";

export const VideoNoContext=createContext(null);
export const WatchLaterContext=createContext(null);
export const IframeContext=createContext(null);
export const SeasonContext=createContext(null)
 const VideoProvider=(props)=>{
const [videoNo,setVideoNo]=useState(0);
const [watch,setWatch]=useState({})
const[iframe,setIframe]=useState("")
const [Season, setSeason] = useState(0)

return(
    <VideoNoContext.Provider value={{videoNo,setVideoNo}}>
        <IframeContext.Provider value={{iframe,setIframe}}>

        <WatchLaterContext.Provider value={{watch,setWatch}}>
<SeasonContext.Provider value={{Season,setSeason}}>

        {props.children}
</SeasonContext.Provider>
        </WatchLaterContext.Provider>
        </IframeContext.Provider>
    </VideoNoContext.Provider>
    )
}
export default VideoProvider