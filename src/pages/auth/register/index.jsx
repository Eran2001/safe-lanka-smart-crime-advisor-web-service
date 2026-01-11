import React, { useState } from "react";

import API from "@/services";
import Button from "@/components/ui/Button";

const RegisterPage = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    role: "POLICE",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await API.private.onboarding_userRegister(form);
      setMessage("Registration successful. Please wait for admin approval.");
    } catch (err) {
      setMessage(
        err.response?.data?.error || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20">
      <h1 className="text-3xl font-bold mb-6">Register</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="username"
          placeholder="Username"
          className="input"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input"
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input"
          onChange={handleChange}
          required
        />

        <input
          name="password2"
          type="password"
          placeholder="Confirm Password"
          className="input"
          onChange={handleChange}
          required
        />

        <select name="role" className="input" onChange={handleChange}>
          <option value="POLICE">Police Officer</option>
          <option value="ANALYST">Analyst</option>
        </select>

        <Button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </Button>
      </form>

      {message && (
        <p className="mt-4 text-sm text-muted-foreground">{message}</p>
      )}
    </div>
  );
};

export default RegisterPage;
