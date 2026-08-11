const choreForm = document.querySelector("#choreChartForm");
const choreSteps = Array.from(document.querySelectorAll(".generator-step"));
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const backButton = document.querySelector("#backButton");
const nextButton = document.querySelector("#nextButton");
const generatorHint = document.querySelector("#generatorHint");
const resultPanel = document.querySelector("#resultPanel");
const resultSummary = document.querySelector("#resultSummary");
const resultNote = document.querySelector("#resultNote");
const resultChores = document.querySelector("#resultChores");
const chartAge = document.querySelector("#chartAge");
const chartFocus = document.querySelector("#chartFocus");
const chartTitle = document.querySelector("#chartTitle");
const printButton = document.querySelector("#printButton");
const choreCommandCenterCta = document.querySelector("#choreCommandCenterCta");

let currentStep = 0;

const stepLabels = [
  "Choose the age range",
  "Pick the home focus",
  "Set the chart length",
];

const nextButtonLabels = ["Continue", "Continue", "Generate chart"];

const focusLabels = {
  morning: "Morning routine",
  "after-school": "After-school reset",
  "kitchen-helper": "Kitchen helper",
  "bedroom-reset": "Bedroom reset",
  "bathroom-helper": "Bathroom helper",
  "laundry-helper": "Laundry helper",
  "pet-care": "Pet care",
  "weekend-reset": "Weekend reset",
  "general-reset": "General family reset",
};

const ageLabels = {
  "3-5": "Ages 3 to 5",
  "6-8": "Ages 6 to 8",
  "9-12": "Ages 9 to 12",
  "13-17": "Ages 13 to 17",
};

const ageSummaryCopy = {
  "3-5": "Use adult judgment and keep each chore short, simple, and supervised.",
  "6-8": "Use adult judgment and keep each chore to one simple action.",
  "9-12": "Use adult judgment and adjust the chart to your child's routine and readiness.",
  "13-17": "Use adult judgment and adapt the chart to fit independence and household needs.",
};

const choreBanks = {
  morning: [
    "Make bed",
    "Put pajamas away",
    "Brush teeth",
    "Get dressed",
    "Carry dishes to sink",
    "Pack bag",
    "Clear nightstand",
    "Tidy floor space",
  ],
  "after-school": [
    "Hang up backpack",
    "Put shoes away",
    "Put papers in folder",
    "Clear snack items",
    "Tidy one surface",
    "Start homework spot",
    "Reset lunch box",
    "Put away coat",
  ],
  "kitchen-helper": [
    "Clear the table",
    "Wipe the table",
    "Put dishes in sink",
    "Load the dishwasher",
    "Wipe counters",
    "Sweep crumbs",
    "Take out trash",
    "Put napkins away",
  ],
  "bedroom-reset": [
    "Make bed",
    "Put clothes in hamper",
    "Put books away",
    "Put toys away",
    "Clear floor",
    "Straighten a shelf",
    "Close dresser drawers",
    "Put laundry in basket",
  ],
  "bathroom-helper": [
    "Hang towel",
    "Put items in cabinet",
    "Wipe sink",
    "Put trash in bin",
    "Check mirror spot",
    "Restock soap",
    "Wipe counter edge",
    "Put laundry in hamper",
  ],
  "laundry-helper": [
    "Gather laundry",
    "Sort light and dark clothes",
    "Match socks",
    "Fold towels",
    "Put clothes away",
    "Carry basket to room",
    "Put folded items on shelf",
    "Bring clean laundry to parent",
  ],
  "pet-care": [
    "Fill water bowl",
    "Fill food bowl",
    "Brush pet",
    "Pick up toys",
    "Help with leash or carrier",
    "Clean pet area",
    "Put supplies away",
    "Check pet bed",
  ],
  "weekend-reset": [
    "Pick up one room",
    "Gather stray items",
    "Empty trash",
    "Reset shoes and bags",
    "Prepare school items",
    "Wipe one surface",
    "Put laundry in basket",
    "Sweep the main path",
  ],
  "general-reset": [
    "Pick up floor items",
    "Put away dishes",
    "Wipe one surface",
    "Sort papers",
    "Clear one basket",
    "Reset the entry area",
    "Return items to rooms",
    "Check for stray clutter",
  ],
};

