import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getPageTitle = (path: string) => {
    switch (path) {
      case 'entries':
        return 'Entries';
      case 'about':
        return 'About';
      default:
        return path.charAt(0).toUpperCase() + path.slice(1);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-sm font-mono mb-8"
    >
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            to="/"
            className="text-nord4 hover:text-nord6 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center">
              <span className="mx-2 text-nord3">/</span>
              {isLast ? (
                <span className="text-nord6">{getPageTitle(value)}</span>
              ) : (
                <Link
                  to={to}
                  className="text-nord4 hover:text-nord6 transition-colors duration-200"
                >
                  {getPageTitle(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </motion.nav>
  );
};

export default Breadcrumbs; 