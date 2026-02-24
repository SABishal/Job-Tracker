const totalCountEl = document.getElementById("total-count");
const interviewCountEl = document.getElementById("interview-count");
const rejectedCountEl = document.getElementById("rejected-count");
const activeTabCountEl = document.getElementById("active-tab-count");

const tabButtons = document.querySelectorAll(".job-tabs button");

const jobList = document.querySelector(".job-list");
const emptyState = document.querySelector(".empty-state");
const jobsSection = document.querySelector(".jobs-section");

let currentTab = "all";

setActiveTabButton("all");
initializeStatus();
updateAllCounts();
filterJobsByTab("all");
updateTabJobCount("all");


// Tab button handling

tabButtons.forEach((btn) => {

  btn.addEventListener("click", function () {

    const tab = btn.dataset.tab;
    currentTab = tab;

    setActiveTabButton(tab);
    filterJobsByTab(tab);
    updateTabJobCount(tab);

  });

});

// Helper functions

function updateAllCounts() {

  let total = 0;
  let interview = 0;
  let rejected = 0;

  const allCards = document.querySelectorAll(".job-item");

  allCards.forEach((card) => {

    total++;

    const status = card.getAttribute("data-status");

    if (status === "interview") {
      interview++;
    }

    if (status === "rejected") {
      rejected++;
    }

  });

  totalCountEl.innerText = total;
  interviewCountEl.innerText = interview;
  rejectedCountEl.innerText = rejected;

}


function filterJobsByTab(tab) {

  const allCards = document.querySelectorAll(".job-item");

  let visibleCount = 0;

  allCards.forEach((card) => {

    const status = card.getAttribute("data-status");

    if (tab === "all") {
      card.style.display = "block";
      visibleCount++;
    }

    if (tab === "interview") {

      if (status === "interview") {
        card.style.display = "block";
        visibleCount++;
      } else {
        card.style.display = "none";
      }

    }

    if (tab === "rejected") {

      if (status === "rejected") {
        card.style.display = "block";
        visibleCount++;
      } else {
        card.style.display = "none";
      }

    }

  });

  if (visibleCount === 0) {
    emptyState.classList.remove("hidden");
    jobsSection.classList.add("hidden");
  } else {
    emptyState.classList.add("hidden");
    jobsSection.classList.remove("hidden");
  }

}


function updateTabJobCount(tab) {

  let count = 0;

  const allCards = document.querySelectorAll(".job-item");

  allCards.forEach((card) => {

    const status = card.getAttribute("data-status");

    if (tab === "all") {
      count++;
    }

    if (tab === "interview" && status === "interview") {
      count++;
    }

    if (tab === "rejected" && status === "rejected") {
      count++;
    }

  });

  activeTabCountEl.innerText = count + " Jobs";

}


function setActiveTabButton(tab) {

  tabButtons.forEach((btn) => {

    btn.style.backgroundColor = "";
    btn.style.color = "";

    if (btn.dataset.tab === tab) {
      btn.style.backgroundColor = "#3B82F6";
      btn.style.color = "#ffffff";
    }

  });

}


function initializeStatus() {

  const allCards = document.querySelectorAll(".job-item");

  allCards.forEach((card) => {

    if (!card.getAttribute("data-status")) {
      card.setAttribute("data-status", "not-applied");
    }

    const badge = card.querySelector(".job-status");

    if (badge.innerText.trim() === "Not Applied") {

      badge.classList.remove("bg-[#DCFCE7]");
      badge.classList.remove("bg-[#FEE2E2]");
      badge.classList.add("bg-[#153b6444]");
      badge.style.color = "#002C5C";

    }

  });

}