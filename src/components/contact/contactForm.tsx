import { useState } from 'react';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isValidEmail } from './check-email';

function ContactForm() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e: React.FormEvent) => {
    e.preventDefault();

    toast.success('Message sent successfully!');
    setInput({
      name: '',
      email: '',
      message: '',
    });

    // if (!input.email || !input.message || !input.name) {
    //   setError({ ...error, required: true });
    //   return;
    // } else if (error.email) {
    //   return;
    // } else {
    //   setError({ ...error, required: false });
    // }

    // const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    // const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    // const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    // try {
    //   const res = await emailjs.send(serviceID, templateID, input, userID);

    //   if (res.status === 200) {
    //     toast.success('Message sent successfully!');
    //     setInput({
    //       name: '',
    //       email: '',
    //       message: '',
    //     });
    //   }
    // } catch (err) {
    //   const errorMessage = (err as { text?: string; message?: string }).text ||
    //     (err as { text?: string; message?: string }).message ||
    //     'An error occurred';
    //   toast.error(errorMessage);
    // }
  };

  return (
    <div className="contact-form-container">
      <p className="form-title">Contact with Us</p>
      <div className="contact-form">
        <p className="form-description">
          {"If you have any questions or concerns, please don't hesitate to contact with us. We are always open to any work opportunities that align with our skills and interests."}
        </p>
        <form onSubmit={handleSendMail} className="form-content">
          <div className="form-group">
            <label>Your Name: </label>
            <input
              className="form-control"
              type="text"
              maxLength="100"
              required
              value={input.name}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              onBlur={checkRequired}
            />
          </div>

          <div className="form-group">
            <label>Your Email: </label>
            <input
              className="form-control"
              type="email"
              maxLength="100"
              required
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(input.email) });
              }}
            />
            {error.email && <p className="error-text">Please provide a valid email!</p>}
          </div>

          <div className="form-group">
            <label>Your Message: </label>
            <textarea
              className="form-control"
              maxLength={500}
              required
              value={input.message}
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              onBlur={checkRequired}
              rows={4}
            />
          </div>

          {error.required && <p className="error-text">Email and Message are required!</p>}

          <button type="submit" className="btn btn-primary">
            <span>Send Message</span>
            <TbMailForward className="mt-1" style={{ marginBottom: 3, marginLeft: 5 }} size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
