export const commands = {
  help: () => (
    <>
      <div>Available commands:</div>
      <br />
      <div>whoami → Show who I am</div>
      <div>skills → List technical skills</div>
      <div>projects → View recent work</div>
      <div>experience → See professional background</div>
      <div>contact → Get in touch</div>
      <div>clear → Clear terminal</div>
      <div>cd [dir] → Change directory (just for show)</div>
      <div>sudo → Are you sure? 😅</div>
      <div>download-cv → Download my resume</div>
      <div>quote → Share a personal mantra</div>
      <div>ls → List available sections</div>
    </>
  ),

  whoami: () =>
    "Alex Besse Donato — fullstack software engineer working at CaixaBank in Barcelona. UK-educated, focused on building robust SPAs and scalable systems that impact millions.",

  skills: () =>
    `Frontend: React, Tailwind, Vite, Storybook, Module Federation
  Backend: Java, Spring Boot, REST APIs
  Tools: Git, Docker, Bun, Figma, CI/CD
  Languages: English, Spanish, Catalan`,

  projects: () =>
    "Visit the Projects section to see real-world apps: microfrontend architecture, fintech dashboards, and UI design systems.",

  experience: () =>
    "Currently: CaixaBank – Frontend Engineer (SPAs for millions)\nPreviously: UK-based education in Computer Science",

  contact: () =>
    "Email: alex@example.com\nGitHub: github.com/alexbesse\nLinkedIn: linkedin.com/in/alexbesse",

  cd: (dir) => `changed directory to /${dir}`,

  sudo: () => "Nice try. You don’t have that kind of power here 😏",

  "download-cv": () =>
    "Downloading resume... (just kidding — it's available in the Resume section!)",

  quote: () =>
    `"The best software feels invisible — I'm here to make that happen."`,

  ls: () => "about  projects  skills  contact  resume  blog",

  clear: () => {
    return "";
  },
};
