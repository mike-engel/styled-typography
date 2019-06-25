export const hexToRgba = (hex: string, alpha: number) => {
  const r = hex.substr(1, 2);
  const g = hex.substr(3, 2);
  const b = hex.substr(5, 2);

  return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${alpha})`;
};

export const pSBCr = (color: string) => {
  const l = color.length;
  const RGB: Record<string, any> = {};

  if (l > 9) {
    const colorArr = color.split(",");

    if (colorArr.length < 3 || colorArr.length > 4) return null;

    RGB[0] = parseInt(colorArr[0].split("(")[1]);
    RGB[1] = parseInt(colorArr[1]);
    RGB[2] = parseInt(colorArr[2]);
    RGB[3] = colorArr[3] ? parseFloat(colorArr[3]) : -1;
  } else {
    let colorStr: string | number = color;

    if (l == 8 || l == 6 || l < 4) return null;

    if (l < 6) {
      colorStr =
        "#" +
        color[1] +
        color[1] +
        color[2] +
        color[2] +
        color[3] +
        color[3] +
        (l > 4 ? color[4] + "" + color[4] : "");
    }

    const colorInt = parseInt(colorStr.slice(1), 16);

    RGB[0] = (colorInt >> 16) & 255;
    RGB[1] = (colorInt >> 8) & 255;
    RGB[2] = colorInt & 255;
    RGB[3] = -1;

    if (l == 9 || l == 5) {
      RGB[3] = Math.round((RGB[2] / 255) * 10000) / 10000;
      RGB[2] = RGB[1];
      RGB[1] = RGB[0];
      RGB[0] = (colorInt >> 24) & 255;
    }
  }

  return RGB;
};

export const pSBC = function(percentage: number, from: string, to?: string) {
  if (percentage < -1 || percentage > 1 || (from[0] != "r" && from[0] != "#")) {
    return null;
  }

  const isHex = from.length > 9;
  const isRgb = !!to ? (to.length > 9 ? true : to == "c" ? !isHex : false) : isHex;
  const makeDarker = percentage < 0;
  const delta = makeDarker ? percentage * -1 : percentage;
  const normalizedTo = !!to && to != "c" ? to : makeDarker ? "#000000" : "#FFFFFF";
  const f = pSBCr(from);
  const t = pSBCr(normalizedTo);

  if (!f || !t) return null;

  if (isRgb) {
    return (
      "rgb" +
      (f[3] > -1 || t[3] > -1 ? "a(" : "(") +
      Math.round((t[0] - f[0]) * delta + f[0]) +
      "," +
      Math.round((t[1] - f[1]) * delta + f[1]) +
      "," +
      Math.round((t[2] - f[2]) * delta + f[2]) +
      (f[3] < 0 && t[3] < 0
        ? ")"
        : "," +
          (f[3] > -1 && t[3] > -1
            ? Math.round(((t[3] - f[3]) * delta + f[3]) * 10000) / 10000
            : t[3] < 0
            ? f[3]
            : t[3]) +
          ")")
    );
  } else {
    return (
      "#" +
      (
        0x100000000 +
        Math.round((t[0] - f[0]) * delta + f[0]) * 0x1000000 +
        Math.round((t[1] - f[1]) * delta + f[1]) * 0x10000 +
        Math.round((t[2] - f[2]) * delta + f[2]) * 0x100 +
        (f[3] > -1 && t[3] > -1
          ? Math.round(((t[3] - f[3]) * delta + f[3]) * 255)
          : t[3] > -1
          ? Math.round(t[3] * 255)
          : f[3] > -1
          ? Math.round(f[3] * 255)
          : 255)
      )
        .toString(16)
        .slice(1, f[3] > -1 || t[3] > -1 ? undefined : -2)
    );
  }
};

export const light = "#ceeaeb";
export const dark = "#0e425e";
