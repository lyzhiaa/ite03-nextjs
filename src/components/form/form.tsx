"use client";

import { useActionState } from "react";
import { createPost } from "@/app/actions";

const initialState = {
  message: "",
};

export function CreateForm() {
  const [state, formAction, pending] = useActionState(createPost, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" required />
      {state?.message && (
        <p className="text-red-600" aria-live="polite">
          {state.message}
        </p>
      )}
      <button disabled={pending}>Create Post</button>
    </form>
  );
}
