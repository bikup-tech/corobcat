export default function getColorByPriority(priority: number) {
  let bgColor = "";
  if (priority > 0 && priority <= 2) {
    bgColor = "rgba(93, 172, 245, 0.5)";
  }
  if (priority > 2 && priority <= 4) {
    bgColor = "rgba(1, 187, 63, 0.5)";
  }
  if (priority > 4 && priority <= 8) {
    bgColor = "rgba(255, 163, 15, 0.5)";
  }
  if (priority > 8 && priority <= 10) {
    bgColor = "rgba(246, 91, 92, 0.5)";
  }

  return bgColor;
}
