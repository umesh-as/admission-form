import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
  // State to store the form input values
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
  });

  // State to handle form validation errors
  const [errors, setErrors] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {};
    let isValid = true;

    // Check each field for validation
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
        isValid = false;
      } else {
        newErrors[field] = '';
      }
    });

    setErrors(newErrors);

    // If validation passes, show alert with user data
    if (isValid) {
      alert(`Data stored successfully!\n\nName: ${formData.name}\nAddress: ${formData.address}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nGender: ${formData.gender}\nDate of Birth: ${formData.dob}\nCourse: ${formData.course}`);
    }
  };

  // Handle cancel button click (reset the form)
  const handleCancel = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
    });
    setErrors({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      {/* Centered White Background Form with Border Radius and Margin */}
      <div
        className="container bg-white p-4 shadow-lg"
        style={{
          maxWidth: '500px',  // Reduced max width to make it smaller
          maxHeight: '800px',
          borderRadius: '10px',  // Border radius for rounded corners
          marginTop: '20px',  // Margin top
          marginBottom: '20px',  // Margin bottom
        }}
      >
        <h2 className="text-center mb-4">Higher Secondary Admission</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          
          {/* Name Input */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>

          {/* Address Input */}
          <div className="form-group mt-3">
            <label htmlFor="address">Address</label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              placeholder="Enter your address"
              required
            />
            {errors.address && <small className="text-danger">{errors.address}</small>}
          </div>

          {/* Mobile Input */}
          <div className="form-group mt-3">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
            />
            {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
          </div>

          {/* Email Input */}
          <div className="form-group mt-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          {/* Gender Radio Buttons */}
          <div className="form-group mt-3">
            <label>Gender</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
            {errors.gender && <small className="text-danger">{errors.gender}</small>}
          </div>

          {/* Date of Birth Input */}
          <div className="form-group mt-3">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
            {errors.dob && <small className="text-danger">{errors.dob}</small>}
          </div>

          {/* Course Dropdown */}
          <div className="form-group mt-3">
            <label htmlFor="course">Course</label>
            <select
              className="form-control"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select Course</option>
              <option value="Biology">Biology</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Humanities">Humanities</option>
            </select>
            {errors.course && <small className="text-danger">{errors.course}</small>}
          </div>

          {/* Buttons */}
          <div className="form-group mt-4">
            <button type="submit" className="btn btn-primary">Register</button>
            <button type="button" className="btn btn-secondary ml-2" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
