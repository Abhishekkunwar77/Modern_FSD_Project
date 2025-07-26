import React from "react";
import ZaplogLogo from "../assets/ZaplogLogo.png";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-135">
          <img
            src={ZaplogLogo}
            alt="ZapLog Logo"
            className="h-10 w-auto mb-4"
          />
          <p className="text-2px leading-relaxed">
            ZapLog is your club’s digital heartbeat, a seamless space to track,
            log, and relive every spark of student activity. From brainstorming
            sessions to campus fests, we capture the moments that make your
            community thrive. Organized. Accessible.Built for every passionate
            club and its story.
          </p>
        </div>

        <div className="flex-1 flex items-start md:justify-end gap-30">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Follow us</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-cyan-700 transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-cyan-700 transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-cyan-700 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-cyan-700 transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:text-cyan-700" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-cyan-700" href="/about">
                  About us
                </a>
              </li>

              <li>
                <a className="hover:text-cyan-700" href="/privacy-policy">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>2323232323</p>
              <p>contact@zaplog.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Note */}
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        © 2024 <span className="font-medium text-gray-700">ZapLog</span>. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
