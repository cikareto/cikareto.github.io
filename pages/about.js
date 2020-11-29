import Container from "../components/Container";
import Loader from '../components/Loader'

import dynamic from "next/dynamic";
const About = dynamic(import("../containers/About"), { ssr: false, loading: () => <Loader /> });

export default function AboutPage() {
  return (
    <>
      <Container
        metadata={{
          title: "Salisa C | What's about me",
          description:
            "A Software Engineer, a human, a cat person, a night owl pretending to be an early bird.",
        }}
      />
      <About />
    </>
  );
}
