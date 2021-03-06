// import { useState } from "react";
import Image from "next/image";
import { imageBuilder, urlFor } from "lib/sanity";
import Link from "next/link";
// import Lightbox from "react-image-lightbox";
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   EmailShareButton,
//   PinterestShareButton,
// } from "react-share";
// import {
//   FacebookIcon,
//   TwitterIcon,
//   PinterestIcon,
//   EmailIcon,
// } from "react-share";

export default function LightboxModal({ gallery }) {
  const { artPieces, title, category, slug } = gallery.results[0];
  // const [photoIndex, setPhotoIndex] = useState(0);
  // const [open, toggleOpen] = useState(false);
  // const images = artPieces.map((a) => a.asset);

  // const handleContext = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  // };

  // const handleLightbox = (idx) => {
  //   setPhotoIndex(idx);
  //   toggleOpen(!open);
  // };

  // const url = `https://www.adamfinkelson.com/${category}/${slug.current}`;
  return (
    <>
      {/* {open ? (
        <div onContextMenu={handleContext}>
          <Lightbox
            enableZoom={false}
            imagePadding={100}
            discourageDownloads={true}
            toolbarButtons={[
              <FacebookShareButton
                url={url}
                title={"Artwork by Adam Finkelston"}
                image={urlFor(images[photoIndex]).url()}
                children={<FacebookIcon round={true} size={30} />}
                className="relative top-2 mx-1"
              />,
              <TwitterShareButton
                url={url}
                title={"Artwork by Adam Finkelston"}
                image={urlFor(images[photoIndex]).url()}
                children={<TwitterIcon round={true} size={30} />}
                className="relative top-2 mx-1"
              />,
              <PinterestShareButton
                url={url}
                title={"Artwork by Adam Finkelston"}
                image={urlFor(images[photoIndex]).url()}
                children={<PinterestIcon round={true} size={30} />}
                className="relative top-2 mx-1"
              />,
              <EmailShareButton
                url={url}
                title={"Artwork by Adam Finkelston"}
                image={urlFor(images[photoIndex]).url()}
                children={<EmailIcon round={true} size={30} />}
                className="relative top-2 mx-1 mr-4"
              />,
            ]}
            imageCaption={artPieces[photoIndex].title}
            imagePadding={40}
            mainSrc={urlFor(images[photoIndex]).url()}
            nextSrc={urlFor(images[(photoIndex + 1) % images.length]).url()}
            prevSrc={urlFor(
              images[(photoIndex + images.length - 1) % images.length]
            ).url()}
            onCloseRequest={() => toggleOpen(!open)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        </div>
      ) : ( */}
      <section className="py-20 px-24 absolute top-0 pt-10 bg-white bg-opacity-95 min-h-screen">
        <article className="pb-10 flex gap-4 justify-between">
          <h1 className="font-bold uppercase tracking-wider">{title}</h1>
          <div className="flex gap-4">
            <Link href={`/${category}`}>
              <a className="underline">Back to {category}</a>
            </Link>
            <Link href={`/galleries`}>
              <a className="underline">Back to Galleries</a>
            </Link>
          </div>
        </article>
        <article className="grid grid-cols-3 gap-4">
          {artPieces.map((a, idx) => (
            <div key={a._key}>
              <Image
                src={imageBuilder(a.asset).url()}
                alt={`${a.title} - Adam Finkelston`}
                width={500}
                height={500}
              />
            </div>
          ))}
        </article>
      </section>
      {/* )} */}
    </>
  );
}
