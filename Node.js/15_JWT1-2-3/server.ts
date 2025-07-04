import express from "express";
import morgan from "morgan";
import multer from "multer";
import {
    getAll,
    getOneById,
    create,
    updateById,
    deleteById,
    uploadImage
} from "./controllers/planets";
import {
  signup,
  login,
  logout
} from "./controllers/auth"
import authorize from "./controllers/authorize";
import { db } from "./controllers/db";
import 'dotenv/config';
import "./controllers/passport";

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: (res, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (res, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Methods
app.get("/planets", getAll);
app.get("/planets/:id", getOneById);
app.post("/planets", create);
app.put("/planets/:id", updateById);
app.delete("/planets/:id", deleteById);
app.post("/planets/:id/uploadImg", upload.single("image"), uploadImage);
app.post("/users/signup", signup);
app.post("/users/login", login);
app.get("/users/logout", authorize, logout);

console.log("il mio database", db);
console.log("query eseguita");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server partito sulla porta ${PORT}`);
});