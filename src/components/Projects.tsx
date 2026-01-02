import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';
import { RichText } from './RichText';
import { ExpandableText } from './ExpandableText';

export const Projects = () => {
  return (
    <section id="projects" className="bg-slate-900/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <RichText
              className="mb-4 text-3xl font-bold md:text-4xl"
              i18nKey="projects.title"
              components={{ 1: <strong className="text-indigo-400" /> }}
            />
            <RichText className="max-w-xl text-slate-400" i18nKey="projects.subtitle" />
          </div>
          <a
            href="https://github.com/Frandiin"
            className="flex items-center gap-2 font-medium text-indigo-400 transition-colors hover:text-indigo-300"
          >
            <RichText i18nKey="projects.viewAll" /> <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900 transition-all hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 z-10 bg-slate-950/20 transition-colors group-hover:bg-transparent" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div>
                  <div className="mb-4 flex max-h-[56px] min-h-[56px] flex-wrap content-start gap-2 overflow-hidden">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3>
                    <RichText
                      className="mb-2 text-xl font-bold text-slate-100 transition-colors group-hover:text-indigo-400"
                      i18nKey={project.title}
                    />
                  </h3>

                  <ExpandableText lines={3}>
                    <RichText i18nKey={project.description} />
                  </ExpandableText>
                </div>

                <div className="mt-auto pt-6">
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                    >
                      <Github size={18} /> <RichText i18nKey="projects.code" />
                    </a>

                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                    >
                      <ExternalLink size={18} /> <RichText i18nKey="projects.demo" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
