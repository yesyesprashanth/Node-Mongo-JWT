import express from 'express';
const router = express.Router();
import {getAllContacts, createContact, getContact, updateContact, deleteContact } from '../controllers/contactController.js'

router.route('/').get(getAllContacts).post(createContact);
router.route('/:id').get(getContact).patch(updateContact).delete(deleteContact);

export default router;