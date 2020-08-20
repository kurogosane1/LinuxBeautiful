import React, { useState } from "react";
import VS from "../../../Assets/SVG/DesktopEnv.svg";

export default function Option2() {
  const [laptop, setLaptop] = useState({
    Processor: "Core i7 14 core 3.2GHz",
    RAM: "16gb 2333Mhz RAM",
    Storage: "1TB SSD",
    GPU: "Nvidia RTX 3060 MaxQ with 8GB of GDDR8 memory",
    type: "Laptop",
  });

  const handleClick = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // let amount = parseInt(e.target.getAttribute("amount"));
    console.log(name, value);
    switch (name) {
      case "Processor":
        setLaptop({ ...laptop, Processor: value });
        // setTotal({ ...total, Processor: amount });
        // console.log(total);
        break;
      case "RAM":
        setLaptop({ ...laptop, RAM: value });
        // setTotal({ ...total, RAM: amount });
        // console.log(total);
        break;
      case "Storage":
        setLaptop({ ...laptop, Storage: value });
        // setTotal({ ...total, Storage: amount });
        // console.log(total);
        break;
      case "GPU":
        setLaptop({ ...laptop, GPU: value });
        // setTotal({ ...total, GPU: amount });
        // console.log(total);
        break;
      default:
        setLaptop({ ...laptop });
      // setTotal({ ...total });
      // console.log(total);
    }
  };
  return (
    <div>
      <div className="opt2-cont">
        <div className="opt2-col-1">
          <div className="opt2-image">
            <img src={VS} alt="" id="opt2-img" />
          </div>
        </div>
        <div className="opt2-col-2">
          <div className="opt2-heading">
            <h1>Customize your 15.6 inch DeepinPro</h1>
          </div>
          <div className="opt2-spec-list">
            <ul>
              <li>
                <h3>{laptop.Processor}</h3>
              </li>
              <li>
                <h3>{laptop.RAM}</h3>
              </li>
              <li>
                <h3>{laptop.GPU}</h3>
              </li>
              <li>
                <h3>{laptop.Storage}</h3>
              </li>
            </ul>
          </div>
          <div className="opt2-options">
            {/* <form action=""> */}
            <div className="opt2-Processor">
              <div className="opt2-heading-options">
                <h3 className="opt2-heading-options-h3">Processor</h3>
                <label className="opt2-heading-options-label">
                  How much power is needed for you?
                </label>
              </div>
              <ul className="op2-options">
                <li
                  className={
                    laptop.Processor === "Core i7 14 core 3.2GHz"
                      ? "spec-option-clicked"
                      : "spec-options-not-clicked"
                  }
                >
                  <label>
                    Core i7 14 core 3.2GHz{" "}
                    <input
                      type="radio"
                      name="Processor"
                      value="Core i7 14 core 3.2GHz"
                      onChange={handleClick}
                    />
                  </label>
                </li>
                <li
                  className={
                    laptop.Processor === "Core i9 16 core 2.5GHz"
                      ? "spec-option-clicked"
                      : "spec-options-not-clicked"
                  }
                >
                  <label>
                    Core i9 16 core 2.5GHz
                    <input
                      type="radio"
                      name="Processor"
                      value="Core i9 16 core 2.5GHz"
                      onChange={handleClick}
                    />
                  </label>
                </li>
                <li
                  className={
                    laptop.Processor === "Core i9 16 core 3.2GHz"
                      ? "spec-option-clicked"
                      : "spec-options-not-clicked"
                  }
                >
                  <label>
                    Core i9 16 core 3.2GHz
                    <input
                      type="radio"
                      name="Processor"
                      value="Core i9 16 core 3.2GHz"
                      onChange={handleClick}
                    />
                  </label>
                </li>
              </ul>
            </div>
            <div className="opt2-RAM">
              <div className="opt2-heading-options">
                <h3>Memory</h3>
                <label>How much memory is right for you</label>
              </div>
              <div className="opt2-option2">
                <ul>
                  <li
                    className={
                      laptop.RAM === "16gb 2333Mhz RAM"
                        ? "spec-option-clicked"
                        : "spec-options-not-clicked"
                    }
                  >
                    <label>
                      16gb 2333Mhz RAM{" "}
                      <input
                        type="radio"
                        name="RAM"
                        value="16gb 2333Mhz RAM"
                        onChange={handleClick}
                      />
                    </label>
                  </li>
                  <li
                    className={
                      laptop.RAM === "32gb 2333Mhz RAM"
                        ? "spec-option-clicked"
                        : "spec-options-not-clicked"
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
                  </li>
                  <li
                    className={
                      laptop.RAM === "64gb 2333Mhz RAM"
                        ? "spec-option-clicked"
                        : "spec-options-not-clicked"
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
                  </li>
                  <li
                    className={
                      laptop.RAM === "128gb 2333Mhz RAM"
                        ? "spec-option-clicked"
                        : "spec-options-not-clicked"
                    }
                  >
                    <label>
                      128gb 2333Mhz RAM
                      <input
                        type="radio"
                        name="RAM"
                        value="128gb 2333Mhz RAM"
                        onChange={handleClick}
                      />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="opt2-GPU">
              <div className="opt2-heading-options">
                <h3>Graphics</h3>
                <label>Do you need a lot of Graphics power?</label>
              </div>
              <ul className="opt2-option2">
                <li
                  className={
                    laptop.GPU ===
                    "Nvidia RTX 3060 MaxQ with 8GB of GDDR8 memory"
                      ? "spec-option-clicked"
                      : "spec-options-not-clicked"
                  }
                >
                  <label>
                    Nvidia RTX 3060 MaxQ with 8GB of GDDR8 memory
                    <input
                      type="radio"
                      name="GPU"
                      value="Nvidia RTX 3060 MaxQ with 8GB of GDDR8 memory"
                      onChange={handleClick}
                    />
                  </label>
                </li>
                <li
                  className={
                    laptop.GPU ===
                    "Nvidia RTX 3070 MaxQ with 10GB of GDDR8 memory"
                      ? "spec-option-clicked"
                      : "spec-options-not-clicked"
                  }
                >
                  <label>
                    Nvidia RTX 3070 MaxQ with 10GB of GDDR8 memory
                    <input
                      type="radio"
                      name="GPU"
                      value="Nvidia RTX 3070 MaxQ with 10GB of GDDR8 memory"
                      onChange={handleClick}
                    />
                  </label>
                </li>
                <li
                  className={
                    laptop.GPU ===
                    "Nvidia RTX 3080 MaxQ with 16GB of GDDR8 memory"
                      ? "spec-option-clicked"
                      : "spec-options-not-clicked"
                  }
                >
                  <label>
                    Nvidia RTX 3080 MaxQ with 16GB of GDDR8 memory
                    <input
                      type="radio"
                      name="GPU"
                      value="Nvidia RTX 3080 MaxQ with 16GB of GDDR8 memory"
                      onChange={handleClick}
                    />
                  </label>
                </li>
              </ul>
            </div>
            <div className="opt2-Storage">
              <div className="opt2-heading-options">
                <h3>Storage</h3>
                <label>Determine how much storage do you actually need</label>
              </div>
              <ul className="opt2-option2">
                <li
                  className={
                    laptop.Storage === "1TB SSD"
                      ? "spec-option-clicked"
                      : "spec-options-not-clicked"
                  }
                >
                  <label>
                    1TB SSD
                    <input
                      type="radio"
                      name="Storage"
                      value="1TB SSD"
                      onChange={handleClick}
                    />
                  </label>
                </li>
                <li
                  className={
                    laptop.Storage === "2TB SSD"
                      ? "spec-option-clicked"
                      : "spec-options-not-clicked"
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
                </li>
                <li
                  className={
                    laptop.Storage === "3TB SSD"
                      ? "spec-option-clicked"
                      : "spec-options-not-clicked"
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
                </li>
                <li
                  className={
                    laptop.Storage === "4TB SSD"
                      ? "spec-option-clicked"
                      : "spec-options-not-clicked"
                  }
                >
                  <label>
                    4TB SSD
                    <input
                      type="radio"
                      name="Storage"
                      value="4TB SSD"
                      onChange={handleClick}
                    />
                  </label>
                </li>
              </ul>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}
