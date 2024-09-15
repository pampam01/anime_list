import React from "react";
import { authUser } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUser();

  return (
    <div className=" mt-8 text-color-primary flex flex-col justify-center items-center">
      <h5 className="text-2xl font-bold">Dashboard</h5>
      <h5>welcome..., {user?.name}</h5>
      <Image src={user?.image} alt="user" width={250} height={250} />
      <div className="flex gap-4 py-8 flex-wrap">
        <Link
          href="/users/dashboard/collection"
          className="bg-color-accent text-color-dark font-bold py-3 px-4 text-xl"
        >
          my collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-color-accent text-color-dark font-bold py-3 px-4 text-xl"
        >
          my command
        </Link>
      </div>
    </div>
  );
};

export default Page;
