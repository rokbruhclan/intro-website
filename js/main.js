for (let i of document.getElementsByClassName("disc")) {
  i.addEventListener("mousedown", e => {
    navigator.clipboard.writeText(e.path[0].innerHTML);
    alert("Đã sao chép!");
  });
}
for (let i of document.all) {
  i.addEventListener("contextmenu", e => {
    e.preventDefault();
  })
}
