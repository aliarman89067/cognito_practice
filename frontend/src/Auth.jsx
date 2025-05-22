import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Auth() {
  const apiUri = import.meta.env.VITE_API_URI;
  const [searchParams] = useSearchParams();
  const authorizationCode = searchParams.get("code");
  const state = searchParams.get("state");

  useEffect(() => {
    fetch(apiUri + "/token?code=" + authorizationCode + "&state=" + state, {
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) window.location.href = "/";
      })
      .catch((err) => console.log(error));
  });
  return <div>Authenticating....</div>;
}
