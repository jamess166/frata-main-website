export function getYoutubeEmbedUrl(youtubeUrl: string, youtubeId: string) {
  if (youtubeId) {
    return `https://www.youtube.com/embed/${youtubeId}`;
  }

  if (!youtubeUrl) {
    return "";
  }

  try {
    const url = new URL(youtubeUrl);

    if (url.hostname.includes("youtu.be")) {
      const id = url.pathname.replace("/", "").trim();
      return id ? `https://www.youtube.com/embed/${id}` : "";
    }

    if (url.hostname.includes("youtube.com")) {
      const id = url.searchParams.get("v") || url.pathname.split("/").filter(Boolean).pop();
      return id ? `https://www.youtube.com/embed/${id}` : "";
    }
  } catch {
    return "";
  }

  return "";
}
