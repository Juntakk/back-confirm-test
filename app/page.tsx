"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className='space-y-12' style={{ padding: 24 }}>
      <h1 className='text-4xl'>Home Page</h1>
      <div className='cursor-pointer' onClick={() => router.push("/page1")}>
        Go to Game Page
      </div>
    </div>
  );
}
