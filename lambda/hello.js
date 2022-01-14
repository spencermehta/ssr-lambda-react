import React from "react";
import ReactDOMServer from "react-dom/server";
import { Home } from "../app/Home";

const indexFile = `
<!DOCTYPE html>
<html lang="en">
  <body>
	<div id="root"></div>
  </body>
</html>
`;

const handler = async function (event) {
  const app = ReactDOMServer.renderToString(<Home />);
  const html = indexFile.replace(
    '<div id="root"></div>',
    `<div id="root">${app}</div>`
  );
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: html,
  };
};

export { handler };
