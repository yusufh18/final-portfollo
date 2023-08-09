import { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const ContactForm = () => {
  const [ formState, setFormState ] = useState({ name: "", email: "", message: "" });
  const { name, email, message } = formState;
  const [ errorMessage, setErrorMessage ] = useState("");

  function validateContactForm(event) {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("Enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({...formState, [event.target.name]: event.target.value });
    }
  }

  const submitContactForm = (event) => {
    event.preventDefault();
    setErrorMessage("This form isn't hooked up to the backend just yet, please reach out via LinkedIn.");
    console.log(formState);
  }

  return (
    <section className="contact content">
      <h1>Contact</h1>
      <form className="contact-form" onSubmit={submitContactForm}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onBlur={validateContactForm} name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} onBlur={validateContactForm} name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onBlur={validateContactForm} rows="5" required />
        </div>
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;
