function showResult() {
  const backgroundColorEl = document.getElementById("background-color");
  const borderRadiusEl = document.getElementById("border-radius");
  const borderWidthEl = document.getElementById("border-width");
  const widthhEl = document.getElementById("width");
  const heightEl = document.getElementById("height");
  const resultEl = document.getElementById("result");

  resultEl.style.backgroundColor = backgroundColorEl.value;
  resultEl.style.borderRadius = borderRadiusEl.value;
  resultEl.style.borderWidth = borderWidthEl.value;
  resultEl.style.width = widthhEl.value;
  resultEl.style.height = heightEl.value;

  backgroundColorEl.value = "";
  borderRadiusEl.value = "";
  borderWidthEl.value = "";
  widthhEl.value = "";
  heightEl.value = "";
}
