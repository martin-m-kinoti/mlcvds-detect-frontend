import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "1",
    weight: "",
    height: "",
    ap_hi: "",
    ap_lo: "",
    cholestrol: "1",
    gluc: "1",
    smoke: "0",
    alco: "0",
    active: "0",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: send data to backend
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      {/* Header */}
      <header className="text-center max-w-2xl mb-8">
        <h1 className="text-3xl font-bold text-indigo-700">
          Cardiovascular Disease Detection Tool
        </h1>
        <p className="mt-4 text-gray-700">
          This tool uses a <strong>Random Forest Classification algorithm</strong>{" "}
          to process patient data and predict the likelihood of cardiovascular disease.
        </p>
        <p className="mt-2 text-gray-600">
          Please fill in all required fields accurately:
        </p>
      </header>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Years"
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="1">Female</option>
              <option value="2">Male</option>
            </select>
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Weight (Kg)
            </label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Weight"
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Height (cm)
            </label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              placeholder="Height"
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* Systolic BP */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Systolic BP
            </label>
            <input
              type="number"
              name="ap_hi"
              value={formData.ap_hi}
              onChange={handleChange}
              placeholder="Systolic"
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* Diastolic BP */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Diastolic BP
            </label>
            <input
              type="number"
              name="ap_lo"
              value={formData.ap_lo}
              onChange={handleChange}
              placeholder="Diastolic"
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          {/* Cholesterol */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cholesterol
            </label>
            <select
              name="cholestrol"
              value={formData.cholestrol}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="1">Normal</option>
              <option value="2">Above Normal</option>
              <option value="3">Well Above Normal</option>
            </select>
          </div>

          {/* Glucose */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Glucose
            </label>
            <select
              name="gluc"
              value={formData.gluc}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="1">Normal</option>
              <option value="2">Above Normal</option>
              <option value="3">Well Above Normal</option>
            </select>
          </div>

          {/* Smoking */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Smoking
            </label>
            <select
              name="smoke"
              value={formData.smoke}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="0">Non-Smoker</option>
              <option value="1">Smoker</option>
            </select>
          </div>

          {/* Alcohol */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Alcohol Intake
            </label>
            <select
              name="alco"
              value={formData.alco}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="0">No Alcohol</option>
              <option value="1">Alcohol</option>
            </select>
          </div>

          {/* Physical Activity */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Physical Activity
            </label>
            <select
              name="active"
              value={formData.active}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="0">Inactive</option>
              <option value="1">Active</option>
            </select>
          </div>
        </div>

        {/* Submit button */}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Predict
          </button>
        </div>
      </form>

      {/* Prediction Output */}
      <div className="mt-10 bg-white shadow-md rounded-xl p-6 w-full max-w-2xl">
        <h3 className="text-xl font-semibold text-gray-800">Prediction</h3>
        <p id="predicted-class" className="mt-2 text-gray-600"></p>
        <hr className="my-4" />
        <h3 className="text-xl font-semibold text-gray-800">
          Prediction Statistics
        </h3>
        <p id="proba" className="mt-2 text-gray-600"></p>
      </div>
    </div>
  );
}

export default App;
