import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  //////
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have currently no items in your shopping cart—
      <Link to="/products" className={classes.link}>
        start adding some
      </Link>
      !
    </Typography>
  );

  //////
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>

      <div className={classes.cardDetails}>
        {/* <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
          <div className={classes.taxes}>
            <Typography variant="subtitle1">
              All prices include shipping, handling, and taxes.
            </Typography>
          </div>
        </Typography>

        <div>
          <Button
            component={Link}
            to="/products"
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="outlined"
            color="inherit">
            Back To Store
          </Button>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}>
            Empty Cart
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary">
            Checkout
          </Button>
        </div> */}
      </div>
    </>
  );

  if (!cart.line_items) return "Loading...";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography
        className={classes.warning}
        variant="body1"
        align="center"
        position="fixed"
        >
        {" "}
        *Please Note: We are currently only authorized to ship to locations in
        Virginia at this time.
      </Typography>
      <Typography
        className={classes.warning2}
        variant="subtitle1"
        align="center"
        gutterBottom>
        {" "}
        All purchases must be made by individuals 21 and over, per federal and
        state laws.
      </Typography>
      

      <Typography
        className={classes.title}
        variant="h3"
        align="center"
        gutterBottom>
        {" "}
        Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}

      <div className={classes.cardDetails}>
      <footer className={classes.footerCart}>
      <Typography variant="h5">
          Subtotal: {cart.subtotal.formatted_with_symbol}
          <div className={classes.taxes}>
            <Typography variant="subtitle1">
              All prices include shipping, handling, and taxes.
            </Typography>
          </div>
        </Typography>

        <div>
          <Button
            component={Link}
            to="/products"
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="outlined"
            color="inherit">
            Back To Store
          </Button>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}>
            Empty Cart
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary">
            Checkout
          </Button>
        </div>
      </footer>
      </div>
    </Container>
  );
};

export default Cart;
