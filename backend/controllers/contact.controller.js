import Contact from '../models/contact.model.js';

// Submit contact form
export const submitContact = async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;

    const newContact = new Contact({
      fullName,
      email,
      phone,
      message
    });

    await newContact.save();

    res.status(201).json({
      message: 'Thank you for contacting us! We will get back to you soon.',
      contact: newContact
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all contacts (admin functionality)
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
