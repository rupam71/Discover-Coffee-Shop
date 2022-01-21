import { useState } from "react";

const useTrackLocation = () => {
    const [locationErrMsg, setlocationErrMsg] = useState('');
    const [LatLong, setLatLong] = useState('');
    const [isFindingLocation, setisFindingLocation] = useState(false);

    const success = (position) =>{
        setisFindingLocation(false)
        const { latitude, longitude } = position.coords;
        setLatLong(`${latitude},${longitude}`)
        setlocationErrMsg('')
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