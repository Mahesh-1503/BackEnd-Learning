let http = require("http");

let server = http.createServer((req, res) => {
  if (req.url === "/news") {
    let obj = {
      status: 1,
      data: [
        {
          newsTitle: "First News",
          newsDescription: "First News Description",
        },
        {
          newsTitle: "Second News",
          newsDescription: "Second News Description",
        },
      ],
    };
    res.end(JSON.stringify(obj));
  }

  if (req.url === "/about") {
    //http://localhost:8000/about
    res.end("About Page");
    return;
  }
  if (req.url === "/contact") {
    //http://localhost:8000/contact
    res.end("Contact Page");
    return;
  }
  if (req.url === "/") {
    //http://localhost:8000/
    res.end("Home Page");
    return;
  }
  res.end("404 Page"); //http://localhost:8000/anything
});
server.listen("8000"); //http://localhost:8000

//at 1:00:00 hr
