import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center shadow-md">
        <div className="container bg-white flex justify-between px-2 py-4">
          {/* Logo */}

          <div className="text-black text-2xl font-bold" >
            Twistcode
          </div>
          <div className="grid grid-cols-4 gap-4 text-lg font-semibold bg-white">
            <div className="text-black px-2 hover:text-blue-500 pointer-events-auto cursor">
              <Link href="/" className="text-black">Home</Link>
            </div>
            <div className="text-black px-2 hover:text-blue-500 pointer-events-auto cursor">
              <Link href="/about" className="text-black">About</Link>
            </div>
            <div className="text-black px-2 hover:text-blue-500 pointer-events-auto cursor">
              <Link href="/login" className="text-black">Login</Link>
            </div>
            <div className="text-black px-2 hover:text-blue-500 pointer-events-auto cursor">
              <Link href="/register" className="text-black">Register</Link>
            </div>
          </div>
        </div>
        <div className="fluid-container bg-red-500">
        </div>
        </div>
        <div>
        <div className="fluid-container h-auto text-black bg-even flex justify-between">
          {/* Title */}
          <div className="text-10xl w-1/2 font-bold px-64 my-auto tracking-widest">
            <span >We Code We Deliver</span>
            <div className="text-lg w-96 font-normal flex justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="#80ff8e" d="M9.5 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842l-5.576 3.584a.5.5 0 0 1-.77-.42Z"/><path fill="#80ff8e" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11-9.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5"/></svg>
              <span className="mx-8 my-auto">
                Twiscode specializes in developing 
                high-performing mobile and 
                web applications.
              </span>
            </div>
          </div>
          <div className="w-1/2 py-10  flex justify-end">
            <Image src="/images/landing-2.png" alt="hero" width={700} height={700} />
          </div>
        </div>
        <div className="fluid-container h-auto text-black bg-odd flex justify-evenly">
          {/* Image */}
          <div className="w-1/2 flex justify-center">
            <Image src="/images/product.png" alt="hero" width={700} height={700} />
          </div>
          <div className="w-1/2 py-11">
            <div className="text-5xl mx-12 font-bold">
              What We Do ?
            </div>
            <div className="mt-10 w-2/3 flex justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width="64" height="64" viewBox="0 0 16 16"><path fill="black" d="M13.14 6.25c-.47 0-.86.39-.86.87v3.5c0 .48.39.88.86.88s.86-.39.86-.88v-3.5c0-.48-.39-.87-.86-.87m-10.29 0c-.47 0-.86.39-.86.87v3.5c0 .48.39.88.86.88s.86-.39.86-.88v-3.5c0-.48-.39-.87-.86-.87m1.29 4.81c0 .35.14.68.38.93s.57.38.91.38v1.75c0 .48.39.88.86.88s.86-.39.86-.88v-1.75h1.71v1.75c0 .48.39.88.86.88s.86-.39.86-.88v-1.75c.34 0 .67-.14.91-.38c.24-.25.38-.58.38-.93V6.25H4.14zm7.69-5.69c-.06-.58-.25-1.14-.55-1.63c-.3-.5-.7-.92-1.18-1.23l.43-.88c.05-.1.06-.22.02-.33a.42.42 0 0 0-.22-.25a.42.42 0 0 0-.33-.02c-.11.04-.2.12-.25.22l-.43.88l-.11-.05c-.79-.27-1.64-.27-2.43 0l-.11.05l-.43-.88a.45.45 0 0 0-.25-.22a.42.42 0 0 0-.33.02c-.1.05-.18.14-.22.25a.42.42 0 0 0 .02.33l.43.88c-.48.32-.88.74-1.18 1.23c-.3.5-.49 1.05-.55 1.63v.44h7.69v-.44zM6.71 4.5c-.11 0-.22-.05-.3-.13a.44.44 0 0 1-.13-.31c0-.12.04-.23.13-.31c.08-.08.19-.13.3-.13s.22.05.3.13s.13.19.13.31s-.05.23-.13.31s-.19.13-.3.13m2.57 0c-.11 0-.22-.05-.3-.13a.44.44 0 0 1-.13-.31c0-.12.04-.23.13-.31c.08-.08.19-.13.3-.13s.22.05.3.13s.13.19.13.31s-.05.23-.13.31s-.19.13-.3.13"/></svg>
              <div className="mx-4 mt-3">
                <span className="text-2xl font-bold">
                  Web Application
                </span>
                <br />
                <span className="text-xl font-300">
                  Building mobile applications is never easy. 
                  P2P lending app ? Logistic App ? E-Commerce App ? 
                  We have done them all. Done them all well. 
                  Done them all fast. 
                </span>
              </div>
            </div>
            <div className="mt-10 w-2/3 flex justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width="64" height="64" viewBox="0 0 24 24"><g fill="black"><path  d="M14 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm3 2h-2v6h2z"/><path d="M6 7a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"/><path  d="M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"/></g></svg>
              <div className="mx-4 mt-3">
                <span className="text-2xl font-bold">
                  Mobile Application
                </span>
                <br />
                <span className="text-xl font-300">
                  We can build any web applications you need. 
                  A personal blog ? Company Profile ? E-commerce ? 
                  or any specific functionalities ? We got you covered! 
                  We have a strong team of web developers that can 
                  follow your stack and needs.
                </span>
              </div>
            </div>
            <div className="mt-10 w-2/3 flex justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width="64" height="64" viewBox="0 0 16 16"><path fill="black" d="M7 10.973a4.5 4.5 0 0 1-1.016-.235Q5.999 10.384 6 10v-.337c.31.148.647.251 1 .302V7.5A1.5 1.5 0 0 1 8.5 6h2.465a3.5 3.5 0 0 0-5.088-2.602a3.2 3.2 0 0 0-.386-.926A4.5 4.5 0 0 1 11.973 6H13.5A1.5 1.5 0 0 1 15 7.5v5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 7 12.5zM11.973 7A4.5 4.5 0 0 1 8 10.973V12.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm-1.008 0H8.5a.5.5 0 0 0-.5.5v2.465A3.5 3.5 0 0 0 10.965 7m-6.17.561c-.105-.386-.275-.773-.567-1.07C4.7 6.044 5 5.332 5 4.5c0-.697-.141-1.176-.396-1.559a2.8 2.8 0 0 0-.39-.453l-.17-.16c-.061-.057-.117-.109-.19-.182c-.15-.15-.167-.27-.167-.333a.3.3 0 0 1 .017-.103a.5.5 0 0 0-.731-.626l-.002.001l-.003.002l-.009.006l-.03.02l-.102.075a6 6 0 0 0-.33.269c-.252.22-.577.547-.808.937a4.7 4.7 0 0 0-.482 1.032C1.087 3.785 1 4.174 1 4.5c0 .832.3 1.543.772 1.992c-.292.296-.462.683-.567 1.07C1 8.314 1 9.244 1 9.963V10c0 2.058.385 3.28.821 4.007c.219.364.447.599.638.747a1.7 1.7 0 0 0 .33.2A.8.8 0 0 0 3 15c.084 0 .211-.046.211-.046a1.7 1.7 0 0 0 .33-.2c.19-.148.42-.383.638-.747C4.615 13.281 5 12.058 5 10v-.036c0-.72 0-1.649-.205-2.403m-2.308-.37C2.6 7.077 2.751 7 3 7c.25 0 .4.078.513.19c.126.127.235.333.317.634C3.996 8.435 4 9.237 4 10c0 1.942-.365 2.97-.679 3.493c-.12.2-.233.329-.321.41a2 2 0 0 1-.321-.41C2.365 12.969 2 11.942 2 10c0-.763.004-1.565.17-2.176c.082-.3.191-.507.317-.634M3 6c-.385 0-1-.428-1-1.5c0-.173.052-.447.156-.757a3.7 3.7 0 0 1 .389-.833c.087-.147.2-.29.322-.421q.102.184.28.365c.073.073.168.161.249.237l.124.116c.105.102.186.191.251.29c.12.179.229.45.229 1.003C4 5.572 3.385 6 3 6"/></svg>
              <div className="mx-4 mt-3">
                <span className="text-2xl font-bold">
                  UI / UX Design
                </span>
                <br />
                <span className="text-xl font-300">
                  All things are designed. A few things are designed well. 
                  We try to elevate your ideas with great UI/UX design, 
                  suited to your taste, addressing the right pain points.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
