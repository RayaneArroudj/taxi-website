import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow bottom-4 m-4 border">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              className="rounded-2xl"
              src="/logo.jpg"
              alt="logo"
              width={50}
              height={50}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Elite Lyon Taxi
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black-500 sm:mb-0">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                Réservation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                CGV
              </a>
            </li>
            <li>
              <a
                href="/mentions-legales"
                className="hover:underline me-4 md:me-6"
              >
                Mentions Légales
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Elite Lyon Taxi™
          </a>
          . Tous droits réservés.
        </span>
      </div>
    </footer>
  );
}
