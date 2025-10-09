const connect = require("connect");
const url = require("url");

const app = connect();

function calculate(req, res) {
  const queryObject = url.parse(req.url, true).query;
  const method = (queryObject.method || "").toLowerCase().trim();
  const x = parseFloat(queryObject.x);
  const y = parseFloat(queryObject.y);

  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });

  if (!method || isNaN(x) || isNaN(y)) {
    res.end(`<h2>Welcome to LAB03 - Math Operation Server</h2>
      <p>Format: ?method=[add|subtract|multiply|divide]&x=[number]&y=[number]</p>
      <ul>
        <li><a href="/lab3?method=add&x=16&y=4">Add Example</a></li>
        <li><a href="/lab3?method=subtract&x=16&y=4">Subtract Example</a></li>
        <li><a href="/lab3?method=multiply&x=16&y=4">Multiply Example</a></li>
        <li><a href="/lab3?method=divide&x=16&y=4">Divide Example</a></li>
      </ul>`);
    return;
  }

  let result, symbol;

  switch (method) {
    case "add":
      result = x + y; symbol = "+";
      break;
    case "subtract":
      result = x - y; symbol = "-";
      break;
    case "multiply":
      result = x * y; symbol = "*";
      break;
    case "divide":
      if (y === 0) {
        res.end("<h3 style='color:red;'>Error: Division by zero is not allowed.</h3>");
        return;
      }
      result = (x / y).toFixed(2); symbol = "/";
      break;
    default:
      res.end("<h3 style='color:red;'>Error: Invalid method.</h3>");
      return;
  }

  res.end(`<h2>Math Operation Result</h2>
    <p><strong>${x} ${symbol} ${y} = ${result}</strong></p>
    <p><a href="/lab3">Back to examples</a></p>`);
}

app.use("/lab3", calculate);

app.listen(3000, () => console.log("Server running at http://localhost:3000/lab3"));
