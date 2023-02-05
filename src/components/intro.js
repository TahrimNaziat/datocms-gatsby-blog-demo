import React from "react";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {' '}
        <a
          href="https://famoushairstyle.org/posts/dmca-policy"
          className="underline hover:text-success duration-200 transition-colors"
        >
          DMCA Policy
        </a>{'   '}
        {'   '}
        <a
          href="https://famoushairstyle.org/posts/about-us"
          className="underline hover:text-success duration-200 transition-colors"
        >
          About us
        </a>
        {'   '}
        {'   '}
        <a
          href="https://famoushairstyle.org/posts/privacy-policy"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Privacy Policy
        </a>
        .
      </h4>
    </section>
  )
}
