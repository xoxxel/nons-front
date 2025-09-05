export default function ThousandSeparator(number: number | string) {
  if (number === undefined) {
    return "";
  } else {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
