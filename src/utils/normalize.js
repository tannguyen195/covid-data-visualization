import chroma from "chroma-js";

export function normalizeNumber(number) {
  return number.toLocaleString()
}

export function normalText(text) {
  if (text === "Bà Rịa – Vũng Tàu") return "Vung_Tau";
  if (text === "TP. Hồ Chí Minh") return "Ho_Chi_Minh";
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/ /g, "_");
}

export function normalizeLocation(locations) {
  return locations.map((province, index) => {
    return {
      ...province,
      id: index,
      normalizedName: normalText(province.name),
    };
  });
}

export function getProvinceByName(name, provinces) {
  const province = provinces.find((item) => {
    return item.normalizedName === name;
  });
  return province;
}

export function generateColor(province) {
  const color_scale = chroma.scale(["#f00", "#0f0"]).colors(63);
  return color_scale[province.id];
}
