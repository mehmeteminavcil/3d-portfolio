import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {};

  const handleBlur = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Emin",
          from_email: form.email,
          to_email: "mehmeteminavcill@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        //todo: show success message
        //todo:hide allert
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        //todo: show error message
      });
  };

  return (
    <section className="relative flex flex-col lg:flex-row max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="flex flex-col w-full gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="font-semibold text-black-500">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              value={form.name}
              required
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="font-semibold text-black-500">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@gmail.com"
              value={form.email}
              required
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="font-semibold text-black-500">
            Your message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how I can help you!"
              value={form.message}
              required
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
