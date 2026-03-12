import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const deleteOne = async (public_id: string) => {
    try {
        const result = await cloudinary.v2.uploader.destroy(public_id);
        if (result.result === 'ok') {
            console.log("✅ Deleted from Cloudinary");
        } else {
            console.warn("⚠️ Cloudinary deletion result:", result);
        }
        return { success: true, result };

    } catch (error) {
        console.error("❌ Deletion failed:", error);
        throw new Error(`Failed to delete image: ${(error as Error).message}`);
    }
}

export const uploadsOne = async (file: string, folder: string) => {
    try {
        const result = await cloudinary.v2.uploader.upload(
            file,
            {
                resource_type: "auto",
                folder: folder,
            })

        const autoCropUrl = cloudinary.v2.url(result.public_id, {
            fetch_format: 'auto',
            quality: 'auto',
            crop: 'auto',
            gravity: 'auto',
            width: 500,
            height: 500,
        });

        return {
            public_id: result.public_id,
            url: autoCropUrl,
        }

    } catch (e) {
        throw new Error(String(e))
    }
}

export const uploads = async (file: string[], folder: string) => {
    const uploadPromises = file.map((files) => uploadsOne(files, folder));
    return await Promise.all(uploadPromises);
}

