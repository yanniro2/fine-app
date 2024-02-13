"use client";
import React, { FC, useState } from "react";
import formData from "../../data/campaignForm.json";
import { MdAdd } from "react-icons/md";
const From: FC = () => {
  const [showForm, setShowForm] = useState(false);
  const handleCreateCampaign = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="flex flex-col w-full h-full justify-between text-white p-5">
      {!showForm && (
        <button
          onClick={handleCreateCampaign}
          className="button-glow flex items-center justify-between capitalize text-white gap-3">
          create new campaign <MdAdd />
        </button>
      )}
      {showForm && (
        <div className="w-full h-full flex flex-col justify-between">
          {formData.campaignCategories.map((category, index) => (
            <div key={index} className="flex flex-col w-full gap-1">
              {"group" in category ? (
                <div className="w-full flex flex-col gap-1">
                  {/* <h2>{category.group}</h2> */}
                  <div className="w-full grid grid-cols-2 gap-1">
                    {category.fields?.map((field, fieldIndex) => (
                      <div key={fieldIndex} className="flex flex-col w-full ">
                        <label className="label">{field.label}</label>
                        {/* Render input, select, or other appropriate UI components based on the field type */}

                        {field.type === "number" ? (
                          <input
                            type="number"
                            name={field.name}
                            required={field.required}
                            className="border-element"
                            placeholder={`${field.sample}`}
                          />
                        ) : (
                          <input
                            type="text"
                            name={field.name}
                            required={field.required}
                            className="border-element"
                            placeholder={`${field.sample}`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <label className="label">{category.label}</label>
                  {/* Render input, select, or other appropriate UI components based on the category type */}
                  {category.type === "select" ? (
                    <select
                      name={category.name}
                      className="border-element text-[#707070]">
                      <option value="" disabled className="">
                        Select an option
                      </option>
                      {category.options?.map((option, optionIndex) => (
                        <option key={optionIndex} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : category.type === "textarea" ? (
                    <textarea
                      name={category.name}
                      id={category.name}
                      className="border-element"
                      placeholder={category.sample}></textarea>
                  ) : (
                    <input
                      type={category.type}
                      name={category.name}
                      required={category.required}
                      className="border-element"
                      placeholder={category.sample}
                    />
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="flex items-center justify-between capitalize pt-3">
            <button className="cancel" onClick={handleCreateCampaign}>
              cancel
            </button>

            <button className="submit">submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default From;
