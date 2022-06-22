import {client} from '@/dataSource/client'
import {EndPoints} from '@/types/cms-types'

export const getNewsList = async () => {
  return client.get('news', {
    searchParams: {
      filters: `category[equals]${process.env.NOTICE_CATEGORY_ID}`,
      fields: `id,title,publishedAt`
    }
  }).json<EndPoints['gets']['news']>()
}

export const getNewsIdList = async () => {
  return client.get('news', {
    searchParams: {
      filters: `category[equals]${process.env.NOTICE_CATEGORY_ID}`,
      fields: `id`,
      limit: 100
    }
  }).json<EndPoints['gets']['news']>()
}

export const getCompanyPost = async () => {
  return client.get(`news/${process.env.COMPANY_POST_ID}`).json<EndPoints['get']['news']>()
}

export const getWorksPost = async () => {
  return client.get(`news/${process.env.WORKS_POST_ID}`).json<EndPoints['get']['news']>()
}