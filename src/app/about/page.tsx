import clsx from "clsx";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/SocialIcons";
import portraitImage from "@/images/portrait.jpg";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Irving Dinh — a software engineer, designer, and amateur photographer based in Ho Chi Minh City.",
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Irving Dinh. A software engineer, designer, and amateur
            photographer based in Ho Chi Minh City.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;ve been tinkering with computers for as long as I can
              remember. It started with Cheat Engine on Diablo 2 when I was
              eight, writing LUA bots for MMORPGs by fourteen, and building
              websites for fun in high school. The instinct was always the same:
              find something tedious, figure out how to automate it, and move on
              to the next thing.
            </p>
            <p>
              Over the past decade, that instinct turned into a career.
              I&apos;ve built e-commerce platforms at Sendo, ride-hailing
              systems at Grab, POS software at Highlands Coffee, and identity
              infrastructure at Axon. Along the way, I picked up a deep love for
              system architecture, developer experience, and designing
              interfaces that real people actually enjoy using.
            </p>
            <p>
              When I&apos;m not writing code, I&apos;m usually out with a
              camera. Landscape and travel photography is how I slow down — it
              forces me to look at the world differently and appreciate the
              details I normally rush past.
            </p>
            <p>
              Right now, I&apos;m taking a break from full-time work to explore
              what AI makes possible. After a decade of building for others,
              I&apos;m finally building for myself — chasing curiosity wherever
              it leads.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/irvingdinh" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://instagram.com/irvingdinh"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/irvingdinh"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/irvingdinh"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:irving.dinh@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              irving.dinh@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
