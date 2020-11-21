import Intro from "./Intro";
import Sphere from "../../components/Sphere";

import "./index.css";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <div className="home__spheres">
        <Sphere position={[0,0,0]} size={2.5} opacity={0.6}/>
      </div>
    </div>
  );
};

export default Home;
