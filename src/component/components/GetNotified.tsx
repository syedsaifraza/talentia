"use client";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { BiSolidEdit } from "react-icons/bi";

interface AlertData {
  title: string;
  company: string;
  keywords: string;
}

const GetNotified: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [alerts, setAlerts] = useState<AlertData[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<AlertData>({
    title: "",
    company: "",
    keywords: "",
  });

  // Load alerts from local storage on component mount
  useEffect(() => {
    const storedAlerts = localStorage.getItem("alerts");
    if (storedAlerts) {
      setAlerts(JSON.parse(storedAlerts));
    }
  }, []);

  // Save alerts to local storage whenever alerts change
  useEffect(() => {
    localStorage.setItem("alerts", JSON.stringify(alerts));
  }, [alerts]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (create or edit alert)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Edit existing alert
      const updatedAlerts = [...alerts];
      updatedAlerts[editIndex] = formData;
      setAlerts(updatedAlerts);
      setEditIndex(null);
    } else {
      // Create new alert
      setAlerts((prev) => [...prev, formData]);
    }
    setIsModalOpen(false);
    setFormData({ title: "", company: "", keywords: "" }); // Reset form
  };

  // Handle editing an alert
  const handleEdit = (index: number) => {
    setFormData(alerts[index]);
    setEditIndex(index);
    setIsModalOpen(true);
  };

  // Handle deleting an alert
  const handleDelete = (index: number) => {
    const updatedAlerts = alerts.filter((_, i) => i !== index);
    setAlerts(updatedAlerts);
  };

  if (!visible) return null;

  return (
    <div className="bg-gray-100 p-4 rounded-lg flex flex-col space-y-4 border">
      {/* Header and Create Alert Button */}

      {/* Conditionally Render Create Alert Button */}
      {alerts.length === 0 && (
        <>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">
                Get notified about jobs you are interested in
              </h3>
              <p className="text-sm text-gray-600">
                Create an alert for a job title, a company, or key words.
              </p>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close notification"
            >
              <IoClose size={24} />
            </button>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
          >
            Create alert
          </button>
        </>
      )}

      {/* Modal for Creating/Editing Alerts */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] bg-black bg-opacity-50 flex justify-center items-center">
          <div className="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
            <div className="bg-blue-800 px-10 py-10 text-center text-white">
              <p className="font-serif text-2xl font-semibold tracking-wider">
                {editIndex !== null ? "Edit Alert" : "Create Alert"}
              </p>
              <p className="text-center text-blue-100">
                Please provide the details for your alert.
              </p>
            </div>
            <form className="space-y-4 px-8 py-10" onSubmit={handleSubmit}>
              <label className="block" htmlFor="title">
                <p className="text-gray-600">Job Title</p>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                  placeholder="Enter job title"
                  required
                />
              </label>
              <label className="block" htmlFor="company">
                <p className="text-gray-600">Company</p>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                  placeholder="Enter company name"
                />
              </label>
              <label className="block" htmlFor="keywords">
                <p className="text-gray-600">Keywords</p>
                <input
                  type="text"
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleInputChange}
                  className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                  placeholder="Enter keywords"
                />
              </label>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setEditIndex(null);
                    setFormData({ title: "", company: "", keywords: "" });
                  }}
                  className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900"
                >
                  {editIndex !== null ? "Save Changes" : "Create Alert"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Display Alerts */}
      <div className=" space-y-2">
        {alerts.map((alert, index) => (
          <div
            key={index}
            role="alert"
            className=" p-3 flex flex-row justify-between  text-sm text-white bg-slate-800 rounded-md"
          >
            <div>
              {alert.title} |{alert.company} |{alert.keywords} |
            </div>
            <div className="flex flex-row gap-4">
              <button
                className="flex items-center justify-center "
                type="button"
              >
                <BiSolidEdit
                  className="text-white text-[20px]"
                  onClick={() => handleEdit(index)}
                />
              </button>

              <button
                className="flex items-center justify-center text-white "
                type="button"
              >
                <IoClose
                  className="text-white text-[20px]"
                  onClick={() => handleDelete(index)}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetNotified;
