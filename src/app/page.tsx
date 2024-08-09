import Link from "next/link";
export default function Home() {
  return (
    <main className="w-full h-full min-h-screen flex flex-col gap-2 items-center justify-center bg-background_main">
      <Link
        href="/signin"
        className="bnt_main flex items-center justify-center"
      >
        Sign in
      </Link>
      <Link
        href="/signup"
        className="bnt_main flex items-center justify-center"
      >
        Sign up
      </Link>
    </main>
  );
}
