import { motion } from 'framer-motion';
import { TECH_STACK } from '../constants';
import { RichText } from './RichText';

export const TechStack = () => {
  return (
    <section id="stack" className="relative overflow-hidden bg-slate-950 py-20">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <RichText
            className="mb-4 text-3xl font-bold md:text-4xl"
            i18nKey="stack.title"
            components={{ 1: <strong className="text-indigo-400" /> }}
          />
          <p>
            <RichText className="text-slate-400" i18nKey="stack.subtitle" />
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-default rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-indigo-500/50 hover:bg-slate-800/50"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div
                  className={`rounded-xl bg-slate-950 p-3 shadow-inner transition-transform duration-300 group-hover:scale-110`}
                >
                  <tech.icon className={`h-8 w-8 ${tech.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-200">{tech.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
