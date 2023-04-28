"use client"
import Contacts from "@/components/Contacts";
import SideBar from "@/components/SideBar";

const ContactPage : React.FC = () => {
  return(
    <div className="flex flex-row mt-24">
      <SideBar />
      <Contacts isContactPage={true} searchQuery={""} />
    </div>
  )
}

export default ContactPage;