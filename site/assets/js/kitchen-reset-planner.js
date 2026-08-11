const plannerForm = document.querySelector("#plannerForm");
const plannerSteps = Array.from(document.querySelectorAll(".planner-step"));
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const backButton = document.querySelector("#backButton");
const nextButton = document.querySelector("#nextButton");
const plannerHint = document.querySelector("#plannerHint");
const resultPanel = document.querySelector("#resultPanel");
const resultSummary = document.querySelector("#resultSummary");
const resultSteps = document.querySelector("#resultSteps");
const kitchenPlannerNextStepCta = document.querySelector("#kitchenPlannerNextStepCta");

let currentStep = 0;

const progressLabels = [
  "Begin with your time",
  "Name the heavy spot",
  "Choose dinner support",
  "Set the pace",
];

const nextButtonLabels = [
  "Choose My Focus",
  "Keep Going",
  "Set My Reset Pace",
  "Show My Plan",
];

// Area-specific steps keep the generated reset useful instead of generic.
const areaPlans = {
  dishes: {
    label: "dishes",
    quick: [
      ["Clear the sink first", "Load the dishwasher or wash the largest items so the kitchen immediately feels lighter."],
      ["Set one drying zone", "Choose one towel or rack so clean items have a home while you keep moving."],
    ],
    deep: [
      ["Reset the sink and dishwasher", "Empty clean dishes, load dirty dishes, and hand-wash the oversized pieces."],
      ["Wipe the sink area", "Clean the faucet, sink edge, and splash zone so the reset looks finished."],
    ],
  },
  counters: {
    label: "counters",
    quick: [
      ["Make a counter sweep", "Move mail, toys, and random items into one basket to sort later."],
      ["Wipe the main prep space", "Clean the area where you cook most often so dinner feels easier."],
    ],
    deep: [
      ["Clear every flat surface", "Put away appliances, papers, dishes, and anything that does not belong in the kitchen."],
      ["Clean in zones", "Wipe counters, backsplash spots, knobs, and the table or island."],
    ],
  },
  pantry: {
    label: "pantry",
    quick: [
      ["Check the front row", "Pull expired items and group snacks, breakfast foods, and dinner staples together."],
      ["List what is low", "Write down the three to five pantry items you actually need before shopping."],
    ],
    deep: [
      ["Empty one shelf at a time", "Sort expired, duplicate, and almost-empty items without tearing apart the whole pantry at once."],
      ["Create simple zones", "Group snacks, baking, breakfast, canned goods, and dinner staples so they are easier to find."],
    ],
  },
  refrigerator: {
    label: "refrigerator",
    quick: [
      ["Toss obvious expired food", "Start with containers, produce, and leftovers you already know need to go."],
      ["Create an eat-first spot", "Put food that should be used soon in one visible area."],
    ],
    deep: [
      ["Reset shelf by shelf", "Remove expired items, wipe sticky spots, and group similar foods together."],
      ["Plan around what is open", "Use produce, leftovers, and thawed ingredients before starting a fresh grocery list."],
    ],
  },
  floors: {
    label: "floors",
    quick: [
      ["Pick up the floor first", "Clear bags, toys, towels, and anything that blocks a quick sweep."],
      ["Sweep the main path", "Focus on the cooking triangle, table area, and the spot where crumbs gather."],
    ],
    deep: [
      ["Sweep edges and corners", "Move light items and collect crumbs around baseboards, chairs, and cabinets."],
      ["Mop the busiest zones", "Clean only the highest-traffic areas if time is limited."],
    ],
  },
  everything: {
    label: "the whole kitchen",
    quick: [
      ["Choose the loudest problem", "Start with the one area making the kitchen feel most overwhelming."],
      ["Do a visible reset", "Clear the sink, wipe one counter, and sweep the main floor path."],
    ],
    deep: [
      ["Reset by zones", "Move through dishes, counters, food storage, floors, and meal prep without jumping around."],
      ["Finish with tomorrow", "Leave the kitchen ready for the next meal, not perfect for a magazine."],
    ],
  },
};

const timePlans = {
  10: {
    label: "10 minutes",
    steps: [
      ["Set a timer", "Give yourself permission to stop when the timer ends."],
      ["Pick one finish line", "Choose one visible win instead of trying to fix the whole kitchen."],
    ],
  },
  20: {
    label: "20 minutes",
    steps: [
      ["Start with surfaces", "Clear the area you see first when you walk into the kitchen."],
      ["Reset the next meal", "Make sure you have one simple plan for the next time everyone gets hungry."],
    ],
  },
  30: {
    label: "30 minutes",
    steps: [
      ["Work in zones", "Spend a short block on dishes, surfaces, food storage, and floors."],
      ["Do one detail task", "Add one small finishing task like wiping handles or checking the fridge."],
    ],
  },
  60: {
    label: "60+ minutes",
    steps: [
      ["Open the windows or start music", "Make the reset feel calmer before you begin the deeper work."],
      ["Batch similar tasks", "Do all dishes, then all surfaces, then food storage, then floors."],
    ],
  },
};

