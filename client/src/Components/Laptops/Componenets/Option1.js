import React, { useState } from "react";
import VS from "../../../Assets/SVG/DesktopEnv.svg";

export default function Option1() {
  const [laptop, setLaptop] = useState({
    Processor: "Core i7 14 core 3.0 ghz",
    RAM: "16gb 2333Mhz RAM",
    Storage: "1TB SSD",
    GPU: "Nvidia RTX 3050 with 8GB of GDDR8 memory",
  });

  const handleClick = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    switch (name) {
      case "Processor":
        setLaptop({ ...laptop, Processor: value });
        break;
      case "RAM":
        setLaptop({ ...laptop, RAM: value });
        break;
      case "Storage":
        setLaptop({ ...laptop, Storage: value });
        break;
      case "GPU":
        setLaptop({ ...laptop, GPU: value });
        break;
      default:
        setLaptop({ ...laptop });
    }
  };

  // const doThis = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div className="opt-cont-1">
      <div className="opt-col-1">
        <img id="opt-1-img" src={VS} alt="" />
      </div>
      {/* <div className="customization-1">
        <ul className="spec-list">
          <li>
            <span>{laptop.Processor}</span>
          </li>
          <li>
            <span>{laptop.RAM}</span>
          </li>
          <li>
            <span>{laptop.Storage}</span>
          </li>
          <li>
            <span>{laptop.GPU}</span>
          </li>
        </ul>
      </div> */}
      <div className="opt-col-2">
        <div className="option-1-heading">
          <h2>Customize your DeepinPro 15.6-inch Space Gray</h2>
        </div>
        <div className="customization">
          <ul className="spec-list">
            <li>
              <span>{laptop.Processor}</span>
            </li>
            <li>
              <span>{laptop.RAM}</span>
            </li>
            <li>
              <span>{laptop.Storage}</span>
            </li>
            <li>
              <span>{laptop.GPU}</span>
            </li>
          </ul>
        </div>
        <form>
          <div className="option-heading-1">
            <h3>Processor</h3>
            <label>Which processor is right for you</label>
          </div>
          <div className="btn">
            <div
              className={
                laptop.Processor === "Core i7 14 core 3.0 ghz"
                  ? "blocked"
                  : "spec-options"
              }
            >
              <label>
                Core i7 14 core 3.0 ghz
                <input
                  type="radio"
                  name="Processor"
                  value="Core i7 14 core 3.0 ghz"
                  onChange={handleClick}
                />
              </label>
            </div>
            <div
              className={
                laptop.Processor === "Core i9 16 core 2.7ghz"
                  ? "blocked"
                  : "spec-options"
              }
            >
              <label>
                Core i9 16 core 2.7ghz
                <input
                  type="radio"
                  name="Processor"
                  value="Core i9 16 core 2.7ghz"
                  onChange={handleClick}
                />
              </label>
            </div>
          </div>
          <br />
          {/* this is where the ram options are  */}
          <div className="option-heading-1">
            <h3>Memory</h3>
            <label>How much memory is right for you</label>
          </div>
          <div className="btn">
            <div
              className={
                laptop.RAM === "16gb 2333Mhz RAM" ? "blocked" : "spec-options"
              }
            >
              <label>
                16gb 2333Mhz RAM
                <input
                  type="radio"
                  name="RAM"
                  value="16gb 2333Mhz RAM"
                  onChange={handleClick}
                />
              </label>
            </div>
            <div
              className={
                laptop.RAM === "32gb 2333Mhz RAM" ? "blocked" : "spec-options"
              }
            >
              <label>
                32gb 2333Mhz RAM
                <input
                  type="radio"
                  name="RAM"
                  value="32gb 2333Mhz RAM"
                  onChange={handleClick}
                />
              </label>
            </div>
            <div
              className={
                laptop.RAM === "64gb 2333Mhz RAM" ? "blocked" : "spec-options"
              }
            >
              <label>
                64gb 2333Mhz RAM
                <input
                  type="radio"
                  name="RAM"
                  value="64gb 2333Mhz RAM"
                  onChange={handleClick}
                />
              </label>
            </div>
          </div>

          <br />
          {/* this is where the GPU options are  */}
          <div className="option-heading-1">
            <h3>Graphics</h3>
            <label>Which processor is right for you</label>
          </div>
          <div className="btn">
            <div
              className={
                laptop.GPU === "Nvidia RTX 3050 with 8GB of GDDR8 memory"
                  ? "blocked"
                  : "spec-options"
              }
            >
              <label>
                Nvidia RTX 3050 with 8GB of GDDR8 memory
                <input
                  type="radio"
                  name="GPU"
                  value="Nvidia RTX 3050 with 8GB of GDDR8 memory"
                  onChange={handleClick}
                />
              </label>
            </div>
            <div
              className={
                laptop.GPU === "Nvidia RTX 3060 with 8GB of GDDR8 memory"
                  ? "blocked"
                  : "spec-options"
              }
            >
              <label>
                Nvidia RTX 3060 with 8GB of GDDR8 memory
                <input
                  type="radio"
                  name="GPU"
                  value="Nvidia RTX 3060 with 8GB of GDDR8 memory"
                  onChange={handleClick}
                />
              </label>
            </div>
          </div>

          <br />

          {/* this is where the storage option is found */}
          <div className="btn">
            <div
              className={
                laptop.Storage === "1TB SSD" ? "blocked" : "spec-options"
              }
            >
              <label>
                1TB SSD{" "}
                <input
                  type="radio"
                  name="Storage"
                  value="1TB SSD"
                  onChange={handleClick}
                />
              </label>
            </div>
            <div
              className={
                laptop.Storage === "2TB SSD" ? "blocked" : "spec-options"
              }
            >
              <label>
                2TB SSD
                <input
                  type="radio"
                  name="Storage"
                  value="2TB SSD"
                  onChange={handleClick}
                />
              </label>
            </div>
            <div
              className={
                laptop.Storage === "3TB SSD" ? "blocked" : "spec-options"
              }
            >
              <label>
                3TB SSD
                <input
                  type="radio"
                  name="Storage"
                  value="3TB SSD"
                  onChange={handleClick}
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
//  <div>
//       <h2>This is input 1</h2>
//       <h2>{laptop.RAM}</h2>
//       <form onSubmit={doThis}>
//         <div className="Processor">
//           {/* <input value="1" onClick={(e) => console.log(e.target.value + 1)}>
//             Core i7 12 Core 2.5ghz
//           </input> */}

