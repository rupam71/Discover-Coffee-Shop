import { useContext, useState } from "react";
import { ActionTypes,storeContext } from './../store/store-context';

const useTrackLocation = () => {
    const [locationErrMsg, setlocationErrMsg] = useState('');
    const [LatLong, setLatLong] = useState('');
    const [isFindingLocation, setisFindingLocation] = useState(false);

    const {dispatch} = useContext(storeContext)

    const success = (position) =>{
        setisFindingLocation(false)
        const { latitude, longitude } = position.coords;
        setLatLong(`${latitude},${longitude}`)
        setlocationErrMsg('')

        //call context
        dispatch({
            type : ActionTypes.SET_LAT_LONG,
            payload : {
                latLong :`${latitude},${longitude}`
            }
        })
    }
    const error = () =>{
        setisFindingLocation(false)
        setlocationErrMsg('unable to take geo location')
    }

    const handleTrackLocation = () =>{
        setisFindingLocation(true)
        if(!navigator.geolocation){
            setlocationErrMsg('Geolocation is not supported by your browser')
        } else {
            navigator.geolocation.getCurrentPosition(success, error)
        }
    }

    return {
        LatLong,
        handleTrackLocation,
        locationErrMsg,
        isFindingLocation
    }
}

export default useTrackLocation;