import { Search } from "lucide-react";
import { motion } from "framer-motion";

function JobFilters({
  search,
  setSearch,
  category,
  setCategory,
  location,
  setLocation,
  jobType,
  setJobType,
  categories,
  locations,
  jobTypes,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
    rounded-3xl
    border
    border-border-light
    bg-white
    p-4
    shadow-xl
    dark:border-white/10
    dark:bg-secondary
  "
      id="open-positions"
    >
      <div className="grid gap-4 lg:grid-cols-4">
        <div className="relative">
          <Search
            size={18}
            className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-text-secondary
          dark:text-text-light/60
        "
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search jobs..."
            className="
          h-12
          w-full
          rounded-xl
          border
          border-border-light
          bg-white
          pl-11
          pr-4
          text-text-primary
          outline-none
          transition-all
          focus:border-primary
          dark:border-white/10
          dark:bg-bg-dark
          dark:text-text-light
          dark:placeholder:text-text-light/50
        "
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="
        h-12
        rounded-xl
        border
        border-border-light
        bg-white
        px-4
        text-text-primary
        outline-none
        transition-all
        focus:border-primary
        dark:border-white/10
        dark:bg-bg-dark
        dark:text-text-light
      "
        >
          <option value="">All Job Categories</option>

          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="
        h-12
        rounded-xl
        border
        border-border-light
        bg-white
        px-4
        text-text-primary
        outline-none
        transition-all
        focus:border-primary
        dark:border-white/10
        dark:bg-bg-dark
        dark:text-text-light
      "
        >
          <option value="">All Job Locations</option>

          {locations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="
        h-12
        rounded-xl
        border
        border-border-light
        bg-white
        px-4
        text-text-primary
        outline-none
        transition-all
        focus:border-primary
        dark:border-white/10
        dark:bg-bg-dark
        dark:text-text-light
      "
        >
          <option value="">All Job Types</option>

          {jobTypes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </motion.div>
  );
}

export default JobFilters;
