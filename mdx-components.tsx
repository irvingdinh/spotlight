import { type MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";

import { createHeadingLink } from "@/components/HeadingLink";

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    // eslint-disable-next-line jsx-a11y/alt-text
    Image: (props: ImageProps) => <Image {...props} />,
    h1: createHeadingLink("h1"),
    h2: createHeadingLink("h2"),
    h3: createHeadingLink("h3"),
    h4: createHeadingLink("h4"),
  };
}
