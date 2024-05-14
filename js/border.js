const bt_width = document.getElementById("bt_width");
const br_width = document.getElementById("br_width");
const bb_width = document.getElementById("bb_width");
const bl_width = document.getElementById("bl_width");

const border = document.getElementById("border_custom_width");
console.log(bt_width);

bt_width.addEventListener("input", (e) => {
  const btw_value = e.target.value;
  if (btw_value) {
    border.style.borderTopWidth = btw_value + "px";
  }
  console.log("box ", border);
});
br_width.addEventListener("input", (e) => {
  const brw_value = e.target.value;
  if (brw_value) {
    border.style.borderRightWidth = brw_value + "px";
  }
  console.log("box ", border);
});
bb_width.addEventListener("input", (e) => {
  const bbw_value = e.target.value;
  if (bbw_value) {
    border.style.borderBottomWidth = bbw_value + "px";
  }
  console.log("box ", border);
});
bl_width.addEventListener("input", (e) => {
  const blw_value = e.target.value;
  if (blw_value) {
    border.style.borderLeftWidth = blw_value + "px";
  }
  console.log("box ", border);
});
