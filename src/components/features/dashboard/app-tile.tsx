import { Link } from 'react-router';

export interface ImageCardProps {
  title: string;
  imageSrc: string;
  link: string;
}

const AppTileComponent = ({ title, imageSrc, link }: ImageCardProps) => {
  return (
    <Link
      to={link}
      className="flex max-w-xs flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row"
    >
      <img
        className="w-full object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={imageSrc}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 font-Bricolage text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 md:line-clamp-4">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </Link>
  );
};

export default AppTileComponent;
