import type { Route } from "./+types/home";
import { Header } from "../components/header/header";
import { About } from "../components/about/about";
import { Skills } from "../components/skills/skills";
import { Works } from "../components/works/works";
import { Contact } from "../components/contact/contact"
import { Footer } from "../components/footer/footer"

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
        <Skills />
        <Works />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
