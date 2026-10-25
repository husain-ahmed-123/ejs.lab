// imports
const express = require("express"); //importing express package
const app = express(); // creates a express application

app.use(express.static("public")); //all static files are in the public folder

// DATABASE
const resturaunts = [
  {
    id: 1,
    name: "Al Baik",
    isOpen: true,
    address: "City Centre Road 4650, Manama",
    phone: "55509876",
    menu: [
      {
        name: "Chicken Filtet Sandwich",
        price: 0.75,
        rating: 5,
      },
      {
        name: "Fish Filet Sandwich",
        price: 0.9,
        rating: 5,
      },
      {
        name: "Chicken Nuggets",
        price: 1.8,
        rating: 4.9,
      },
    ],
  },
  {
    id: 2,
    name: "Haji's Traditional Cafe",
    isOpen: false,
    address: "150 شارع الحكومة, Manama",
    phone: "06892543",
    menu: [
      {
        name: "Chicken Machboos",
        price: 2.2,
        rating: 4.5,
      },
      {
        name: "Balaleet",
        price: 1.8,
        rating: 5,
      },
      {
        name: "Cheese Omlette",
        price: 0.7,
        rating: 5,
      },
    ],
  },
  {
    id: 3,
    name: "Al Jabriya Turkish Restaurant",
    isOpen: true,
    address: "Rd No 2643, Busaiteen",
    phone: "17330108",
    menu: [
      {
        name: "Roosy Sarookh",
        price: 1.8,
        rating: 5,
      },
      {
        name: "Cheese Pizza",
        price: 2.5,
        rating: 3.5,
      },
      {
        name: "French Fries",
        price: 1.2,
        rating: 4.3,
      },
    ],
  },
];

// Routes go here

app.get("/", (req, res) => {
  res.render("homepage.ejs");
});

app.get("/resturaunts", (req, res) => {
  res.render("all-resturaunts.ejs", { resturaunts: resturaunts });
});

app.get("/resturaunts/:id", (req, res) => {
  const foundResturaunt = resturaunts.find(
    (r) => r.id === Number(req.params.id),
  );
  console.log(foundResturaunt);
  res.render("restaurants-details.ejs", { resturaunt: foundResturaunt });
});

app.listen(3000, () => {
  console.log("Listening on port " + 3000);
}); // Listen on port 3000
