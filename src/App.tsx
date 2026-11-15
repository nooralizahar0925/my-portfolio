import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Asterisk, Check, ChevronDown, Code2, ExternalLink, Github, LayoutGrid, Linkedin, List, Mail, Menu, MessageCircle, Search, X } from 'lucide-react';
import { companyBrands, companyProducts, experience, links, projects } from './data';
import type { Project } from './data';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { Analytics } from '@vercel/analytics/react';

const categories = ['All work', 'Brand & commerce', 'Education & research', 'Hospitality', 'Government & systems', 'Mobile & platforms', 'Maintenance'];

const toolkit = [
  { name: 'React', label: 'Interfaces', className: 'tech-react', symbol: '⚛' },
  { name: 'WordPress', label: 'Custom websites', className: 'tech-wordpress', symbol: 'W' },
  { name: 'Sitefinity', label: 'Enterprise CMS', className: 'tech-sitefinity', symbol: 'S' },
  { name: 'Laravel', label: 'Business systems', className: 'tech-laravel', symbol: 'L' },
  { name: 'Flutter', label: 'Mobile apps', className: 'tech-flutter', symbol: 'F' },
  { name: 'Node.js', label: 'APIs & integrations', className: 'tech-node', symbol: '{ }' },
];

function moveCard(event: ReactPointerEvent<HTMLElement>) {
  if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const rect = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;
  event.currentTarget.style.setProperty('--rotate-x', `${(0.5 - y) * 6}deg`);
  event.currentTarget.style.setProperty('--rotate-y', `${(x - 0.5) * 6}deg`);
  event.currentTarget.style.setProperty('--pointer-x', `${x * 100}%`);
  event.currentTarget.style.setProperty('--pointer-y', `${y * 100}%`);
}

function resetCard(event: ReactPointerEvent<HTMLElement>) {
  event.currentTarget.style.setProperty('--rotate-x', '0deg');
  event.currentTarget.style.setProperty('--rotate-y', '0deg');
}

function CategoryDropdown({ value, change }: { value: string; change: (value: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const selected = ref.current?.querySelector<HTMLButtonElement>('[aria-checked="true"]');
    selected?.focus({ preventScroll: true });
    const outside = (event: PointerEvent) => { if (!ref.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, [open]);
  return <div className="category-dropdown" ref={ref}><button className={`category-trigger ${open ? 'is-open' : ''}`} ref={trigger} aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(!open)} onKeyDown={event => { if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); setOpen(true); } }}> <span>{value}</span><ChevronDown size={15}/></button>{open && <div className="category-menu" role="menu" aria-label="Project category" onKeyDown={event => {
    const options = Array.from(ref.current?.querySelectorAll<HTMLButtonElement>('[role="menuitemradio"]') || []);
    const current = options.indexOf(document.activeElement as HTMLButtonElement);
    if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); setOpen(false); trigger.current?.focus(); }
    else if (event.key === 'Tab') setOpen(false);
    else if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) { event.preventDefault(); const next = event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1 : (current + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length; options[next]?.focus(); }
  }}>{categories.map(category => <button key={category} role="menuitemradio" aria-checked={value === category} tabIndex={-1} onClick={() => { change(category); setOpen(false); trigger.current?.focus(); }}><span>{category}</span><small>{category === 'All work' ? projects.length : projects.filter(project => project.category === category).length}</small>{value === category ? <Check size={13}/> : <span className="menu-check-space"/>}</button>)}</div>}</div>;
}

function CompanyProducts() {
  return <div className="company-products"><div className="products-heading"><div><span className="section-index">PRODUCTS FROM MY COMPANY</span><h3>Explore what <span className="serif">we build.</span></h3></div><a href="https://solusiproteksimandiri.com/product" target="_blank" rel="noreferrer">All products <ArrowUpRight size={15}/></a></div><div className="company-product-grid">{companyProducts.map(product => <article className="company-product-card" key={product.id}><a className="company-product-image" href={product.url} target="_blank" rel="noreferrer" aria-label={`Explore ${product.name}`}><img src={product.image} alt={`${product.name} screenshot`} width="1000" height="600" loading="lazy"/><span><ArrowUpRight size={18}/></span></a><h4><a href={product.url} target="_blank" rel="noreferrer">{product.name}</a></h4><div className="tags">{product.skills.map(skill => <span key={skill}>{skill}</span>)}</div><a className="company-product-link" href={product.url} target="_blank" rel="noreferrer">Explore product <ArrowUpRight size={14}/></a></article>)}</div></div>;
}

