import Intro from "./Intro";
import Sphere from "../../components/Sphere";

import './index.css'

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <div className="home__spheres">
        <Sphere />
      </div>
    </div>
  );
};

export default Home