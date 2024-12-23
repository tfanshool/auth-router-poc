import { Button } from '@/components/common/ui/button';
import { ArrowLeft, House } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="grid h-full w-full grid-cols-2 items-center justify-center gap-0 overflow-y-auto overflow-x-hidden">
      <div className="col-span-2 mx-auto w-full px-6 py-12 lg:col-span-1 lg:flex lg:items-center lg:gap-12">
        <div className="h-full">
          <p className="font-mono text-sm font-medium text-destructive dark:text-blue-400">
            404 error
          </p>
          <h1 className="mt-3 font-Bricolage text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
            We lost this page
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn't exist.
          </p>

          <div className="mt-6 flex items-center gap-x-3">
            <Link
              to={'..'}
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              <Button variant={'secondary'}>
                <ArrowLeft />
                Back
              </Button>
            </Link>

            <Link to="/">
              <Button>
                <House strokeWidth={2.5} />
                Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative hidden h-full w-full lg:mt-0 lg:block">
        <img className="h-full w-full rounded-lg" src="/404art.svg" alt="" />
      </div>
    </section>
  );
};

export default NotFoundPage;
