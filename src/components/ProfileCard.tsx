"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function ProfileCard({ session }: { session: any }) {
  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: "/login" });
    } catch (error) {
      console.error("Logout error:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6 items-center max-w-md mx-auto bg-white rounded-lg shadow-md mt-40">
      <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
      <div className="flex flex-col gap-4 w-full">
        {session.user.image && (
          <div className="flex justify-center">
            <img
              src={session.user.image}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-indigo-100 object-cover shadow-sm"
            />
          </div>
        )}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-gray-500">Name</div>
          <div className="text-lg font-semibold text-gray-800">
            {session.user.name ?? "N/A"}
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-gray-500">Email</div>
          <div className="text-lg font-semibold text-gray-800">
            {session.user.email ?? "N/A"}
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-gray-500">User ID</div>
          <div className="text-lg font-semibold text-gray-800">
            {session.user.id ?? "N/A"}
          </div>
        </div>
        <Button
          variant="destructive"
          onClick={handleLogout}
          className="w-full py-3 mt-2 text-lg font-medium shadow-sm hover:shadow-md transition-shadow"
        >
          Log Out
        </Button>
      </div>
    </div>
  );
}
