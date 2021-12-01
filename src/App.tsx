import {
  makeStyles,
  Container,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

interface IFormInput {
  firstName: string;
  lastName: string;
  birthDate: string;
  ssn: string;
  address: string;
  city: string;
  zipCode: string;
  email: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required().min(2).max(25),
  lastName: yup.string().required().min(2).max(30),
  birthDate: yup.date().required(),
  ssn: yup.string().required().length(9),
  address: yup.string().required(),
  city: yup.string().required(),
  zipCode: yup.string().required().length(5),
  email: yup.string().required().email()
});

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    margin: theme.spacing(1, 0, 4),
  },
  submitButton: {
    marginTop: theme.spacing(4),
  },
}));

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const { heading, submitButton } = useStyles();

  const [json, setJson] = useState<string>();

  const onSubmit = (data: IFormInput) => {
    setJson(JSON.stringify(data));
  };

  return (
    <Container maxWidth="xs">
      <Typography className={heading} variant="h3">
        Sign Up Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          {...register("firstName")}
          id="firstName"
          variant="outlined"
          margin="normal"
          label="First Name"
          helperText={errors.firstName?.message}
          error={!!errors.firstName?.message}
          fullWidth
          required
        />
        <TextField
          {...register("lastName")}
          id="lastName"
          variant="outlined"
          margin="normal"
          label="Last Name"
          helperText={errors.lastName?.message}
          error={!!errors.lastName?.message}
          fullWidth
          required
        />
        <TextField
          {...register("birthDate")}
          id="birthDate"
          variant="outlined"
          margin="normal"
          label="Birthdate"
          helperText={errors.birthDate?.message}
          error={!!errors.birthDate?.message}
          type="birthDate"
          fullWidth
          required
        />
        <TextField
          {...register("ssn")}
          id="ssn"
          variant="outlined"
          margin="normal"
          label="SSN"
          helperText={errors.ssn?.message}
          error={!!errors.ssn?.message}
          type="ssn"
          fullWidth
          required
        />
        <TextField
          {...register("address")}
          id="address"
          variant="outlined"
          margin="normal"
          label="Address"
          helperText={errors.address?.message}
          error={!!errors.address?.message}
          type="address"
          fullWidth
          required
        />
        <TextField
          {...register("city")}
          id="city"
          variant="outlined"
          margin="normal"
          label="City"
          helperText={errors.city?.message}
          error={!!errors.city?.message}
          type="city"
          fullWidth
          required
        />
        <TextField
          {...register("zipCode")}
          id="zipCode"
          variant="outlined"
          margin="normal"
          label="Zip Code"
          helperText={errors.zipCode?.message}
          error={!!errors.zipCode?.message}
          type="zipCode"
          fullWidth
          required
        />
        <TextField
          {...register("email")}
          id="email"
          variant="outlined"
          margin="normal"
          label="Email"
          helperText={errors.email?.message}
          error={!!errors.email?.message}
          fullWidth
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={submitButton}
        >
          Sign Up
        </Button>
        {json && (
          <>
            <Typography variant="body1">
              Below is the JSON that would get passed to the API
            </Typography>
            <Typography variant="body2">{json}</Typography>
          </>
        )}
      </form>
    </Container>
  );
}

export default App;