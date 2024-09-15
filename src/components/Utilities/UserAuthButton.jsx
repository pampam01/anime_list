import Link from "next/link";
import React from "react";
import { authUser } from "@/libs/auth-libs";

const UserAuthButton = async () => {
  const user = await authUser();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between gap-2">
      {user ? (
        <Link href="/users/dashboard" className="py-1">
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className=" bg-color-dark text-color-accent py-1 px-12 inline-block"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserAuthButton;
