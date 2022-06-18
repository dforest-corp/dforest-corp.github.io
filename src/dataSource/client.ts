import ky from 'ky'

export const client = ky.create({
  prefixUrl: 'https://dforest.microcms.io/api/v1/',
  headers: {
    'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY
  }
})