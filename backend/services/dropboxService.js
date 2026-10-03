import { Dropbox } from "dropbox";
import crypto from "crypto";
import path from "path";

async function getAccessToken() {
  const response = await fetch("https://api.dropboxapi.com/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.DROPBOX_REFRESH_TOKEN,
      client_id: process.env.DROPBOX_APP_KEY,
      client_secret: process.env.DROPBOX_APP_SECRET,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error_description || "Failed to get Dropbox access token.");
  }
  return data.access_token;
}

export async function uploadImageToDropbox(file) {
  const accessToken = await getAccessToken();
  const dbx = new Dropbox({ accessToken, fetch });

  const filename = `${Date.now()}-${crypto.randomBytes(6).toString("hex")}${path.extname(file.originalname)}`;
  const dropboxPath = `/students/${filename}`;

  await dbx.filesUpload({
    path: dropboxPath,
    contents: file.buffer,
  });

  const shared = await dbx.sharingCreateSharedLinkWithSettings({ path: dropboxPath });
  const directLink = shared.result.url.replace("dl=0", "raw=1");
  return directLink;
}