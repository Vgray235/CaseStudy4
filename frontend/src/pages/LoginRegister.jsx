import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { toast } from "react-toastify";

export default function LoginRegister() {
  const { login, register } = useAuth();
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ username: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (mode === "login") await login(form);
      else await register(form);
      toast.success(mode === "login" ? "Logged in" : "Registered");
    } catch (err) {
      toast.error(err.response?.error || err.message || "Auth failed");
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 12px 32px rgba(0, 0, 0, 0.25)",
        color: "white",
        width: "100%",
        maxWidth: "360px",
        margin: "0 auto",
      }}
    >
      <h3 className="text-center mb-4">{mode === "login" ? "Login" : "Register"}</h3>
      <form onSubmit={submit}>
        <input
          className="form-control mb-3"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          style={{
            borderRadius: "8px",
            border: "none",
            padding: "12px 15px",
            fontSize: "1rem",
          }}
          required
        />
        <input
          className="form-control mb-3"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{
            borderRadius: "8px",
            border: "none",
            padding: "12px 15px",
            fontSize: "1rem",
          }}
          required
        />
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-light fw-semibold"
            type="submit"
            style={{
              flex: "1",
              marginRight: "0.5rem",
              borderRadius: "8px",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
          >
            {mode === "login" ? "Login" : "Register"}
          </button>
          <button
            type="button"
            className="btn btn-outline-light"
            style={{
              flex: "1",
              marginLeft: "10 rem",
              borderRadius: "48px",
              borderWidth: "2px",
              fontWeight: "600",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#764ba2";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "white";
            }}
          >
            Switch
          </button>
        </div>
      </form>
    </div>
  );
}
