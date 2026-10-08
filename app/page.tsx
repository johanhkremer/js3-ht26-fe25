import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Min första Next.js sida!</h1>

      <Link href={"/about"}>Om oss</Link>
    </>
  );
}
