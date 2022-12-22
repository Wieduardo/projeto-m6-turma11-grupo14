import { useState } from "react";
declare const window: any;


interface IProps{
    error: Error
    result: any
}

const CloudinaryUploadWidget = () => {
    const [imageLink, setImageLink] = useState("");

    const cloudName = "de8wdumps"; 
    const uploadPreset = "nwn2znsn"; 

    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset
      },
      ({error, result}:IProps) => {
        if (!error && result && result.event === "success") {
          setImageLink(result.info.secure_url);
          console.log(imageLink);
        }
      }
    );    
  
    return (
      <button onClick={() => myWidget.open()}>
        Upload
      </button>
    );
}

export default CloudinaryUploadWidget;

