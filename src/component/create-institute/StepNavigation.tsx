"use client";

export default function StepNavigation({ step, nextStep, prevStep,submitForm }:{step:number,nextStep:()=>void,prevStep:()=>void,submitForm:()=>void}) {
  return (
    <div className="flex justify-between pt-4 px-2  absolute bottom-0 pb-5 left-0  right-0 w-100">
      {step > 1 && (
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 text-white w-full rounded-md">
          Previous
        </button>
      )}
      {step < 3 ? (
        <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white w-full rounded-md">
          Next
        </button>
      ) : (
        <button
          onClick={()=>submitForm() }
          className="px-4 py-2 bg-green-500 text-white w-full rounded"
        >
          Create Page
        </button>
      )}
    </div>
  );
}
