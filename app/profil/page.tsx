"use client";
import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import Header from "../profil1/header/index"


export default function Home() {
  const { user, login, register, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");
  const [error, setError] = useState("");

  const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) {
      return error.message;
    }

    return "Ошибка сервера";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await register(email, password);
      }
    } catch (err) {
      setError(getErrorMessage(err));
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-blue-50">
      <Header />
    
    <div className="mb-10 w-full max-w-md px-4 pt-6 sm:px-6 lg:pt-10">
    <div className="w-full rounded-2xl border border-blue-100 bg-white p-6 shadow-lg sm:p-8">

      <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        {mode === "login" ? "Вход" : "Регистрация"}
      </h1>

      {user ? (
        <div className="text-center">
          <div className="flex flex-col gap-6 items-center">
            <p className="text-xl font-semibold text-gray-700">Профиль</p>

            <div className="w-full bg-blue-50 rounded-xl p-6 text-left border border-blue-100">
              <p className="text-sm text-gray-500 mb-2">Электронная почта</p>
              <p className="text-base font-medium text-gray-800 mb-4">
                {user.email}
              </p>

              <button
                className="w-full bg-red-500 hover:bg-red-600 transition text-white font-semibold py-2 rounded-lg"
                onClick={logout}
              >
                Выйти
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <p className="text-red-500 text-center text-sm font-medium">
              {error}
            </p>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-blue-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
            required
          />

          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-blue-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-3 rounded-lg"
          >
            {mode === "login" ? "Войти" : "Зарегистрироваться"}
          </button>

          <p
            className="text-center text-gray-500 text-sm cursor-pointer hover:text-blue-500 transition"
            onClick={() => setMode(mode === "login" ? "register" : "login")}
          >
            {mode === "login"
              ? "Нет аккаунта? Зарегистрироваться"
              : "Уже есть аккаунт? Войти"}
          </p>
        </form>
      )}
    </div>
    </div>
  </div>
  );
}
