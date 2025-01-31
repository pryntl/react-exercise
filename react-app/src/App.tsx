//import Message from "./message";
//import ListGroup from "./components/ListGroup";
//import { Fragment } from "react/jsx-runtime";

function App() {
  let items = ["meow", "meow2", "meow3", "meow4", "meow5"];
  //items = [];
  // if items array is empty, return the p.
  //const message = items.length === 0 ? <p>no item found.</p> : null;
  //true && "" = "" and || && "" = false
  const message = items.length === 0 && <p>no item found</p>;
  // it's important to close the tag
  return (
    // <div>
    //   <Message />
    //  </div>
    //<Fragment>
    //when we use an empty <>, we're telling react to use fragment.
    //line 21: converting, using arrow function. (the key is due to the warning in console)

    <>
      <h1>List Group</h1>
      {message}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
    //</Fragment>
  );
}
export default App;
