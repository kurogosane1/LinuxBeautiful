import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import VS from "../../../Assets/SVG/DesktopEnv.svg";

export default function BuyNow() {
  let history = useHistory();
  let { url } = useRouteMatch();
  const doThis = (e) => {
    history.push(`${url}/${e.target.value}`);
  };
  return (
    <div className="Options-given">
      <div className="Options-Heading">
        <h3>15 inch DeepinBook</h3>
        <span>We're here to help. Feel free to contact us</span>
        <h1>Choose your new DeepinBook</h1>
      </div>

      <div className="option-1">
        <div className="Option-Img">
          <img src={VS} alt="" />
        </div>
        <div>
          <h3>2.5Ghz 12-Core Processor</h3>
          <h3>1TB Storage</h3>
          <h3>Nvidia RTX 3050</h3>
        </div>
        <ul>
          <li>2.5GHz 12-Core Processor</li>
          <li>Turbo Boost up to 5Ghz</li>
          <li>Nvidia RTX 3050 with 8GB of GDDR8 memory</li>
          <li>16GB of 2666MHz DDR6 memory</li>
          <li> 1TB of SSD storage</li>
          <li>15.6-inch Art Display with Thin bezels and blue light filter</li>
          <li>Facial Recognition and Finger print sensor</li>
          <li>Four Thunderbolt 4 ports</li>
        </ul>
        <div className="">
          <button onClick={doThis} value="Option1">
            Select
          </button>
          <span>heart</span>
        </div>
        <div>
          <span>Order today, delivers :</span>
          <span>Delvery estimated time 2 weeks</span>
        </div>
      </div>
      <div className="option-2">
        <div className="Option-Img">
          <img src={VS} alt="" />
        </div>
        <div>
          <h3>2.2Ghz 16-Core Processor</h3>
          <h3>1TB Storage</h3>
          <h3>Nvidia RTX 3080</h3>
        </div>
        <ul>
          <li>2.2Ghz 16-Core Processor</li>
          <li>Turbo Boost up to 4.2Ghz</li>
          <li>Nvidia RTX 3080 with 8GB of GDDR8 memory</li>
          <li>16GB of 2666MHz DDR6 memory</li>
          <li> 1TB of SSD storage</li>
          <li>15.6-inch Art Display with Thin bezels and blue light filter</li>
          <li>Facial Recognition and Finger print sensor</li>
          <li>Four Thunderbolt 4 ports</li>
        </ul>
        <div className="">
          <button onClick={doThis} value="Option2">
            Select
          </button>
          <span>heart</span>
        </div>
        <div>
          <span>Order today, delivers :</span>
          <span>Delvery estimated time 2 weeks</span>
        </div>
      </div>
    </div>
  );
}
