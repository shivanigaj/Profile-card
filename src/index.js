import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <img className="avatar" src="photo_2023-11-18_21-34-51.jpg" alt="Shivani" />
  );
}

function Intro() {
  return (
    <div>
      <h1> Shivani </h1>
      <p>
        {" "}
        Hello there! I'm an aspiring developer with a passion for crafting
        innovative solutions.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="#123456" />
      <Skill skill="HTML+CSS" emoji="💪" color="orangered" />
      <Skill skill="Javascript" emoji="💪" color="yellow" />
      <Skill skill="Tailwind CSS" emoji="💪" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
