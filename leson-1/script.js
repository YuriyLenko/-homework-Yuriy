function validateData() {
  const nameEl = document.getElementById("name");
  const ageEl = document.getElementById("age");
  const weightEl = document.getElementById("weight");
  const growthEl = document.getElementById("growth");

  const name = nameEl.value;
  const age = ageEl.value;
  const weight = weightEl.value;
  const growth = growthEl.value;

  if (age < 18 || age > 60) {
    alert("Вибачте, здається ви неправильно вказали ваш вік");
  } else if (weight < 50 || weight > 120) {
    alert("Вибачте, здається ви неправильно вказали вашу вагу");
  } else if (growth < 140 || growth > 200) {
    alert("Вибачте, здається ви неправильно вказали ваш зріст");
  } else {
    alert("Вітаємо! Ви успішно створили обліковий запис");
    nameEl.value = "";
    ageEl.value = "";
    weightEl.value = "";
    growthEl.value = "";
  }
}
