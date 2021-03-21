import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

const Review = ({ checkoutToken, liveCart }) => (
  <>
    <Typography variant="h6" gutterBottom>
      Order Summary
    </Typography>
    <List disablePadding>
      {checkoutToken.live.line_items.map((product) => (
        <ListItem style={{ padding: "10px 0" }} key={product.name}>
          <ListItemText
            primary={product.name}
            secondary={`Quantity: ${product.quantity}`}
          />
          <Typography variant="body2">
            {product.line_total.formatted_with_symbol}
          </Typography>
        </ListItem>
      ))}
      {liveCart.discount.length !== 0 ? (
        
        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText
            disableTypography
            primary={
              <Typography type="body1" style={{ color: "green", fontWeight: 700, marginTop: '5%' }}>
                Discount Applied!
              </Typography>
            }
          />
          

          <Typography variant="subtitle1" style={{ fontWeight: 700, color: "green", marginTop: '5%' }}>
            - {liveCart.discount.amount_saved.formatted_with_symbol}
          </Typography>
        </ListItem>
      ) : (
        ""
      )}

      <ListItem style={{ padding: "10px 0" }}>
        {/* <ListItemText primary={shippingOptions.name} /> */}
        <ListItemText
          primary="Total"
          secondary="*All prices include shipping, handling, and taxes."
        />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {liveCart.total.formatted_with_symbol}
        </Typography>
      </ListItem>
    </List>
  </>
);

export default Review;
