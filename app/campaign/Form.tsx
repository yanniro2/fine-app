import React, { FC } from "react";
import formData from "../../data/campaignForm.json";

const From: FC = () => {
  return (
    <div className="flex flex-col w-full h-full p-5">
      {formData.campaignCategories.map((category, index) => (
        <div key={index} className="flex flex-col w-full">
          {"group" in category ? (
            <div className="w-full flex flex-col ">
              <h2>{category.group}</h2>
              <div className="w-full flex items-center">
                {category.fields?.map((field, fieldIndex) => (
                  <div key={fieldIndex} className="flex flex-col w-full ">
                    <label>{field.label}</label>
                    {/* Render input, select, or other appropriate UI components based on the field type */}
                    {field.type === "number" ? (
                      <input
                        type="number"
                        name={field.name}
                        required={field.required}
                        className="w-fit"
                      />
                    ) : (
                      <input
                        type="text"
                        name={field.name}
                        required={field.required}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <label>{category.label}</label>
              {/* Render input, select, or other appropriate UI components based on the category type */}
              {category.type === "select" ? (
                <select name={category.name}>
                  <option value="" disabled>
                    Select an option
                  </option>
                  {category.options?.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={category.type}
                  name={category.name}
                  required={category.required}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default From;
