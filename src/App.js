import { useState } from "react";

const questions = [
  {
    id: 1,
    title: "Do I have to allow the use of cookies?",
    info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    id: 2,
    title: "How do I change my My Page password?",
    info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 3,
    title: "What is BankID?",
    info: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 4,
    title: "Whose birth number can I use?",
    info: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },
  {
    id: 5,
    title: "When do I recieve a password ordered by letter?",
    info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ",
  },
];
console.log(questions);

export default function App() {
  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        <Accordion />
      </div>
    </main>
  );
}

function Accordion() {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <div>
      {questions.map((question, index) => (
        <AccordionItems
          questionObj={question}
          key={question.id}
          curOpen={isOpen}
          onSet={setIsOpen}
          num={index}
        />
      ))}
    </div>
  );
}

function AccordionItems({ questionObj, curOpen, onSet, num }) {
  let isOpen = num === curOpen;
  console.log(isOpen);

  function handleClickOpen() {
    onSet((isOpen) => (isOpen ? null : num));
  }
  return (
    <div className="question">
      <header>
        {" "}
        <h5>{questionObj.title}</h5>
        <button className="question-btn" onClick={handleClickOpen}>
          {isOpen ? "-" : "+"}
        </button>
      </header>
      {isOpen && <p>{questionObj.info}</p>}
    </div>
  );
}
