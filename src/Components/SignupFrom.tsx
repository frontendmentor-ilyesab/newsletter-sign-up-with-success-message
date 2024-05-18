import ListIcon from "../../assets/images/icon-list.svg?react";

interface SignupFormProps {
  email: string;
  isValid: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

function SignupForm({
  email,
  isValid,
  handleChange,
  handleSubmit,
}: SignupFormProps) {
  let formClassName = "signup__form form";

  if (!isValid) {
    formClassName = `${formClassName} form--error`;
  }

  return (
    <main className="signup">
      <header className="signup__header"></header>
      <section className="signup__content">
        <h1 className="signup__title">Stay updated!</h1>
        <p className="signup__desc">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="signup__info-list">
          <li className="signup__info-list-item">
            <ListIcon />
            <p>Product discovery and building what matters</p>
          </li>
          <li className="signup__info-list-item">
            <ListIcon />
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li className="signup__info-list-item">
            <ListIcon />
            <p>And much more!</p>
          </li>
        </ul>
        <form
          className={formClassName}
          onSubmit={handleSubmit}
          autoComplete="off"
          noValidate
        >
          <fieldset>
            <div className="form__error-container">
              <label htmlFor="email">Email address</label>
              <span className="form__error-message">Valid email required</span>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@company.com"
              value={email}
              onChange={handleChange}
              required
            />
          </fieldset>
          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </section>
    </main>
  );
}

export default SignupForm;
