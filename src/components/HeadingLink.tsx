import React from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4";

export function createHeadingLink(Tag: HeadingTag) {
  return function HeadingLink(props: React.ComponentPropsWithoutRef<"h1">) {
    const { id, children, ...rest } = props;

    if (!id) {
      return <Tag {...props} />;
    }

    return (
      <Tag id={id} {...rest} className="group">
        <a
          href={`#${id}`}
          className="no-underline! after:invisible after:ml-2 after:text-zinc-400 after:content-['#'] group-hover:after:visible dark:after:text-zinc-500"
        >
          {children}
        </a>
      </Tag>
    );
  };
}
