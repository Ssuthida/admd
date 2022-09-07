const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
const port = 8000;

app.use(cors());
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/auth/v3.1/oauth/authorize", (req, res) => {
  console.log("authorize!");
  console.log("req:", req.query);
  const code = "ZwYnDdn5BEP8v5cKV7VCxd6OT0Jj2i60UvFqZZivofw1";
  const state = req.query.state;

  res.writeHead(302, {
    Location: `http://localhost:4200/home?code=${code}&state=${state}`,
  });
  res.end();
});

app.post("/auth/v3.1/oauth/token", (req, res) => {
  console.log("Token!");
  let response = {
    access_token:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im01aVR4NzNVU3MifQ.eyJpc3MiOiJzcmYuYWlzLmNvLnRoL2FkbWQiLCJzdWIiOiJ0b2tlbl9hdXRoZW50aWNhdGlvbl9jb2RlIiwiYXVkIjoid082a3pIK3VSMkZNQ2JjbzhENE1BQ242RUoxc1JSRmFnN3Zra1ZTQlYrOUNrRnRkRlZFWmFBPT0iLCJleHAiOjE2NjI1MjkzMTQsImlhdCI6MTY2MjUyNTcxNCwianRpIjoiSHJ2cW54cnJFTG52N3ZZWTdpMUFpWSIsInBpZCI6IndneTJWM3lxN0ExUnFEbkkwdGFaVlZ6endIVWw0cDd0V2l6elcyVW54WE09IiwiY2xpZW50IjoiT1RBd01EQXdNREF3TURBeE16azFMR0ZwWVhWMGFHVnVmRUp5YjNkelpYSjhNUzR3TGpBPSIsInNzaWQiOiI2T1QwSmoyaTYwVXZGcVpaaXZvZncxIiwidWlkIjoiNjYxNjUwMDIwMTU0MDg2IiwiYXV0Ijp7InR5cGUiOiJlbWFpbF9wYXNzd29yZCIsImFjdGlvbiI6ImxvZ2luIn0sImlhbCI6IjEuMSJ9.TmkqBX7qCVKF9-Pva9U1clwaHLv2TaGM9ySEX-Wc0OMu9kirh769KfZLCNiivLHUlBWmzdw0RjWoqILzSAftaf40N028RU6dY0fc13o-ZwfRP2YNHkYb3ZCgkjPGmkra0vuXYWnfXz-v8xQUTUVoHT9uWdi1GZxxhppERX1kDio",
    expires_in: 3600,
    id_token:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imc5OVJOM0w0YzAifQ.eyJpc3MiOiJzcmYuYWlzLmNvLnRoL2FkbWQiLCJzdWIiOiJpZFRva2VuIiwiYXVkIjoid082a3pIK3VSMkZNQ2JjbzhENE1BQ242RUoxc1JSRmFnN3Zra1ZTQlYrOUNrRnRkRlZFWmFBPT0iLCJleHAiOjE2NjI1MjkzMTQsImlhdCI6MTY2MjUyNTcxNCwianRpIjoiUktKaFZkVFVMM2taNmpVMXBmaHFnOCIsImF1dCI6eyJ0eXBlIjoiZW1haWxfcGFzc3dvcmQiLCJhY3Rpb24iOiJsb2dpbiJ9LCJub25jZSI6IlNSRlAtMjIwOTA3ZVVCSWNOVzgyMHYiLCJpbmZvIjp7ImZpcnN0bmFtZSI6IlRlc3QiLCJsYXN0bmFtZSI6IkRhbW9jbGVzIiwidXNlcm5hbWUiOiJrYWV3LnMxNUBnbWFpbC5jb20iLCJhY2NvdW50Q2F0ZWdvcnkiOiJyZXNpZGVudGlhbCJ9fQ.UIAtekeQsFsT3ZPEnlo1sGWtEq6CBFFF7Qp-pAK9jI7jljmc709uhmQtp1dGQXffT9xKbJgK7P4NBcNHgRTo6-0ScGuOw-KxHZC3PfT-Wtok4ods7xg_eIqg4yvGynLrUdI7cXXbqK4oI53HtW6KGBPbr4bPQHif9_NyVCGXSgk",
    refresh_token:
      "cWpUdkpXRHNnV250UlZJMU5jcXoxNjYyNTI1NzE06OT0Jj2i60UvFqZZivofw1",
    refresh_token_expires_in: 3600,
    token_type: "bearer",
  };

  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`ADMD-Mockup app listening on port ${port}`);
});
