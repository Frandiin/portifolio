import { motion } from 'framer-motion';
import { RichText } from './RichText';
import { useTranslation } from 'react-i18next';

export const About = () => {
  useTranslation();
  return (
    <section id="about" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          <div className="order-2 text-left md:order-1">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 text-3xl font-bold md:text-4xl"
            >
              <RichText
                i18nKey="about.title"
                components={{
                  1: <strong className="text-indigo-400" />,
                }}
              />
            </motion.h2>

            <div className="prose prose-invert prose-lg space-y-6 text-slate-400">
              <p>
                <RichText
                  i18nKey="about.p1"
                  components={{
                    1: <strong className="text-indigo-400" />,
                  }}
                />
              </p>
              <p className="leading-relaxed">
                <RichText
                  i18nKey="about.p2"
                  components={{
                    1: <strong className="text-indigo-400" />,
                  }}
                />
              </p>
              <p>
                <RichText i18nKey="about.p3" />
              </p>
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="absolute inset-0 scale-110 bg-indigo-400 opacity-70 blur-2xl" />
              <div className="scale-115 absolute inset-0 bg-indigo-300 opacity-50 blur-xl" />

              <div className="relative z-10 bg-slate-950 p-2">
                <img
                  src="/profile.jpeg"
                  alt="Minha foto de perfil"
                  loading="lazy"
                  decoding="async"
                  width={200}
                  className="h-64 w-64 border-4 border-indigo-400 object-cover shadow-[0_0_20px_rgba(75,90,255,0.8),_0_0_40px_rgba(75,90,255,0.5)] transition-shadow duration-300 md:h-96 md:w-96"
                />
              </div>

              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(75,90,255,0.6)',
                    '0 0 50px rgba(99,102,241,0.9)',
                    '0 0 20px rgba(75,90,255,0.6)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute inset-0"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
