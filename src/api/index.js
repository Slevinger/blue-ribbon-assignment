export const loginApi = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username == "username" && password === "password") {
        resolve({ username });
      } else {
        reject(new Error("Credentials dont match"));
      }
    }, 200);
  });
};
