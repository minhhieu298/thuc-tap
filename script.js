function showTable() {
  const table_1 = document.getElementById("table_1");
  const table_2 = document.getElementById("table_2");
  const table_3 = document.getElementById("table_3");
  const table_4 = document.getElementById("table_4");

  const container = document.getElementById("container");

  if (table_1.style.display === "none") {
    table_1.style.display = "block";
  } else {
    table_1.style.display = "none";
  }

  if (table_2.style.display === "block") {
    table_2.style.display = "none";
  } else {
    table_2.style.display = "block";
  }

  if (table_3.style.display === "block") {
    table_3.style.display = "none";
  } else {
    table_3.style.display = "block";
  }

  if (container.classList.contains("container")) {
    container.classList.remove("container");
    container.classList.remove("px-40");
    container.classList.add("px-10");
  } else {
    container.classList.add("container");
    container.classList.add("px-40");
    container.classList.remove("px-10");
  }

  if (table_4.classList.contains("w-1/2")) {
    table_4.classList.remove("w-1/2");
  } else {
    table_4.classList.add("w-1/2");
  }
}
