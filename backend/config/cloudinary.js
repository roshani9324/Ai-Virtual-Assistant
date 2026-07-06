import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
const uploadOnCloudinary = async(filePath) => {
  // Configuration
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Click 'View API Keys' above to copy your Cloud name
      api_key: process.env.CLOUDINARY_API_KEY, // Click 'View API Keys' above to copy your API key
      api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
    });

    try{
      const uploadResult = await cloudinary.uploader
       .upload(
          filePath,
       )
       fs.unlinkSync(filePath)
       return uploadResult.secure_url;
    }catch(err){
             fs.unlinkSync(filePath)
             return res.status(500).json({message: "Error uploading file to Cloudinary", error: err.message});

    }
    
  return ;
};

export default uploadOnCloudinary