const getSelectedValue = (name) => {
  const selected = choreForm.querySelector(`input[name="${name}"]:checked`);
  return selected ? selected.value : "";
};

const trackEvent = (name, props = {}) => {
  if (typeof window.plausible === "function") {
    window.plausible(name, {
      props: {
        page: window.location.pathname,
        ...props,
      },
    });
  }
};

const updateProgress = () => {
  progressText.textContent = stepLabels[currentStep];
  progressBar.style.width = `${((currentStep + 1) / choreSteps.length) * 100}%`;

  choreSteps.forEach((step, index) => {
    step.classList.toggle("is-active", index === currentStep);
  });

  backButton.disabled = currentStep === 0;
  nextButton.textContent = nextButtonLabels[currentStep];
  generatorHint.textContent = "";
};

const currentStepIsAnswered = () => {
  const activeStep = choreSteps[currentStep];
  return Boolean(activeStep.querySelector("input:checked"));
};

const buildChart = () => {
  const ageRange = getSelectedValue("ageRange");
  const homeFocus = getSelectedValue("homeFocus");
  const chartLength = Number.parseInt(getSelectedValue("chartLength"), 10);
  const focusLabel = focusLabels[homeFocus];
  const ageLabel = ageLabels[ageRange];
  const bank = choreBanks[homeFocus];
  const requestedLength = chartLength;
  const actualLength = ageRange === "3-5" && chartLength > 4 ? 4 : chartLength;
  const chores = bank.slice(0, actualLength);
  const simplified = ageRange === "3-5" && requestedLength > 4;

  chartTitle.textContent = "My Chore Chart";
  chartAge.textContent = ageLabel;
  chartFocus.textContent = focusLabel;

  resultSummary.textContent = simplified
    ? `You requested ${requestedLength} chores, but ages 3 to 5 were simplified to 4 age-appropriate chores.`
    : `This chart gives you ${actualLength} chore${actualLength === 1 ? "" : "s"} for ${focusLabel.toLowerCase()}.`;

  resultNote.textContent = `${ageSummaryCopy[ageRange]}${simplified ? " The chart was simplified to avoid filler or duplicate chores." : ""}`;

  resultChores.innerHTML = chores
    .map((chore) => `<li><span aria-hidden="true">☐</span><div><h3>${chore}</h3><p>Use adult judgment and adjust as needed.</p></div></li>`)
    .join("");

  resultPanel.hidden = false;
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });

  const trackingProps = {
    ageRange,
    homeFocus,
    chartLength: actualLength,
    simplified,
  };

  // Keep the original event name for continuity, and add the clearer audit goal name.
  trackEvent("Chore Chart Generated", trackingProps);
  trackEvent("Chore Chart Generator Completed", trackingProps);
};

nextButton.addEventListener("click", () => {
  if (!currentStepIsAnswered()) {
    generatorHint.textContent = "Pick the closest fit for today. Nothing has to be perfect.";
    return;
  }

  trackEvent("Chore Chart Step Completed", {
    step: stepLabels[currentStep],
    ageRange: getSelectedValue("ageRange"),
    homeFocus: getSelectedValue("homeFocus"),
    chartLength: getSelectedValue("chartLength"),
  });

  if (currentStep < choreSteps.length - 1) {
    currentStep += 1;
    updateProgress();
    return;
  }

  buildChart();
});

backButton.addEventListener("click", () => {
  if (currentStep === 0) {
    return;
  }

  currentStep -= 1;
  updateProgress();
});

choreForm.addEventListener("change", () => {
  generatorHint.textContent = "";
});

printButton.addEventListener("click", () => {
  trackEvent("Chore Chart Printed", {
    ageRange: getSelectedValue("ageRange"),
    homeFocus: getSelectedValue("homeFocus"),
    chartLength: getSelectedValue("chartLength"),
  });

  window.print();
});

if (choreCommandCenterCta) {
  choreCommandCenterCta.addEventListener("click", () => {
    trackEvent("Chore Chart Home Command Center CTA Click", {
      label: "Chore Chart Home Command Center CTA",
      href: choreCommandCenterCta.getAttribute("href") || "",
      ageRange: getSelectedValue("ageRange"),
      homeFocus: getSelectedValue("homeFocus"),
      chartLength: getSelectedValue("chartLength"),
    });
  });
}

trackEvent("Chore Chart Generator Viewed");
updateProgress();