function ProjectImage({ project, eager = false }: { project: Project; eager?: boolean }) {
  if (project.id === 'sapa') {
    return <div className="mobile-preview"><div className="mobile-preview-label"><span>GAMPONG BLANG DIGITAL</span><strong>Village services.<br />In your pocket.</strong><span>FLUTTER APP + REACT DASHBOARD + API</span></div><div className="phone-pair"><img src="/projects/sapa.webp" alt="Gampong Blang Digital resident app home screen" loading={eager ? 'eager' : 'lazy'} width="540" height="1200" /><img src="/projects/sapa-services.webp" alt="Gampong Blang Digital village services screen" loading={eager ? 'eager' : 'lazy'} width="540" height="1200" /></div></div>;
  }
  if (project.id === 'wer4pets') {
    return <div className="mobile-preview pedigree-preview"><div className="mobile-preview-label"><span>PEDIGREE® / WeR4Pets</span><strong>Mobile app<br />maintenance.</strong><span>REACT NATIVE + EXPRESS</span></div><div className="phone-pair"><img src="/projects/wer4pets.webp" alt="PEDIGREE WeR4Pets mobile app screenshot from Google Play" loading={eager ? 'eager' : 'lazy'} width="540" height="960"/><img src="/projects/wer4pets-care.webp" alt="PEDIGREE WeR4Pets pet care app screenshot from Google Play" loading={eager ? 'eager' : 'lazy'} width="540" height="960"/></div></div>;
  }
  if (!project.image) return null;
  return <div className="website-preview"><div className="browser-bar" aria-hidden="true"><span /><span /><span /><small>{project.url ? new URL(project.url).hostname.replace('www.', '') : project.name}</small></div><img src={project.image} alt={`${project.name} website screenshot`} loading={eager ? 'eager' : 'lazy'} width="1200" height="634" /></div>;
}

function ProjectDialog({ project, close }: { project: Project; close: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    ref.current?.showModal();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; previousFocus?.focus(); };
  }, []);
  return <dialog ref={ref} className="project-dialog" aria-labelledby="project-title" onCancel={close} onClick={event => { if (event.target === event.currentTarget) close(); }}>
    <div className="dialog-toolbar"><span>PROJECT / {project.number}</span><button className="icon-button" onClick={close} aria-label="Close project"><X size={21} /></button></div>
    {project.image && <ProjectImage project={project} eager />}
    <div className="dialog-content"><span className="eyebrow">{project.category} {project.year && ` / ${project.year}`}</span><h2 id="project-title">{project.name}</h2><p className="dialog-description">{project.detail}</p>
      <div className="project-meta"><div><span>MY ROLE</span><strong>{project.role}</strong></div><div><span>COMPANY / CONTEXT</span><strong>{project.context}</strong></div></div>
      <h3>What I worked on</h3><ul className="contributions">{project.contributions.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul>
      <h3>Technology & skills</h3><div className="stack-groups">{Object.entries(project.stack).map(([group, technologies]) => <div className="stack-group" key={group}><span>{group}</span><div className="tags">{technologies.map(technology => <span key={technology}>{technology}</span>)}</div></div>)}</div>
      {project.note && <p className="project-note">{project.note}</p>}
      {project.appUrl && <a className="button button-dark dialog-visit" href={project.appUrl} target="_blank" rel="noreferrer">View app on Google Play <ExternalLink size={16}/></a>}{project.url && <a className={project.appUrl ? 'text-link related-website-link' : 'button button-dark dialog-visit'} href={project.url} target="_blank" rel="noreferrer">{project.urlLabel || 'Visit live website'} <ExternalLink size={16} /></a>}
      {project.regionalSites && <section className="regional-sites" aria-labelledby="regional-sites-title"><h3 id="regional-sites-title">Regional websites</h3><div className="regional-site-links">{project.regionalSites.map(site => <a href={site.url} key={site.url} target="_blank" rel="noreferrer"><span>{site.name}<small>{new URL(site.url).hostname}</small></span><ExternalLink size={16}/></a>)}</div></section>}
    </div>
  </dialog>;
}

