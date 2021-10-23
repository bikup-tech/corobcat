import dayjs from "dayjs";

export default function formatDate(date: string | null) {
  if (!date) {
    return "-";
  }
  return dayjs(date).format("DD/MM/YY HH:mm");
}
