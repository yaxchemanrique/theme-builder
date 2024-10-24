function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  const hslObj = {
    h,
    s,
    l
  };

  return hslObj;
}

export function hslToHex(hslString) {
  // Extract HSL values from the string (e.g., hsl(27 35.31% 98%))
  const hslMatch = hslString.match(/hsl\((\d+)\s+(\d+\.?\d*)%\s+(\d+\.?\d*)%\)/);

  if (!hslMatch) {
    throw new Error('Invalid HSL format');
  }

  let h = parseInt(hslMatch[1]);
  let s = parseFloat(hslMatch[2]) / 100;
  let l = parseFloat(hslMatch[3]) / 100;

  // Function to convert a number to a two-digit hex
  function toHex(value) {
    const hex = Math.round(value).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  // Convert HSL to RGB
  let c = (1 - Math.abs(2 * l - 1)) * s;
  let x = c * (1 - Math.abs((h / 60) % 2 - 1));
  let m = l - c / 2;

  let r = 0, g = 0, b = 0;

  if (h >= 0 && h < 60) {
    r = c; g = x; b = 0;
  } else if (h >= 60 && h < 120) {
    r = x; g = c; b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; b = x;
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; b = c;
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; b = c;
  } else if (h >= 300 && h < 360) {
    r = c; g = 0; b = x;
  }

  // Adjust RGB values and convert to Hex
  r = toHex((r + m) * 255);
  g = toHex((g + m) * 255);
  b = toHex((b + m) * 255);

  // Return the concatenated hex string without the '#'
  return `${r}${g}${b}`;
}

export function createThemeArr(hex) {
  let hlsVal = hexToHSL(hex);
  const arr = (new Array(13)).fill(0);
  const numberValues = [1000, 950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50, 0];
  let themeArr = []
  arr.forEach((value, i) => {
    const lightnessVariation = (hlsVal.l + (i - 6) * 8).toFixed(2);
    const saturationVariation = (hlsVal.s * (1 - Math.abs(i - 6) / 14)).toFixed(2);
    const valueObj = {
      code: `hsl(${hlsVal.h} ${Math.max(0, Math.min(100, saturationVariation))}% ${Math.max(10, Math.min(98, lightnessVariation))}%)`,
      number: numberValues[i]
    }
    themeArr.unshift(valueObj);
  })
  return themeArr;
}