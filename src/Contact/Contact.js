import React, { useEffect } from 'react';
import './Contact.css';

function Contact() {
  useEffect(() => {
    const textarea = document.getElementById('description');
    const contactContainer = document.querySelector('.contact-container');

    const adjustSize = () => {
      contactContainer.style.height = 'auto';
      contactContainer.style.width = 'auto';
      contactContainer.style.height = `${contactContainer.scrollHeight}px`;
      contactContainer.style.width = `${contactContainer.scrollWidth}px`;
    };

    textarea.addEventListener('input', adjustSize);

    return () => {
      textarea.removeEventListener('input', adjustSize);
    };
  }, []);

  return (
    <section id="contact" className="contact">
      <h1>Contact</h1>
      <p id='contact-text'>Feel free to reach out to me with any questions or opportunities!</p>
      <div className='contact-container'>
        <form id='contactForm' action='https://formspree.io/f/mrgwvqag' method='POST'>
          <div className='form-header'>
            <label htmlFor='subject'>Subject</label>
            <input type='text' id='subject' name='subject' required />
          </div>

          <div className='form-header'>
            <label htmlFor='description'>Description</label>
            <textarea id='description' name='description' rows={5} required></textarea>
          </div>

          <button className='submit-button' type='submit'>Send</button>
        </form>
      </div>

      <div className='buttom-contact-container'>
        <h2>Other ways to reach me:</h2>
        <p>philip@des-design.com</p>
        <p><a href="https://www.linkedin.com/in/philip-sch%C3%B8nning-0970041b7/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
    </section>
  );
}

export default Contact;