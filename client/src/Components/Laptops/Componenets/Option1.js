import React, { useState } from "react";

export default function Option1() {
  const [ram, setRam] = useState([
    {
      id: 1,
      description: "16gb 2333Mhz RAM",
    },
    {
      id: 2,
      description: "32gb 2333Mhz RAM",
    },
    {
      id: 3,
      description: "64gb 2333Mhz RAM",
    },
  ]);
  const [style, setStyle] = useState({
    style: "empty",
  });

  // const handleClick = (e) => {
  //   console.log(e.target.className);
  //   console.log(e.target.value);
  //   let value = e.target.value;

  //   return value && style
  //     ? (e.target.className = "blocked")
  //     : (e.target.className = "empty");
  // };

  const doThis = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>This is input 1</h2>
      <form onSubmit={doThis}>
        <div className="Processor">
          {/* <input value="1" onClick={(e) => console.log(e.target.value + 1)}>
            Core i7 12 Core 2.5ghz
          </input> */}

          <label>
            Core i7 14 core 3.0 ghz
            <input type="radio" name="2" id="" />
          </label>

          <label>
            Core i9 16 core 2.7ghz
            <input type="radio" name="3" id="" />
          </label>

          <label>
            Core-i9 18 core 2.4ghz
            <input type="radio" name="4" id="" />
          </label>
        </div>
        <div className="RAM">
          <input
            type="radio"
            value="16gb 2333Mhz RAM"
            name={1}
            id={1}
            // onClick={handleClick}
            // className={style}
          >
            {/* 16gb 2333Mhz RAM */}
          </input>

          <input
            type="radio"
            value="32gb 2333Mhz RAM"
            name={2}
            id={2}
            // onClick={handleClick}
            // className={style}
          >
            {/* 32gb 2333Mhz RAM */}
          </input>
{/* 
          <input
            type="radio"
            value="64gb 2333Mhz RAM"
            name={3}
            id={3}
            // onClick={handleClick}
            // className={style}
          >
            64gb 2333Mhz RAM
          </input> */}
        </div>
        <div className="Storage">
          <label>
            1TB SSD
            <input type="radio" name="8" id="" />
          </label>

          <label>
            2TB SSD
            <input type="radio" name="9" id="" />
          </label>

          <label>
            4TB SSD
            <input type="radio" name="10" id="" />
          </label>
        </div>
        <div className="Graphics">
          <label>
            Nvidia RTX 3050 with 8GB of GDDR8 memory
            <input type="radio" name="11" id="" />
          </label>
          <label>
            Nvidia RTX 3060 with 8GB of GDDR8 memory
            <input type="radio" name="12" id="" />
          </label>

          <label>
            Nvidia RTX 3060 Super with 16GB of GDDR8 memory
            <input type="radio" name="13" id="" />
          </label>
        </div>
        <div className="check">
          <input type="submit" value="Buy now"></input>
        </div>
      </form>
    </div>
  );
}
