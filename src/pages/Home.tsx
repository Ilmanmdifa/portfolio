import { usePageTitle } from "../hooks/usePageTitle";
import Content from "../layouts/Content";
import Footer from "../layouts/Footer";
import Hero from "../layouts/Hero";
import Navigation from "../layouts/Navigation";

export default function HomePage() {
  usePageTitle({
    title: "Home",
    description: "Welcome to my portfolio. Explore my projects and skills.",
    ogImage: "/og-home.jpg",
  });
  return (
    <>
      <Navigation />
      <Hero />
      <Content />
      <Footer />
    </>
  );
}
