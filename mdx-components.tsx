import Image, { type ImageProps } from 'next/image'
import React from 'react'

type MDXComponents = {
  [key: string]: React.ComponentType<any>
}

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    Image: (props: ImageProps) => <Image {...props} />,
  }
}
