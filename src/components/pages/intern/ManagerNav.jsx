import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { path: "/intern-information-creation", label: "Intern records" },
  { path: "/partner-management", label: "Partner management" },
  { path: "/intern-information-verification", label: "Public directory" },
];

const ManagerNav = () => {
  const location = useLocation();

  return (
    <div className="mb-6 flex gap-1 rounded-lg border border-border-light bg-white p-1 w-fit">
      {LINKS.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`rounded-md px-4 py-2 text-sm font-medium transition ${
            location.pathname === link.path ? "bg-primary text-white" : "text-muted hover:bg-bg-soft"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default ManagerNav;