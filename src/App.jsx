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

function App() {
  const [openItem, setOpenItem] = useState(null);

  return (
    <>
      <div className="accordion">
        {faqs.map((e, index) => (
          <div
            className={index === openItem ? "item open" : "item"}
            key={e.title}
            onClick={() =>
              setOpenItem((currIndex) => (currIndex === index ? null : index))
            }
          >
            <h1 className="icon number">{`${0}${index + 1}`}</h1>
            <h1 className="title text">{e.title}</h1>
            <span className="icon">{index === openItem ? "-" : "+"}</span>
            {index === openItem && <p className="content-box">{e.text}</p>}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
