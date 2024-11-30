import { loginAPI } from "@/libs/APICommunicator/Auth/LoginAPI";
import { PMLogin } from "@/PMs/Auth/LoginPM";
import { getAuthModel } from "../General/AuthModel";
import { routerNav } from "@/libs/Utils/RouterLib";
import { StorageHandler } from "@/libs/Utils/Storage";

export interface LoginModel {
  setup: () => Promise<void>;
  onLogin: () => Promise<void>;
  onSignup: () => void;

  loadRemember: () => Promise<void>;
  updateRemember: () => Promise<void>;
}

export function getLoginModel(pm: () => PMLogin): LoginModel {
  const model: LoginModel = {
    setup: async () => {
      pm().onLOGIN = model.onLogin;
      pm().onSIGNUP = model.onSignup;

      model.loadRemember();
    },
    onLogin: async () => {
      // handle login call
      const res = await loginAPI({
        username: pm().email,
        password: pm().password,
      });
      if (res.isSuccess) {
        model.updateRemember();

        await getAuthModel().setToken(
          res.accessToken || "",
          res.renewalToken || ""
        );

        routerNav.goAndReset("home");
      } else {
        // TODO: failed to login
      }
    },
    onSignup: () => {
      routerNav.push("signup");
    },

    loadRemember: async (): Promise<void> => {
      const isRememberMe = await StorageHandler.getItem("isRememberMe");
      if (isRememberMe == "true") {
        const email = (await StorageHandler.getItem("rememberEmail")) || "";
        const password =
          (await StorageHandler.getItem("rememberPassword")) || "";

        pm().rememberme = true;
        pm().email = email;
        pm().password = password;
      } else {
        pm().rememberme = false;
      }
    },
    updateRemember: async (): Promise<void> => {
      if (pm().rememberme) {
        await StorageHandler.setItems({
          isRememberMe: "true",
          rememberEmail: { reqAuth: true, value: pm().email },
          rememberPassword: { reqAuth: true, value: pm().password },
        });
      } else {
        await StorageHandler.removeItem("isRememberMe");
        await StorageHandler.removeItem("rememberEmail");
        await StorageHandler.removeItem("rememberPassword");
      }
    },
  };

  return model;
}
