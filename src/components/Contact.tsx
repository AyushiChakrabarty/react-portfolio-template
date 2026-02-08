import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';

// Set in .env.local (never commit): REACT_APP_FORMSPREE_ID=your_form_id
const FORMSPREE_FORM_ID = process.env.REACT_APP_FORMSPREE_ID || '';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const hasName = name.trim() !== '';
    const hasEmail = email.trim() !== '';
    const hasMessage = message.trim() !== '';

    setNameError(!hasName);
    setEmailError(!hasEmail);
    setMessageError(!hasMessage);

    if (!hasName || !hasEmail || !hasMessage) return;

    if (!FORMSPREE_FORM_ID) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          {status === 'success' && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Thanks! Your message was sent. I'll get back to you soon.
            </Alert>
          )}
          {status === 'error' && (
            <Alert severity="error" sx={{ mb: 2 }}>
              Something went wrong. Please try again or email me directly.
            </Alert>
          )}
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <div className="contact-field">
                <label htmlFor="contact-name">Your Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={nameError ? 'error' : ''}
                  aria-required
                />
                {nameError && <span className="contact-helper error">Please enter your name</span>}
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">Email / Phone *</label>
                <input
                  id="contact-email"
                  type="text"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={emailError ? 'error' : ''}
                  aria-required
                />
                {emailError && (
                  <span className="contact-helper error">Please enter your email or phone number</span>
                )}
              </div>
            </div>
            <div className="contact-field body-form">
              <label htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                placeholder="Send me any inquiries or questions"
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={messageError ? 'error' : ''}
                aria-required
              />
              {messageError && (
                <span className="contact-helper error">Please enter the message</span>
              )}
            </div>
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={status === 'sending'}
              className="contact-submit"
            >
              {status === 'sending' ? 'Sending…' : 'Send'}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
