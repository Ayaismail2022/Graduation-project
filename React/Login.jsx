import React, { useState, useEffect } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  // التحقق عند تحميل الصفحة إذا كان المستخدم مسجل دخول
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // تسجيل الدخول
  const handleLogin = () => {
    const userData = { username: "Rawan", email: "rawan@example.com" };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // تسجيل الخروج
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>مرحبًا {user.username} 🎉</h2>
          <button onClick={handleLogout}>تسجيل الخروج</button>
        </div>
      ) : (
        <div>
          <button onClick={handleLogin}>تسجيل الدخول</button>
        </div>
      )}
    </div>
  );
};

export default Login;
