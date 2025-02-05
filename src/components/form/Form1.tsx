// import React from "react";
import Grid from "@mui/material/Grid2";
import "../../styles/App.css";
import { styled } from "@mui/material/styles";
import { FormLabel, OutlinedInput } from "@mui/material";

const Form1 = () => {
  const FormGrid = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
  }));
  return (
    <div>
      <Grid container spacing={3}>
        <FormGrid size={{ xs: 12, md: 6, lg: 4 }}>
          <FormLabel htmlFor="first-name">First Name</FormLabel>
          <OutlinedInput
            id="first-name"
            name="first-name"
            type="name"
            placeholder="first name"
            required
            size="small"
          ></OutlinedInput>
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6, lg: 4 }}>
          <FormLabel htmlFor="last-name">Last Name</FormLabel>
          <OutlinedInput
            id="last-name"
            name="last-name"
            type="name"
            placeholder="last name"
            required
            size="small"
          ></OutlinedInput>
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor="last-name">Address line 1*</FormLabel>
          <OutlinedInput
            id="address-1"
            name="address-1"
            type="name"
            placeholder="Street name and number"
            required
            size="small"
          ></OutlinedInput>
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor="last-name">Address line 2*</FormLabel>
          <OutlinedInput
            id="address-2"
            name="address-2"
            type="name"
            placeholder="Apartment, suite, unit, etc. (optonal)"
            required
            size="small"
          ></OutlinedInput>
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6, lg: 4 }}>
          <FormLabel htmlFor="last-name">City*</FormLabel>
          <OutlinedInput
            id="city"
            name="city"
            type="name"
            placeholder="New York"
            required
            size="small"
          ></OutlinedInput>
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6, lg: 4 }}>
          <FormLabel htmlFor="last-name">State*</FormLabel>
          <OutlinedInput
            id="state"
            name="state"
            type="name"
            placeholder="NY"
            required
            size="small"
          ></OutlinedInput>
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6, lg: 4 }}>
          <FormLabel htmlFor="last-name">Zip / Postal Code*</FormLabel>
          <OutlinedInput
            id="postal-code"
            name="postal-code"
            type="name"
            placeholder="12345"
            required
            size="small"
          ></OutlinedInput>
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6, lg: 4 }}>
          <FormLabel htmlFor="last-name">Country*</FormLabel>
          <OutlinedInput
            id="country"
            name="country"
            type="name"
            placeholder="United States"
            required
            size="small"
          ></OutlinedInput>
        </FormGrid>
      </Grid>
    </div>
  );
};

export default Form1;
