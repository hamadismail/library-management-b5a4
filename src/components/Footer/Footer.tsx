const Footer = () => {
  return (
    <footer className="p-4 border-t text-sm mt-10">
      <div className="max-w-6xl mx-auto text-center">
        © {new Date().getFullYear()} Library Management System. Developed by{" "}
        <a
          href="https://github.com/hamadismail"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Hamad Ismail
        </a>
      </div>
    </footer>
  );
};

export default Footer;
