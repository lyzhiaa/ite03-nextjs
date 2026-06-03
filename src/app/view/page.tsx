import Link from "next/link";

export default function View() {
  return (
    <div>
      <div>This is View Page</div>
      <Link href="/photo">Click to open image</Link>
    </div>
  );
}
