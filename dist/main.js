(() => {
  const e = document.querySelector(".header"),
    t = document.createElement("div");
  t.classList.add("top-nav"), e.appendChild(t);
  const n = document.createElement("p");
  (n.textContent = "Jinggg"), t.appendChild(n);
  const a = document.createElement("div");
  a.classList.add("top-btn-groups");
  const o = document.createElement("button");
  (o.textContent = "Home"), a.appendChild(o);
  const d = document.createElement("button");
  (d.textContent = "About"), a.appendChild(d);
  const c = document.createElement("button");
  (c.textContent = "Contact"),
    a.appendChild(c),
    t.appendChild(a),
    e.appendChild(t);
  const i = document.createElement("div");
  i.classList.add("sec-nav");
  const s = document.createElement("div");
  s.classList.add("sec-btn-groups");
  const l = document.createElement("button");
  (l.textContent = "Data Projects"), s.appendChild(l);
  const r = document.createElement("button");
  (r.textContent = "Web Dev"), s.appendChild(r);
  const p = document.createElement("button");
  (p.textContent = "Hardware Dev"), s.appendChild(p);
  const m = document.createElement("button");
  (m.textContent = "Publications"), s.appendChild(m);
  const h = document.createElement("button");
  (h.textContent = "Misc."),
    s.appendChild(h),
    i.appendChild(s),
    e.appendChild(i);
  const u = document.querySelector(".content"),
    g = document.createElement("div");
  g.classList.add("left-intro"), u.appendChild(g);
  const C = document.createElement("p");
  (C.textContent = "Jing Wei - A Tech All-rounder"), g.appendChild(C);
  const b = document.createElement("p");
  (b.textContent = "PhD Candidate @ University of Melbourne"), g.appendChild(b);
  const E = document.createElement("p");
  (E.textContent =
    "Over the past 7 years, my research has focused on areas such as wearable technology, contactless sensing, voice assistants, and most recently - ChatGPT. With a diverse skill set in software, hardware, and data analysis, I am dedicated to designing intuitive and user-friendly solutions that enhance the way we interact with technology."),
    g.appendChild(E);
  const v = document.createElement("button");
  (v.textContent = "Download my CV"),
    g.appendChild(v),
    v.addEventListener("click", () => {
      window.location.href = "./info/Resume.pdf";
    });
  const w = document.createElement("div");
  w.classList.add("right-img"), u.appendChild(w);
  const y = [
      "./images/chatbot.png",
      "./images/speaker.png",
      "./images/delay.png",
      "./images/wearable.png",
      "./images/respiration.png",
      "./images/web.png",
    ],
    x = [
      "GPT-3 Chatbot",
      "Proactive Smart Speaker",
      "Speaker Network Delay Analysis",
      "Sleep Monitoring Through Wearable",
      "Wireless Respiration Tracking",
      "Web Development Projects",
    ];
  for (let e = 0; e < 6; e++) {
    const t = document.createElement("div"),
      n = document.createElement("img");
    n.src = y[e];
    const a = document.createElement("div"),
      o = document.createElement("p");
    (o.textContent = x[e]),
      a.appendChild(o),
      a.classList.add("overlay"),
      t.appendChild(n),
      t.appendChild(a),
      w.appendChild(t);
  }
  const f = document.querySelector(".footer"),
    k = [
      "./images/github.svg",
      "./images/linkedin.svg",
      "./images/school.svg",
      "./images/twitter.svg",
    ],
    A = [
      "https://github.com/JingWei-S",
      "https://www.linkedin.com/in/jing-wei-3a846b13b/",
      "https://scholar.google.com.au/citations?user=z45wQDYAAAAJ&hl=en",
      "https://twitter.com/JingggWei",
    ];
  for (let e = 0; e < 4; e++) {
    const t = document.createElement("a");
    t.href = A[e];
    const n = document.createElement("img");
    (n.src = k[e]), t.appendChild(n), f.appendChild(t);
  }
})();
