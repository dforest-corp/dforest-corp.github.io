import {client} from '@/dataSource/client'
import {EndPoints} from '@/types/cmsType'

const NewsListAPI = {
  fetchList: async () => {
    return client.get('news', {
      searchParams: {
        filters: `category[equals]${process.env.NOTICE_CATEGORY_ID}`,
        fields: `id,title,publishedAt`
      }
    }).json<EndPoints['gets']['news']>()
  },
  fetchIdPaths: async () => {
    const news = await client.get('news', {
      searchParams: {
        filters: `category[equals]${process.env.NOTICE_CATEGORY_ID}`,
        fields: `id`,
        limit: 100
      }
    }).json<EndPoints['gets']['news']>()
    return news.contents.map(item => ({
      params: {
        id: item.id
      }
    }))
  }
}

export default NewsListAPI