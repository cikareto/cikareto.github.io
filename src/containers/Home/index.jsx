import Intro from "./Intro";
import Sphere from "../../components/Sphere";
import { isMobile } from "react-device-detect";
import cx from 'classnames'

import "./index.css";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <div className={cx('home__spheres', isMobile && 'home__spheres--active')}>
        <Sphere position={[0,0,0]} size={2.5} opacity={0.6}/>
      </div>
    </div>
  );
};

export default Home;
