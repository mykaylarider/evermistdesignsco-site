const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const cleanAnalyticsHref = (href) => {
  if (!href) {
    return "";
  }

  try {
    const url = new URL(href, window.location.href);
    return `${url.hostname}${url.pathname}`;
  } catch (_error) {
    return href.split(/[?#]/)[0];
  }
};

const trackAnalyticsEvent = (eventName, props = {}) => {
  if (typeof window.plausible !== "function") {
    return;
  }

  window.plausible(eventName, {
    props: {
      page: window.location.pathname,
      ...props,
    },
  });
};

document.addEventListener("click", (event) => {
  const link = event.target.closest("a");

  if (!link) {
    return;
  }

  const rawHref = link.getAttribute("href") || "";
  const href = cleanAnalyticsHref(rawHref);
  const label = (link.dataset.analyticsLabel || link.textContent || "").trim().replace(/\s+/g, " ");
  const isTrackedButton = link.matches(".button, .text-link, .link-panel a, .site-nav a");
  const isDownload = link.hasAttribute("download") || /\.(pdf|zip|csv|xlsx|docx)(?:$|[?#])/i.test(rawHref);

  if (isTrackedButton) {
    trackAnalyticsEvent("Button Click", {
      label,
      href,
    });
  }

  if (isDownload) {
    trackAnalyticsEvent("File Download", {
      label,
      file: href,
    });
  }

  try {
    const url = new URL(rawHref, window.location.href);

    if (url.hostname !== window.location.hostname && /^https?:$/.test(url.protocol)) {
      trackAnalyticsEvent("Outbound Link: Click", {
        label,
        destination: `${url.hostname}${url.pathname}`,
      });
    }
  } catch (_error) {
    // Ignore non-URL links such as anchors.
  }
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const revealItems = document.querySelectorAll(".section, .page-hero");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => {
    item.classList.add("reveal");
    revealObserver.observe(item);
  });
}
