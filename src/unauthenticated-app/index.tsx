import { useState } from "react";
import { RegisterScreen } from "./register";
import { LoginScreen } from "./login";

export default function UnauthenticatedApp() {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div>
      {isRegister ? <LoginScreen /> : <RegisterScreen />}
      <button onClick={() => setIsRegister(!isRegister)}>
        切换到{isRegister ? "注册" : "登录"}界面
      </button>
    </div>
  );
}
