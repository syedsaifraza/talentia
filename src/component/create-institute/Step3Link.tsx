"use client";

export default function Step3Links({
  form,
  handleChange,
}: {
  form: any;
  handleChange: (e: any) => void;
}) {
  return (
    <>
      <p className="text-sm text-gray-600 mb-4">Step 3: Social Links & Location</p>

      {/* Address Fields */}
      <input
        type="text"
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Address"
        className="w-full border p-2 rounded mb-2"
      />
      <input
        type="text"
        name="city"
        value={form.city}
        onChange={handleChange}
        placeholder="City"
        className="w-full border p-2 rounded mb-2"
      />
      <select
        name="country"
        value={form.country}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-4"
      >
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
        <option value="Australia">Australia</option>
        {/* Add more countries as needed */}
      </select>

      {/* Social Links */}
      {["facebook", "instagram", "linkedin", "website"].map((field) => (
        <input
          key={field}
          type={field === "contact" ? "text" : "url"}
          name={field}
          value={form[field]}
          onChange={handleChange}
          placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} URL`}
          className="w-full border p-2 rounded mb-2"
        />
      ))}
    </>
  );
}
