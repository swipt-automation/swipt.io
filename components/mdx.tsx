import { File, Files, Folder } from "fumadocs-ui/components/files";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";

const Image = defaultMdxComponents.img;

function ThemedImage({ title, ...props }: ComponentProps<typeof Image>) {
  if (title === "light") return <Image {...props} className="dark:hidden" />;
  if (title === "dark")
    return <Image {...props} className="hidden dark:block" />;
  return <Image {...props} title={title} />;
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    img: ThemedImage,
    Tab,
    Tabs,
    File,
    Files,
    Folder,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
