/* Import statements and other code */
"use client"
import { useState, useEffect } from "react";
import formData from "../../../data/campaingnForm.json"


type Props = {};

const CampainContent: React.FC<Props> = () => {
  const [formFields, setFormFields] = useState(formData.fields);

  const handleChange = (id: string, value: string) => {
    setFormFields((prevFields) =>
      prevFields.map((field) => (field.id === id ? { ...field, value } : field))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform your form submission logic here using the updated formFields state.
    console.log(formFields);
  };

  return (
    <div className="bg-dark z-[3000] fixed top-0 right-0 bottom-0 w-[20vw] h-screen drop-shadow border-l-2 border-borderC text-white px-4 py-2">
      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex flex-col justify-between">
        {formFields.map((field) => (
          <div key={field.id} className="flex flex-col">
            <label htmlFor={field.id}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                placeholder={field.placeholder}
                value={field.value}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="border-element"
              />
            ) : (
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                value={field.value}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="border-element"
              />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CampainContent;
