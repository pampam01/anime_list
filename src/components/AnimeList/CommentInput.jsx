"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setIsComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const router = useRouter();

  const handlerComment = (event) => {
    setIsComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsPosting(true);
      setIsComment("");
      router.refresh();
    }
  };
  return (
    <div className="flex flex-col gap-2">
      {isPosting && (
        <p className="text-color-primary">Komentar Telah dikirim.......</p>
      )}
      <textarea
        onChange={handlerComment}
        value={comment}
        className="w-full h-32 text-xl p-4"
      />
      <button
        onClick={handlePosting}
        className="w-52 py-2 px-3 bg-color-accent"
      >
        Kirim Komentar
      </button>
    </div>
  );
};

export default CommentInput;
