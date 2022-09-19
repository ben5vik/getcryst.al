import {
  faDiscord,
  faGithub,
  faMastodon,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDonate,
  faMessage as faSolidMessage
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => (
  <footer className="border-t border-ctp-mantle text-ctp-text">
    <div className="mx-auto flex max-w-8xl flex-col gap-8 px-4 py-6 md:flex-row md:px-8">
      <section className="basis-1/3">
        <h4 className="text-2xl font-bold">Über Crystal</h4>
        <p>
          Crystal Linux ist eine neue Arch-Linux basierte Distribution. 
          Freundlich, leistungsstark und einfach zu bedienen.
        </p>
      </section>
      <section className="basis-1/3">
        <h4 className="text-2xl font-bold">Community</h4>
        <ul>
          <li>
            <a href="https://forum.getcryst.al/">
              <FontAwesomeIcon
                icon={faSolidMessage}
                className="mr-1"
                fixedWidth={true}
              />
              Forums
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Crystal_Linux">
              <FontAwesomeIcon
                icon={faTwitter}
                className="mr-1"
                fixedWidth={true}
              />
              Twitter
            </a>
          </li>
          <li>
            <a href="https://fosstodon.org/@crystal_linux">
              <FontAwesomeIcon
                icon={faMastodon}
                className="mr-1"
                fixedWidth={true}
              />
              Mastodon
            </a>
          </li>
          <li>
            <a href="https://github.com/crystal-linux">
              <FontAwesomeIcon
                icon={faGithub}
                className="mr-1"
                fixedWidth={true}
              />
              Github
            </a>
          </li>
          <li>
            <Link href="/discord">
              <a>
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="mr-1"
                  fixedWidth={true}
                />
                Discord
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://matrix.to/#/#crystal:tar.black">
              <a>
                <FontAwesomeIcon
                  icon={faMessage}
                  className="mr-1"
                  fixedWidth={true}
                />
                Matrix
              </a>
            </Link>
          </li>
        </ul>
      </section>
      <section className="basis-1/3">
        <h4 className="text-2xl font-bold">Anderes</h4>
        <ul>
        <li>
            <Link href="https://opencollective.com/crystal-linux">
              <a>
                <FontAwesomeIcon
                  icon={faDonate}
                  className="mr-1"
                  fixedWidth={true}
                />
                Spende und auf Open Collective
              </a>
            </Link>
          </li>
          <li>
            <a href="https://github.com/crystal-linux/.github/blob/main/CONTRIBUTING.md">
              Richtlinien für die Mitwirkenden
            </a>
          </li>
          <li>
            <a href="https://www.contributor-covenant.org/de/version/2/0/code_of_conduct/">
             Vereinbarung über Verhaltenskodex für Mitwirkende
            </a>
          </li>
          <li>
            <a href="https://developercertificate.org/">
              The DCO</a>
          </li>
        </ul>
      </section>
    </div>
  </footer>
);

export default Footer;
