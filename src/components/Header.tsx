// src/components/Header.tsx
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="section-header site-header is-black fixed top-0 z-30 w-full py-2">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Header Left Block */}
          <div className="flex items-center gap-x-10">
            {/* Header Logo */}
            <Link href="/" className="h-auto w-auto">
              <Image
                src="/assets/img/logo-buttery-white.svg"
                alt="logo-buttery-white"
                width={121}
                height={24}
              />
            </Link>

            {/* Header Navigation */}
            <div className="menu-block-wrapper">
              <div className="menu-overlay"></div>
              <nav className="menu-block" id="append-menu-header">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <Image
                      src="/assets/img/icons/icon-caret-down.svg"
                      alt="icon-caret-down"
                      width={12}
                      height={7}
                    />
                  </div>
                  <div className="current-menu-title"></div>
                  <div className="mobile-menu-close">&times;</div>
                </div>
              </nav>
            </div>
          </div>

          {/* Header Right Block */}
          <div className="flex items-center gap-x-6">
            <Link
              href="/contact"
              className="btn-primary relative hidden px-[30px] py-[10px] sm:inline-flex"
            >
              Contact Us
            </Link>

            {/* Responsive Offcanvas Menu Button */}
            <div className="block lg:hidden">
              <button
                id="openBtn"
                className="hamburger-menu mobile-menu-trigger"
              >
                <span className="bg-white before:bg-white after:bg-white"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
