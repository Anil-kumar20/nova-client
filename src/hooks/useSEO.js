import { useEffect } from "react";

export default function useSEO({ title, description }) {
  useEffect(() => {
    document.title = title;

    const metaDesc =
      document.querySelector("meta[name='description']") ||
      document.createElement("meta");

    metaDesc.name = "description";
    metaDesc.content = description;

    document.head.appendChild(metaDesc);
  }, [title, description]);
}
