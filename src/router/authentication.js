import Login from "@/components/authentication/Login";
import RegisterDeveloper from "@/components/authentication/RegisterDeveloper";
import PasswordReset from "@/components/authentication/PasswordReset";

export default [
  {
    path: "login",
    name: "Login",
    component: Login
  },
  {
    path: "register-developer",
    name: "RegisterDeveloper",
    component: RegisterDeveloper
  },
  {
    path: "password-reset",
    name: "PasswordReset",
    component: PasswordReset
  }
];
