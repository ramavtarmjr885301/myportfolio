"use client";

import { useState } from "react";
import { AVATAR_SRC, profile } from "@/lib/data";

export default function Avatar() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="avatar-circle">
      {failed ? (
        profile.initials
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={AVATAR_SRC} alt={profile.name} onError={() => setFailed(true)} />
      )}
    </div>
  );
}
