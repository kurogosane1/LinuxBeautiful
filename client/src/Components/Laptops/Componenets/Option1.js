import React from "react";

export default function Option1() {
  return (
      <div>
          <h2>This is Option 1</h2>
      <form action="">
        <div className="Processor">
          <span>
            Core i7 12 core 2.5ghz
            <input type="checkbox" name="1" id="" />
          </span>

          <span>
            Core i7 14 core 3.0 ghz
            <input type="checkbox" name="2" id="" />
          </span>

          <span>
            Core i9 16 core 2.7ghz <input type="checkbox" name="3" id="" />
          </span>

          <span>
            Core-i9 18 core 2.4ghz <input type="checkbox" name="4" id="" />
          </span>
        </div>
        <div className="RAM">
          <span>
            16gb 2333Mhz RAM <input type="checkbox" name="5" id="" />
          </span>

          <span>
            32gb 2333Mhz RAM <input type="checkbox" name="6" id="" />
          </span>

          <span>
            64gb 2333Mhz RAM <input type="checkbox" name="7" id="" />
          </span>
        </div>
        <div className="Storage">
          <span>
            1TB SSD
            <input type="checkbox" name="8" id="" />
          </span>

          <span>
            2TB SSD
            <input type="checkbox" name="9" id="" />
          </span>

          <span>
            4TB SSD
            <input type="checkbox" name="10" id="" />
          </span>
        </div>
        <div className="Graphics">
          <span>
            Nvidia RTX 3050 with 8GB of GDDR8 memory
            <input type="checkbox" name="11" id="" />
          </span>
          <span>
            Nvidia RTX 3060 with 8GB of GDDR8 memory
            <input type="checkbox" name="12" id="" />
          </span>

          <span>
            Nvidia RTX 3060 Super with 16GB of GDDR8 memory
            <input type="checkbox" name="13" id="" />
          </span>
        </div>
      </form>
    </div>
  );
}
