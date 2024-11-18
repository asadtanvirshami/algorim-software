export const getColor = (
  completionPercentage: number | string | undefined
): string => {
  if (typeof completionPercentage === "number") {
    if (completionPercentage <= 10) return "red";
    if (completionPercentage < 20) return "red";
    if (completionPercentage < 30) return "orange";
    if (completionPercentage < 50) return "yellow";
    if (completionPercentage < 60) return "lightpurple";
    if (completionPercentage === 100) return "green";
  }
  if (completionPercentage === "In progress") return "aqua";
  if (completionPercentage === "Paused") return "red";
};
