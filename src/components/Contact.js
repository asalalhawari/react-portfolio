import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      <form>
        <div className="input-box">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Phone Number" />
          <input type="text" placeholder="Subject" />
        </div>
        <textarea placeholder="Your Message" cols="30" rows="10"></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
