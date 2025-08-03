const mongoose = require("mongoose");

// 1️⃣ Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Connection error:", err));

// 2️⃣ Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  age: Number,
});

// 3️⃣ Create a model
const User = mongoose.model("User", userSchema);

async function run() {
  try {
    // 4️⃣ Insert a user
    const newUser = new User({
      name: "Alice",
      email: "alice@example.com",
      age: 25,
    });
    const savedUser = await newUser.save();
    console.log("👤 Inserted:", savedUser);

    // 5️⃣ Read users
    const users = await User.find({});
    console.log("📄 All users:", users);

    // 6️⃣ Update a user
    const updated = await User.findOneAndUpdate(
      { email: "alice@example.com" },
      { age: 26 },
      { new: true }
    );
    console.log("✏️ Updated user:", updated);

    // 7️⃣ Delete a user
    const deleted = await User.findOneAndDelete({ email: "alice@example.com" });
    console.log("🗑️ Deleted user:", deleted);
  } catch (err) {
    console.error("❌ Error during operations:", err.message);
  } finally {
    mongoose.connection.close(() => {
      console.log("🔌 MongoDB connection closed");
    });
  }
}

run();
