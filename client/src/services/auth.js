class Auth {
  constructor() {
    this.userId = null;
  }

  isAuth = async (username, password) => {
    const user = {
      username,
      password,
    };

    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (data.type !== "error") {
        return { id: data.userId, error: null };
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      return { id: null, error: err.message };
    }
  };

  setUserId = (id) => (this.userId = id);
}

export default Auth;
