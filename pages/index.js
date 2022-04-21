import React, { useEffect } from "react";
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";

const Waitlist = () => {
  const { data: session, status } = useSession()
  const router = useRouter();
 
  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/login");
    }
  }, [session, status]);

  return <div id="preloader" />;
};

export default Waitlist;
