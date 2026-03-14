'use server'
import { prisma } from "@/lib/db";
import { uploadsOne } from "./Cloudinary";

async function fileToBase64(file: File): Promise<string> {
    const buffer = await file.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    return `data:${file.type};base64,${base64}`;
}

export default async function GetFoot(){
    const Foot=await prisma.list.findMany({
    orderBy:{
        seen:"desc"
    },
    take:10,
})
    return Foot;
}

export async function HandleChanges(formData: FormData, id: string) {
    const avatarFile = formData.get('Avatar') as File;
    const avatarBase64 = await fileToBase64(avatarFile);
    const UploadResult = await uploadsOne(avatarBase64, "/avatar")
    await prisma.user.update({
        where: {
            id: Number(id)
        }
        ,
        data: {
            img: UploadResult.url,
            imgPublicId: UploadResult.public_id,
            name: formData.get('Name') as string,
            Description: formData.get('description') as string,
            Location: formData.get('location') as string,
        }
    })
}
export async function GetUser(from: string, id: string | number) {
    if (from === 'Credential')
        return await prisma.user.findFirst({ where: { id: Number(id) },include:{posts:true,} })
    else if (from === 'Google') {
        const User = await prisma.googleUser.findFirst({
            where: { GoogleId: String(id) },
            include: {
                user: {
                    include:{
                        posts:true,
                    },
                },
            }
        })
        return User?.user;
    }
}

export async function HandlePost(formData: FormData, props: any) {
    const [AuthorId, author] = [props.id, props.name]
    if (!AuthorId || !author) {
        throw new Error("Missing author info!")
    }
    const imageFile = formData.get('File') as File;
    const [name, CostRaw, QuantityRaw, productInfo] = [
        formData.get('Name') as string,
        formData.get('Cost'),
        formData.get('Quantity'),
        formData.get('ProductInfo') as string,
    ]
    if (!imageFile || !name || !CostRaw || !QuantityRaw || !productInfo) {
        console.log(name, CostRaw, QuantityRaw, productInfo)
        throw new Error("Missing required fields")
    }

    const cost = Number(CostRaw);
    if (isNaN(cost) || cost < 0) {
        throw new Error('Invalid cost!');
    }

    const quantity = Number(QuantityRaw);
    if (isNaN(quantity) || quantity < 0) {
        throw new Error('Invalid quantity!');
    }

    const imageBase64 = await fileToBase64(imageFile);
    const Result = await uploadsOne(imageBase64, "/uploads")
    const [img, imgPublicId] = [Result.url, Result.public_id]

    const authorImg = props?.img?.length > 0
        ? props.img
        : "/user.png";

    try {
        await prisma.list.create({
            data: {
                AuthorId,
                img,
                imgPublicId,
                name,
                author,
                authorImg,
                like: 0,
                seen: 0,
                cost,
                quantity,
                productInfo,
            }
        }
        )
        return 'success'
    } catch (e: any) { throw new Error(e.message) }
}
