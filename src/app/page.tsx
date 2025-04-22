// No "use client" here
import { redirect } from "next/navigation";
import { getUserSession } from "./lib/session";
import ProfileCard from "@/components/ProfileCard"; // create this

export default async function Home() {
  const session = await getUserSession();

  if (!session?.user) {
    redirect("/login");
  }

  return <ProfileCard session={session} />;
}
