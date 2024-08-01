import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

dotenv.config({
  path: "../.env",
});
import connectDB from "./db/index.js";
import app from "./app.js";

// Connect to the database
connectDB();
const server = http.createServer(app);

// Attach Socket.IO to the HTTP server
const io = new Server(server, {
  autoConnect: false,
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000", // Change this to your frontend URL in production
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  socket.on("setup", (user) => {
    // console.log(user);
    console.log("user joied with id:", user._id);
    socket.join(user._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("user joined in  the room:", room);
    // console.log("User Joined Room: " + room);
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("sendMessage", async (newMessage) => {
    //console.log(newMessage);
    newMessage.user_ids.forEach((user) => {
      if (user == newMessage.sender_id) return;
      //console.log("user", user);
      //console.log("sender id", newMessage.sender_id);
      socket.in(user).emit("message received", newMessage);
    });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// Start the server
server.listen(process.env.PORT, () => {
  console.log(
    `Connection successful! Server is running at port ${process.env.PORT}`
  );
});
