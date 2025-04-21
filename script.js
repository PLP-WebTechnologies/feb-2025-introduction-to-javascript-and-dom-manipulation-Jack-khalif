function changeContent() {
  const desc = document.getElementById("description");
  desc.textContent = "🎉 The text has been changed dynamically!";
  desc.style.color = "green";
  desc.style.fontWeight = "bold";
}

function toggleBox() {
  const container = document.getElementById("boxContainer");
  const existingBox = document.querySelector(".box");

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
  }
}
