document.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.getElementById("memoryTitle");
  const dateEl = document.getElementById("memoryDate");
  const mediaEl = document.getElementById("memoryMedia");
  const descEl = document.getElementById("memoryDescription");

  const memory = JSON.parse(localStorage.getItem("selectedMemory"));

  if (!memory) {
    titleEl.textContent = "Memory not found";
    return;
  }

  titleEl.textContent = memory.title || "Untitled Memory";
  dateEl.textContent = memory.date || "No date";
  descEl.textContent = memory.description || "";

  if (memory.type === "image") {
    const img = document.createElement("img");
    img.src = memory.url;
    img.className = "memory-image";
    mediaEl.appendChild(img);
  } else if (memory.type === "video") {
    const vid = document.createElement("video");
    vid.src = memory.url;
    vid.controls = true;
    vid.className = "memory-video";
    mediaEl.appendChild(vid);
  } else if (memory.type === "audio") {
    const audio = document.createElement("audio");
    audio.src = memory.url;
    audio.controls = true;
    audio.className = "memory-audio";
    mediaEl.appendChild(audio);
  } else if (memory.type === "text") {
    const text = document.createElement("p");
    text.textContent = memory.text || "No content";
    text.className = "memory-text";
    mediaEl.appendChild(text);
  }
});