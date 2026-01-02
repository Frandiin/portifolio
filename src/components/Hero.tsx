import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export const Hero = () => {
  const { t, i18n } = useTranslation();

  const cvFile = i18n.language === 'en' ? '/cv_en.pdf' : '/cv.pdf';
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-slate-950 to-slate-950" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
              </span>
              {t('hero.available')}
            </div>

            <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
              <Trans i18nKey="hero.role">
                Desenvolvedor <span className="text-gradient">Full Stack</span> focado em soluções
                escaláveis
              </Trans>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-white sm:text-lg">
              {t('hero.description')}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-all hover:translate-y-[-2px] hover:bg-indigo-700"
              >
                {t('hero.projectsBtn')}
                <ArrowRight size={20} />
              </a>
              <a
                href={cvFile}
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-6 py-3 font-medium text-white transition-all hover:translate-y-[-2px] hover:bg-slate-700"
              >
                {t('hero.cvBtn')}
                <Download size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center justify-center lg:h-[800px]"
          >
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-[100px]" />

              <div className="relative h-[500px] w-full overflow-x-auto overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900/50 p-4 shadow-2xl backdrop-blur-xl sm:h-[600px] sm:p-6">
                <div className="mb-4 flex items-center gap-2 border-b border-slate-800 pb-4">
                  <div className="h-3 w-3 rounded-full border border-red-500/50 bg-red-500/20" />
                  <div className="h-3 w-3 rounded-full border border-yellow-500/50 bg-yellow-500/20" />
                  <div className="h-3 w-3 rounded-full border border-green-500/50 bg-green-500/20" />
                </div>

                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  <div className="flex gap-2">
                    <span className="text-pink-400">const</span>
                    <span className="text-blue-400">{t('hero.portfolio.title')}</span>
                    <span className="text-code-keyword">=</span>
                    <span className="text-yellow-400">{`{`}</span>
                  </div>

                  <div className="flex gap-2 pl-4">
                    <span className="text-code-keyword">{t('hero.portfolio.role')}:</span>
                    <span className="text-code-string">'Full Stack Dev'</span>,
                  </div>

                  <div className="flex gap-2 pl-4">
                    <span className="text-code-keyword">{t('hero.portfolio.skills')}:</span>
                    <span className="text-code-function"> [</span>
                  </div>
                  <div className="space-y-1 pl-6">
                    <div className="text-code-string">'React', 'Next.js',</div>
                    <div className="text-code-string">'NestJS', 'TypeScript',</div>
                    <div className="text-code-string">'Docker', 'Prisma'</div>
                  </div>
                  <div className="pl-4">
                    <span className="text-code-function">]</span>,
                  </div>

                  <div className="flex gap-2 pl-4">
                    <span className="text-code-keyword">{t('hero.portfolio.age')}:</span>
                    <span className="text-code-string">24</span>,
                  </div>

                  <div className="flex gap-2 pl-4">
                    <span className="text-code-keyword">{t('hero.portfolio.location')}:</span>
                    <span className="text-code-string">'Brasil'</span>,
                  </div>

                  <div className="flex flex-wrap gap-2 pl-4">
                    <span className="text-code-keyword">{t('hero.portfolio.hobbies.label')}:</span>
                    <span className="break-words text-code-string">
                      {t('hero.portfolio.hobbies.value')}
                    </span>
                    ,
                  </div>

                  <div className="flex gap-2 pl-4">
                    <span className="text-code-keyword">{t('hero.portfolio.linkedin')}:</span>
                    <span className="text-code-string">
                      <a
                        href="https://www.linkedin.com/in/wellington-fernandes-frandim-b6927a189/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all transition-colors hover:text-green-300"
                      >
                        'linkedin.com/in/wellington-frandin'
                      </a>
                    </span>
                    ,
                  </div>

                  <div className="flex gap-2 pl-4">
                    <span className="text-code-keyword">{t('hero.portfolio.gitHub')}:</span>
                    <span className="text-code-string">
                      <a
                        href="https://github.com/Frandiin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-green-300"
                      >
                        'github.com/Frandiin'
                      </a>
                    </span>
                    ,
                  </div>

                  <div className="text-yellow-400">{`}`}</div>

                  <div className="mt-4">
                    <span className="text-code-keyword">console</span>.
                    <span className="text-code-function">log</span>
                    <span className="text-code-string">
                      <span className="text-code-function">(</span>'{t('hero.portfolio.consoleLog')}
                      '<span className="text-code-function">)</span>;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
