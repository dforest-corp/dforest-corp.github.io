import {client} from '../dataSource/client'
import {EndPoints} from '../types/cms-types'

export const getNewsDetail = async (id: string) => {
  return client.get(`news/${id}`).json<EndPoints['get']['news']>()
}