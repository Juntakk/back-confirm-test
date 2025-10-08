"use client";
import ConfirmBack from "../components/ConfirmBack";
import { useRouter } from "next/navigation";

export default function GamePage() {
  const router = useRouter();
  return (
    <ConfirmBack>
      <div style={{ padding: 24 }}>
        <h1>Game Page</h1>
        <p>
          Try pressing the browser back button. You should see a confirm dialog.
        </p>
        <div onClick={() => router.push("/")}>Go Home (normal link)</div>
      </div>
    </ConfirmBack>
  );
}
