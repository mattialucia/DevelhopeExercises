import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json"); //before "text/html"

  const jsonResponseBody = JSON.stringify({ location: "Mars" });  //before "Earth"

  response.setHeader("Content-Length", Buffer.byteLength(jsonResponseBody));
  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});

// 1) node .\server.mjs
// Server running at http://localhost:3000

// 2) curl.exe -v http://localhost:3000

/* Response:
StatusCode        : 200
StatusDescription : OK
Content           : {"location":"Mars"}
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 19
                    Content-Type: application/json
                    Date: Wed, 11 Jun 2025 06:38:53 GMT

                    {"location":"Mars"}
Forms             : {}
Headers           : {[Connection, keep-alive], [Keep-Alive, timeout=5], [Content-Length, 19],
                    [Content-Type, application/json]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : System.__ComObject
RawContentLength  : 19
*/

/*
curl -v http://localhost:3000 
Serve per inviare una richiesta HTTP al server in ascolto sulla porta 3000 e ottenere la risposta.

Cosa vedrai nell'output:
1) La richiesta HTTP inviata (GET / HTTP/1.1).
2) Gli header della richiesta e della risposta.
3) Il corpo della risposta JSON ({ "location": "Mars" }).
*/

/* curl -v localhost:3000 non mi ha funzionato, dandomi l'errore seguente:
curl : Prefisso URI non riconosciuto.
In riga:1 car:1
+ curl -v localhost:3000
+ ~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotImplemented: (:) [Invoke-WebRequest], NotSupportedException
    + FullyQualifiedErrorId : WebCmdletIEDomNotSupportedException,Microsoft.PowerShell.Commands.InvokeWe  
   bRequestCommand 
*/

