import { useCart } from '@/context/CartContext';
import { ThemeToggle } from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
);

const Header = () => {
  const { toggleCart, itemCount } = useCart();
  const { t } = useTranslation();

  return (
    // REMOVED: `absolute` positioning to make it part of the page flow.
    // ADDED: Adaptive background color for theme compatibility.
    <header className="sticky top-0 z-20 p-4 bg-background/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* CHANGED: Text color now adapts to the theme */}
        <div className="text-xl font-serif font-bold text-on-surface">
          {t('header.brand')}
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          {/* RESTORED: The CartIcon and item count badge are now back inside the button */}
          <button 
            onClick={toggleCart} 
            className="relative text-on-surface p-2 rounded-full hover:bg-on-surface/10" 
            aria-label={t('header.viewOrder', { count: itemCount })}
          >
            <CartIcon />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;