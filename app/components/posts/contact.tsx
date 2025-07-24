import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <section id="contact" className="bg-[#eaf2ff] dark:bg-gray-600">
      <div className="scroll-mt-14 w-full rounded-t-[40px] py-12 px-4 min-h-screen bg-gray-100 dark:bg-gray-800 flex flex-col items-center pb-25">
      <div className="text-center mb-6">
        <h1 className="text-4xl text-[#202020] dark:text-gray-300 font-bold mb-2">Get In Touch</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          If you have any questions or just want to say hello, <br />
          feel free to reach out!
        </p>
      </div>

      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
        <form className="w-full max-w-md border border-[#666] rounded-3xl p-4 flex flex-col gap-3">
          <h3 className="font-semibold text-center text-gray-800 dark:text-gray-300 text-md">Send Me a Message</h3>

          <div className="flex flex-col text-left">
            <label className="text-[#2e2e38] dark:text-gray-300 mb-1">Name</label>
            <input
              type="text"
              placeholder="example"
              className="border border-[#666]  dark:text-gray-300 rounded-md p-2 focus:border-amber-300 focus:outline focus:outline-amber-300 dark:placeholder-gray-400"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-[#2e2e38] dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="peer border dark:text-gray-300 border-[#666] rounded-md p-2 invalid:border-red-500 invalid:text-red-500 focus:border-amber-300 focus:outline focus:outline-amber-300 placeholder-gray-600 dark:placeholder-gray-400"
            />
            <p className="invisible peer-invalid:visible text-red-600 text-sm">
              Please provide a valid email address.
            </p>
          </div>

          <div className="flex flex-col text-left">
            <label className="text-[#2e2e38] dark:text-gray-300 mb-1">Message</label>
            <textarea
              placeholder="Your message here..."
              className="p-2 border border-[#666] rounded-md focus:border-amber-300 focus:outline focus:outline-amber-300 h-20 placeholder-gray-600 dark:placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            className="mt-2 px-6 py-2 bg-amber-300 text-white dark:text-white font-medium rounded hover:bg-amber-400 transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="w-full max-w-md flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-300 mb-4">Contact Information</h2>
          <div className="flex flex-col gap-4 text-sm w-full">
            <div>
              <div className="flex justify-center items-center lg:justify-start gap-2">
                <FaEnvelope className="text-amber-400" />
                <span className="font-bold text-gray-800 dark:text-gray-300">Email</span>
              </div>
              <p>
                <Link href="mailto:liaaazn09@gmail.com" className="text-gray-800 dark:text-gray-300">
                  liaaazn09@gmail.com
                </Link>
              </p>
            </div>

            <div>
              <div className="flex justify-center lg:justify-start gap-2">
                <FaPhoneAlt className="text-amber-400" />
                <span className="font-bold text-gray-800 dark:text-gray-300 items-center">Phone</span>
              </div>
              <p>
                <Link href="tel:+6289117117765" className="text-gray-800 dark:text-gray-300">
                  +62 891 1711 7765
                </Link>
              </p>
            </div>
          </div>

          <h4 className="text-center font-bold mt-6 text-gray-800 dark:text-gray-300">Follow Me</h4>
          <div className="flex flex-row gap-5 justify-center lg:justify-start mt-3">
            <Link href="https://www.instagram.com/nisa/" target="_blank" aria-label="Instagram">
              <FaInstagram className="text-amber-300 hover:text-amber-400 text-xl" />
            </Link>
            <Link href="https://www.instagram.com/nisa/" target="_blank" aria-label="Linkedin">
              <FaLinkedinIn className="text-amber-300 hover:text-amber-400 text-xl" />
            </Link>
            <Link href="https://www.facebook.com/nisa/" target="_blank" aria-label="Facebook">
              <FaFacebookF className="text-amber-300 hover:text-amber-400 text-xl" />
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
