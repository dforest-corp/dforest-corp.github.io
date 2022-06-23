import ky from 'ky-universal'

export const client = ky.create({
  prefixUrl: process.env.MICROCMS_ENDPOINT,
  headers: {
    'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY
  }
})