//           <label>
//             Core i7 14 core 3.0 ghz
//             <input type="radio" name="2" id="" />
//           </label>

//           <label>
//             Core i9 16 core 2.7ghz
//             <input type="radio" name="3" id="" />
//           </label>

//           <label>
//             Core-i9 18 core 2.4ghz
//             <input type="radio" name="4" id="" />
//           </label>
//         </div>
//         <div className="RAM">
//           <label
//             className={laptop.RAM === "16gb 2333Mhz RAM" ? "blocked" : "empty"}
//           >
//             16gb 2333Mhz RAM
//             <input
//               type="radio"
//               checked={laptop.RAM === "16gb 2333Mhz RAM"}
//               value="16gb 2333Mhz RAM"
//               name={1}
//               id={1}
//               onChange={handleClick}
//             />
//           </label>

//           <label
//             className={laptop.RAM === "32gb 2333Mhz RAM" ? "blocked" : "empty"}
//           >
//             32gb 2333Mhz RAM
//             <input
//               type="radio"
//               checked={laptop.RAM === "32gb 2333Mhz RAM"}
//               value="32gb 2333Mhz RAM"
//               name={2}
//               id={2}
//               onChange={handleClick}
//             />
//           </label>
//           <label
//             className={laptop.RAM === "64gb 2333Mhz RAM" ? "blocked" : "empty"}
//           >
//             64gb 2333Mhz RAM{" "}
//             <input
//               type="radio"
//               checked={laptop.RAM === "64gb 2333Mhz RAM"}
//               value="64gb 2333Mhz RAM"
//               name={3}
//               id={3}
//               onChange={handleClick}
//             />
//           </label>
//         </div>
//         <div className="Storage">
//           <label>
//             1TB SSD
//             <input type="radio" name="8" id="" />
//           </label>

//           <label>
//             2TB SSD
//             <input type="radio" name="9" id="" />
//           </label>

//           <label>
//             4TB SSD
//             <input type="radio" name="10" id="" />
//           </label>
//         </div>
//         <div className="Graphics">
//           <label>
//             Nvidia RTX 3050 with 8GB of GDDR8 memory
//             <input type="radio" name="11" id="" />
//           </label>
//           <label>
//             Nvidia RTX 3060 with 8GB of GDDR8 memory
//             <input type="radio" name="12" id="" />
//           </label>

//           <label>
//             Nvidia RTX 3060 Super with 16GB of GDDR8 memory
//             <input type="radio" name="13" id="" />
//           </label>
//         </div>
//         <div className="check">
//           <input type="submit" value="Buy now"></input>
//         </div>
//       </form>
//     </div>
