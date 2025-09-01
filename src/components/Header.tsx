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
            <Link href="/" className="h-auto w-auto logo-text">
              <Image
                src="/assets/img/b-logo.webp"
                alt="logo-buttery-white"
                width={32}
                height={34}
              />
            </Link>
          </div>

          {/* Header Right Block */}
          <div className="flex items-center gap-x-6">
            <Link
              href="#contact"
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
