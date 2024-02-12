import React from "react";
import formData from "../../data/campaignForm.json";
interface CampaignFormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  options?: string[];
}

interface CampaignFormProps {
  campaignCategories: CampaignFormField[];
}

type Props = {};

const CampaignForm: React.FC = ({}: Props) => {
  return (
    <form className="w-full h-full flex flex-col justify-between p-5">
      {formData.campaignCategories.map((field) => (
        <div key={field.name} className="w-full flex flex-col">
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === "select" ? (
            <select id={field.name} name={field.name} required={field.required}>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}></textarea>
          ) : field.type === "file" ? (
            <input
              type="file"
              id={field.name}
              name={field.name}
              required={field.required}
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              required={field.required}
            />
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CampaignForm;
