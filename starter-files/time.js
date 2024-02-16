const timeZone = "Asia/Bangkok";

export const displayTime = function (time_string) {
  const date = new Date(time_string);
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  }).format(date);
};
