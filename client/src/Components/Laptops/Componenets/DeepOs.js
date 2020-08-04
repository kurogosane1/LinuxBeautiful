import React from "react";
import flat from "../../../Assets/SVG/DesktopEnv.svg";
import installer from "../../../Assets/SVG/DeepinInstaller.svg";
import Personalization from "../../../Assets/SVG/Snap.svg";

export default function DeepOs() {
  return (
    <div>
      <header>
        <h1>DeepOS</h1>
      </header>
      <section>
        <h2>Simply Elegant, Reliable and Easy to Use</h2>
      </section>
      <div>
        <p>
          DeepOS is a reliable, easy to use and Elegant OS. It is was designed
          with ease of mind, but powerful for those that need it. Use the app
          store with thousands of apps to work with
        </p>
        <p>
          DeepOS is an open source GNU/Linux operating system, based on Linux
          kernel and mainly on desktop applications, supporting laptops,
          desktops and all-in-ones. deepin preinstalls Deepin Desktop
          Environment (DDE) and nearly 30 deepin native applications, as well as
          several applications from the open source community to meet users’
          daily learning and work needs. In addition, about a thousand of
          applications are offered in Deepin Store to meet users’ various needs.
          deepin, developed by professional operating system R&D team and deepin
          technology community (www.deepin.org), is named from deepin technology
          community, which means deep pursuit and exploration of the life and
          the future.
        </p>
        <p>
          Time has come for the best to come out from the Shadows and shine its
          light in the linux world
        </p>
        <div>
          <img src={flat} alt="something else" />
        </div>
      </div>
      <section>
        <h1>Security is our Priority</h1>
        <div>
          <p>
            DeepOS is catering to all those that are looking for a simple but
            elegant linux Operating system but at the same time provides those
            looking for extra security
          </p>
          <p>
            Deeping offers simplicity and attractive that dwelves those
            interested. It offers for all coming from windows environment to
            those coming from Mac
          </p>
        </div>
        <div>
          <h3>
            Deep even guides you simplilistic installer that also provides users
            with Full Disk Encryption for those requiring security and peace of
            mind
          </h3>
          <img src={installer} alt="This is the installer" />
        </div>
        <div>
          <h3>Customization is a right for every Linux user</h3>
        </div>
        <p>
          Unlike other desktop enviroments, Deepin offers some of the
          customizability giving the user the freedom to design and feel the way
          he wants his work enviroment to be
        </p>
        <p>
          The user can download and simply personlize the way he or see wants it
          to be by going to the task bar on the right
        </p>
        <strong>Deepin supports synapse based apps</strong>
          </section>
          <section>
              <img src={Personalization} alt="personalization"/>
          </section>
    </div>
  );
}
