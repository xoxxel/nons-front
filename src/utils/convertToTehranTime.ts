import jalaliDate from "./jalaliDate";

export default function convertToTehranTime(time: string | Date) {
  const originalTime = jalaliDate(time, "HH:mm");
  const [hours, minutes] = originalTime.split(":").map(Number);
  const originalDate = new Date();

  // Set the original time
  originalDate.setUTCHours(hours - 0, minutes);

  // Tehran's offset is UTC+3:30
  const tehranOffset = 3.5;
  const tehranDate = new Date(
    originalDate.getTime() + tehranOffset * 60 * 60 * 1000
  );

  const tehranHours = String(tehranDate.getUTCHours()).padStart(2, "0");
  const tehranMinutes = String(tehranDate.getUTCMinutes()).padStart(2, "0");

  return `${tehranHours}:${tehranMinutes}`;
}
