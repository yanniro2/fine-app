"use client";
import React, { useState } from "react";
import formData from "../../../data/campaingnForm.json"; // Adjust the path

type DropdownField = {
  id: string;
  label: string;
  type: "dropdown";
  options: string[];
  value: string;
};

type TextareaField = {
  id: string;
  label: string;
  type: "textarea";
  placeholder: string;
  value: string;
};

type TextInputField = {
  id: string;
  label: string;
  type: "text" | "number"; // Adjust as needed
  placeholder: string;
  value: string;
};

type FormField = DropdownField | TextareaField | TextInputField | any;

type FormGroup = {
  label: string;
  fields: FormField[];
};

type FormData = {
  groups: FormGroup[];
};

const initialFormFields: FormField[] = formData.groups.flatMap(
  (group) => group.fields
);

const CampainContent: React.FC = () => {
  const [formFields, setFormFields] = useState<FormField[]>(initialFormFields);

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
        {formData.groups.map((group) => (
          <div key={group.label} className="mb-4">
            <h2 className="text-lg font-bold mb-2">{group.label}</h2>
            {group.fields.map((field) => (
              <div key={field.id} className="flex flex-col mb-2">
                <label htmlFor={field.id}>{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className="border-element"
                  />
                ) : field.type === "dropdown" ? (
                  <select
                    id={field.id}
                    value={field.value}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className="border-element">
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
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
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CampainContent;
