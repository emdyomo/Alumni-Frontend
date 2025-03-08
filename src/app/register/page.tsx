"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function Register() {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Alumni Registration</h2>

      {/* Step Wizard */}
      <div className="step-wizard mb-5 d-flex justify-content-between">
        {["Basic Info", "Academic Details", "Professional Info", "Documents"].map((label, index) => (
          <div key={index} className={`step-wizard-item ${step === index + 1 ? "active" : ""}`}>
            <div className="step-icon">{index + 1}</div>
            <p>{label}</p>
          </div>
        ))}
      </div>

      {/* Registration Form */}
      <form className="needs-validation" noValidate>
        {/* Step 1: Basic Information */}
        {step === 1 && (
          <div className="form-section active">
            <h4 className="mb-4">Basic Information</h4>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">First Name*</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name*</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email Address*</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone Number*</label>
                <input type="tel" className="form-control" required />
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <div></div>
              <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
            </div>
          </div>
        )}

        {/* Step 2: Academic Details */}
        {step === 2 && (
          <div className="form-section active">
            <h4 className="mb-4">Academic Details</h4>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Graduation Year*</label>
                <select className="form-select" required>
                  {[...Array(50)].map((_, i) => (
                    <option key={i}>{new Date().getFullYear() - i}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Department*</label>
                <select className="form-select" required>
                  <option value="">Select Department</option>
                  <option value="cs">Computer Science</option>
                  <option value="engineering">Engineering</option>
                  <option value="business">Business</option>
                  <option value="arts">Arts</option>
                </select>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={handlePrev}>Previous</button>
              <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
            </div>
          </div>
        )}

        {/* Step 3: Professional Info */}
        {step === 3 && (
          <div className="form-section active">
            <h4 className="mb-4">Professional Information</h4>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Current Company</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Job Title</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={handlePrev}>Previous</button>
              <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
            </div>
          </div>
        )}

        {/* Step 4: Document Upload */}
        {step === 4 && (
          <div className="form-section active">
            <h4 className="mb-4">Document Upload</h4>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">ID Proof*</label>
                <div className="file-upload border p-3 text-center" onClick={() => document.getElementById("idProof")?.click()}>
                  <FaCloudUploadAlt className="text-grey-600 text-5xl mb-3 mx-auto"/>
                  <p>Click or drag to upload ID proof</p>
                  <input type="file" id="idProof" className="d-none" accept="image/*,.pdf" />
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Degree Certificate*</label>
                <div className="file-upload border p-3 text-center" onClick={() => document.getElementById("degreeCertificate")?.click()}>
                  <FaCloudUploadAlt className="text-grey-600 text-5xl mb-3 mx-auto" />
                  <p>Click or drag to upload degree certificate</p>
                  <input type="file" id="degreeCertificate" className="d-none" accept="image/*,.pdf" />
                </div>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={handlePrev}>Previous</button>
              <button type="submit" className="btn btn-success">Submit Registration</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
