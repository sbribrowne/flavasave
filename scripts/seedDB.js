const db = require("../models");
const app = express();
const PORT = process.env.PORT || 3001;
//syncs sequelize models and waits till update complete before starting server
db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

const recipeSeed = [
  {
    title: "Bengali Rice Test Recipe",
    url: "https://www.seriouseats.com/recipes/2018/01/bengali-rice-porridge-with-lentils-and-chicken.html",
    ingredients: [{"text":"One Thing", "id": mongoose.Types.ObjectId()}, {"text":"Two Thing", "id": mongoose.Types.ObjectId()}, {"text":"Three Thing", "id": mongoose.Types.ObjectId()}],
    instructions: [{"text":"One Thing", "id": mongoose.Types.ObjectId()}, {"text":"Two Thing", "id": mongoose.Types.ObjectId()}, {"text":"Three Thing", "id": mongoose.Types.ObjectId()}],
    cooked: false,
    imageUrl: "https://www.seriouseats.com/2018/01/20180112-rice-porridge-vicky-wasik-16-1500x1125.jpg",
    tags: ["chicken"],
    notes: "This is a test recipe",
    date: Date.now
  },

  {
    title: "Another Test Recipe",
    url: "https://www.seriouseats.com/",
    ingredients: [{"text":"One Thing", "id": mongoose.Types.ObjectId()}, {"text":"Two Thing", "id": mongoose.Types.ObjectId()}, {"text":"Three Thing", "id": mongoose.Types.ObjectId()}],
    instructions: [{"text":"1. Boil", "id": mongoose.Types.ObjectId()}, {"text":"2. Serve", "id": mongoose.Types.ObjectId()}, {"text":"3. Eat", "id": mongoose.Types.ObjectId()}],
    cooked: false,
    imageUrl: "",
    tags: ["food"],
    notes: "This is another test recipe",
    date: Date.now
  }

];

//db.Recipe.create({});