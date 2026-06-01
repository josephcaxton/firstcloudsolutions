import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import ScrollReveal from '@/components/ScrollReveal';
import styles from './page.module.css';
import Image from 'next/image';

const services = [
  {
    num: '01',
    title: 'Cloud Security Transformation',
    body: 'End-to-end security posture improvement for AWS environments — from vulnerability management and CIS benchmarking to automated remediation. Built for organisations where security debt has accumulated alongside growth.',
    tags: ['AWS Security Hub', 'GuardDuty', 'Inspector', 'IAM & KMS', 'Control Tower', 'CIS Benchmarks'],
  },
  {
    num: '02',
    title: 'Large-Scale Cloud Migration',
    body: 'Structured migration of complex workloads into AWS — including distributed systems, databases, and containerised platforms — with rigorous attention to availability, data integrity, and cost optimisation throughout.',
    tags: ['Data centre consolidation', 'Kafka & Cassandra', 'EKS re-platforming', 'SRE practices'],
  },
  {
    num: '03',
    title: 'Platform Engineering & DevOps',
    body: 'Kubernetes platform design and CI/CD delivery at scale. From EKS provisioning and Helm-based deployments to GitOps practices and automated pipeline architecture that reduces toil and shortens release cycles.',
    tags: ['Terraform', 'Kubernetes / EKS', 'Helm', 'Argo CD', 'Jenkins', 'Azure DevOps'],
  },
  {
    num: '04',
    title: 'Cloud Governance & Compliance',
    body: 'Designing and implementing cloud governance frameworks that satisfy audit requirements without slowing engineering. Proven delivery of SOC2 readiness, AWS Control Tower with OKTA federation, and drift-detection automation.',
    tags: ['SOC2 readiness', 'AWS Control Tower', 'OKTA SSO', 'CloudFormation guardrails'],
  },
  {
    num: '05',
    title: 'Forward Deployed AI Engineering',
    body: 'Embedding directly within your product and engineering teams to turn AI capability into working operational reality. From redesigning workflows around AWS Bedrock and LangGraph agents to real-time prompt architecture for live applications — this is hands on delivery, not advisory.',
    tags: ['AWS Bedrock', 'SageMaker', 'LangChain / LangGraph', 'RAG pipelines', 'Agentic Workflows', 'Prompt Engineering', 'Workflow Re-engineering'],
  },
  {
    num: '06',
    title: 'Observability & SRE',
    body: 'Building monitoring ecosystems that give engineering teams genuine operational confidence — from centralised ELK Stack and Prometheus alerting to automated remediation scripts that drive MTTR down without manual intervention.',
    tags: ['ELK Stack', 'Prometheus', 'CloudWatch', 'Kibana', 'Rancher'],
  },
];

const approach = [
  {
    num: '01',
    title: 'Understand the real problem',
    body: 'Security issues, migration blockers, and platform inefficiencies rarely present in their true form. I start with a structured technical discovery to separate symptoms from root causes.',
  },
  {
    num: '02',
    title: 'Design for your constraints',
    body: 'Architecture that ignores your team\'s capability, your compliance requirements, or your cost envelope isn\'t architecture — it\'s theory. Every recommendation is grounded in your reality.',
  },
  {
    num: '03',
    title: 'Forward Deployed Delivery',
    body: 'I work embedded within your team, not at arm\'s length. Whether pairing with engineers, leading a workstream, or owning AI integration end-to-end, forward deployment means your AI capability lands in production, not a slide deck.',
  },
  {
    num: '04',
    title: 'Leave you self-sufficient',
    body: 'Good consulting transfers capability. Runbooks, documented decisions, trained engineers. The goal is a platform and a team that can operate without me.',
  },
];

