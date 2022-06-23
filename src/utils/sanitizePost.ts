import {EndPoints} from '@/types/cms-types'
import DOMPurify from 'isomorphic-dompurify'

export const sanitizePost = (post: EndPoints['get']['news']) => {
  return {
    ...post,
    content: DOMPurify.sanitize(post.content, {
      ADD_ATTR: [
        'target'
      ]
    })
  }
}