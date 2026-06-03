"use client";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";
import { useReducer, useState } from "react";

export default function Button() {
  const [error, setError] = useState<any>();
  
  // handleClick
  function handleClick() {
    
    // try {
    //   throw new Error("exception");
    // } catch (reason) {
    //   setError(reason);
    // }
  }
  if (error) {
    notFound();
  }
  return (
    <button className="bg-amber-400" onClick={handleClick}>
      Click Me
    </button>
  );
}
