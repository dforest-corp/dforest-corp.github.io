import cmsClient from '@/dataSource/cmsClient'
import {EndPoints} from '@/types/cmsType'
import {sanitizePost} from '@/utils/sanitizePost'

const PostAPI = {
  fetchCompany: async () => {
    const post = await cmsClient.get(`news/${process.env.COMPANY_POST_ID}`).json<EndPoints['get']['news']>()
    return sanitizePost(post)
  },
  fetchWork: async () => {
    const post = await cmsClient.get(`news/${process.env.WORKS_POST_ID}`).json<EndPoints['get']['news']>()
    return sanitizePost(post)
  }
}

export default PostAPI