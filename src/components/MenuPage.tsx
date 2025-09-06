import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { menuData, type MenuItem } from '@/data/menuData';
import MenuItemCard from './MenuItemCard';
import FeaturedItemBanner from './FeaturedItemBanner';
import MenuModal from './MenuModal';
import DietaryFilters from './DietaryFilters';
import { WaveAnimation } from './animations/WaveAnimation';
import { SparkAnimation } from './animations/SparkAnimation';
import ParallaxCategorySection from './ParallaxCategorySection';

const categories = [ 'All', 'Chef’s Signature', 'Starters', 'Seafood', 'Grilled', 'Mains', 'Sides', 'Desserts', 'Drinks' ];

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilterChange = (filter: string) => {
    setActiveFilters((prevFilters) =>
      prevFilters.includes(filter) ? prevFilters.filter((f) => f !== filter) : [...prevFilters, filter]
    );
  };

  const featuredItem = menuData.find(item => item.isSpecial);

  const filteredMenu = menuData
    .filter(item => {
      if (activeCategory && activeCategory !== 'All') {
        return item.category === activeCategory;
      }
      return true;
    })
    .filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(item => {
      if (activeFilters.length === 0) return true;
      return activeFilters.every(filter => item.dietary?.includes(filter as any));
    });

  return (
    <>
      <section id="menu" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-on-background md:text-5xl">Our Menu</h2>
            <p className="mt-4 text-lg text-on-background/80 max-w-2xl mx-auto">
              A curated selection of the finest coastal and local delicacies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-surface text-on-background hover:bg-primary/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {activeCategory && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="mb-6 max-w-md mx-auto">
                <input
                  type="text"
                  name="search" // Accessibility fix applied
                  placeholder="Search the menu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-surface border border-on-background/10 rounded-md text-on-surface"
                  aria-label="Search menu items"
                />
              </div>
              <DietaryFilters 
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
              />
            </motion.div>
          )}

          <div className="min-h-[400px] relative">
            <AnimatePresence mode="wait">
              {!activeCategory && featuredItem ? (
                <div className="flex items-center justify-center">
                  <FeaturedItemBanner item={featuredItem} onExplore={() => setActiveCategory('All')} />
                </div>
              ) : (
                <motion.div key="menu-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {activeCategory === 'All' ? (
                    <div className="space-y-4 bg-background">
                      {categories.slice(1).map((category) => {
                        const itemsInCategory = filteredMenu.filter(item => item.category === category);
                        if (itemsInCategory.length === 0) return null;
                        return (
                          <ParallaxCategorySection
                            key={category}
                            category={category}
                            items={itemsInCategory}
                            backgroundAnimation={
                              category === 'Seafood' ? <WaveAnimation /> :
                              category === 'Grilled' ? <SparkAnimation /> : undefined
                            }
                            onViewDetails={setSelectedItem}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex flex-wrap justify-center gap-8">
                      {filteredMenu.length > 0 ? (
                        filteredMenu.map((item) => (
                          <MenuItemCard key={item.id} item={item} onViewDetails={() => setSelectedItem(item)} />
                        ))
                      ) : (
                        <div className="text-center py-12">
                          <p className="text-on-background/80">No dishes found that match your criteria.</p>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      
      <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
};

export default MenuPage;