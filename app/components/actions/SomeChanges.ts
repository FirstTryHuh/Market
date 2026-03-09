'use server'
import { prisma } from "@/lib/db";

export async function HandleChanges(formData: FormData, id: string) {
    await prisma.user.update({
        where: {
            id: Number(id)
        }
        ,
        data: {
            img: formData.get('Avatar') as string,
            name: formData.get('Name') as string,
            Description: formData.get('description') as string,
            Location: formData.get('location') as string,
        }
    })
}
export async function GetUser(id:number){
    return await prisma.user.findFirst({where:{id:id}})
}