const sectors = [
  { icon: '🏦', name: 'Financial Services' },
  { icon: '🛒', name: 'E-Commerce & Retail' },
  { icon: '📡', name: 'Media & Broadcasting' },
  { icon: '🚇', name: 'Transport & Public Sector' },
  { icon: '💻', name: 'Technology & SaaS' },
  { icon: '🎓', name: 'EdTech' },
];

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollReveal />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={styles.eyebrow}>Forward Deployed AI & Cloud Engineering</p>
          <h1 className={styles.heroH1}>
            Embedded delivery for organisations <em>integrating AI</em> into mission-critical cloud platforms.
          </h1>
          <p className={styles.heroSub}>
            AWS consulting for organisations navigating complex cloud transformation,
            security posture improvement, and AI-native architecture — delivered with over ten
            years of enterprise-grade rigour.
          </p>
          <div className={styles.heroActions}>
            <a href="#contact" className="btn-primary">Start a conversation</a>
            <a href="#services" className="btn-secondary">View services</a>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.statCard}>
            <div className={styles.statNum}>10+</div>
            <div className={styles.statLabel}>
              <strong>Years of enterprise cloud delivery</strong>
              Financial services, media, technology, and public sector
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNum}>8+</div>
            <div className={styles.statLabel}>
              <strong>Years forward deploying into enterprise teams</strong>
              Financial services, EdTech, and technology
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNum}>60+</div>
            <div className={styles.statLabel}>
              <strong>Applications migrated to AWS</strong>
              Across three European data centre consolidations for eBay Kleinanzeigen
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNum}>5×</div>
            <div className={styles.statLabel}>
              <strong>AWS certified</strong>
              DevOps Professional · Solutions Architect Pro · Security Specialty · Networking Specialty · AI Practitioner
            </div>
          </div>
          <div className={styles.certStrip}>
            <strong>Previous clients include</strong>
            Barclaycard · Barclays Bank · eBay Kleinanzeigen · Deloitte · BBC · Transport for London · Sky · Bauer Media Group · Provident Financial
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.servicesSection} id="services">
        <div className="container">
          <div className={`${styles.sectionHeader} reveal`}>
            <p className="section-tag">What I do</p>
            <h2 className="section-title">Consulting <em>services</em></h2>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <div key={s.num} className={`${styles.serviceCard} reveal`}>
                <div className={styles.serviceNum}>{s.num}</div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceBody}>{s.body}</p>
                <div className={styles.serviceTags}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.serviceTag}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className={styles.aboutSection} id="about">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={`${styles.aboutLeft} reveal`}>
              <p className="section-tag">About</p>
              <div style={{
                width: '100%',
                maxWidth: '320px',
                marginBottom: '2rem',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1px solid var(--paper-2)',
              }}>
                <Image
                  src="/images/joseph-caxton-idowu.jpg"
                  alt="Joseph Caxton-Idowu — Forward Deployed AI & Cloud Engineer"
                  width={320}
                  height={380}
                  style={{ width: '100%', objectFit: 'cover', height: 'auto', display: 'block' }}
                  priority
                />
              </div>
              <div className={styles.aboutIdentity}>
                Joseph<br />Caxton-Idowu<br /><em>Forward Deployed AI<br />&amp; Cloud Engineer</em>
              </div>
              <ul className={styles.clientList}>
                {['Barclaycard via Avanade', 'eBay Kleinanzeigen via Deloitte', 'Barclays Bank', 'Deloitte ITS Cloud UK', 'LearnersCloud', 'BBC · TfL · Sky', 'Bauer Media · Provident Financial'].map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className={`${styles.aboutBody} reveal`}>
              <p>
                I am a Subject Matter Expert (SME) in AWS Cloud and DevOps with over ten years of experience delivering
                cloud transformation across financial services, media, and technology. I founded First Cloud
                Solutions to bring that enterprise grade rigour directly to mid-size and large organisations
                who need a trusted technical partner — not a generic consultancy.
              </p>
              <p>
                My work spans the full breadth of cloud engineering: migrating complex distributed systems
                at scale, hardening security posture across large AWS estates, designing Kubernetes platforms
                that teams can actually operate, and integrating AI and ML capabilities into production
                cloud-native architectures.
              </p>
              <p>
                More recently, my focus has shifted to forward deployed AI engineering — embedding within enterprise
                product and operations teams to design agentic workflows, RAG pipelines, and prompt architectures
                that connect advanced AI capability directly to business processes. At LearnersCloud, I re-engineered a
                passive video platform into an adaptive, AI-driven learning application with real-time student profiling
                and automated remediation. At Barclaycard via Avanade, I led the integration of AI-augmented pipelines
                into a mission-critical payment gateway.
              </p>
              <p>
                I hold five AWS certifications — DevOps Engineer Professional, Solutions Architect Professional,
                Security Specialty, Advanced Networking Specialty, and AI Practitioner — and I work comfortably
                in both embedded team and independent consulting environments.
              </p>
              <div className={styles.skillsGrid}>
                {[
                  { label: 'Cloud & IaC', items: 'AWS (extensive), Azure, Terraform, CloudFormation, Helm' },
                  { label: 'Containers & Platform', items: 'Kubernetes (EKS), Docker, OpenShift, Fargate, Rancher' },
                  { label: 'AI & ML', items: 'AWS Bedrock, SageMaker, RAG, LangChain/LangGraph, Agentic Workflows, RAG Pipelines, Prompt Engineering' },
                  { label: 'Security', items: 'Control Tower, KMS, Secrets Manager, OKTA, IAM, CIS' },
                  { label: 'Consulting & Delivery', items: 'Forward Deployment, Workflow Re-engineering, Stakeholder Engagement, Cross-Functional Leadership, TCO & Capacity Planning' },
                ].map((g) => (
                  <div key={g.label} className={styles.skillGroup}>
                    <div className={styles.skillLabel}>{g.label}</div>
                    <div className={styles.skillItems}>{g.items}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className={styles.approachSection} id="approach">
        <div className="container">
          <div className={`${styles.sectionHeader} reveal`}>
            <p className={styles.approachTag}>How I work</p>
            <h2 className={styles.approachTitle}>A delivery-first approach</h2>
          </div>
          <div className={styles.approachSteps}>
            {approach.map((a) => (
              <div key={a.num} className={`${styles.approachStep} reveal`}>
                <div className={styles.stepNum}>{a.num}</div>
                <h3 className={styles.stepTitle}>{a.title}</h3>
                <p className={styles.stepBody}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section className={styles.sectorsSection}>
        <div className="container">
          <div className={`${styles.sectionHeader} reveal`}>
            <p className="section-tag">Sector experience</p>
            <h2 className="section-title">Industries served</h2>
          </div>
          <div className={styles.sectorsGrid}>
            {sectors.map((s) => (
              <div key={s.name} className={`${styles.sectorCard} reveal`}>
                <div className={styles.sectorIcon}>{s.icon}</div>
                <div className={styles.sectorName}>{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className={styles.contactSection} id="contact">
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={`${styles.contactLeft} reveal`}>
              <p className={styles.approachTag}>Get in touch</p>
              <h2 className={styles.contactTitle}>
                Ready to talk about your<br /><em>cloud transformation?</em>
              </h2>
              <p className={styles.contactSub}>
                Whether you&apos;re planning a migration, tightening your security posture, or integrating
                AI into your platform — let&apos;s have a direct conversation.
              </p>
              <div className={styles.contactDetails}>
                <a href="mailto:joseph@firstcloudsolutions.net">joseph@firstcloudsolutions.net</a>
                <a href="https://linkedin.com/in/josephcaxton" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/josephcaxton
                </a>
              </div>
            </div>
            <div className={`${styles.contactRight} reveal`}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
