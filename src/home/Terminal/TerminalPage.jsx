
import { Terminal } from "../Hero/components/Terminal/Terminal";
export default function TerminalPage() {
  return (
    <section>
    <div className="flex flex-col items-center text-center px-4">
      <header className="mt-6">
        <h3 className="mt-2 font-mono text-black text-4xl leading-tight">
         Interactive Terminal
        </h3>
        <p className="mt-3 text-2xl text-muted-foreground">
         Play around with this interactive terminal to explore my skills and projects. Embrace Unix, the superior architecture.
        </p>
        <p className="max-w-4xl mx-auto px-4 text-center my-5 text-xl text-muted-foreground">
          "I’m a software engineer with UK academic roots, now building fast,
          impactful SPAs and complex enterprise tools at Caixabank, one of
          Spain’s largest banks — empowering millions of users through
          thoughtful code."
        </p>
      </header>

      <div className="w-full max-w-7xl h-[65vh] overflow-hidden">
        <Terminal />
      </div>
    </div>
    </section>
  );
}

