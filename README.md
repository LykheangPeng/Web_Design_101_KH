# Web Design 101 (KH): Web Design in the AI Era

Supporting materials for the **Web Design** course in PSBU's Bachelor of Computer Science.
This repository contains the presentation slides, example code and exercises for each week.

All materials are prepared by **Lykheang PENG**, Industrial Expert Lecturer, School of Information Technology, PSBU.

> ឯកសារជំនួយសម្រាប់មុខវិជ្ជា Web Design: ស្លាយ កូដគំរូ និងលំហាត់ប្រចាំសប្តាហ៍។

---

## About this course

Students learn to build real websites with **HTML, CSS and JavaScript**, then move to **React** for interactive apps.
AI tools are part of the course: students use them as a **study partner and assistant**, and learn to **check, test and explain** every line they submit.

**By the end of the course, students can:**

1. Build accessible, well-structured pages with semantic HTML.
2. Style responsive layouts with CSS (Flexbox, Grid, media queries).
3. Add interactivity with JavaScript, the DOM and events, and fetch data from APIs.
4. Build a small React app with components, state, props and effects.
5. Use AI tools responsibly: write clear prompts, review AI-generated code, and test before trusting it.
6. Deploy a website and present it.

---

## Course syllabus

| Week | Topic | What you will do | AI-era skill |
|:---:|---|---|---|
| 0 | Introduction | How the web works; set up VS Code, a browser and Git | What AI tools can and cannot do; the course AI policy |
| 1 | HTML Fundamentals | Headings, links, images, lists, tables, forms, semantic layout | Validate your HTML with the W3C checker |
| 2 | CSS Styling | Selectors, colours, fonts, the box model | Ask AI to *explain* a CSS rule, then test it yourself |
| 3 | Responsive Design | Flexbox, Grid, media queries, mobile-first | Check layouts at phone and desktop widths |
| 4 | JavaScript Basics | Variables, conditions, loops, functions, arrays | Read AI code line by line before you run it |
| 5 | DOM & Events | Select elements, handle clicks and forms, update the page | Debug with the browser console, not guesswork |
| 6 | Modern JS & APIs | `let`/`const`, arrow functions, modules, `fetch`, JSON, `async`/`await` | Never paste API keys or private data into AI tools |
| 7 | **Mid-Term Exam** | Covers Weeks 1–6 | — |
| 8 | Introduction to React | Components, JSX, project setup with Vite | Compare AI suggestions with the official React docs |
| 9 | State & Props | `useState`, passing data between components | Write tests or checks for what you build |
| 10 | Effects & Lifecycle | `useEffect`, loading data, cleanup | Explain your code in your own words |
| 11 | Deployment | Build and publish (e.g. GitHub Pages, Netlify or Vercel) | Accessibility and performance check before launch |
| 12 | **Final Project Presentation** | Demo, code walkthrough and Q&A | Disclose how you used AI |

---

## Course evaluation

| Component | Weight |
|---|:---:|
| Final Project | 30% |
| Final Exam | 30% |
| Mid-Term Exam | 20% |
| Attendance | 20% |
| **Total** | **100%** |

---

## Using AI in this course

AI tools (for example ChatGPT, Claude, Gemini or GitHub Copilot) are allowed as **learning assistants** under these rules:

- ✅ **Do** use AI to explain concepts, suggest ideas, and help you find bugs.
- ✅ **Do** test every piece of AI-generated code and make sure you can explain it.
- ✅ **Do** disclose AI use in your project README (which tool, and what for).
- ❌ **Don't** submit code you cannot explain line by line.
- ❌ **Don't** paste passwords, API keys or personal data into AI tools.
- ❌ **Don't** use AI during exams unless the lecturer allows it.

> AI can be confidently wrong. Check its answers against official documentation such as [MDN Web Docs](https://developer.mozilla.org/) and [react.dev](https://react.dev/).

---

## Getting started

**You need:**

- [Visual Studio Code](https://code.visualstudio.com/) (or any code editor)
- A modern browser (Chrome, Edge, Firefox or Safari)
- [Git](https://git-scm.com/) and a GitHub account
- [Node.js](https://nodejs.org/) (LTS version), from Week 8 for React

**Get the materials:**

```bash
git clone https://github.com/<your-username>/Web_Design_101_KH.git
cd Web_Design_101_KH
```

**Start a React project (Week 8):**

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

---

## Repository structure

> Example layout. Rename the folders to match how you organise the slides and code.

```
Web_Design_101_KH/
├── week-00-introduction/
├── week-01-html/
│   ├── slides/
│   ├── examples/
│   └── exercises/
├── week-02-css/
├── ...
├── week-11-deployment/
└── final-project/
```

---

## Useful references

- [MDN Web Docs](https://developer.mozilla.org/): HTML, CSS and JavaScript reference
- [W3C Markup Validation Service](https://validator.w3.org/): check your HTML
- [react.dev](https://react.dev/): official React documentation
- [web.dev](https://web.dev/): performance and accessibility guides

---

## Author

**Lykheang PENG**, Industrial Expert Lecturer, School of Information Technology, PSBU

Questions or corrections? Please open an [issue](../../issues) in this repository.