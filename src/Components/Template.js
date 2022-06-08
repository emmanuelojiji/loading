import "./Template.scss";
import logo from "../Media/logo.png";
import TypeAnimation from "react-type-animation";
import Typed from "react-typed";

const Template = () => {
  return (
    <div className="Template">
      <header>
        <img src={logo} class="logo"></img>
      </header>

      <main>
        <h1>
          <Typed
            strings={[
              "Hello, we're retrieving your data..",
              "Drawing your graphs..",
              "Creating your table..",
              "Just tidying up..",
              "We're almost there..",
            ]}
            typeSpeed={50}
            loop={true}
            fadeOut={true}
            showCursor={false}
            backDelay={2000}

          />
        </h1>
      </main>
    </div>
  );
};

export default Template;
