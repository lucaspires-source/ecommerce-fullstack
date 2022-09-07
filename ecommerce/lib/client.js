import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:process.env.PROJECTID,
    dataset:'production',
    apiVersion:'2022-09-07',
    useCdn:true,
    token:process.env.TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)