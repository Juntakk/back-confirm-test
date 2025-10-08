"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ padding: 24 }}>
      <h1>Home Page</h1>
      <div onClick={() => router.push("/page1")}>Go to Game Page</div>
    </div>
  );
}
