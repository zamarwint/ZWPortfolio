"use server";

import { getPresignedUrl } from "@tigrisdata/storage";

export default async function getVideo(slug: string) {
  const videoSlug = slug + ".mp4";
  console.log(videoSlug);

  const result = await getPresignedUrl(videoSlug, {
    method: "get",
    expiresIn: 3600, // URL valid for 1 hour
  });

  if (result.error) {
    console.error("An error occurred: " + result.error.message);
    return;
  }

  return result.data.url;
}