const mealPlanningSteps = {
  yes: [
    ["Check what you already have", "Look at the fridge, freezer, and pantry before writing a grocery list."],
    ["Choose one easy meal", "Pick tonight or tomorrow's dinner now so the reset supports real life."],
  ],
  no: [
    ["Skip meal pressure today", "Keep the reset focused on making the room feel calmer."],
  ],
};

const getSelectedValue = (name) => {
  const selected = plannerForm.querySelector(`input[name="${name}"]:checked`);
  return selected ? selected.value : "";
};

const trackPlannerEvent = (name, props = {}) => {
  if (typeof window.plausible !== "function") {
    return;
  }

  window.plausible(name, {
    props: {
      page: window.location.pathname,
      ...props,
    },
  });
};

const updateProgress = () => {
  const stepNumber = currentStep + 1;
  progressText.textContent = progressLabels[currentStep];
  progressBar.style.width = `${(stepNumber / plannerSteps.length) * 100}%`;

  plannerSteps.forEach((step, index) => {
    step.classList.toggle("is-active", index === currentStep);
  });

  backButton.disabled = currentStep === 0;
  nextButton.textContent = nextButtonLabels[currentStep];
  plannerHint.textContent = "";
};

const currentStepIsAnswered = () => {
  const activeStep = plannerSteps[currentStep];
  return Boolean(activeStep.querySelector("input:checked"));
};

const buildPlan = () => {
  const time = getSelectedValue("time");
  const area = getSelectedValue("area");
  const mealPlanning = getSelectedValue("mealPlanning");
  const resetType = getSelectedValue("resetType");
  const resetKey = resetType === "deep" ? "deep" : "quick";
  const areaPlan = areaPlans[area];
  const timePlan = timePlans[time];

  const steps = [
    ...timePlan.steps,
    ...areaPlan[resetKey],
    ...mealPlanningSteps[mealPlanning],
  ];

  if (resetType === "deep") {
    steps.push(["Finish with a reset touch", "Take out trash, replace the dish towel, or light a candle so the kitchen feels done."]);
  } else {
    steps.push(["Stop at good enough", "Take the win and leave the deeper organizing for another day."]);
  }

  resultSummary.textContent = `With ${timePlan.label} and ${areaPlan.label} asking for attention, today's best fit is a ${resetType === "deep" ? "slow, deeper" : "quick and gentle"} reset.`;

  resultSteps.innerHTML = steps
    .slice(0, 7)
    .map(([title, body]) => `<li><h3>${title}</h3><p>${body}</p></li>`)
    .join("");

  resultPanel.hidden = false;
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });

  const trackingProps = {
    time,
    area,
    mealPlanning,
    resetType,
  };

  // Keep the original event name for continuity, and add the clearer audit goal name.
  trackPlannerEvent("Kitchen Reset Plan Generated", trackingProps);
  trackPlannerEvent("Kitchen Reset Planner Completed", trackingProps);
};

nextButton.addEventListener("click", () => {
  if (!currentStepIsAnswered()) {
    plannerHint.textContent = "Nothing has to be perfect. Just pick the closest fit for today.";
    return;
  }

  if (currentStep < plannerSteps.length - 1) {
    currentStep += 1;
    updateProgress();
    return;
  }

  buildPlan();
});

backButton.addEventListener("click", () => {
  if (currentStep === 0) {
    return;
  }

  currentStep -= 1;
  updateProgress();
});

plannerForm.addEventListener("change", () => {
  plannerHint.textContent = "";
});

if (kitchenPlannerNextStepCta) {
  kitchenPlannerNextStepCta.addEventListener("click", () => {
    trackPlannerEvent("Kitchen Planner Next Step CTA Click", {
      label: "Kitchen Planner Free Checklist CTA",
      href: kitchenPlannerNextStepCta.getAttribute("href") || "",
      time: getSelectedValue("time"),
      area: getSelectedValue("area"),
      mealPlanning: getSelectedValue("mealPlanning"),
      resetType: getSelectedValue("resetType"),
    });
  });
}

updateProgress();
