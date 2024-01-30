import {useContext,useEffect} from "react";
import ActiveLinkContext from "../contexts/ActiveLinkContent";

export default function useActive(curAddress){
    const [active,setActive] = useContext(ActiveLinkContext);
    useEffect(() => {
        setActive(curAddress)
    },[active])
}
