const express = require("express")
const path = require("path")

const {
  serveContacts,
  serveContact,
  createContact,
  updateContact,
  deleteContact,
} = require("./controllers/contactControllers")

const app = express()
const pathToFrontendDist = path.join(__dirname, "../frontend/dist")

////////////////////////
// Middleware
////////////////////////

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString()
  req.time = time
  console.log(`${req.method}: ${req.originalUrl} - ${time}`)
  next()
}

const serveStatic = express.static(pathToFrontendDist)

const parseJSON = express.json()

app.use(logRoutes) // Print out every incoming request
app.use(serveStatic) // Serve static public/ content
app.use(parseJSON) // Parses request body JSON

////////////////////////
// Endpoints
////////////////////////

app.get("/api/Contacts", serveContacts)
app.get("/api/Contacts/:id", serveContact)
app.post("/api/Contacts", createContact)
app.patch("/api/Contacts/:id", updateContact)
app.delete("/api/Contacts/:id", deleteContact)

app.get("*", (req, res, next) => {
  if (req.originalUrl.startsWith("/api")) return next()
  res.sendFile(pathToFrontendDist)
})

const port = 8080
app.listen(port, () => console.log(`listening at http://localhost:${port}`))
