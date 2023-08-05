export default function formatDate(datetime: string) {
  return new Date(datetime).toLocaleDateString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
