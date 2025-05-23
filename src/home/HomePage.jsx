import { AppleHello } from "./components/AppleHello/AppleHello";
import { Terminal } from "./components/Terminal/Terminal";

export default function HomePage() {
  return (
    <div className="mt-20 flex flex-col items-center text-center px-4">
      <AppleHello />

      <header className="mt-6">
        <h3 className="mt-15 font-mono text-black text-4xl leading-tight">
          Alex Besse Donato
        </h3>
        <p className="mt-3 text-2xl text-muted-foreground">
          Fullstack Software Engineer
        </p>
        <p className="max-w-4xl mx-auto px-4 text-center my-5 text-xl text-muted-foreground">
          "I’m a software engineer with UK academic roots, now building fast,
          impactful SPAs and complex enterprise tools at Caixabank, one of
          Spain’s largest banks — empowering millions of users through
          thoughtful code."
        </p>
      </header>

      <div className="w-full max-w-4xl">
        <Terminal />
      </div>
    </div>
  );
}
