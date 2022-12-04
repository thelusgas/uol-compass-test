let loginTimeout = 600;

export const getLoginTimeout = () => loginTimeout;
export const decreaseLoginTimeout = () => {
  loginTimeout -= 1;
};
