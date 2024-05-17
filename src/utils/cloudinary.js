import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"
// (async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    
    // Upload an image

    const temp = "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg";
    const uploadOnCloudinary = async (localFilePath) => {
        if(!localFilePath) return null;
        const uploadResult = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        }).catch((error)=>{console.log(error)
            fs.unlinkSync(localFilePath); // remove file because it is present on our local server
            return null;
        });
        console.log(uploadResult);
        return uploadResult;
    } 

    export {uploadOnCloudinary}
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    // const optimizeUrl = cloudinary.url("shoes", {
    //     fetch_format: 'auto',
    //     quality: 'auto'
    // });
    
    // console.log(optimizeUrl);
    
    // // Transform the image: auto-crop to square aspect_ratio
    // const autoCropUrl = cloudinary.url("shoes", {
    //     crop: 'auto',
    //     gravity: 'auto',
    //     width: 500,
    //     height: 500,
    // });
    
    // console.log(autoCropUrl);    
// })();