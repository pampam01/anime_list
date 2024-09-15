"use client";

import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <FileSearch size={44} className="text-color-accent gap-4" />
        <h1 className="text-color-accent text-4xl">Not Found</h1>
        <button
          onClick={() => router.back()}
          className="text-color-primary hover:text-color-accent transition-all text-2xl underline"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};
export default page;
