export const revalidate = 120;
export const dynamic = "auto";
export const fetchCache = "force-dynamic";
import React from "react";
export default async function Page() {
  return (
    <div>
      <h1>Page</h1>
      <p>This is a page</p>
    </div>
  );
}
