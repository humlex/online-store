import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import {
  Paper,
  Container,
  Grid,
  Typography,
  Button,
  InputLabel,
} from "@material-ui/core";
import useStyles from "./useStyles";

const validationSchema = yup.object().shape({
  name: yup.string().required("*necessarily"),
  description: yup.string().required("*necessarily"),
  price: yup.string().required("*necessarily"),
});

const ProductForm = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Paper elevation={3} className={classes.formWrapper}>
            <Formik
              initialValues={{
                name: "",
                description: "",
                price: "",
                image: "",
              }}
              enableReinitialize
              validateOnBlur
              onSubmit={async (values, { resetForm }) => {
                try {
                  await axios.post("http://localhost:3004/phones", values);
                } catch (err) {
                  console.error(err);
                } finally {
                  resetForm();
                  history.push("/");
                }
              }}
              validationSchema={validationSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isValid,
                handleSubmit,
                dirty,
              }) => (
                <Form className="form" onSubmit={handleSubmit}>
                  <Typography className={classes.title}>
                    Create new product
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} className={classes.grid}>
                      <InputLabel className="label">Name</InputLabel>
                      <input
                        className="input-name"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      {touched.name && errors.name && (
                        <Typography className={classes.error}>
                          {errors.name}
                        </Typography>
                      )}
                    </Grid>

                    <Grid item xs={12} className={classes.grid}>
                      <InputLabel
                        className="label"
                        htmlFor="text-area-description"
                      >
                        Description
                      </InputLabel>
                      <input
                        className="text-area-description"
                        name="description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                      />
                      {touched.description && errors.description && (
                        <Typography className={classes.error}>
                          {errors.description}
                        </Typography>
                      )}
                    </Grid>

                    <Grid item xs={12} className={classes.grid}>
                      <InputLabel className="label" htmlFor="input-muscules">
                        Price
                      </InputLabel>
                      <input
                        className="input-muscules"
                        type="text"
                        name="price"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                      />
                      {touched.price && errors.price && (
                        <Typography className={classes.error}>
                          {errors.price}
                        </Typography>
                      )}
                    </Grid>

                    <Grid item xs={12} className={classes.grid}>
                      <InputLabel
                        className="label"
                        htmlFor="previewImage-input"
                      >
                        Image
                      </InputLabel>
                      <input
                        className="previewImage-input"
                        type="text"
                        name="image"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.image}
                      />
                    </Grid>

                    <Button disabled={!isValid && !dirty} type="submit">
                      Create
                    </Button>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
};

export default ProductForm;
