import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [openIndex, setIsOpen] = useState(null);

  function handleToggle(index) {
    setIsOpen((currIndex) => (currIndex === index ? null : index));
  }

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          title={el.title}
          num={i}
          key={el.title}
          openIndex={openIndex}
          setIsOpen={handleToggle}
        >
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        title="Test 1"
        num={22}
        key="test 1"
        openIndex={openIndex}
        setIsOpen={handleToggle}
      >
        <p>Alloes React developers to:</p>
        <ul>
          <li>Break up UI into componenets</li>
          <li>Make componenets reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, children, openIndex, setIsOpen }) {
  return (
    <div
      className={num === openIndex ? "item open" : "item"}
      onClick={() => setIsOpen(num)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{num === openIndex ? "-" : "+"}</p>

      {num === openIndex && <div className="content-box">{children}</div>}
    </div>
  );
}
