"use client"
import Contacts from "@/components/Contacts";
import SideBar from "@/components/SideBar";

const ContactPage : React.FC = () => {
  return(
    <div className="flex flex-row mt-24 py-0 pb-24">
      <SideBar />
      <Contacts />
    </div>
  )
}

export default ContactPage;