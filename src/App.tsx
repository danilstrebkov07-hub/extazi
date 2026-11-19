import { motion } from 'framer-motion'
import {
  ArrowRight,
  Palette,
  Layers,
  Code,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'
import React from 'react'

const navLinks = [
  { name: 'Главная', href: '#hero' },
  { name: 'Возможности', href: '#features' },
  { name: 'Работы', href: '#works' },
  { name: 'О компании', href: '#about' },
  { name: 'Контакты', href: '#contact' },
]

export default function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Hero />
      <Features />
      <Works />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-el bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <span className="text-xl font-semibold text-foreground tracking-tight">AURA</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-muted hover:text-foreground transition-colors hidden md:block">
            Тема
          </button>
          <a href="#contact" className="btn-primary">
            Начать
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-90vh flex flex-col justify-between pt-20 pb-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 z-10"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="block text-xs text-muted mb-4 tracking-[0.05em] uppercase font-medium"
        >
          Дизайн-студия
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl font-semibold text-foreground mb-6 leading-105"
        >
          Создаём цифровые продукты<br />
          которые задерживают взгляд
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-muted max-w-2xl mb-10 leading-17"
        >
          Веб-дизайн, разработка интерфейсов и брендинг для команд, которые ценят порядок и ясность.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <a
            href="#works"
            className="group relative inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-95"
          >
            Посмотреть работы
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="btn-secondary">
            Связаться с нами
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-background/70 backdrop-blur-sm" />
    </section>
  )
}

function Features() {
  const features = [
    {
      title: 'Веб-дизайн',
      desc: 'Интерфейсы, которые легко читать и пользоваться. Сетка, типографика и цвет без лишнего.',
      Icon: Palette,
    },
    {
      title: 'Разработка интерфейсов',
      desc: 'Сборка продуктов на React, TypeScript и современном стеке. Чистый код и быстрая загрузка.',
      Icon: Code,
    },
    {
      title: 'Брендинг',
      desc: 'Логотип, цвет, шрифт и тональность бренда — всё в одном стиле, без шаблонов.',
      Icon: Layers,
    },
  ]

  return (
    <section id="features" className="py-24 border-y border-el/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-medium text-foreground mb-8"
        >
          Возможности
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-md border-el bg-card p-6 hover:border-primary/50 transition-colors"
            >
              <f.Icon className="w-5 h-5 text-primary mb-3" />
              <h3 className="text-sm font-medium text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted leading-17">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Works() {
  const works = [
    { title: 'Банковское приложение', cat: 'Финтех', desc: 'Мобильный банк с фокусом на простоту и скорость.' },
    { title: 'Платформа для дизайнеров', cat: 'SaaS', desc: 'Инструмент для создания и согласования макетов.' },
    { title: 'Интернет-магазин', cat: 'E-commerce', desc: 'Витрина с умной корзиной и быстрой оплатой.' },
  ]

  return (
    <section id="works" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-medium text-foreground mb-8"
        >
          Работы
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-md border-el bg-card p-6 group"
            >
              <div className="w-full h-32 rounded-md bg-secondary mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300 flex items-center justify-center text-muted text-sm">
                {w.title}
              </div>
              <h3 className="text-sm font-medium text-foreground mb-1">{w.title}</h3>
              <p className="text-xs text-muted mb-3">{w.cat}</p>
              <p className="text-xs text-muted">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  const stats = [
    { value: '50+', label: 'Завершённых проектов' },
    { value: '12', label: 'Лет на рынке' },
    { value: '200', label: 'Клиентов по миру' },
    { value: '4.9', label: 'Средняя оценка' },
  ]

  return (
    <section id="about" className="py-24 border-y border-el/50 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-left"
            >
              <div className="text-2xl font-semibold text-foreground tabular-nums mb-1">{s.value}</div>
              <div className="text-sm text-muted">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const contacts = [
    { Icon: Mail, label: 'hello@aura.studio' },
    { Icon: Phone, label: '+7 (495) 000-00-00' },
    { Icon: MapPin, label: 'Москва, ул. Beispiel, 1' },
  ]

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-medium text-foreground mb-6"
        >
          Контакты
        </motion.h2>
        <p className="text-muted mb-10">Обсудим ваш проект</p>
        <div className="flex flex-col gap-3">
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center gap-3 rounded-md border-el bg-background px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors"
            >
              <c.Icon className="w-4 h-4 text-muted" />
              <span>{c.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-background border-t border-el/50 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-[10px] text-white font-bold">
            A
          </div>
          <span className="text-xs font-medium text-foreground tracking-tight">AURA</span>
        </div>
        <p className="text-xs text-muted">
          © 2026 AURA Design Studio. Все права защищены.
        </p>
      </div>
    </footer>
  )
}
