"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaCloudUploadAlt, FaTimes, FaBars} from "react-icons/fa";

export default function Register() {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);
   const [menuOpen, setMenuOpen] = useState(false);
  
    function AnimatedCounter({ value }: { value: number }) {
      const [count, setCount] = useState(0);
  
      return <span className="text-4xl md:text-5xl font-bold">{count}+</span>;
    }

  return (
    // Register Form
    <div className="container my-5 " >
                <nav className="bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center relative">
        <h1 className="text-xl md:text-2xl font-bold text-white">Alumni Portal</h1>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
            
          </button>
        </div>
        {/* Desktop Menu */}
        <div className={`absolute md:static top-6 left-0 w-full md:w-auto bg-gray-800 md:flex md:space-x-4 transition-all ${menuOpen ? "block" : "hidden"}`}>
          <a href="/login" className="block md:inline bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-300">Login</a>
          <a href="/register" className="block md:inline bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-300">Register</a>
        </div>
        </nav>
            <h2 className="text-center top-6 mb-2">Alumni Registration</h2>

      

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
                  <option value="art">Art</option>
                  <option value="commercial">Commercial</option>
                  <option value="science">Science</option>
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
