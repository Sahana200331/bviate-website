// Single source of truth for contact form validation, used by both
// LeadContactForm.js (client, on the raw "other" select value) and
// api/contact/route.js (server, on the submitted "Other" service string) -
// so the two can never drift out of sync.
export function validateContactForm(values) {
  const errors = {};
  const name = values.name || "";
  const email = values.email || "";
  const service = values.service || "";
  const serviceOther = values.serviceOther || "";
  const message = values.message || "";
  const whatsapp = values.whatsapp || "";

  if (!name.trim()) errors.name = "Full name is required";

  if (!email.trim()) errors.email = "Email address is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Please enter a valid email address";

  if (!service) errors.service = "Please select a service";
  if (service.toLowerCase() === "other") {
    const len = serviceOther.trim().length;
    if (len === 0) errors.serviceOther = "Please tell us what you need";
    else if (len < 10) errors.serviceOther = "Please provide at least 10 characters";
    else if (len > 100) errors.serviceOther = "Please keep this under 100 characters";
  }

  if (!message.trim()) errors.message = "Please tell us about your project";
  else if (message.trim().length < 20) errors.message = "Message must be at least 20 characters";

  if (whatsapp.trim()) {
    if (!/^[\d\s+-]+$/.test(whatsapp)) errors.whatsapp = "Use digits, spaces, dashes, and + only";
    else {
      const digitCount = whatsapp.replace(/\D/g, "").length;
      if (digitCount < 8 || digitCount > 15) errors.whatsapp = "Enter a valid phone number";
    }
  }

  return errors;
}
