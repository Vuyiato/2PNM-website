// Extended organisation story shown on the About page, sourced from the TWOPNM Academy company profile.
import PartnerLogos from "./PartnerLogos";

const stats = [
  ["2017", "Year founded"],
  ["100+", "Unemployed youth trained"],
  ["300", "Communities targeted each year"],
  ["8", "Accredited & industry partners"],
];

const goals = [
  [
    "Provide",
    "Disadvantaged youth with equal access to quality digital and creative education.",
  ],
  [
    "Create",
    "Life-changing opportunities through future-ready skills that uplift livelihoods and communities.",
  ],
  [
    "Develop",
    "Visionary leaders who drive innovation, creativity, and social impact.",
  ],
  [
    "Position",
    "TWOPNM Academy as a sustainable, high-impact institution in skills development.",
  ],
  [
    "Empower",
    "300 remote and underserved communities yearly with training in in-demand digital and creative skills.",
  ],
];

const milestones = [
  [
    "2017",
    "TWOPNM Academy is founded, offering free ICT and Film & TV Production programmes.",
  ],
  [
    "2019",
    "Launch of the Kebopelo Barona Community Project, a Work Integrated Learning initiative.",
  ],
  [
    "2021–22",
    "15 learners trained through a TVET Placement Programme with South West Gauteng College, in collaboration with MICT SETA.",
  ],
  [
    "2023",
    "10 learners placed through a TVET NCV Programme with FASSET, and 25 learners allocated to Short Learning Programmes with MICT SETA.",
  ],
  [
    "2024",
    "15 learners enrolled in Short Learning Programmes through MICT SETA.",
  ],
  [
    "2025",
    "Launch of Film & TV Production Masterclasses with the Gauteng Film Commission, and 15 learners trained on Skills Programmes and Film & TV Production.",
  ],
];

const offerings = [
  "Work Readiness",
  "Short Programmes",
  "Learnerships",
  "Internships",
  "TVET Placement",
  "Bursaries",
];

const qualifications = [
  [
    "System Development",
    "SAQA 78965",
    "FET Certificate in Information Technology",
  ],
  [
    "End User Computing",
    "SAQA 61591",
    "National Certificate in Information Technology",
  ],
  [
    "Technical Support",
    "SAQA 78964",
    "FET Certificate in Information Technology",
  ],
  [
    "Film and TV Production",
    "SAQA 58394",
    "National Certificate in Film and Television Production",
  ],
];

const eligibility = [
  "Unemployed South African youth aged 18–34",
  "Persons living with disabilities (congenital or acquired)",
  "Business owners, whether entrepreneurs or intrapreneurs",
];

function AboutExtras() {
  return (
    <>
      <section className="about-story">
        <div className="about-story-lead">
          <p className="eyebrow">Our story</p>
          <h2>
            Shaping South Africa’s future through <em>4IR education.</em>
          </h2>
        </div>
        <div className="about-story-copy">
          <p>
            TWOPNM Academy is an accredited, pioneering institution that
            empowers disadvantaged youth with cutting-edge digital and creative
            skills. Learners gain globally recognised skills, hands-on industry
            experience, and pathways to employment or entrepreneurship.
          </p>
          <p>
            Since 2017 we have provided free ICT and Film &amp; TV Production
            programmes, and have trained over 100 unemployed young people.
          </p>
        </div>
      </section>

      <section className="about-stats" aria-label="TWOPNM Academy in numbers">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="about-vm">
        <article>
          <p className="eyebrow">Our vision</p>
          <blockquote>
            To be a catalyst for change, empowering South Africa’s youth to
            thrive in the digital and creative age.
          </blockquote>
        </article>
        <article>
          <p className="eyebrow">Our mission</p>
          <blockquote>
            To transform lives and communities by turning disadvantaged and
            unemployed youth into digital and creative innovators through free,
            high-quality learning experiences.
          </blockquote>
        </article>
      </section>

      <section className="about-block">
        <div className="section-heading">
          <p className="eyebrow">Our goals</p>
          <h2>
            Five commitments <em>we work toward.</em>
          </h2>
        </div>
        <ol className="about-goals">
          {goals.map(([verb, copy], index) => (
            <li key={verb}>
              <span>0{index + 1}</span>
              <h3>{verb}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-block about-block--dark">
        <div className="section-heading">
          <p className="eyebrow">Our journey</p>
          <h2>
            Growing since <em>2017.</em>
          </h2>
        </div>
        <ol className="about-timeline">
          {milestones.map(([year, copy]) => (
            <li key={year}>
              <strong>{year}</strong>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-block">
        <div className="section-heading">
          <p className="eyebrow">What we offer</p>
          <h2>
            Pathways and <em>accredited qualifications.</em>
          </h2>
        </div>
        <ul className="about-tags">
          {offerings.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="about-quals">
          {qualifications.map(([name, saqa, award]) => (
            <article key={name}>
              <span>{saqa}</span>
              <h3>{name}</h3>
              <p>{award}</p>
            </article>
          ))}
        </div>
        <p className="about-note">
          Our 4IR courses also include Cyber Security, Artificial Intelligence,
          Internet of Things (IoT), and Cloud Administration.
        </p>
      </section>

      <section className="about-block about-block--tint">
        <div className="section-heading">
          <p className="eyebrow">Who qualifies</p>
          <h2>
            Built for people <em>who want to grow.</em>
          </h2>
        </div>
        <ul className="about-eligibility">
          {eligibility.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="about-note">
          Our learners are aged 18–34, interested in ICT or Film &amp; TV,
          available, and willing to learn.
        </p>
      </section>

      <section className="about-founder">
        <blockquote>
          “The future belongs to those who are skilled, innovative and
          fearless.”
        </blockquote>
        <p>
          <strong>Ntombizodwa Makhoba</strong>
          <span>Director, TWOPNM Academy</span>
        </p>
      </section>

      <section className="about-block" id="partners">
        <div className="section-heading">
          <p className="eyebrow">In partnership with</p>
          <h2>
            Our partners <em>make it possible.</em>
          </h2>
        </div>
        <PartnerLogos variant="grid" />
      </section>
    </>
  );
}

export default AboutExtras;
