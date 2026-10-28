import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Approach from "./sections/Approach";
import Process from "./sections/Process";
import Reviews from "./sections/Reviews";
import Speed from "./sections/Speed";
import Projects from "./sections/projects";


export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Approach />
        <Process />
        <Speed />
        <Reviews />
        <Projects />
      </main>
    </>
  );
}
