/**
 * main.js
 * ------------------------------------------------------------------
 * Renders content from data.js into the page, then wires up:
 * - sticky header state on scroll
 * - active-section nav highlighting
 * - mobile nav toggle
 * - scroll-triggered reveal animations (respects prefers-reduced-motion)
 * - expandable project case-study cards
 * ------------------------------------------------------------------
 */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------------------------------------------------------------
   * Render: Skills
   * ------------------------------------------------------------- */
  function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    if (!grid) return;

    grid.innerHTML = SKILL_GROUPS.map(
      (group) => `
      <div class="skill-card reveal">
        <h3>${group.title}</h3>
        <ul class="skill-tags">
          ${group.items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `
    ).join("");
  }

  /* ---------------------------------------------------------------
   * Render: Projects
   * ------------------------------------------------------------- */
  function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    grid.innerHTML = PROJECTS.map((project, index) => {
      const panelId = `project-panel-${index}`;
      return `
      <article class="project-card reveal">
        <button class="project-summary" aria-expanded="false" aria-controls="${panelId}">
          <div class="project-summary-text">
            <h3>${project.name}</h3>
            <p>${project.tagline}</p>
            <ul class="tech-tags">
              ${project.tech.map((t) => `<li>${t}</li>`).join("")}
            </ul>
          </div>
          <span class="project-toggle" aria-hidden="true"></span>
        </button>

        <div class="project-panel" id="${panelId}" hidden>
          <p class="project-overview">${project.description}</p>

          <div class="project-panel-grid">
            <div>
              <h4>What I built</h4>
              <ul class="project-features">
                ${project.features.map((f) => `<li>${f}</li>`).join("")}
              </ul>
            </div>
            <div class="project-links">
              <a class="btn btn-ghost btn-small" href="${project.github}" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
              ${
                project.demo
                  ? `<a class="btn btn-primary btn-small" href="${project.demo}" target="_blank" rel="noopener noreferrer">Live demo</a>`
                  : ""
              }
            </div>
          </div>
        </div>
      </article>
    `;
    }).join("");

    grid.querySelectorAll(".project-summary").forEach((btn) => {
      btn.addEventListener("click", () => {
        const panel = document.getElementById(
          btn.getAttribute("aria-controls")
        );
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!expanded));
        if (panel) panel.hidden = expanded;
      });
    });
  }

  /* ---------------------------------------------------------------
   * Render: Learning journey
   * ------------------------------------------------------------- */
  function renderJourney() {
    const track = document.getElementById("journeyTrack");
    if (!track) return;

    track.innerHTML = JOURNEY.map(
      (step, index) => `
      <li class="journey-step reveal">
        <div class="journey-index">${String(index + 1).padStart(2, "0")}</div>
        <div class="journey-content">
          <h3>${step.stage}</h3>
          <ul>
            ${step.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </li>
    `
    ).join("");
  }

  /* ---------------------------------------------------------------
   * Render: Education subjects
   * ------------------------------------------------------------- */
  function renderEducation() {
    const wrap = document.getElementById("educationSubjects");
    if (!wrap) return;

    wrap.innerHTML = `
      <span class="education-subjects-label">Areas of study</span>
      <ul>
        ${EDUCATION_SUBJECTS.map((s) => `<li>${s}</li>`).join("")}
      </ul>
    `;
  }

  /* ---------------------------------------------------------------
   * Render: Contact links
   * ------------------------------------------------------------- */
  function renderContact() {
    const wrap = document.getElementById("contactLinks");
    if (!wrap) return;

    wrap.innerHTML = CONTACT_LINKS.map(
      (link) => `
      <a class="contact-link ${link.placeholder ? "is-placeholder" : ""}" href="${link.href}"
         ${link.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>
        <span class="contact-link-label">${link.label}</span>
        <span class="contact-link-value">${link.value}</span>
      </a>
    `
    ).join("");
  }

  /* ---------------------------------------------------------------
   * Header: scrolled state + mobile nav
   * ------------------------------------------------------------- */
  function initHeader() {
    const header = document.getElementById("siteHeader");
    const toggle = document.getElementById("navToggle");
    const mobileNav = document.getElementById("mobileNav");
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle && mobileNav) {
      toggle.addEventListener("click", () => {
        const open = header.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", String(open));
      });

      mobileNav.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          header.classList.remove("nav-open");
          toggle.setAttribute("aria-expanded", "false");
        })
      );
    }
  }

  /* ---------------------------------------------------------------
   * Active section highlighting in nav
   * ------------------------------------------------------------- */
  function initActiveNav() {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
    if (!sections.length || !navLinks.length) return;

    const setActive = (id) => {
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
  }

  /* ---------------------------------------------------------------
   * Scroll reveal
   * ------------------------------------------------------------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (prefersReducedMotion) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    items.forEach((el) => observer.observe(el));
  }

  /* ---------------------------------------------------------------
   * Hero node-graph: single page-load animation moment
   * ------------------------------------------------------------- */
  function initNodeGraph() {
    const svg = document.getElementById("nodeGraph");
    if (!svg || prefersReducedMotion) return;

    const lines = svg.querySelectorAll(".ng-lines line");
    const nodes = svg.querySelectorAll(".ng-nodes circle");

    lines.forEach((line, i) => {
      const length = Math.hypot(
        line.x2.baseVal.value - line.x1.baseVal.value,
        line.y2.baseVal.value - line.y1.baseVal.value
      );
      line.style.strokeDasharray = `${length}`;
      line.style.strokeDashoffset = `${length}`;
      line.style.animation = `draw-line 0.9s ease-out forwards`;
      line.style.animationDelay = `${0.15 + i * 0.06}s`;
    });

    nodes.forEach((node, i) => {
      node.style.opacity = "0";
      node.style.transformOrigin = `${node.cx.baseVal.value}px ${node.cy.baseVal.value}px`;
      node.style.animation = `pop-node 0.5s ease-out forwards`;
      node.style.animationDelay = `${0.5 + i * 0.05}s`;
    });
  }

  /* ---------------------------------------------------------------
   * Init
   * ------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderSkills();
    renderProjects();
    renderJourney();
    renderEducation();
    renderContact();

    initHeader();
    initActiveNav();
    initReveal();
    initNodeGraph();
  });
})();
