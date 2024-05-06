import { motion } from "framer-motion";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import Divider from "../utils-components/divider";
import FormTitle from "../utils-components/form-title";
import SubmitButton from "../utils-components/submit-button";

export default function ContactInformations({
  submitIdentificationInformations,
  modificateButton,
  reference,
}) {
  return (
    <>
      <motion.form
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5 }}
        onSubmit={submitIdentificationInformations}
        className="flex flex-col lg:w-4/6 gap-5 h-[374px] justify-between"
        ref={reference}
      >
        <FormTitle>Informations de contact</FormTitle>
        {/* SECTION EMAIL ET TELEPHONE */}
        <div className="flex flex-col gap-11">
          <span className="flex justify-center gap-2 items-center">
            <IoIosMail className="size-5" />
            <input
              type="email"
              placeholder="Adresse email"
              name="email"
              required
              className="border-b w-10/12 pl-1 border-b-blue-500"
            />
          </span>
          <span className="flex justify-center gap-2 items-center">
            <BsFillTelephoneOutboundFill className="size-5" />
            <input
              type="tel"
              placeholder="Numéro de téléphone"
              name="telephone"
              required
              className="border-b w-10/12 pl-1 border-b-blue-500"
            />
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <Divider />
          {/* VALIDATION DU DEUXIEME FORMULAIRE */}
          <div className="flex justify-end mb-2">
            <button
              onClick={modificateButton}
              className="border-2 w-3/12 mr-5 self-end border-orange-500 rounded-lg px-3 py-2 text-orange-500 cursor-pointer hover:bg-orange-400-500 hover:text-white"
            >
              Modifier
            </button>
            <SubmitButton>Envoyer</SubmitButton>
          </div>
        </div>
      </motion.form>
    </>
  );
}
