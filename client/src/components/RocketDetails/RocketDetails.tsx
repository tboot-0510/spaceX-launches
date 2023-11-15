import React from "react";
import { Pen } from "@phosphor-icons/react";
import { textWrapper } from "../../helpers/format";
import { FormattedRocket } from "../../interfaces/rocket";

interface RocketDetailsProps {
  rocket: FormattedRocket;
}

const RocketDetails: React.FC<RocketDetailsProps> = ({ rocket }) => {
  const { name, company, description, country, additional_info } = rocket;

  return (
    <div className="f fd-c w-100-p">
      <h1>Rocket Information</h1>
      <div className="f fd-r g-8">
        {textWrapper("Rocket Name", name)}
        {textWrapper("Company", company)}
        {textWrapper("Country", country)}
      </div>
      <div className="f fd-r mt-12">
        <Pen size={24} />
        <h2 style={{ maxWidth: "90%" }}>
          <i>
            <p>{description}</p>
          </i>
        </h2>
      </div>
      <div className="f fd-r g-8 mt-12">
        {Object.entries(additional_info).map((values, index) => (
          <div key={index}>{`${values[0]}: ${values[1]}`}</div>
        ))}
      </div>
    </div>
  );
};

export default RocketDetails;
