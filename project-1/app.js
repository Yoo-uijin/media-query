window.onresize = screen;
window.onload = screen;

function screen() {
  myWidth = document.documentElement.clientWidth;

  document.getElementById("size").innerHTML = `Width : ${myWidth}px`;
}
