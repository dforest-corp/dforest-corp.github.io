import React from 'react'

export type ForEachProps<T> = {
  children: (item: T) => React.ReactElement
  items: T[]
}

const ForEach = <T, >({items, children}: ForEachProps<T>) => {
  return (
    <>
      {items.map(item => children(item))}
    </>
  )
}

export default ForEach