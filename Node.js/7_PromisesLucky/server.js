import { createServer } from "node:http";

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

const server = createServer((request, response) => {
  console.log("Request received.");

  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");

  luckyDraw("Joe")
    .then(result => {
      console.log(result);
      return luckyDraw("Caroline");
    })
    .then(result => {
      console.log(result);
      return luckyDraw("Sabrina");
    })
    .then(result => {
      console.log(result);
      const jsonResponseBody = JSON.stringify({ message: result, location: "Mars" });
      response.setHeader("Content-Length", Buffer.byteLength(jsonResponseBody));
      response.end(jsonResponseBody);
    })
    .catch(error => {
      console.error(error.message);
      const errorResponse = JSON.stringify({ error: error.message, location: "Mars" });
      response.setHeader("Content-Length", Buffer.byteLength(errorResponse));
      response.end(errorResponse);
    });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
