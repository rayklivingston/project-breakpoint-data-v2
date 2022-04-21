import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function RedirectComp() {
  const {data: session, status} = useSession();
  const router = useRouter();
 
  useEffect(() => {
    if (status === 'authenticated' && session) {
      router.push("/dashboard");
    }
    if (status !== 'authenticated') {
      router.push("/login");
    }
  }, [status]);

  return <div id="preloader" />;
};
