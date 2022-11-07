const img1 =
  "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";
const img2 =
  "https://images.unsplash.com/photo-1629881635342-c1272d45d0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80";
const img3 =
  "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";

var currentImgName = "truck1";

function changeImg(imgName) {
  const mainImgE1 = document.getElementById("main-img");

  if (imgName === "truck1") {
    mainImgE1.src = img1;
  }

  if (imgName === "truck2") {
    mainImgE1.src = img2;
  }

  if (imgName === "truck3") {
    mainImgE1.src = img3;
  }

  currentImgName = imgName;
  changeActiveClass();
}

function goNext() {
  if (currentImgName === "truck1") {
    changeImg("truck2");
  } else if (currentImgName === "truck2") {
    changeImg("truck3");
  } else if (currentImgName === "truck3") {
    changeImg("truck1");
  }
}

function goPrev() {
  if (currentImgName === "truck1") {
    changeImg("truck3");
  } else if (currentImgName === "truck2") {
    changeImg("truck1");
  } else if (currentImgName === "truck3") {
    changeImg("truck2");
  }
}

function changeActiveClass() {
  const dotEl1 = document.getElementById("dot1");
  const dotEl2 = document.getElementById("dot2");
  const dotEl3 = document.getElementById("dot3");

  dotEl1.classList.remove("active");
  dotEl2.classList.remove("active");
  dotEl3.classList.remove("active");

  if (currentImgName === "truck1") {
    dotEl1.classList.add("active");
  }
  if (currentImgName === "truck2") {
    dotEl2.classList.add("active");
  }
  if (currentImgName === "truck3") {
    dotEl3.classList.add("active");
  }
}
