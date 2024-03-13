"use client";
import { Button } from "@/components/ui/button";
import GithubIcon from "../../../public/github-white.svg";
import Image from "next/image";
import { signIn } from "next-auth/react";

import React from "react";

const GithubSignInButton = () => {
  return (
    <Button onClick={() => signIn("github")} variant="outline" size="icon">
      <Image src={GithubIcon} alt="Github" className="h-5 w-5" />
    </Button>
  );
};

export default GithubSignInButton;
