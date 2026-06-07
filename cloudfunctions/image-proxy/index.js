const tcb = require("@cloudbase/node-sdk");
const http = require("http");
const { URL } = require("url");

const app = tcb.init({ env: process.env.CLOUDBASE_ENV_ID });

const MIME_TYPES = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function getMimeType(filename) {
  const ext = filename.substring(filename.lastIndexOf(".")).toLowerCase();
  return MIME_TYPES[ext] || "application/octet-stream";
}

function sendError(res, statusCode, message) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  });
  res.end(JSON.stringify({ error: message }));
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    res.end();
    return;
  }

  const url = new URL(req.url || "/", "http://127.0.0.1");

  if (req.method === "GET" && url.pathname === "/") {
    const filePath = url.searchParams.get("path");
    if (!filePath) {
      sendError(res, 400, "Missing 'path' query parameter");
      return;
    }

    try {
      const result = await app.downloadFile({ fileID: filePath });
      const mimeType = getMimeType(filePath);

      res.writeHead(200, {
        "Content-Type": mimeType,
        "Cache-Control": "public, max-age=86400",
        "Access-Control-Allow-Origin": "*",
      });
      res.end(result.fileContent);
    } catch (err) {
      sendError(res, 500, `Failed to load image: ${err.message}`);
    }
    return;
  }

  if (req.method === "GET" && url.pathname === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  sendError(res, 404, "Not Found");
});

server.listen(9000);
