"use client";

import { Button } from "../ui/button";
import { ContainerComments } from "./ContainerComments";
import { signIn, useSession } from "next-auth/react";
import { ShareSocial } from "./ShareSocial";

export const ContainerAllowArticle = ({ id, result }) => {
  const shareUrl = `https://www.fertikoze.com/blog/${id}`;
  const title = `Fertikoze - ${result.title}`;
  const { data: session } = useSession();
  const handleLogin = () => {
    signIn("google", { callbackUrl: `/blog/${id}` });
  };

  return (
    <div className="w-full">
      <ShareSocial shareUrl={shareUrl} title={title} />
      {!session?.user ? (
        <div className="flex flex-col justify-center items-center w-full h-[500px] bg-white border border-gray-200 rounded-t-lg shadow">
          <Button
            onClick={() => {
              handleLogin();
            }}
          >
            S' abonner pour lire la suite
          </Button>
        </div>
      ) : (
        <>
          <div dangerouslySetInnerHTML={{ __html: result.content }} />
          <ContainerComments idArticle={id} tabComments={result.comments} />
        </>
      )}
    </div>
  );
};