function ProjectCard({ project, open, filterTechnology }: { project: Project; open: (project: Project) => void; filterTechnology: (technology: string) => void }) {
  return <article className={`project-card ${project.image ? '' : 'project-text-card'}`}>
    {project.image && <button className={`project-visual-button preview-${project.id}`} onPointerMove={moveCard} onPointerLeave={resetCard} onClick={() => open(project)} aria-label={`View ${project.name} project`}><ProjectImage project={project} /><span className="image-open"><ArrowUpRight size={23} /></span></button>}
    <div className="project-card-top"><span>{project.category}</span><span>{project.year || project.role}</span></div>
    <h3><button onClick={() => open(project)}>{project.name}<ArrowUpRight size={23} /></button></h3>
    <div className="project-role">{project.role}<span> / </span>{project.context}</div><p>{project.description}</p>
    <div className="tags project-tags">{project.tags.map(tag => <button title={`Show projects using ${tag}`} key={tag} onClick={() => filterTechnology(tag)}>{tag}</button>)}</div>
    <div className="project-actions"><button onClick={() => open(project)}>View contributions <ArrowRight size={14} /></button>{project.appUrl && <a href={project.appUrl} target="_blank" rel="noreferrer">Google Play <ExternalLink size={13}/></a>}{project.url && <a href={project.url} target="_blank" rel="noreferrer">{project.urlLabel || 'Live website'} <ExternalLink size={13} /></a>}</div>
  </article>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All work');
  const [query, setQuery] = useState('');
  const [layout, setLayout] = useState<'grid' | 'index'>('grid');
  const [localTime, setLocalTime] = useState('');
  const [showDock, setShowDock] = useState(false);
  const filterTechnology = (technology: string) => { setFilter('All work'); setQuery(technology); document.getElementById('work')?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); };
  const [project, setProject] = useState<Project | null>(null);
  const visibleProjects = useMemo(() => projects.filter(item => (filter === 'All work' || item.category === filter) && `${item.name} ${item.category} ${item.tags.join(' ')} ${item.description} ${item.context}`.toLowerCase().includes(query.toLowerCase().trim())), [filter, query]);
  const visualProjects = visibleProjects.filter(item => item.image);
  const otherProjects = visibleProjects.filter(item => !item.image);

  useEffect(() => {
    const tick = () => setLocalTime(new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit' }).format(new Date()));
    tick(); const interval = setInterval(tick, 60000); return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progress = document.querySelector<HTMLElement>('.scroll-progress');
    const onScroll = () => {
      const maximum = document.documentElement.scrollHeight - innerHeight;
      setShowDock(scrollY > 700 && scrollY + innerHeight < document.documentElement.scrollHeight - 350);
      progress?.style.setProperty('--progress', `${maximum > 0 ? scrollY / maximum : 0}`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.06 });
    document.querySelectorAll('.project-card, .company-section, .about-layout, .experience-item').forEach(element => { element.classList.add('will-reveal'); observer.observe(element); });
    return () => observer.disconnect();
  }, [filter, query, layout]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  return <>
    <div className="scroll-progress" aria-hidden="true" />
    <a className="skip-link" href="#main">Skip to content</a>
    <main id="main"><div className="intro-shell" id="top">
      <header className="site-header container"><a href="#top" className="wordmark" aria-label="Noor Alizah Afifah home">noor<Asterisk size={23} /></a><nav id="main-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation"><a href="#work" onClick={() => setMenuOpen(false)}>Work <sup>{projects.length}</sup></a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a><a href="#education" onClick={() => setMenuOpen(false)}>Education</a><a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Get in touch <ArrowUpRight size={15} /></a></nav><button className="menu-toggle icon-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></header>
      <div>
        <section className="hero container" aria-labelledby="hero-title"><div className="hero-topline"><span className="eyebrow"><i /> FULL-STACK DEVELOPER & COMPANY OWNER</span><span className="hero-location">INDONESIA <span className="time-divider">/</span> {localTime} WIB</span></div><div className="hero-layout"><div className="hero-identity"><span className="hello-label">Hi, I’m Noor Alizah Afifah R.</span><h1 id="hero-title"><span className="sr-only">Noor Alizah Afifah R — </span>Making complex<br /><span className="name-serif">things feel simple.</span><span className="name-star" aria-hidden="true">✳</span></h1><p className="hero-profession">Full-stack developer. <span>Web, mobile & everything in between.</span></p><p className="hero-detail">I build websites and applications for brands, businesses, and communities. Currently at Mediatropy, and owner of Solusi Proteksi Mandiri.</p><div className="hero-actions"><a className="button button-accent" href="#work">Explore my work <ArrowDown size={16} /></a><a className="hero-contact" href={links.whatsapp} target="_blank" rel="noreferrer">Let’s connect <ArrowUpRight size={17} /></a></div></div><div className="interactive-toolkit" onPointerMove={moveCard} onPointerLeave={resetCard}><div className="toolkit-grid" aria-hidden="true"/><div className="toolkit-orbit" aria-hidden="true"/><div className="toolkit-orbit orbit-two" aria-hidden="true"/><div className="toolkit-top"><span>A FEW TOOLS I BUILD WITH</span><Asterisk size={16}/></div><div className="toolkit-center" aria-hidden="true"><Code2 size={35} strokeWidth={1.2}/><span>Frontend.<br/>Backend.<br/><em>Connected.</em></span></div>{toolkit.map(tool => <button key={tool.name} className={`tech-tile ${tool.className}`} onClick={() => filterTechnology(tool.name)}><span className="tech-symbol">{tool.symbol}</span><span><strong>{tool.name}</strong><small>{tool.label}</small></span><ArrowUpRight size={13}/></button>)}<div className="toolkit-bottom"><span>CLICK A TOOL. EXPLORE THE PROJECTS.</span><ArrowDown size={15}/></div></div></div><div className="hero-bottom"><span>BASED IN INDONESIA · BUILDING ACROSS BORDERS</span><div><a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href={links.email} aria-label="Send email"><Mail size={18} /></a></div></div></section>

      </div>
    </div>
    <div className="content-main">
      <section className="work-section container section" id="work" aria-labelledby="work-title"><div className="section-heading"><div><span className="section-index">01 / PROJECT INDEX</span><h2 id="work-title">Projects, <span className="serif">in practice.</span><sup>{projects.length}</sup></h2></div><p>Public websites, mobile applications, internal platforms,<br className="desktop-break" /> and maintenance work. My role and stack, project by project.</p></div><div className="project-controls"><div className="search-field"><Search size={17} /><label className="sr-only" htmlFor="project-search">Search projects or technologies</label><input id="project-search" type="search" placeholder="Search projects, clients, or technologies…" value={query} onChange={event => setQuery(event.target.value)} />{query && <button className="icon-button" aria-label="Clear search" onClick={() => setQuery('')}><X size={16} /></button>}</div><CategoryDropdown value={filter} change={setFilter}/></div><div className="project-filter-tabs" aria-label="Filter by project type">{['All work','Brand & commerce','Education & research','Hospitality','Government & systems','Mobile & platforms','Maintenance'].map(category => <button className={filter === category ? 'selected' : ''} key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}<span>{category === 'All work' ? projects.length : projects.filter(item => item.category === category).length}</span></button>)}</div><div className="results-bar"><p className="results-count" role="status">SHOWING {visibleProjects.length} OF {projects.length} PROJECTS</p><div className="layout-toggle" aria-label="Project layout"><button className={layout === 'grid' ? 'selected' : ''} aria-pressed={layout === 'grid'} onClick={() => setLayout('grid')} aria-label="Grid view"><LayoutGrid size={15}/></button><button className={layout === 'index' ? 'selected' : ''} aria-pressed={layout === 'index'} onClick={() => setLayout('index')} aria-label="Index view"><List size={17}/></button></div></div>
        {layout === 'index' && <div className="project-index">{visibleProjects.map(item => <button key={item.id} onClick={() => setProject(item)}><span className="index-number">{item.number}</span><span className="index-name">{item.name}<small>{item.role}</small></span><span className="index-category">{item.category}</span><span className="index-stack">{Object.values(item.stack).flat().slice(0, 3).join(' / ')}</span><ArrowUpRight size={20}/></button>)}</div>}
        {layout === 'grid' && visualProjects.length > 0 && <div className="project-grid"> {visualProjects.map(item => <ProjectCard key={item.id} project={item} open={setProject} filterTechnology={filterTechnology} />)}</div>}
        {layout === 'grid' && otherProjects.length > 0 && <><div className="archive-heading"><span>MORE DEVELOPMENT & MAINTENANCE WORK</span><p>Internal and earlier projects, with descriptions and technical details.</p></div><div className="project-archive">{otherProjects.map(item => <ProjectCard key={item.id} project={item} open={setProject} filterTechnology={filterTechnology} />)}</div></>}
        {visibleProjects.length === 0 && <div className="empty-state"><h3>No projects found.</h3><p>Try another project name or technology.</p><button className="button button-dark" onClick={() => { setFilter('All work'); setQuery(''); }}>Show all projects <ArrowRight size={16} /></button></div>}
      </section>
      <section className="about-section" id="about"><div className="container about-layout"><div><span className="section-index">02 / ABOUT ME</span><h2>A developer who<br />sees the whole<br /><span>project through.</span></h2></div><div className="about-copy"><p className="about-lead">I enjoy making complex things feel simple.</p><p>I’m Noor Alizah Afifah R, a full-stack developer based in Indonesia, working across web and mobile applications, agency projects, and business systems.</p><p>My work spans the interface people use, the backend that supports it, and the integrations that connect everything. I’ve worked with designers, project managers, clients, and other developers to take requirements through development and release.</p><p>I’m comfortable moving between a custom CMS, a mobile app, and an internal platform. I care about understanding the requirement, keeping communication clear, and making the result reliable.</p><a className="text-link" href={links.linkedin} target="_blank" rel="noreferrer">Professional background <ArrowUpRight size={17} /></a></div></div><div className="container capability-strip"><div><span>01</span><h3>Web & CMS</h3><p>React, Next.js, TypeScript, WordPress, WooCommerce, Sitefinity, Craft CMS, Umbraco</p></div><div><span>02</span><h3>Backend & systems</h3><p>Node.js, Express, PHP, Laravel, CodeIgniter, Django, PostgreSQL, MySQL, REST APIs</p></div><div><span>03</span><h3>Mobile & delivery</h3><p>Flutter, Dart, React Native, Firebase, Linux, Nginx, Apache, Docker, testing & deployment</p></div></div></section>
      <section className="company-section container" aria-labelledby="company-title"><div className="company-topline"><span className="section-index">INDEPENDENTLY OWNED</span><span>SPM / INDONESIA</span></div><div className="company-layout"><div className="company-title-wrap"><a className="spm-logo" href="https://solusiproteksimandiri.com/" target="_blank" rel="noreferrer" aria-label="Solusi Proteksi Mandiri website"><img src="/companies/spm.webp" alt="Solusi Proteksi Mandiri logo" width="58" height="58" loading="lazy"/></a><h2 id="company-title">Solusi Proteksi<br />Mandiri<span>.</span></h2></div><div><span className="company-owner">MY OWN COMPANY</span><p>I run Solusi Proteksi Mandiri alongside my development career. For business enquiries and potential collaborations, reach me directly.</p><a className="button button-accent" href={links.companyEmail}>Discuss a collaboration <ArrowUpRight size={17} /></a><a className="company-email" href={links.companyEmail}>afifah.ridwan@solusiproteksimandiri.com</a></div></div><CompanyProducts/></section>
      <section id="experience" className="experience-section container section"><div className="section-heading"><div><span className="section-index">03 / EXPERIENCE</span><h2>Where I’ve worked<span className="accent">.</span></h2></div><a className="text-link" href={links.linkedin} target="_blank" rel="noreferrer">Full career on LinkedIn <ArrowUpRight size={17} /></a></div><div className="experience-list">{experience.map((item, index) => <article className="experience-item experience-entry" key={item.company}><a className={`experience-logo ${companyBrands[item.company].className || ''}`} href={companyBrands[item.company].url} target="_blank" rel="noreferrer" aria-label={`Visit ${item.company}`}><img src={companyBrands[item.company].logo} alt={`${item.company} logo`} width="50" height="50" loading="lazy"/></a><div className="experience-content"><h3><a href={companyBrands[item.company].url} target="_blank" rel="noreferrer">{item.company}<ArrowUpRight size={13}/></a></h3><h4>{item.role}</h4><p>{item.text}</p></div><div className="experience-period"><span>{item.date}</span>{index === 0 && <span className="experience-current">CURRENT ROLE</span>}</div></article>)}</div><p className="experience-note">Selected roles. Some engagements ran concurrently.</p><section className="education" id="education" aria-labelledby="education-title"><div className="education-heading"><span className="section-index">THE FOUNDATION</span><h2 id="education-title">Always <span className="serif">learning.</span></h2><p>Two degrees. One continuing curiosity.</p></div><div className="education-cards">{[{level: 'POSTGRADUATE', title: 'Master of Technology', major: 'Management Information Systems', years: '2022 — 2023', gpa: '3.73'}, {level: 'UNDERGRADUATE', title: 'Bachelor of Technology', major: 'Information Technology', years: '2018 — 2022', gpa: '3.69'}].map(degree => <article className="degree-card" key={degree.level}><div className="degree-top"><a className="university-logo" href="https://www.gunadarma.ac.id/" target="_blank" rel="noreferrer" aria-label="Visit Universitas Gunadarma website"><img src="/education/gunadarma.webp" alt="Universitas Gunadarma official logo" width="64" height="64" loading="lazy"/></a><div><a className="university-name" href="https://www.gunadarma.ac.id/" target="_blank" rel="noreferrer">Universitas Gunadarma <ArrowUpRight size={15}/></a><span className="university-location">Indonesia</span></div></div><div className="degree-details"><span className="degree-level">{degree.level}</span><h3>{degree.title}</h3><p>{degree.major}</p></div><div className="degree-bottom"><span>{degree.years}</span><span>GPA <strong>{degree.gpa}</strong></span></div><a className="university-visit" href="https://www.gunadarma.ac.id/" target="_blank" rel="noreferrer">University website <ExternalLink size={13}/></a></article>)}</div></section></section>
      <section id="contact" className="contact-section"><div className="container"><div className="contact-topline"><span className="section-index">04 / CONTACT</span><span>LET’S GET INTO THE DETAILS.</span></div><div className="contact-layout"><h2>Let’s discuss<br />your project<ArrowUpRight /></h2><div><p>Tell me what you’re working on.<br />You can reach me directly on WhatsApp or email.</p><a className="button button-light" href={links.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Chat on WhatsApp <ArrowUpRight size={17} /></a><a className="contact-email" href={links.email}>nooralizahar@gmail.com <ArrowUpRight size={18} /></a></div></div><div className="contact-bottom"><a href={links.companyEmail}>Business: afifah.ridwan@solusiproteksimandiri.com <ArrowUpRight size={13} /></a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a><a href={links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a></div></div></section>
      <footer className="site-footer container"><a href="#top" className="wordmark" aria-label="Back to top">noor<Asterisk size={20} /></a><p>© {new Date().getFullYear()} Noor Alizah Afifah R.</p><a className="text-link" href="#top">Back to top <ArrowUpRight size={15} /></a></footer>
    </div>
    </main>
    <div className={`contact-dock ${showDock ? 'visible' : ''}`} aria-label="Quick contact" inert={!showDock}><a href={links.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp <ArrowUpRight size={13}/></a><a href={links.email} aria-label="Contact by email"><Mail size={17}/></a><a href="#top" aria-label="Back to top"><ArrowUpRight size={17}/></a></div>
    {project && <ProjectDialog project={project} close={() => setProject(null)} />}
    <Analytics />
  </>;
}
