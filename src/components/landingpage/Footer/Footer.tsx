import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <div className="bg-sky-500">
      <div className="px-4 md:px-16 lg:px-32">
        <div className="mt-16"></div>
        <footer className="text-white py-8 ">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <div className="flex-shrink-0 mb-8">
                <Link href="/" className="flex items-center">
                  <div className="flex ">
                    <Image
                      priority
                      src="/logo/Logowhite.png"
                      alt="Logo"
                      width={150}
                      height={50}
                      style={{ width: "30px", height: "auto" }}
                    />
                    <span className="font-montserrat font-medium ml-5 text-xl">
                      Water Management <br />
                      Dashboard
                    </span>
                  </div>
                </Link>
              </div>
              <p>
                Kami adalah perusahaan yang bergerak di bidang layanan pengisian
                tangki air dengan sistem otomatisasi terkini. Misi kami adalah
                memberikan solusi terbaik bagi pelanggan dalam memenuhi
                kebutuhan air mereka, dengan mengedepankan kemudahan, kecepatan,
                dan keakuratan.
              </p>
            </div>

            <div className="col-span-6 md:col-span-3">
              <h3 className="text-xl font-semibold mb-2 underline underline-offset-8 ">
                Produk
              </h3>
              <ul className="list-disc list-outside space-y-5 pt-5">
                <li>Pengisian Tangki Air</li>
                <li>Air Minum Dalam Kemasan</li>
                <li>Air Rumah</li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-3">
              <h3 className="text-xl font-semibold mb-2 underline underline-offset-8 ">
                Service
              </h3>
              <ul className="list-disc list-outside space-y-5 pt-5">
                <li>Otomisasi Pengisian Tangki Air</li>
                <li>Pembelian Online</li>
              </ul>
            </div>

            <div className="col-span-12 md:col-span-2">
              <h3 className="text-xl font-semibold mb-2 underline underline-offset-8 ">
                Social Media
              </h3>
              <ul className="space-y-9 pt-2">
                <li className=" pt-2">
                  <Link href="#">
                    <Button className="bg-white w-[12em] hover:bg-white hover:opacity-55 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 256 256"
                      >
                        <g fill="none">
                          <rect
                            width="256"
                            height="256"
                            fill="url(#skillIconsInstagram0)"
                            rx="60"
                          />
                          <rect
                            width="256"
                            height="256"
                            fill="url(#skillIconsInstagram1)"
                            rx="60"
                          />
                          <path
                            fill="#fff"
                            d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                          />
                          <defs>
                            <radialGradient
                              id="skillIconsInstagram0"
                              cx="0"
                              cy="0"
                              r="1"
                              gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#fd5" />
                              <stop offset=".1" stop-color="#fd5" />
                              <stop offset=".5" stop-color="#ff543e" />
                              <stop offset="1" stop-color="#c837ab" />
                            </radialGradient>
                            <radialGradient
                              id="skillIconsInstagram1"
                              cx="0"
                              cy="0"
                              r="1"
                              gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#3771c8" />
                              <stop offset=".128" stop-color="#3771c8" />
                              <stop
                                offset="1"
                                stop-color="#60f"
                                stop-opacity="0"
                              />
                            </radialGradient>
                          </defs>
                        </g>
                      </svg>
                      <span className="text-sky-500 ml-5">Instagram</span>
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Button className="bg-white w-[12em] hover:bg-white hover:opacity-55 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 256 258"
                      >
                        <defs>
                          <linearGradient
                            id="logosWhatsappIcon0"
                            x1="50%"
                            x2="50%"
                            y1="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stop-color="#1faf38" />
                            <stop offset="100%" stop-color="#60d669" />
                          </linearGradient>
                          <linearGradient
                            id="logosWhatsappIcon1"
                            x1="50%"
                            x2="50%"
                            y1="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stop-color="#f9f9f9" />
                            <stop offset="100%" stop-color="#fff" />
                          </linearGradient>
                        </defs>
                        <path
                          fill="url(#logosWhatsappIcon0)"
                          d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
                        />
                        <path
                          fill="url(#logosWhatsappIcon1)"
                          d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
                        />
                        <path
                          fill="#fff"
                          d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
                        />
                      </svg>
                      <span className="text-sky-500 ml-5">Whatsapp</span>
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Button className="bg-white w-[12em] hover:bg-white hover:opacity-55 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2.45em"
                        height="2em"
                        viewBox="0 0 256 209"
                      >
                        <path
                          fill="#55acee"
                          d="M256 25.45a105 105 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.2 105.2 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.3 52.3 0 0 1-23.79-6.57q-.004.33-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.6 52.6 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435q0-3.417-.152-6.795A106.8 106.8 0 0 0 256 25.45"
                        />
                      </svg>
                      <span className="text-sky-500 ml-5"> Twitter </span>
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
      <div className="text-start mt-8 border-t">
        <p className="text-white py-5 px-4 md:px-16 lg:px-32">
          © Copyright Palawa Technologies 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
