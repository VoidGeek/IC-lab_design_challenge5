import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! If you have any questions or inquiries,
        please feel free to reach out to us using the options below:
      </p>

      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Email Us</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              You can send us an email at{' '}
              <a href="mailto:contact@example.com">contact@example.com</a>. We
              will get back to you as soon as possible.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Call Us</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              If you prefer to speak with us directly, please call our
              customer support at <a href="tel:+1234567890">+1 (123) 456-7890</a>.
              Our support team is available during business hours.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Visit Our Office</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              You can also visit our office in person. Our address is:
              <br />
              123 Main Street,
              <br />
              City, State 12345,
              <br />
              United States.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Online Form</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              To send us a message or inquiry online, please fill out our{' '}
              <a href="/contact-form">online contact form</a>. We will respond
              promptly after receiving your submission.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Contact;
