"use client";

export default function Step2Upload({ handleImageChange }:{handleImageChange:any}) {
  return (
    <>
      <p className="text-sm text-gray-600 mb-4">Step 2: Upload Photos</p>
      <div>
        <label className="block text-sm font-medium">Profile Photo</label>
        <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "profile")} />
      </div>
      <div>
        <label className="block text-sm font-medium">Cover Photo</label>
        <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, "cover")} />
      </div>
    </>
  );
}
