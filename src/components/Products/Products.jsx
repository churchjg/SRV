import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

///Start Items

const products = [
  {
    id: 1,
    name: "Vintners Reserve",
    description:
      "This specialty reserve is aged in small batches within French oak barrels. Still containing bold flavor, it's tannins have dissipated — imparting a smooth, rich flavor boasting of black fruit and vanilla.",
    price: "$26.00",
    image: "https://i.imgur.com/rL7eA34.png"
  },

  {
    id: 2,
    name: "Rosé",
    description:
      "Senedo's Rosé is the newest addition to our inventory! It boasts great summer flavors including red fruit, flowers, citrus, and melon, with a pleasant crunchy green flavor on the finish similar to celery or rhubarb. Fresh, fruity, with some extra brightness and crispness — this wine is fantastic for summer nights.",
    price: "$18.00",
    image: "https://i.imgur.com/PxpDi9P.png"
  },

  {
    id: 3,
    name: "Chambourcin",
    description:
      "Chambourcin is a hybrid grape variety that is popular due to its high crop yields, versatility, beautiful color, and aromatics. This particular wine, however, was made for drinking! It is a full flavored wine that showcases a wide range of berries while providing a dry style and drinking experience.",
    price: "$20.00",
    image: "https://i.imgur.com/OaQ29OX.png"
  },

  {
    id: 4,
    name: "Cabernet Sauvignon",
    description:
      "A young wine with strong berry flavors, this wine is best served at room temperature, 15-20 minutes after opening.",
    price: "$22.00",
    image: "https://i.imgur.com/vdVhnD0.png"
  },

  {
    id: 5,
    name: "Petit Verdot",
    description:
      "Petit Verdot offers up aromas of mostly black fruit flavors ranging from plum, blackberry and blueberry to slightly lighter black cherry. The unique and intriguing flavors of Petit Verdot are herbal and floral notes such as violet, lilac, lavender, sage, and dried herbs. This wine has a full body and high tannins.",
    price: "$24.00",
    image: "https://i.imgur.com/ohEajXT.png"
  },
  {
    id: 6,
    name: "Gift Card",
    description:
      "Senedo Ridge Gift Cards make a great present for any occasion!",
    price: "$25.00",
    image: "https://i.imgur.com/nUI03mv.png"
  },
  {
    id: 7,
    name: "Gift Card ",
    description:
      "Senedo Ridge Gift Cards make a great present for any occasion!",
    price: "$50.00",
    image: "https://i.imgur.com/nUI03mv.png"
  },
  {
    id: 8,
    name: "Gift Card",
    description:
      "Senedo Ridge Gift Cards make a great present for any occasion!",
    price: "$75.00",
    image: "https://i.imgur.com/nUI03mv.png"
  },
  {
    id: 9,
    name: "Gift Card",
    description:
      "Senedo Ridge Gift Cards make a great present for any occasion! **Comes with one complimentary bottle of wine.",
    price: "$100.00",
    image: "https://i.imgur.com/nUI03mv.png"
  },
];

////End Items

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
