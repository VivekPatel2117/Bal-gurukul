export type CenterMasterHeaderProps = {
  title: string;
  subtitle?: string;
  buttonText?: string;
};

export type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data: T;
};

export type CreateCenterPayload = {
  center_name: string;
  center_address: string;
  center_phone: string;
  center_pincode: string;

  name: string;
  username: string;
  email: string;
  password: string;
  dob?: string; // ISO string
  address?: string;
  phone?: string;
};