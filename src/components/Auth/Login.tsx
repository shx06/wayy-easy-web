import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import SectionWrapper from "../common/SectionWrapper";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform login logic here
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!res?.ok) {
        throw new Error("Login failed");
      } else {
        toast.success("Login successful");
        router.push("/");
      }
    } catch (error) {
      toast.error("Login failed");
      console.log(error);
    }
  };

  return (
    <>
      <SectionWrapper bgColor="gradient">
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Card
            sx={{
              p: 4,
              width: "100%",
              maxWidth: 400,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              bgcolor: "background.secondary",
              boxShadow: 4,
            }}
          >
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "100%",
              }}
              onSubmit={handleSubmit}
            >
              <Typography variant="h4" align="center">
                Login
              </Typography>
              <TextField
                variant="outlined"
                color="primary"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Box>
          </Card>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default Login;
