import { motion } from 'framer-motion';

// UPDATED: This array now reflects your new dietary tags
const dietaryTags = [
  { key: 'Vegetarian', label: 'Vegetarian' },
  { key: 'Vegan', label: 'Vegan' },
  { key: 'Gluten-Free', label: 'Gluten-Free' },
  { key: 'Dairy-Free', label: 'Dairy-Free' },
  { key: 'Halal', label: 'Halal' },
];

interface DietaryFiltersProps {
  activeFilters: string[];
  onFilterChange: (filter: string) => void;
}

const DietaryFilters = ({ activeFilters, onFilterChange }: DietaryFiltersProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      <span className="self-center text-sm font-semibold text-on-background/80 mr-2">Filter by:</span>
      {dietaryTags.map((tag) => {
        const isActive = activeFilters.includes(tag.key);
        return (
          <button
            key={tag.key}
            onClick={() => onFilterChange(tag.key)}
            className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 border-2 ${
              isActive
                ? 'bg-primary border-primary text-white'
                : 'bg-surface border-on-background/20 text-on-surface hover:border-primary'
            }`}
          >
            {tag.label}
          </button>
        );
      })}
    </motion.div>
  );
};

export default DietaryFilters;