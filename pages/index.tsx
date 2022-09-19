import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/future/image";

import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";

import onyxDark from "../public/demos/onyx-dark.png";
import onyxLight from "../public/demos/onyx-light.png";
import snapshots from "../public/demos/snapshots.png"
import timeshiftSnapshots from "../public/demos/timeshift-snapshots.png"
import AmePreview from "../components/AmePreview";
import HomeSection from "../components/HomeSection";

const Home: NextPageWithLayout = () => {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-4 pt-36 text-center md:px-8 md:pb-32 lg:pt-44">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-ctp-text md:text-5xl lg:text-6xl">
            Eine Arch-Linux basierte Distribution
          </h1>
          <p className="mb-6 text-lg font-normal text-ctp-subtext1 sm:px-16 lg:text-xl xl:px-48">
            Crystal Linux ist eine neue Arch-Linux basierte Distribution.
            Freundlich, leistungsstark und einfach zu bedienen.
          </p>

          <div className="w-full flex gap-2 justify-center flex-wrap">
            <a
              className="inline-flex w-full items-center justify-center rounded-lg bg-ctp-mauve py-3 px-5 text-center text-base font-medium text-ctp-base no-underline focus:ring-4 sm:w-fit"
              href="https://github.com/crystal-linux/iso/releases/latest"
            >
              Herunterladen
            </a>

            <Link href="/docs/crystal-linux/getting-started">
              <a className="inline-flex w-full items-center justify-center gap-2 rounded-lg py-3 px-5 text-center text-base font-medium text-ctp-text no-underline focus:ring-4 sm:w-fit">
                Erste Schritte
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </Link>
          </div>
        </div>
      </section>

      <HomeSection className="">
        <div className="basis-1/4">
          <p className="mt-8 font-semibold text-ctp-maroon">Wunderschön</p>
          <p className="mt-4 text-3xl font-extrabold tracking-tight text-ctp-text sm:text-4xl">
            Onyx
          </p>
          <p className="mt-4 max-w-3xl text-ctp-subtext1">
            Installieren Sie Crystal Linux mit der hauseigenen Desktop-Oberfläche, 
            einer benutzerdefinierten GNOME-Sitzung mit einem vertrauten Layout. Oder wählen Sie Ihren Favoriten!
          </p>
        </div>

        <div className="flex basis-3/4 justify-center">
          <Image
            src={resolvedTheme === "dark" ? onyxDark : onyxLight}
            className="rounded-xl shadow-lg shadow-ctp-crust"
            alt="demo of the onyx desktop environment"
          />
        </div>
      </HomeSection>

      <HomeSection>
        <div>
          <p className="mt-8 font-semibold text-ctp-rosewater">Geschmeidig</p>
          <p className="mt-4 text-3xl font-extrabold tracking-tight text-ctp-text sm:text-4xl">
            Automatische Backups
          </p>
          <p className="mt-4 max-w-3xl space-y-6 text-ctp-subtext1">
            Sichern und Wiederherstellen Ihres Systems. Einfaches Booten in Btrfs-Snapshots.
          </p>
        </div>

        <div className="flex basis-3/4 justify-center">
          <Image
            src={timeshiftSnapshots}
            className="rounded-xl shadow-lg shadow-ctp-crust"
            alt="a screenshot showing timeshift, a graphical snapshot tool. 5 snapshots are shown in the window."
          />
        </div>
      </HomeSection>

      <HomeSection className="pb-16 md:pb-28">
        <div className="basis-1/4">
          <p className="mt-8 font-semibold text-ctp-mauve">Rostiger Quarz?</p>
          <p className="mt-4 text-3xl font-extrabold tracking-tight text-ctp-text sm:text-4xl">
            Amethyst
          </p>
          <p className="mt-4 max-w-3xl text-ctp-subtext1">
            Amethyst ist ein schneller, effizienter und leichter 
            AUR-Helfer und Pacman Wrapper. Entwickelt für Crystal, kompatibel mit jeder 
            Arch-basierten Linux Distribution.
          </p>

          <Link href="/docs/amethyst/getting-started">
            <a className="inline-flex mt-4 w-full items-center border border-ctp-mantle bg-ctp-surface0 justify-center gap-2 rounded-full py-2 px-4 text-center text-base font-medium text-ctp-text no-underline focus:ring-4 sm:w-fit">
              Mehr erfahren
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </Link>
        </div>

        <div className="flex basis-3/4 justify-center">
          <AmePreview />
        </div>
      </HomeSection>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <main className="flex flex-col items-center">{page}</main>;
};

export default Home;
