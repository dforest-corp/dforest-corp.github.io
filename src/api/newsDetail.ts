import {client} from '@/dataSource/client'
import {EndPoints} from '@/types/cmsType'
import {sanitizePost} from '@/utils/sanitizePost'

const NewsDetailAPI = {
  fetch: async (id: string) => {
    const post = await client.get(`news/${id}`).json<EndPoints['get']['news']>()
    return sanitizePost(post)
  }
}

export default NewsDetailAPI