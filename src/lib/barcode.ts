import bwipjs from "bwip-js";

export async function generateBarcode(text: string) {
  return bwipjs.toBuffer({
    bcid: "code128",
    text,
    scale: 3,
    height: 10,
    includetext: true,
  });
}
