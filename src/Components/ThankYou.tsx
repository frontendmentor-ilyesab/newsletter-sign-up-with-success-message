import SuccessIcon from "../../assets/images/icon-success.svg?react";

interface ThankYouProps {
  email: string;
  handleDismiss: () => void;
}

function ThankYou({ email, handleDismiss }: ThankYouProps) {
  return (
    <main className="thankyou">
      <section className="thankyou__content">
        <SuccessIcon />
        <h1 className="thankyou__title">Thanks for subscribing!</h1>
        <p className="thankyou__desc">
          A confirmation email has been sent to{" "}
          <span className="bold">{email}</span>. Please open it and click the
          button inside to confirm your subscription.
        </p>
      </section>
      <button onClick={handleDismiss}>Dismiss message</button>
    </main>
  );
}

export default ThankYou;
