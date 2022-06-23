import {client} from '@/dataSource/client'
import {EndPoints} from '@/types/cms-types'

export const getNewsDetail = async (id: string) => {
  return client.get(`news/${id}`).json<EndPoints['get']['news']>()
}

export const getCompanyPost = async () => {
  return getNewsDetail(`${process.env.COMPANY_POST_ID}`)
}

export const getWorksPost = async () => {
  return getNewsDetail(`${process.env.WORKS_POST_ID}`)
}