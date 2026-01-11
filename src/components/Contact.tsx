import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const messageTemplate = t('contact.form.whatsappMessage');
    const whatsappMessage = messageTemplate
      .replace('{{name}}', name)
      .replace('{{email}}', email)
      .replace('{{subject}}', subject)
      .replace('{{message}}', message);

    const phoneNumber = '5511958394250';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-slate-950 to-indigo-950/20 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              <Trans i18nKey="contact.title">
                Vamos trabalhar <span className="text-indigo-400">juntos?</span>
              </Trans>
            </h2>
            <p className="mb-8 text-lg text-slate-400">{t('contact.description')}</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-indigo-500/10 p-3 text-indigo-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-200">{t('contact.email')}</h4>
                  <a
                    href="mailto:wellingtonfrandin@gmail.com"
                    className="text-slate-400 transition-colors hover:text-indigo-400"
                  >
                    wellingtonfrandin@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-indigo-500/10 p-3 text-indigo-400">
                  <Linkedin size={24} />
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/wellington-frandin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 transition-colors"
                  >
                    <h4 className="font-medium text-slate-200 hover:text-indigo-400">
                      {t('contact.linkedin')}
                    </h4>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-indigo-500/10 p-3 text-indigo-400">
                  <Github size={24} />
                </div>
                <div>
                  <a
                    href="https://github.com/Frandiin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 transition-colors"
                  >
                    <h4 className="font-medium text-slate-200 hover:text-indigo-400">
                      {t('contact.github')}
                    </h4>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-indigo-500/10 p-3 text-indigo-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-200">{t('contact.location')}</h4>
                  <span className="text-slate-400">{t('contact.locationValue')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-slate-200 transition-all focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-slate-200 transition-all focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-slate-200 transition-all focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder={t('contact.form.subjectPlaceholder')}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none rounded-lg border border-slate-800 bg-slate-950 px-4 py-3 text-slate-200 transition-all focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 py-4 font-medium text-white transition-all hover:translate-y-[-2px] hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <Send size={20} />
                {t('contact.form.send')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
