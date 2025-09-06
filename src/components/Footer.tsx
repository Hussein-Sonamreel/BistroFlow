const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="bg-surface text-on-background py-6"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} BistroFlow. All Rights Reserved.
        </p>
        <p className="mt-2 text-sm font-serif italic text-gray-400">
          Crafted by Hussein Salim ✨
        </p>
      </div>
    </footer>
  );
};

export default Footer;