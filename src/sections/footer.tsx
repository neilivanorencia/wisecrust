import {
  FaTwitter,
  FaGithub,
  FaDiscord,
  FaFacebook,
  FaHome,
  FaVideo,
} from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import type { IconType } from "react-icons";

const footerNavLinks: {
  title: string;
  href: string;
  overview: string;
  icon: IconType;
}[] = [
  {
    title: "Home",
    href: "/",
    overview: "Return to our main landing page.",
    icon: FaHome,
  },
  {
    title: "Articles",
    href: "/articles",
    overview: "Explore our collection of essays.",
    icon: IoIosPaper,
  },
  {
    title: "Courses",
    href: "/courses",
    overview: "Enroll in structured learning paths.",
    icon: FaVideo,
  },
  {
    title: "Contact",
    href: "/contact",
    overview: "Get in touch with our team.",
    icon: IoCall,
  },
];

const socialLinks: {
  name: string;
  href: string;
  icon: IconType;
  description: string;
}[] = [
  {
    name: "Twitter",
    href: "#",
    icon: FaTwitter,
    description: "Follow our updates and posts.",
  },
  {
    name: "GitHub",
    href: "#",
    icon: FaGithub,
    description: "Contribute to improve this website.",
  },
  {
    name: "Discord",
    href: "#",
    icon: FaDiscord,
    description: "Join the community discourse.",
  },
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebook,
    description: "Visit our page for updates.",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-green-300 pt-24 pb-12">
      <div className="container mx-auto px-8 md:px-4">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-start">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 text-center sm:text-left">
            {socialLinks.map(({ name, href, icon: Icon, description }) => (
              <div key={name}>
                <a
                  href={href}
                  className="inline-flex items-center gap-3 font-sans text-base font-semibold text-slate-700 transition-colors hover:text-green-700 sm:text-xl"
                >
                  <Icon className="size-6" />
                  <span>{name}</span>
                </a>
                <p className="mt-1 font-serif text-base font-medium text-slate-700 sm:text-lg">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 text-center sm:text-left">
            {footerNavLinks.map(({ title, href, overview, icon: Icon }) => (
              <div key={title}>
                <a
                  href={href}
                  className="inline-flex items-center gap-3 font-sans text-base font-semibold text-slate-700 transition-colors hover:text-green-700 sm:text-xl"
                >
                  <Icon className="size-5" />
                  <span>{title}</span>
                </a>
                <p className="mt-2 font-serif text-base font-medium text-slate-700 sm:text-lg">
                  {overview}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-24 text-center font-sans text-base font-bold tracking-wider text-slate-600 uppercase md:text-lg">
          Copyright © {new Date().getFullYear()} Wisecrust
        </p>
      </div>
    </footer>
  );
};
