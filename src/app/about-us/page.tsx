import { NextResponse } from "next/server";

export default function AboutUs() {
  const isAuthenticated = false;
  if (isAuthenticated) {
    NextResponse.redirect("http://localhost:3000/login");
  }
}
