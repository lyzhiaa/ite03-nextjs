"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  //   handle when user click button
  function handleOnClick() {
    const isLoggin = false;
    if (isLoggin) {
      router.push("/about");
    }
  }

  return (
    <button
      className="p-8 bg-red-400 w-125"
      type="button"
      onClick={handleOnClick}
    >
      Login
    </button>
  );
}
