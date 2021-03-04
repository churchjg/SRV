import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";

import { commerce } from "../../lib/commerce";
import FormInput from "./CustomTextField";
import CustomSelectField from "./CustomSelectField";

const AddressForm = ({ checkoutToken, next }) => {
  // const [shippingCountries, setShippingCountries] = useState([]);
  // const [shippingCountry, setShippingCountry] = useState("");
  // const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  // const [shippingSubdivision, setShippingSubdivision] = useState("");
  // const [shippingOptions, setShippingOptions] = useState([]);
  // const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();

  // const countries = Object.entries(shippingCountries).map(([code, name]) => ({
  //   id: code,
  //   label: name,
  // }));
  // const subdivisions = Object.entries(
  //   shippingSubdivisions
  // ).map(([code, name]) => ({ id: code, label: name }));
  // const options = shippingOptions.map((sO) => ({
  //   id: sO.id,
  //   label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
  // }));

  const stateOptions = [
    { name: "Virginia", value: "VA" },
    
  ];

  const countryOptions = [
    { name: "United States", value: "US" },
    
  ];

  // const shippingOptions = [
  //   { name: "Domestic", value: "Base Rate" },
    
  // ];

  // const fetchShippingCountries = async (checkoutTokenId) => {
  //   const { countries } = await commerce.services.localeListShippingCountries(
  //     checkoutTokenId
  //   );

  //   setShippingCountries(countries);
  //   setShippingCountry(Object.keys(countries)[0]);
  // };

  // const fetchSubdivisions = async (checkoutTokenId, countryCode) => {
  //   const { subdivisions } = await commerce.services.localeListShippingSubdivisions(checkoutTokenId, countryCode);

  //   console.log(subdivisions)
  //   setShippingSubdivisions(subdivisions);
  //   setShippingSubdivision(Object.keys(subdivisions)[0]);
  // };

  // const fetchSubdivisions = async (countryCode) => {
  //   const { subdivisions } = await commerce.services.localeListSubdivisions(
  //     countryCode
  //   );

  //   console.log(subdivisions);
  //   setShippingSubdivisions(subdivisions);
  //   setShippingSubdivision(Object.keys(subdivisions)[0]);
  // };

  // const fetchShippingOptions = async (
  //   checkoutTokenId,
  //   country,
  //   region = null
  // ) => {
  //   const options = await commerce.checkout.getShippingOptions(
  //     checkoutTokenId,
  //     { country, region }
  //   );
  

    
  //   setShippingOptions(options);
  //   setShippingOption(options[0].id);
  // };

//   const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
//     const {options} = await commerce.checkout.getShippingOptions(
//       checkoutTokenId, { country, region }
//  )};

  // useEffect(() => {
  //   fetchShippingCountries(checkoutToken.id);
  // }, [checkoutToken.id]);

  // useEffect(() => {
  //   if (shippingCountry) fetchSubdivisions(shippingCountry);
  // }, [shippingCountry]);

  // useEffect(() => {
  //   if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  // }, [shippingSubdivision]);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      {/* //Add discounts to methods, payment form? */}
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({ ...data})
          )}>
          <Grid container spacing={3}>
            <FormInput name="firstName" label="First Name" />
            <FormInput name="lastName" label="Last Name" />
            <FormInput name="address1" label="Address" />
            <FormInput name="email" label="Email" />
            <FormInput name="city" label="City" />
            <FormInput name="zip" label="ZIP / Postal code" />
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}>
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid> */}
            <CustomSelectField
              required
              name="shippingCountry"
              label="Shipping Country"
              options={countryOptions}
              defaultValue="United States"
            />
            <CustomSelectField
              required
              name="shippingState"
              label="Shipping State"
              options={stateOptions}
              defaultValue="Virginia"
            />
             {/* <CustomSelectField
              required
              name="shippingOption"
              label="Shipping Options"
              options={shippingOptions}
              defaultValue="Domestic"
            /> */}
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping State</InputLabel>
              
              <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                {subdivisions.map((subdivision) => (
                  <MenuItem key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
            <InputLabel>Shipping Options</InputLabel>
              <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
              {options.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid> */}
          </Grid>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "40px",
            }}>
            <Button component={Link} variant="outlined" to="/cart">
              Back to Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
