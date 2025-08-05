import type { APIRoute } from "astro";
import sharp from "sharp";
import ico from "sharp-ico";
import path from "node:path";

const faviconSrc = path.resolve("src/images/icon.png");

export const GET: APIRoute = async () => {

  // Resize the image to multiple sizes
  const sizes = [16, 32];

  const buffers = await Promise.all(
    sizes.map(async (size) => {
      return await sharp(faviconSrc)
        .resize(size)
        .toFormat("png")
        .toBuffer();
    })
  );

  // Convert the image to an ICO file
  const icoBuffer = ico.encode(buffers);

  return new Response(new Uint8Array(icoBuffer), {
        headers: { "Content-Type": "image/x-icon" },
    });
};
