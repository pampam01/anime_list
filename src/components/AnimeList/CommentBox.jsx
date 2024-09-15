import prisma from "@/libs/prisma";
import React from "react";

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="text-color-dark bg-color-primary p-4 text-center items-center"
        >
          <p className="text-color-dark font-bold">{comment.username}</p>
          <p className="overflow-x-clip"> {comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentBox;
