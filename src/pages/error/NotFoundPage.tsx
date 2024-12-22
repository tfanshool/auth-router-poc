import { Button } from '@/components/common/ui/button';
import { ArrowLeft, House } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="flex h-full items-center justify-center bg-background">
      <div className="mx-auto px-6 py-12 lg:flex lg:items-center lg:gap-12">
        <div className="w-full">
          <p className="text-sm font-medium text-destructive dark:text-blue-400">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold md:text-3xl">We lost this page</h1>
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
              viewTransition
            >
              <Button variant={'ghost'}>
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

      <div className="relative mt-8 hidden h-full w-full lg:mt-0 lg:w-1/2 xl:block">
        <img
          className="h-full w-full rounded-lg object-cover"
          src="https://images.unsplash.com/photo-1508881598441-324f3974994b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
      </div>
    </section>
  );
};

export default NotFoundPage;
