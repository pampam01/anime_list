import { authUser } from "@/libs/auth-libs";
import React from "react";
import prisma from "@/libs/prisma";
import Link from "next/link";
import Header from "@/components/dashboard/Header";

const page = async () => {
  const user = authUser;
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });
  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"my Comment"} />
      <div className="grid grid-cols-1 py-2 gap-4">
        {comments?.map((comment) => (
          <Link
            href={`/anime/${comment.anime_mal_id}`}
            key={comment.id}
            className="bg-color-primary text-color-dark p-4 "
          >
            <p className="text-2xl font-bold ">{comment.anime_title}</p>
            <p className="text-xl font-semibold">{comment.username}</p>
            <p className="text-sm italic">{comment.comment}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default page;
