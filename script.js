const categories = {
  addOns: {
    images: [
      "./addons/addon1.jpeg",
      "./addons/addon2.jpeg",
      "./addons/addon3.jpeg",
    ],
    index: 0,
    element: document.getElementById("addOns"),
    nextBtn: "0nextBtn",
    prevBtn: "0prevBtn",
  },

  tops: {
    images: ["./top/top1.jpeg", "./top/top2.jpeg", "./top/top3.jpeg"],
    index: 0,
    element: document.getElementById("tops"),
    nextBtn: "1nextBtn",
    prevBtn: "1prevBtn",
  },

  bottoms: {
    images: ["./bas/bottom1.jpeg", "./bas/bottom2.jpeg", "./bas/bottom3.jpeg"],
    index: 0,
    element: document.getElementById("bottoms"),
    nextBtn: "2nextBtn",
    prevBtn: "2prevBtn",
  },
};

function updateImage(categoryKey) {
  const category = categories[categoryKey];
  if (!category || !category.element) return;

  if (!category.images || category.images.length === 0) {
    category.element.src = "";
    return;
  }

  category.element.src = category.images[category.index];
}

function randomize() {
  for (const key in categories) {
    const category = categories[key];
    category.index = Math.floor(Math.random() * category.images.length);
    updateImage(key);
  }
}

function setupButtons() {
  for (const key in categories) {
    const category = categories[key];

    const next = document.getElementById(category.nextBtn);
    const prev = document.getElementById(category.prevBtn);

    next.addEventListener("click", () => {
      category.index = (category.index + 1) % category.images.length;
      updateImage(key);
    });

    prev.addEventListener("click", () => {
      category.index =
        (category.index - 1 + category.images.length) % category.images.length;
      updateImage(key);
    });
  }
}

function init() {
  setupButtons();

  // Show the first image for each category
  for (const key in categories) {
    updateImage(key);
  }

  document.getElementById("random-btn").addEventListener("click", randomize);
}

init();
