import type { Route } from "./+types/home";
import { Header } from "../components/header/header"
import { About } from "../components/about/about"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", content: "takedesuuuuun's portfolio." },
  ];
}

export default function Home() {
  return(
    <div>
      <Header />

      <main>
      <About />
      </main>
    </div>
  );
}
