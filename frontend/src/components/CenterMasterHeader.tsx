import React, { useState } from "react";
import type { CenterMasterHeaderProps } from "../types";
import CreateCenterDialog from "./CreateCenterDialog";
import axios from "axios";
import type { ApiResponse, CreateCenterPayload } from "../types";


const CenterMasterHeader: React.FC<CenterMasterHeaderProps> = ({
  title,
  subtitle,
  buttonText = "CREATE",
  onSuccessCreate = () => {}
}) => {
  const [open, setOpen] = useState<boolean>(false);
   const createCenter = async (
  payload: CreateCenterPayload
): Promise<ApiResponse<any>> => {
  try {
    const response = await axios.post<ApiResponse<any>>(
      import.meta.env.VITE_BACKEND_URL +
      "/centers",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if(response.status === 200){
      setOpen(false);
      onSuccessCreate();
    }
    return response.data;
  } catch (error: any) {
    // Normalize backend error
    const message =
      error?.response?.data?.message ||
      "Failed to create center";

    throw new Error(message);
  }
};


  return (
    <div className="w-full rounded-3xl bg-slate-800 px-8 py-6 shadow-lg">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold tracking-wide text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-1 text-sm uppercase tracking-tight text-slate-400">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

          <button
            onClick={()=> setOpen(true)}
            className="rounded-full bg-orange-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            {buttonText}
          </button>
        </div>
      </div>
      <CreateCenterDialog open={open} onOpenChange={setOpen}  onSubmit={async (data) => {
    await createCenter(data);
  }}/>
    </div>
  );
};

export default CenterMasterHeader;
