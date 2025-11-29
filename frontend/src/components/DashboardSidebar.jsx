import { Link, useLocation } from 'react-router-dom';

const DashboardSidebar = ({ role }) => {
  const location = useLocation();

  const farmerLinks = [
    { to: '/farmer/dashboard', label: 'Overview' },
    { to: '/farmer/dashboard?tab=products', label: 'Products' },
    { to: '/farmer/dashboard?tab=orders', label: 'Orders' },
    { to: '/farmer/dashboard?tab=revenue', label: 'Revenue' },
    { to: '/farmer/dashboard?tab=training', label: 'Training' },
  ];

  const buyerLinks = [
    { to: '/buyer/dashboard', label: 'Marketplace' },
    { to: '/buyer/dashboard?tab=orders', label: 'Orders' },
    { to: '/buyer/dashboard?tab=wishlist', label: 'Wishlist' },
  ];

  const adminLinks = [
    { to: '/admin/dashboard', label: 'Analytics' },
    { to: '/admin/dashboard?tab=users', label: 'Users' },
    { to: '/admin/dashboard?tab=products', label: 'Products' },
    { to: '/admin/dashboard?tab=training', label: 'Training' },
  ];

  const linksByRole = { farmer: farmerLinks, buyer: buyerLinks, admin: adminLinks };
  const links = linksByRole[role] || [];

  return (
    <aside className="w-56 border-r border-gray-100 bg-white/80 backdrop-blur-sm text-xs">
      <div className="px-4 py-4 border-b border-gray-100">
        <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">Dashboard</p>
        <p className="font-semibold text-gray-900 capitalize">{role} workspace</p>
      </div>
      <nav className="px-2 py-3 space-y-1">
        {links.map((item) => {
          const active = location.pathname + location.search === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                active
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
