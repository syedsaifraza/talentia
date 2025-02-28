import { useState } from "react";

interface StepProps {
  setStep: (step: number) => void;
}

const BasicDetailsForm = ({ setStep }: StepProps) => {
  const [formData, setFormData] = useState({
    institutionName: "",
    location: "",
    institutionType: "",
    establishedYear: "",
    principalName: "",
    contactNumber: "",
    contactEmail: "",
    website: "",
    affiliation: "",
    accreditation: "",
    coursesOffered: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    const requiredFields = ["institutionName", "location", "principalName", "contactNumber"];
    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        // alert(`Please fill in the ${field.replace(/([A-Z])/g, " $1")}.`);
        // return;
      }
    }
    setStep(3);
  };

  return (
    <div className="">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Basic Details</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Institution Name */}
        <div className="relative">
          <input
            type="text"
            name="institutionName"
            id="institutionName"
            placeholder=" "
            className="peer border-2 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:border-indigo-500"
            value={formData.institutionName}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="institutionName"
            className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Institution Name *
          </label>
        </div>

        {/* Location */}
        <div className="relative">
          <input
            type="text"
            name="location"
            id="location"
            placeholder=" "
            className="peer border-2 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:border-indigo-500"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="location"
            className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Location *
          </label>
        </div>

        {/* Institution Type */}
        <input
          type="text"
          name="institutionType"
          placeholder="Institution Type (University, College, etc.)"
          className="border-2 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:border-indigo-500"
          value={formData.institutionType}
          onChange={handleChange}
        />

        {/* Established Year */}
        <input
          type="number"
          name="establishedYear"
          placeholder="Established Year"
          className="border-2 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:border-indigo-500"
          value={formData.establishedYear}
          onChange={handleChange}
        />

        {/* Principal Name */}
        <input
          type="text"
          name="principalName"
          placeholder="Principal/Head Name *"
          className="border-2 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:border-indigo-500"
          value={formData.principalName}
          onChange={handleChange}
          required
        />

        {/* Contact Number */}
        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number *"
          className="border-2 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:border-indigo-500"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />

        {/* Contact Email */}
        <input
          type="email"
          name="contactEmail"
          placeholder="Contact Email"
          className="border-2 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:border-indigo-500"
          value={formData.contactEmail}
          onChange={handleChange}
        />

        {/* Website */}
        <input
          type="url"
          name="website"
          placeholder="Website (optional)"
          className="border-2 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:border-indigo-500"
          value={formData.website}
          onChange={handleChange}
        />

        {/* Affiliation */}
        <select
          name="affiliation"
          className="border-2 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:border-indigo-500"
          value={formData.affiliation}
          onChange={handleChange}
        >
          <option value="">Select Affiliation</option>
          <option value="CBSE">CBSE</option>
          <option value="ICSE">ICSE</option>
          <option value="State Board">State Board</option>
          <option value="UGC">UGC</option>
          <option value="AICTE">AICTE</option>
        </select>

        {/* Accreditation */}
        <select
          name="accreditation"
          className="border-2 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:border-indigo-500"
          value={formData.accreditation}
          onChange={handleChange}
        >
          <option value="">Select Accreditation</option>
          <option value="NAAC">NAAC</option>
          <option value="NBA">NBA</option>
          <option value="ISO">ISO Certified</option>
        </select>

        {/* Courses Offered */}
        <input
          type="text"
          name="fullAdress"
          placeholder="Full Address"
          className="border-2 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:border-indigo-500"
          value={formData.coursesOffered}
          onChange={handleChange}
        />
      </form>

      {/* Next Button */}
      <button
        type="button"
        className="bg-indigo-600 text-white py-3 px-6 rounded-lg w-full mt-4 hover:bg-indigo-700 transition-all duration-300"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default BasicDetailsForm;
