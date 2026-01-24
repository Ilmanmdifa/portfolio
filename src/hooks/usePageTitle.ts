import { useEffect } from "react";

interface PageTitleOptions {
  title: string;
  description?: string;
  ogImage?: string;
}

export const usePageTitle = (options: PageTitleOptions | string) => {
  // Support both string and object syntax
  const config = typeof options === "string" ? { title: options } : options;
  const { title, description, ogImage } = config;

  useEffect(() => {
    document.title = `${title} | Ilman`;

    // Set meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", description);
    }

    // Set OG image
    if (ogImage) {
      let metaOG = document.querySelector('meta[property="og:image"]');
      if (!metaOG) {
        metaOG = document.createElement("meta");
        metaOG.setAttribute("property", "og:image");
        document.head.appendChild(metaOG);
      }
      metaOG.setAttribute("content", ogImage);
    }

    return () => {
      document.title = "Ilman | Web Dev";
    };
  }, [title, description, ogImage]);
};
