import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const HomeService = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    message: Yup.string().required('Message is required')
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    axios.post('/api/sendToDoctors', values)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        resetForm();
      })
      .catch(error => {
        console.error('There was an error submitting the form:', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-pattern py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 mt-10 shadow-md rounded">
        <h1 className="text-2xl font-bold mb-6 text-center" data-aos="fade-up">Request Home Service</h1>
        <p className="text-lg text-gray-700 mb-6" data-aos="fade-up" data-aos-delay="100">
          Please fill out the form below to request a home service. Our team of doctors will review your request and get back to you as soon as possible.
        </p>
        <p className="text-lg text-gray-700 mb-6" data-aos="fade-up" data-aos-delay="200">
          Ensure that you provide accurate information so that we can assist you better. We are committed to providing the best healthcare services at your convenience.
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4" data-aos="fade-up" data-aos-delay="300">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <Field type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4" data-aos="fade-up" data-aos-delay="400">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <Field type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4" data-aos="fade-up" data-aos-delay="500">
                <label htmlFor="phone" className="block text-gray-700">Phone</label>
                <Field type="text" id="phone" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4" data-aos="fade-up" data-aos-delay="600">
                <label htmlFor="address" className="block text-gray-700">Address</label>
                <Field type="text" id="address" name="address" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="mb-4" data-aos="fade-up" data-aos-delay="700">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <Field as="textarea" id="message" name="message" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="800">
                <button type="submit" className="btn text-white bg-primary hover:bg-primary-dark" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default HomeService;