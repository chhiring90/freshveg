export default function srcToAlt(src) {
  const srcArray = src.split("/");
  return srcArray[srcArray.length - 1].split(".")[0];
}
