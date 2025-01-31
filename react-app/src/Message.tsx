// PascalCasing
function Message() {
  // JSX: JavaScript XML (check it out on babeljs.io/repl)
  const meow = "World";
  //if 'meow' was empty, the second line will apear.
  if (meow) return <h1>Hello {meow}</h1>;
  return <h1>Hello world</h1>;
}
export default Message;
