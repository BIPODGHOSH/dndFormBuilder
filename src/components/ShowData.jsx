import React from "react";

const ShowData = ({ formData }) => {
  console.log(formData);
  return (
    <div className="border border-orange-600 w-full p-2 flex flex-col justify-center items-center gap-4 bg-slate-950">
      <h1 className="text-white text-md md:text-3xl">Submited data</h1>
      <div className="text-white">
        {formData?.name && (
          <p>
            <strong>Name : </strong> {formData.name}
          </p>
        )}
        {formData?.email && (
          <p>
            <strong>Email :</strong> {formData.email}
          </p>
        )}
        {formData?.password && (
          <p>
            <strong>Password :</strong> {formData.password}
          </p>
        )}
      </div>
    </div>
  );
};

export default ShowData;
