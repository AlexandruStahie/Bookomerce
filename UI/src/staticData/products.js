const products = [
  {
    id: 1,
    name: "Common sense Investing",
    author: "John C. Bogle",
    image: "1.jpg",
    price: 19.99
  },
  {
    id: 2,
    name: "Think and Grow Rich",
    author: "Napoleon Hill",
    image: "2.jpg",
    price: 38.5
  },
  {
    id: 3,
    name: "Story Wars",
    author: "Jonah Sachs",
    image: "3.jpg",
    price: 12.99
  },
  {
    id: 4,
    name: "Hooked",
    author: "Nir Eyal",
    image: "4.jpg",
    price: 12.99
  },
  {
    id: 5,
    name: "Anti-fragile",
    author: "Nassim Nicholas Taleb Long Author Name and surname test",
    image: "5.jpg",
    price: 12.99
  },
  {
    id: 6,
    name: "Start with Why",
    author: "Simon Sinek",
    image: "6.jpg",
    price: 12.99
  },
  {
    id: 7,
    name: "Powered by Storytelling",
    author: "Murray Nossel",
    image: "7.jpg",
    price: 12.99
  },
  {
    id: 8,
    name: "Incepe cu ce nu-ti place",
    author: "Brian Tracy",
    image: "8.jpg",
    price: 12.99
  },
  {
    id: 9,
    name: "The Code Book Of Long Title of This Book",
    author: "Simon Singh",
    image: "9.jpg",
    price: 12.99
  },
  {
    id: 10,
    name: "Fearless Negotiationg",
    author: "Michael C. Donaldson",
    image: "10.jpg",
    price: 12.99
  },
  {
    id: 11,
    name: "Drums of success",
    author: "A. Happy Umwaqarwa",
    image: "11.jpg",
    price: 12.99
  }
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  const nrId = Number(id);
  const product = products.find(e => {
    return e.id === nrId;
  });

  return product;
}
