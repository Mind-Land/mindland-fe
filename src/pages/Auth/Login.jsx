import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { BsGoogle } from "react-icons/bs";
import '../../style/auth.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert('Email harus mengandung karakter "@"');
      return;
    }

    if (password === "") {
      alert("Password is required");
      return;
    }

    console.log("Formulir dikirim:", { email, password });

    setEmail("");
    setPassword("");
  };

  const handleGoogleLogin = () => {
    // Handle Google login Nanti Disini
    alert("Continue with Google clicked");
  };

  return (
    <div className="auth-wrapper ">
      <div className="wrapper-logo d-flex flex-column align-items-center gap-2">
        <img
          className="text-secondary"
          src="../public/logo.png"
          alt="Logo"
          width="46"
          height="auto"
        />
        <h1 className="fs-2">Masuk ke akun kamu</h1>
        <p>masukan email dan password</p>
      </div>
      <Form
        className="form d-flex flex-column mt-3 mx-auto"
        style={{ width: "100%", maxWidth: "400px" }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Alamat Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="info" className="text-light" type="submit">
          Masuk
        </Button>
        <Button
          variant="outline-info"
          onClick={handleGoogleLogin}
          className="mt-3"
        >
          Masuk dengan Google <BsGoogle />
        </Button>
        <Button
          variant="info"
          onClick={handleGoogleLogin}
          className="mt-5 text-light"
        >
          Daftar
        </Button>
      </Form>
    </div>
  );
}

export default Login;
