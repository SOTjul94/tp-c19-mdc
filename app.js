const express = require("express");
const app = express();

const port = 3030;
const mainRouter = require("./routers/main")

/* recursos estaticos */
app.use(express.static("public"))

/* rutas */

app.use("/",mainRouter)
app.use("/about",mainRouter)

app.listen(3030, () => console.log(`server runnig in http://localhost:${port}`));