import Container from "../components/Container";
import Loader from '../components/Loader'

import dynamic from "next/dynamic";
const Home = dynamic(import("../containers/Home"), { ssr: false, loading: () => <Loader />});

export default function HomePage() {
  return (
    <>
      <Container
        metadata={{
          title: "Salisa C | Software Engineer who know nothing",
          description:
            "Hi, there! I'm Salisa Cheawcharnthong, a Software Engineer based in Bangkok, Thailand.",
        }}
      />
      <Home />
    </>
  );
}
