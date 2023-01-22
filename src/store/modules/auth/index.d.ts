import { defineStore } from "pinia";

export const useAuth = defineStore<
  "auth",
  {
    isLogin: boolean;
  },
  {},
  {
    login(): Promise<void>;
    setIsLogin(value: boolean): void;
  }
>();
