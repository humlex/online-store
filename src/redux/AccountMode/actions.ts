export const ADMIN_MODE = "ADMIN_MODE";
export const USER_MODE = "USER_MODE";

export const loginAsAdmin = () => ({
  type: ADMIN_MODE,
});

export const loginAsUser = () => ({
  type: USER_MODE,
});
