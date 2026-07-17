import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import CareerHero from "../career/CareerHero";
import JobFilters from "../career/JobFilters";
import JobList from "../career/JobList";
import EmptyState from "../career/EmptyState";

import { jobs } from "../../data/jobs";
import FAQ from "../home/FAQ";
import WhyJoinCreyotech from "../career/WhyJoinCreyotech";
import AnimatedGallery from "../about/AnimatedGallery";

export default function Career() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const categories = [...new Set(jobs.map((job) => job.category))];
  const locations = [...new Set(jobs.map((job) => job.location))];
  const jobTypes = [...new Set(jobs.map((job) => job.type))];

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = !category || job.category === category;

      const matchesLocation = !location || job.location === location;

      const matchesJobType = !jobType || job.type === jobType;

      return (
        matchesSearch && matchesCategory && matchesLocation && matchesJobType
      );
    });
  }, [search, category, location, jobType]);

  return (
    <main
      className="
    min-h-screen
    bg-slate-50
    transition-colors
    duration-300
    dark:bg-bg-dark
  "
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <CareerHero />
      </motion.div>

      <section className="container mx-auto px-4 pt-10">
        <JobFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          location={location}
          setLocation={setLocation}
          jobType={jobType}
          setJobType={setJobType}
          categories={categories}
          locations={locations}
          jobTypes={jobTypes}
        />
        <div className="mt-12 mb-15">
          {filteredJobs.length ? (
            <JobList jobs={filteredJobs} />
          ) : (
            <EmptyState />
          )}
        </div>
      </section>
      <WhyJoinCreyotech />
      <AnimatedGallery />
      <div className="border-t border-slate-200">
        <FAQ />
      </div>
    </main>
  );
}
