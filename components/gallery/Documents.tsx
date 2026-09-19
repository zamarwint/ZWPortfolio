import { galleryDocuments } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function DisplayDocuments() {
  return (
    <div className="w-full flex gap-4 flex-col items-center justify-center px-10 mt-5">
      {galleryDocuments.map((document, key) => (
        <Link
          key={key}
          href={document.src}
          rel="noopener noreferrer"
          className="w-full flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start border border-border p-4 gap-4 cursor-pointer"
        >
          <div className="size-fit flex items-center justify-center">
            <Image
              src="/vectors/document-svg.svg"
              alt="Documents icon"
              aria-hidden="true"
              width={150}
              height={150}
              className="object-cover"
            />
          </div>
          <div className="w-full flex flex-col flex-1 items-center lg:items-start justify-center gap-2">
            <h1 className="text-2xl text-center lg:text-left">
              {document.title}
            </h1>
            <p className="text-muted-foreground text-center lg:text-left">
              {document.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
