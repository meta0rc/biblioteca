import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { AdminContext } from "./AdminContext";

export const AdminProvider = ({ children }: { children: JSX.Element }) => {
  const api = useApi();
  const [on, setOn] = useState(false);
  const registerDonation = async (isbn: string) => {
    const res = await api.registerDonation(isbn)
    if(res) {
        return res.data
    }
  };

  const registerLocation = () => {};

  return (
    <AdminContext.Provider value={{ on, registerDonation, registerLocation }}>
      {children}
    </AdminContext.Provider>
  );
};
