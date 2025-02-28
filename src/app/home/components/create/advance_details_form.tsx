import { useState } from "react";

interface StepProps {
  setStep: (step: number) => void;
}

const AdvancedDetailsForm = ({ setStep }: StepProps) => {
  const [formData, setFormData] = useState({
    website: "",
    numStudents: "",
    coverPhoto: null as File | null,
    profilePhoto: null as File | null,
  });

  const [courses, setCourses] = useState<string[]>([]);
  const [newCourse, setNewCourse] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "cover" | "profile") => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, [type === "cover" ? "coverPhoto" : "profilePhoto"]: file }));
  };

  const addCourse = () => {
    if (newCourse.trim()) {
      setCourses([...courses, newCourse.trim()]);
      setNewCourse("");
    }
  };

  const removeCourse = (index: number) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    alert("Institution Created!");
  };

  return (
    <div className="">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Advanced & Optional Details</h2>

      <form className="grid grid-cols-1 gap-4">
        {/* Cover Photo Upload */}
        <div>
          <label className="block text-gray-700 font-medium">Cover Photo</label>
          <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, "cover")} className="mt-1 w-full" />
          {formData.coverPhoto && (
            <img src={URL.createObjectURL(formData.coverPhoto)} alt="Cover Preview" className="mt-2 rounded-lg w-full h-40 object-cover" />
          )}
        </div>

        {/* Profile Photo Upload */}
        <div>
          <label className="block text-gray-700 font-medium">Profile Photo</label>
          <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, "profile")} className="mt-1 w-full" />
          {formData.profilePhoto && (
            <img src={URL.createObjectURL(formData.profilePhoto)} alt="Profile Preview" className="mt-2 w-24 h-24 rounded-full object-cover" />
          )}
        </div>

        {/* Website */}
        <input
          type="url"
          placeholder="Website (Optional)"
          className="border-2 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:border-green-500"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />

        {/* Number of Students */}
        <input
          type="number"
          placeholder="Number of Students"
          className="border-2 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:border-green-500"
          value={formData.numStudents}
          onChange={(e) => setFormData({ ...formData, numStudents: e.target.value })}
        />

        {/* Courses Offered (Add/Remove Functionality) */}
        <div>
          <label className="block text-gray-700 font-medium">Courses Offered</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Course Name"
              className="border-2 rounded-lg w-full p-3 text-gray-700 focus:outline-none focus:border-green-500"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
            />
            <button type="button" onClick={addCourse} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all">
              Add
            </button>
          </div>
          {/* Display Added Courses */}
          {courses.length > 0 && (
            <div className="mt-3 space-y-2">
              {courses.map((course, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
                  <span className="text-gray-700">{course}</span>
                  <button onClick={() => removeCourse(index)} className="text-red-600 hover:text-red-800">
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="button"
          className="bg-green-600 text-white py-3 px-6 rounded-lg w-full mt-4 hover:bg-green-700 transition-all duration-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdvancedDetailsForm;
