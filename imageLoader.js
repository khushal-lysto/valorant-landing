export default function imageLoader({ src }) {
  // External URLs — return as-is
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  // Local public-folder paths — prepend basePath
  const base = process.env.NEXT_PUBLIC_BASEPATH || "";
  return `${base}${src}`;
}
