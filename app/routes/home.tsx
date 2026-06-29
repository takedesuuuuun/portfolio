import type { Route } from "./+types/home";
import { Header } from "../components/header"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", content: "takedesuuuuun's portfolio." },
  ];
}

export default function Home() {
  return <Header />;
}
