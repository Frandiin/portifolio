import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../constants';
import { RichText } from './RichText';

export const Experience = () => {
  return (
    <section id="experience" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <RichText
              i18nKey="experience.title"
              components={{ 1: <strong className="text-indigo-400" /> }}
            />
          </h2>
        </div>

        <div className="relative space-y-12">
          <div className="absolute bottom-0 left-8 top-0 w-px transform bg-slate-800 md:left-1/2 md:-translate-x-1/2" />

          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col gap-8 md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-8 z-10 mt-1.5 h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-indigo-500 bg-slate-950 md:left-1/2" />

              <div className="ml-20 md:ml-0 md:w-1/2 md:px-8">
                <div
                  className={`rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors hover:border-indigo-500/30 ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}
                >
                  <div
                    className={`mb-2 flex items-center gap-2 font-medium text-indigo-400 ${
                      index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                    }`}
                  >
                    <Briefcase size={16} />
                    <RichText i18nKey={exp.company} />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-slate-100">
                    <RichText i18nKey={exp.role} />
                  </h3>

                  <div
                    className={`mb-4 flex items-center gap-2 text-sm text-slate-500 ${
                      index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                    }`}
                  >
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <RichText
                    className="text-sm leading-relaxed text-slate-400"
                    i18nKey={exp.description}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
