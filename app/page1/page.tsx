"use client";
import ConfirmBack from "../components/ConfirmBack";
import { useRouter } from "next/navigation";

export default function GamePage() {
  const router = useRouter();
  return (
    <ConfirmBack>
      <div className='space-y-12' style={{ padding: 24 }}>
        <h1 className='text-4xl'>Game Page</h1>
        <p>
          Try pressing the browser back button. You should see a confirm dialog.
        </p>
        <div className='cursor-pointer' onClick={() => router.push("/")}>
          Go Home
        </div>
      </div>
    </ConfirmBack>
  );
}
