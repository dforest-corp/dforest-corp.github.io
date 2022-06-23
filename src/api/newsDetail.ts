import cmsClient from '@/dataSource/cmsClient'
import {EndPoints} from '@/types/cmsType'
import {sanitizePost} from '@/utils/sanitizePost'

const NewsDetailAPI = {
  fetch: async (id: string) => {
    const post = await cmsClient.get(`news/${id}`).json<EndPoints['get']['news']>()
    return sanitizePost(post)
  }
}

export default NewsDetailAPI