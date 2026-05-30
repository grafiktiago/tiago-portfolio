"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaArtstation,
  FaXTwitter,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Home() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
const artworks = [
  {
    src: "/art1.jpg",
    alt: "black adam dc comics Fantasy warrior illustration by Tiago da Silva, digital painting"
  },
  {
    src: "/art2.jpg",
alt: "Fantasy warrior illustration by Tiago da Silva, digital painting"
  },
  {
    src: "/art3.jpg",
    alt: "dr.dom spiderman marvel illustration by Tiago da Silva, digital painting"
  },
  {
    src: "/art4.jpg",
    alt:"chun-li streetfighter capcom illustration by Tiago da Silva, digital painting"
  },
  {
    src: "/art5.jpg",
  alt: "batman dc comics illustration by Tiago da Silva, digital painting"
  },
  {
    src: "/art6.jpg",
    alt: "superman superboy ultraman Epic fantasy scene digital painting",
  },
  {
    src: "/art7.jpg",
    alt: "advertising illustration by Tiago da Silva",
  },
  {
    src: "/art8.jpg",
    alt: "gaslighters comic cover artwork",
  },
  {
    src: "/art9.jpg",
    alt: "x-men marvel madelyne jean grey digital painting",
  },
  {
    src: "/art10.jpg",
    alt: "advertising Illustration",
  },
  {
    src: "/art11.jpg",
    alt: "x-men scott cyclop Portuguese illustrator Tiago da Silva",
  },
  {
    src: "/art12.jpg",
    alt: "poison ivy dc comics Cover art illustration",
  },
  {
    src: "/art13.jpg",
    alt: "Digital fantasy illustration",
  },
  {
    src: "/art14.jpg",
    alt: "rogue xmen marvel personal art artwork",
  },
  {
    src: "/art15.jpg",
    alt: "red sonja comic cover Character illustration",
  },
  {
    src: "/art16.jpg",
    alt: "terraformers video game illustration",
  },
  {
    src: "/art17.jpg",
    alt: "snake eyes g.i joe comic cover Digital painting by Tiago da Silva",
  },
  {
    src: "/art18.jpg",
    alt: "xmen new mutants marvel illyana rasputin magik Fantasy adventure illustration",
  },
  {
    src: "/art19.jpg",
    alt: "tmnt april comic Cover art illustration",
  },
  {
    src: "/art20.jpg",
    alt: "power girl dc comics Comic art and cover illustration",
  },
  {
    src: "/art21.jpg",
    alt: "venom marvel Comic art and cover illustration",
  },
  {
    src: "/art22.jpg",
    alt: "Digital fantasy painting",
  },
  {
    src: "/art23.jpg",
    alt: "dr.dom marvel comic cover",
  },
  {
    src: "/art24.jpg",
   alt: "vampirella comic cover",
  },
  {
    src: "/art25.jpg",
     alt: "Digital fantasy painting",
  },
  {
    src: "/art26.jpg",
    alt: "comic book cover",
  },
  {
    src: "/art27.jpg",
    alt: "comic book cover shazam mary dc comics",
  },
  {
    src: "/art28.jpg",
    alt: "comic book gun honey comics",
  },
  {
    src: "/art29.jpg",
    alt: "comic book cover red sonja comics",
  },
];

  

  return (
    <main className="bg-black text-white scroll-smooth">

{/* NAVBAR */}
<header className="fixed top-0 left-0 w-full z-50">

  {/* TOP GRADIENT */}
  <div className="absolute inset-0 h-32 bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none" />

  <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-6 md:py-8">

   {/* Logo */}
    <div className="text-white text-2xl font-bold tracking-[0.25em] uppercase">
      Grafik
    </div>
<button
  className="md:hidden text-white text-3xl z-50"
  onClick={() => setMobileMenu(!mobileMenu)}
>
  {mobileMenu ? <FaXmark /> : <FaBars />}
</button>
    {/* Navigation */}
    <div className="hidden md:flex gap-10 text-sm uppercase tracking-[0.2em] text-zinc-300">

      <a
        href="#home"
        className="hover:text-white transition duration-300"
      >
        Home
      </a>

      <a
        href="#gallery"
        className="hover:text-white transition duration-300"
      >
        Gallery
      </a>

      <a
        href="#info"
        className="hover:text-white transition duration-300"
      >
        Info
      </a>

      <a
        href="#projects"
        className="hover:text-white transition duration-300"
      >
        Projects
      </a>

      <a
        href="#contact"
        className="hover:text-white transition duration-300"
      >
        Contact
      </a>

    </div>

  </nav>
  {/* MOBILE MENU */}
{mobileMenu && (

  <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">

    <div className="flex flex-col items-center py-10 gap-8 text-lg uppercase tracking-[0.2em]">

      <a
        href="#home"
        onClick={() => setMobileMenu(false)}
        className="hover:text-zinc-400 transition"
      >
        Home
      </a>

      <a
        href="#gallery"
        onClick={() => setMobileMenu(false)}
        className="hover:text-zinc-400 transition"
      >
        Gallery
      </a>

      <a
        href="#info"
        onClick={() => setMobileMenu(false)}
        className="hover:text-zinc-400 transition"
      >
        Info
      </a>

      <a
        href="#projects"
        onClick={() => setMobileMenu(false)}
        className="hover:text-zinc-400 transition"
      >
        Projects
      </a>

      <a
        href="#contact"
        onClick={() => setMobileMenu(false)}
        className="hover:text-zinc-400 transition"
      >
        Contact
      </a>

    </div>

  </div>

)}
</header>

{/* HERO SECTION */}
<section
  id="home"
  className="relative h-screen flex items-center overflow-hidden"
>

  {/* BACKGROUND IMAGE */}
<Image
  src="/hero.jpg"
  alt="g.i. joe snake eyes"
  fill
  priority
  quality={75}
  className="absolute inset-0 object-cover object-center md:object-[center_30%]"
/>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/10" />

  {/* GRADIENT OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">

    <div className="max-w-3xl">

      {/* SMALL INTRO */}
      <p className="uppercase tracking-[0.4em] text-white mb-6 text-sm">
        Digital Artist • Illustrator
      </p>

      {/* MAIN TITLE */}
      <h1 className="text-4xl sm:text-5xl md:text-8xl font-black leading-none tracking-tight">

        <span className="block text-zinc-200">
          Welcome to
        </span>

        <span className="block mt-2">
          THE ART OF
        </span>

        <span className="block text-white mt-2">
          TIAGO DA SILVA
        </span>

      </h1>

      {/* SUBTITLE */}
      <p className="mt-6 text-base sm:text-lg md:text-2xl text-zinc-300 leading-relaxed max-w-2xl">
        A world of illustrations, fantasy worlds,
        comic art, and cinematic digital painting.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">

        <a
          href="#gallery"
          className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition duration-300"
        >
          Explore Gallery
        </a>

        <a
          href="#info"
          className="px-8 py-4 border border-zinc-500 rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          About the Artist
        </a>

      </div>

    </div>

  </div>

{/* FLOATING SOCIALS */}
<div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50">

  <div className="flex flex-col gap-6 bg-black/30 backdrop-blur-md px-4 py-6 rounded-full border border-white/10">

    {/* Instagram */}
    <a
      href="https://www.instagram.com/grafiktiago/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-white transition duration-300 text-xl"
      
    >
      <FaInstagram />
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/grafiktiago/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-white transition duration-300 text-xl"
      
    >
      <FaFacebookF />
    </a>

    {/* X / Twitter */}
    <a
      href="https://x.com/grafik_tiago/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-white transition duration-300 text-xl"
      
    >
      <FaXTwitter />
    </a>

    {/* ArtStation */}
    <a
      href="https://www.artstation.com/tiagodasilva/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-white transition duration-300 text-xl"
      
    >
      <FaArtstation />
    </a>

    {/* Email */}
    <a
      href="mailto:tiago.da.silva@outlook.com"
      
      className="text-zinc-400 hover:text-white transition duration-300 text-xl"
      
    >
      <MdEmail />
    </a>

  </div>

</div>

  {/* SCROLL INDICATOR */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-400 animate-bounce">

    <div className="flex flex-col items-center gap-3">

      <span className="uppercase tracking-[0.3em] text-xs">
        Scroll
      </span>

      <div className="w-[1px] h-12 bg-zinc-500" />

    </div>

  </div>

</section>

      {/* GALLERY */}
 
{/* GALLERY */}

<motion.section
  id="gallery"
  className="min-h-screen px-4 md:px-6 py-16 md:py-24 bg-black"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>

  <div className="max-w-7xl mx-auto">

<h2 className="text-3xl md:text-5xl font-bold mb-4">
  Gallery
</h2>

<p className="text-zinc-400 mb-12 max-w-3xl">
  Fantasy art, comic book covers, digital paintings, concept art and professional illustrations.
</p>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

{artworks.map((art, index) => (

<Image
  key={index}
  src={art.src}
  alt={art.alt}
  width={1000}
  height={1000}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  quality={75}
  onClick={() => setSelectedImage(art.src)}
  className="rounded-xl w-full hover:scale-[1.02] hover:brightness-110 transition duration-500 cursor-pointer"
/>

))}

</div>

  </div>

</motion.section>

{/* INFO */}
<section
  id="info"
  className="bg-zinc-950 px-4 md:px-6 py-20 md:py-32"
>
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

    {/* PHOTO */}
    <div>
    <Image
  src="/profile.jpg"
  alt="Tiago da Silva"
  width={1200}
  height={1600}
  className="rounded-2xl w-full object-cover border border-zinc-800"
/>
    </div>

    {/* TEXT */}
    <div>

      <h2 className="text-3xl md:text-5xl font-bold mb-10">
  Info / Bio
</h2>

      <div className="space-y-8 text-zinc-300 leading-relaxed text-base md:text-lg">        <p>
          <strong className="text-white">
            Tiago da Silva, aka Grafik,
          </strong>{" "}
          is a Portuguese digital artist and illustrator.
          His career spans editorial illustration, advertising,
          comics, videogames, and film, bringing a versatile visual
          language and strong storytelling approach to every project.
        </p>

        <p>
          Inspired by comic books from an early age, Tiago later
          studied Graphic Design, where he discovered digital painting
          and built the technical foundation for his career.
        </p>

        <p>
          Since then, he has gained international recognition,
          earning awards and collaborating with major publishers
          and entertainment studios.
        </p>

        <p>
          Tiago is known for illustrating the Spanish Harry Potter
          covers and for creating <em>A Lenda de Adora</em>,
          his original fantasy comic saga.
        </p>

        <p>
          Today, his work is prominently featured in mainstream comics,
          producing cover art for Marvel, DC Comics, and a growing
          range of international publishers.
        </p>

      </div>

    </div>

  </div>
{/* COMPANIES */}

<div className="max-w-7xl mx-auto mt-20 md:mt-32">

  <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
  Selected Clients & Publishers
</h3>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 items-center opacity-70">
<Image
  src="/logo-marvel.png"
  alt="Marvel"
  width={200}
  height={80}
  className="h-10 md:h-16 w-auto object-contain mx-auto grayscale hover:grayscale-0 transition duration-500"
/>

<Image
  src="/logo-disney.png"
  alt="Disney"
  width={200}
  height={80}
  className="h-16 w-auto object-contain mx-auto grayscale hover:grayscale-0 transition duration-500"
/>

<Image
  src="/logo-dc.png"
  alt="DC Comics"
  width={200}
  height={80}
  className="h-16 w-auto object-contain mx-auto grayscale hover:grayscale-0 transition duration-500"
/>

<Image
  src="/logo-Skybound.png"
  alt="Skybound"
  width={200}
  height={80}
  className="h-16 w-auto object-contain mx-auto grayscale hover:grayscale-0 transition duration-500"
/>

<Image
  src="/logo-image.png"
  alt="Image Comics"
  width={200}
  height={80}
  className="h-16 w-auto object-contain mx-auto grayscale hover:grayscale-0 transition duration-500"
/>

<Image
  src="/logo-idw.png"
  alt="IDW Publishing"
  width={200}
  height={80}
  className="h-16 w-auto object-contain mx-auto grayscale hover:grayscale-0 transition duration-500"
/>

<Image
  src="/logo-boom.png"
  alt="Boom Studios"
  width={200}
  height={80}
  className="h-16 w-auto object-contain mx-auto grayscale hover:grayscale-0 transition duration-500"
/>

<Image
  src="/logo-titan.png"
  alt="Titan Comics"
  width={200}
  height={80}
  className="h-16 w-auto object-contain mx-auto grayscale hover:grayscale-0 transition duration-500"
/>

<Image
  src="/logo-harrypotter.png"
  alt="Harry Potter"
  width={200}
  height={80}
  className="h-16 w-auto object-contain mx-auto grayscale hover:grayscale-0 transition duration-500"
/>

<Image
  src="/logo-hasbro.png"
  alt="Hasbro"
  width={200}
  height={80}
  className="h-16 w-auto object-contain mx-auto grayscale hover:grayscale-0 transition duration-500"
/>

<Image
  src="/logo-capcom.png"
  alt="Capcom"
  width={200}
  height={80}
  className="h-16 w-auto object-contain mx-auto grayscale hover:grayscale-0 transition duration-500"
/>

<Image
  src="/logo-wacom.png"
  alt="Wacom"
  width={200}
  height={80}
  className="h-16 w-auto object-contain mx-auto grayscale hover:grayscale-0 transition duration-500"
/>

<Image
  src="/logo-deviant.png"
  alt="Deviant Art"
  width={200}
  height={80}
  className="h-16 w-auto object-contain mx-auto grayscale hover:grayscale-0 transition duration-500"
/>

<Image
  src="/logo-ctt.png"
  alt="CTT"
  width={200}
  height={80}
  className="h-16 w-auto object-contain mx-auto grayscale hover:grayscale-0 transition duration-500"
/>

<Image
  src="/logo-super.png"
  alt="Super Bock"
  width={200}
  height={80}
  className="h-16 w-auto object-contain mx-auto grayscale hover:grayscale-0 transition duration-500"
/>
  </div>

</div>

  {/* ACHIEVEMENTS GRID */}
  <div className="max-w-7xl mx-auto mt-24 grid md:grid-cols-2 gap-16">

    {/* PRIZES */}
    <div>

     <h3 className="text-2xl md:text-3xl font-bold mb-6">
  Prizes
</h3>

      <ul className="space-y-4 text-zinc-400 leading-relaxed">
        <li>1st Prize – Europe in School</li>
        <li>1st Prize – International Comic Book Festival of Amadora</li>
        <li>Gold – Share One Planet Wild Animals CG Art Elites Invitational</li>
        <li>Bronze – Share One Planet Wild Animals CG Art Elites Invitational</li>
        <li>1st Prize – International Biological Art</li>
        <li>1st Place -  Deviantart Glass Heroes vs. Villains Contest</li>

      </ul>

    </div>

    {/* AWARDS */}
    <div>

     <h3 className="text-2xl md:text-3xl font-bold mb-6">
  Awards
</h3>

      <ul className="space-y-4 text-zinc-400 leading-relaxed">
        <li>Bronze Municipal Merit Medal (career achievements) City of Portimão</li>
         <li>Award (Harry Potter) Curtas, Festival do Imaxinario de Vilagarcía de Arousa </li>
        <li>DeviantArt Daily Deviations</li>
        <li>3DTotal The Golden Eye</li>
        <li>It’s Art CGGallery Daily Selections</li>
        <li>It’s Art CGGallery Weekly Selections</li>
      </ul>

    </div>

    {/* BOOKS */}
    <div className="md:col-span-2">

      <h3 className="text-2xl md:text-3xl font-bold mb-6">
  Books & Publications
</h3>

      <ul className="grid md:grid-cols-2 gap-4 text-zinc-400 leading-relaxed">
        <li>Big Book of Contemporary Illustration</li>
        <li>Darkstalkers Tribute — Capcom / Udon</li>
        <li>Dragon Art</li>
        <li>Ballistic Publishing – Exposé 8</li>
        <li>Imagine FX</li>
         <li>Advanced Photshop</li>
         <li>Computer Arts</li>
      </ul>

    </div>

  </div>

</section>

{/* PROJECTS */}

<section
  id="projects"
  className="min-h-screen px-6 py-24 bg-zinc-950"
>

  <div className="max-w-7xl mx-auto">

   <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center">
  Projects
</h2>

    <div className="space-y-32">

      {/* PROJECT 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

      <Image
  src="/project1.jpg"
  alt="Legend of Adora"
  width={1200}
  height={800}
  className="rounded-2xl w-full"
/>

        <div>

          <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
            Original Comic Series
          </p>

          <h3 className="text-3xl md:text-4xl font-bold mb-10">
            Legend of Adora, Book I
          </h3>

          <div className="space-y-8 text-zinc-300 leading-relaxed text-base md:text-lg">            <p>
              <strong className="text-white">
                Legend of Adora
              </strong>{" "}
              is an original fantasy comic series created by Tiago da Silva,
              set in a world shaped by magic, ancient civilizations,
              and mysterious creatures.
            The project combines cinematic storytelling,
              detailed worldbuilding, and painterly illustration
              inspired by classic fantasy art and modern comics.
            </p>

              <p>
      <strong className="text-white">
                Synopsis
              </strong>{" "}
             "No one ever thought that a school trip to the museum could lead to this.

It was just a regular school trip until Ash and Ollie wander through the museum hallways on their own. Then Ash finds a room full of artifacts. Curious by a faint light coming out from a chest, he opens it to look inside where he finds a strange, cube-shaped thing. As he grabs the object, it starts glowing.
 
The artifact turns out be a key, a magical item possessing the power to create a connection to another world, a world called Adora. But the passage between the two worlds is not without consequences. Nothing will ever be the same; in Adora the very rules of the universe are different.

And so, the adventure begins..."

            </p>

          </div>

        </div>

      </div>

      {/* PROJECT 2 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div>

          <h3 className="text-4xl font-bold mb-6">
            Untitled Project 
          </h3>

          <p className="text-zinc-400 leading-relaxed text-lg">
            In progress, more news soon
          </p>

        </div>

       <Image
  src="/project2.jpg"
  alt="Upcoming Project"
  width={1200}
  height={800}
  className="rounded-2xl w-full"
/>

      </div>

    </div>

  </div>

</section>


{/* CONTACT */}
<section
  id="contact"
  className="min-h-[50vh] flex items-center justify-center px-6 py-24 bg-zinc-950"
>

  <div className="text-center">

    <h2 className="text-3xl md:text-5xl font-bold mb-8">
  Contact
</h2>

    <p className="text-zinc-400 text-base md:text-lg mb-10">      Available for commissions, collaborations, and professional work.
    </p>

    <a
      href="mailto:tiago.da.silva@outlook.com"
      className="inline-block px-10 py-5 bg-white text-black font-semibold rounded-full hover:scale-105 transition duration-300"
    >
      Contact Me
    </a>

  </div>

</section>
{/* FULLSCREEN VIEWER */}
{selectedImage && (

  <div
    className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-6"
    onClick={() => setSelectedImage(null)}
  >

    {/* IMAGE */}
   <Image
  src={selectedImage}
  alt="Artwork fullscreen preview"
  width={1600}
  height={1600}
  className="max-w-full max-h-[90vh] object-contain rounded-xl"
/>

    {/* CLOSE BUTTON */}
    <button
      className="absolute top-8 right-8 text-white text-5xl"
      onClick={() => setSelectedImage(null)}
    >
      ×
    </button>

  </div>

)}
    </main>
  );
}