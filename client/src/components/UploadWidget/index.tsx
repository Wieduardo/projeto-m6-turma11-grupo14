import { useEffect, useRef } from "react";
declare const window: any;

interface Props{
    error: Error,
    result: any
}

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(()=> {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current!.createUploadWidget({
            cloudName: "de8wdumps",
            uploadPreset: "nwn2znsn"
        }, function ({error, result}:Props){
            console.log(result)
        });
    },[])

    return(
        <button onClick={() => widgetRef.current!.open()}>Upload</button>
    )
}

export { UploadWidget };