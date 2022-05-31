export const everywhere = "Mọi nơi";

export const convertNameWagon = (type) => {
  switch (type) {
    case "nmdh":
      return "Ngồi mềm điều hoà";
    case "ncdh":
      return "Ngồi cứng điều hoà";
    case "nk4dh":
      return "Nằm khoang 4";
    case "nk6dh":
      return "Nằm khoang 6";
    default:
      break;
  }
};
