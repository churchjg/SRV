import React from "react";
import {
  Typography,
  Button,
  Divider,
  Input,
  FormLabel,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";

import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { commerce } from "../../lib/commerce";
import Review from "./Review";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({
  checkoutToken,
  nextStep,
  backStep,
  shippingData,
  order_id,
  onCaptureCheckout,
  fetchLiveCart,
  liveCart,
  addDiscountCode,
  timeout,
  data,
  token,
  cart,
}) => {
  const methods = useForm();

  const handleSubmit = async (event, elements, stripe, data) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: "Primary",
          street: shippingData.address1,
          town_city: shippingData.city,
          county_state: shippingData.shippingState,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        // fulfillment: { shipping_method: shippingData.shippingOptions },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      console.log(orderData, checkoutToken.id);
      onCaptureCheckout(checkoutToken.id, orderData);

      timeout();

      nextStep();
    }
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} liveCart={liveCart} />

      {liveCart.discount.length === 0 ? (
        <>
          <Divider />
          <FormProvider {...methods}>
            <form
              style={{
                display: "flex",
                marginLeft: "10%",
                marginTop: "3%",
                justifyContent: "flex-end",
              }}
              onSubmit={methods.handleSubmit((data) =>
                addDiscountCode(process.env.REACT_APP_DISCOUNT_CODE_FAMILY, checkoutToken.id)
              )}

              // onSubmit={methods.handleSubmit((data) =>
              //   addDiscountCode(process.env.REACT_APP_DISCOUNT_CODE_FRIENDS, checkoutToken.id)
              // )}

              >
              <Input id="code" placeholder="Discount Code" />
              <Button
                type="submit"
                variant="contained"
                color="default"
                onChange={addDiscountCode}>
                Apply
              </Button>
            </form>
          </FormProvider>
        </>
      ) : (
        ""
      )}

      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment Method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br /> <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={backStep}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  color="primary">
                  Pay
                  {/* Pay {liveCart.total.formatted_with_symbol}  */}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
