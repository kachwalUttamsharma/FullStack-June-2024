import { useEffect, useState } from "react";
import { api } from "../utils/axios";

const WatchNowButton = () => {
  return (
    <button className="md:mt-4 self-center min-h-14 inline-flex items-center justify-center bg-white text-xl rounded-xl drop-shadow text-black px-4 md:px-24 py-3">
      <i className="fas fa-play mr-2" /> Watch Now
    </button>
  );
};

const BannerOverView = ({ banner }) => {
  return (
    <div className="mt-4 p-6 md:p-0 text-center md:text-left w-full max-w-[unset] max-h-[20rem] md:max-h-[unset] md:max-w-[700px] lg:max-w-[900px] tracking-wider leading-6 text-ellipsis overflow-hidden">
      {banner?.overview}
    </div>
  );
};

const BannerActions = ({ banner }) => {
  return (
    <div className="flex items-center space-x-2 text-lg mt-6">
      <button className="bg-white bg-opacity-40 drop-shadow text-white px-8 py-2 bebas-neue-regular rounded-md hover:bg-opacity-60">
        {banner?.adult ? "18+" : "U/A 16+"}
      </button>
      <button className="bg-white bg-opacity-40 drop-shadow text-white px-8 py-2 rounded-md hover:bg-opacity-60">
        <i className="fas fa-info" />
      </button>
      <button className="bg-white bg-opacity-40 drop-shadow text-white px-8 py-2 rounded-md hover:bg-opacity-60">
        <i className="fas fa-plus" />
      </button>
    </div>
  );
};

const BannerTitle = ({ hasLogo, title, logo }) => {
  return (
    <div>
      {hasLogo ? (
        <img
          src={`https://image.tmdb.org/t/p/original/${logo?.file_path}`}
          alt="logo"
          className="object-cover md:w-60 lg:w-80 xl:w-5/12 drop-shadow-lg"
        />
      ) : (
        <div className="text-8xl bebas-neue-regular tracking-widest drop-shadow max-w-screen">
          {title}
        </div>
      )}
    </div>
  );
};

const BannerSlide = ({ banner, ...rest }) => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    api
      .get(`movie/${banner?.id}/images?include_image_language=en`)
      .then((movieLogos) => {
        setLogos(movieLogos.data.logos);
      });
  }, [banner]);

  const logo = logos.length ? logos[0] : null;
  const hasLogo = logo ?? false;

  return (
    <div {...rest}>
      <div className="min-h-screen relative md:!hidden">
        <img
          className="object-cover h-screen w-full"
          src={`https://image.tmdb.org/t/p/original/${banner?.poster_path}`}
          alt={"movie poster " + banner?.title}
        />
        <div className="text-white absolute bottom-0 left-0 h-full w-full flex flex-col justify-end py-4 banner-detail-overlay">
          <WatchNowButton />
          <div className="flex justify-center items-center space-x-2 text-lg mt-6">
            <BannerActions banner={banner} />
          </div>
          <BannerOverView banner={banner} />
        </div>
      </div>
      <div className="relative hidden md:flex">
        <img
          alt={"movie banner" + banner?.title}
          src={`https://image.tmdb.org/t/p/original/${banner?.backdrop_path}`}
          className="object-cover w-full"
        />
        <div className="absolute top-0 w-full h-full flex items-center banner-detail-overlay">
          <div className="w-full flex items-center self-end flex-col pb-4 md:pb-10 lg:pb-16">
            <div className="text-white ml-10 lg:ml-24 self-start">
              <BannerTitle
                hasLogo={hasLogo}
                title={banner?.title}
                logo={logo}
              />
              <BannerActions banner={banner} />
              <BannerOverView banner={banner} />
              <WatchNowButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerSlide;
