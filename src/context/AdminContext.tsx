import { createContext } from "react";

type adminContext = {
    on: boolean
    registerDonation: (isbn: string) => Promise<any>
    registerLocation: () => void
}

export const AdminContext = createContext<adminContext>(null!)

