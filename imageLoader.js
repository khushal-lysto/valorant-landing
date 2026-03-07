export default function imageLoader({ src }) {
  const base = process.env.NEXT_PUBLIC_BASEPATH || "";
  return `${base}${src}`;
}
