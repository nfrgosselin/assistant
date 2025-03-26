import { redirect } from "next/navigation";

export default async function Home() {
  // Redirect to /conversations for now
  // We'll implement the empty state component later
  redirect("/conversations");
}
