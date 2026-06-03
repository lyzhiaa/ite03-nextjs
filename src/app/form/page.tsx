"use client";
import { useActionState } from "react";
import { createPost } from "../action";

const initialState = {
  message: "",
};

export default function Form() {
  const [state, formAction, pending] = useActionState(createPost, initialState);

  return (
    <form className="border p-8 w-100 rounded-lg" action={formAction}>
      <label htmlFor="name">Name</label>
      <input className="border" type="text" id="name" name="name" required />
      {state?.message && (
        <p className="text-red-500" aria-live="polite">
          {state.message}
        </p>
      )}
      <button className="bg-blue-400 mx-3 p-1" disabled={pending}>
        Create Post
      </button>
    </form>
  );
}
