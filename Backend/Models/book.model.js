import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },

  name: {
    type: String,
    require: true,
  },

  title: {
    type: String,
    require: true,
  },

  price: {
    type: String,
    require: true,
  },

  category: {
    type: String,
    require: true,
  },

  image: {
    type: String,
    require: true,
  },
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
