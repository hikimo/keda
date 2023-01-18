import "./login.scss";

export default function LoginPage() {
  return (
    <div className="wrapper-login">
      <div className="background">
        <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="bg" />
      </div>

      <div className="auth">
        <div className="container">
          <h1 className="auth__title">Wells ERP</h1>

          <form className="form">
            <div className="form-control">
              <label>Username / E-mail</label>
              <input type="text" placeholder="ran.ano@gmail.com" />
            </div>

            <div className="form-control">
              <label>Password</label>
              <input type="password" placeholder="Blahblah" />
            </div>

            <div className="form-control">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

