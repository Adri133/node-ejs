import express from 'express';
const app = express();

//setting view engine to ejs
app.set("view engine", "ejs");

//route for index page
app.get("/", function (req, res) {
  res.render("index");
});

//route for magic page
app.get("/pokemon", function (req, res) {
  let pokemons = [
    {
      name: 'Dracofeu',
      type: 'feu'
    },
    {
      name: 'Pikachu',
      type: 'electrique'
    },
    {
      name: 'Bulbizar',
      type: 'herbe'
    },
    {
      name: 'Carapuce',
      type: 'eau'
    }
  ];

  const titre = 'Mon Pokédex';

  res.render("pokemon", {
    pokemons: pokemons,
    title: titre
  });
});

app.listen(8080, function () {
  console.log("Server is running on port 8080 ");
});