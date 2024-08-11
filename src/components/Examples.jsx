import { useState } from "react";
import TabButton from "./tabButton.jsx";
import { EXAMPLES } from "../data";
import Tabs from "./tabsWrapper.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(clicked) {
    setSelectedTopic(clicked);
  }

  let tabContent = <p>Please Select a category</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>{EXAMPLES[selectedTopic].code}</pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <Tabs
        ButtonWrapper="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </section>
  );
}
