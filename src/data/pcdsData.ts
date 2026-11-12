export interface ActivityItem {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  fullDescription: string[];
  image: string;
  category: string;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
}

export interface ImpactMetric {
  id: string;
  number: number;
  suffix: string;
  label: string;
  detail: string;
  iconName: string;
}

export interface AwardItem {
  id: string;
  title: string;
  year: string;
  presenter: string;
  description: string;
}

export interface FuturePlanItem {
  number: string;
  title: string;
  description: string;
}

export interface AdvisoryMember {
  name: string;
  designation: string;
  role: string;
  responsibilities: string;
}

export const ORG_INFO = {
  name: 'Prajwala Community Development Society',
  shortName: 'PCDS',
  city: 'Guntur',
  state: 'Andhra Pradesh, India',
  tagline: 'Serving Humanity with Compassion, Dignity & Hope',
  motto: 'SERVE • EMPOWER • TRANSFORM',
  heroHeadline: 'Together for a Better Tomorrow',
  heroDescription:
    'A non-profit organization committed to improving the quality of life of underprivileged communities through sustainable social development initiatives.',
  establishedDate: '03 August 2019',
  regNumber: '240/2019',
  address: '70-13-1708, I.P.D. Colony 2nd Line Opposite Line, Sangadi Gunta Area, Guntur-522003, Andhra Pradesh, India.',
  phone: '+91 95020 46096',
  email: 'pcdsguntur19@gmail.com',
  website: 'www.prajwalacommunitydevelopmentsociety.org',
  social: {
    facebook: 'Prajwala Community Development Society 2019',
    facebookUrl: 'https://www.facebook.com/search/top?q=Prajwala%20Community%20Development%20Society%202019',
    youtube: '@PCDSSOCIALSERVICES-GUNTUR',
    youtubeUrl: 'https://www.youtube.com/@PCDSSOCIALSERVICES-GUNTUR',
    instagram: '@pcds_socialservices',
    instagramUrl: 'https://www.instagram.com/pcds_socialservices/',
  },
  bank: {
    accountName: 'PRAJWALA COMMUNITY DEVELOPMENT SOCIETY',
    bankName: 'ANDHRA PRADESH GRAMEENA BANK (Chaitanya Godavari Grameena Bank)',
    accountNo: '770610100043136',
    ifsc: 'UBIN0CG7706',
    branch: 'Lanchester Road',
    upiId: '7706047528@myapgb',
  },
};

export const ABOUT_TEXT = {
  intro:
    'Prajwala Community Development Society is a non-profit organization committed to improving the quality of life of underprivileged communities. The Society works towards sustainable social development through initiatives in Old-age Home, education, Healthcare- Cancer Patients, women’s empowerment, child welfare, environmental protection, skill development, and livelihood promotion.',
  missionParagraph:
    'By collaborating with communities, government agencies, and other stakeholders, the organization strives to create equal opportunities, promote social justice, and empower individuals to lead dignified and self-reliant lives.',
};

export const VISION_MISSION_VALUES = {
  vision:
    'To build a society where every individual lives with dignity, care, hope, and equal opportunity, ensuring inclusive development, social justice, and sustainable well-being for all.',
  mission:
    "To empower communities through compassion-driven social services, sustainable development, and human-centered care by promoting education, healthcare, women's empowerment, child welfare, senior citizen support, legal aid, environmental protection, and livelihood opportunities for underprivileged and marginalized communities.",
  coreValues: [
    { name: 'Compassion', description: 'Serving every individual with empathy, warmth, and human dignity.' },
    { name: 'Integrity', description: 'Upholding honesty, ethics, and sincerity in every community initiative.' },
    { name: 'Equality', description: 'Promoting fair and equal opportunities regardless of age, gender, ability, or background.' },
    { name: 'Transparency', description: 'Maintaining clear, open governance and responsible stewardship of resources.' },
    { name: 'Accountability', description: 'Taking full responsibility for measurable impact and community trust.' },
    { name: 'Inclusiveness', description: 'Ensuring vulnerable and marginalized groups are never left behind.' },
  ],
};

export const OBJECTIVES = [
  { id: 1, title: 'Promoting education', description: 'Supporting learning, educational awareness, and student development across underserved communities.', icon: 'GraduationCap' },
  { id: 2, title: 'Providing health services', description: 'Organizing free medical camps, health awareness, blood donation, and preventive healthcare services.', icon: 'HeartPulse' },
  { id: 3, title: "Women's empowerment", description: 'Advancing leadership, skill training, self-defence, and economic independence for women and girls.', icon: 'Users' },
  { id: 4, title: 'Welfare of the elderly', description: 'Operating our Old Age Home with safe shelter, nutritious food, medical care, and emotional support.', icon: 'Home' },
  { id: 5, title: 'Child welfare', description: 'Protecting child rights, education, nutrition, and safety through 112/1098 & POCSO awareness.', icon: 'Baby' },
  { id: 6, title: 'Free legal services', description: 'Conducting legal literacy camps, rights counselling, and facilitating free legal assistance.', icon: 'Scale' },
  { id: 7, title: 'Environmental protection', description: 'Driving tree plantation, park cleaning, and sustainable environmental practices in Guntur.', icon: 'Trees' },
  { id: 8, title: 'Livelihood development', description: 'Providing vocational training, tailoring programs, and income-generation support.', icon: 'Briefcase' },
];

export const ACTIVITIES: ActivityItem[] = [
  {
    slug: 'hair-donation',
    title: 'Hair Donation Campaigns for Cancer Patients',
    shortTitle: 'Hair Donation',
    category: 'Healthcare & Cancer Support',
    summary:
      'Encouraging voluntary hair donations to help prepare wigs for cancer patients, restoring dignity, confidence, and hope during treatment.',
    fullDescription: [
      'Prajwala Community Development Society (PCDS) organizes dedicated Hair Donation Campaigns to support cancer patients undergoing chemotherapy and treatment.',
      'Successfully organized 3 Hair Donation Camps, where 17 voluntary hair donors contributed their hair to support the preparation of wigs for cancer patients, restoring hope and confidence.',
    ],
    image: '/assets/activities/hair-donation.jpg',
    highlights: [
      'Voluntary hair donation drives with youth and women',
      'Supporting wig preparation for cancer patients',
      'Restoring dignity, confidence, and emotional hope',
    ],
    metrics: [
      { label: 'Hair Donation Camps Conducted', value: '3' },
      { label: 'Voluntary Hair Donors', value: '17' },
    ],
  },
  {
    slug: 'old-age-home',
    title: 'Senior Citizen Care & Old Age Home Services',
    shortTitle: 'Old Age Home',
    category: 'Senior Citizen Welfare',
    summary:
      'PCDS is currently operating an Old Age Home that provides safe shelter, nutritious food, clothing, healthcare support, emotional care, and a dignified living environment for 25 senior citizens.',
    fullDescription: [
      'PCDS is currently operating an Old Age Home that provides safe shelter, nutritious food, clothing, healthcare support, emotional care, and a dignified living environment for 25 senior citizens. The organization is committed to ensuring that every resident receives compassionate care, respect, and a sense of belonging.',
      'Since its establishment, the Old Age Home has provided shelter, food, clothing, healthcare, and emotional support to 46 senior citizens. Currently, 25 senior citizens are residing in the Home, receiving continuous care and support.',
    ],
    image: '/assets/activities/old-age-home.png',
    highlights: [
      'Safe and dignified residential shelter in Sangadi Gunta Area, Guntur',
      'Daily nutritious meals, clothing, and regular health check-ups',
      'Emotional care, companionship, and community belonging',
    ],
    metrics: [
      { label: 'Senior Citizens Supported (Since Inception)', value: '46+' },
      { label: 'Currently Residing in Old Age Home', value: '25' },
    ],
  },
  {
    slug: 'disability-support',
    title: 'Support for Persons with Disabilities',
    shortTitle: 'Disability Support',
    category: 'Inclusion & Accessibility',
    summary:
      'Promoting inclusion, equal opportunities, assistive support, awareness, and access to welfare services for persons with disabilities.',
    fullDescription: [
      'PCDS works actively to promote inclusion, equal opportunities, assistive support, awareness, and access to welfare schemes for persons with disabilities.',
      'Through our PCDS Old Age & Persons with Disabilities Home and community outreach, we strive to ensure dignified living, social acceptance, and practical support.',
    ],
    image: '/assets/activities/disability-support.png',
    highlights: [
      'Inclusive support and community awareness',
      'Access to welfare schemes and assistive care',
      'Dignified living and equal opportunity advocacy',
    ],
  },
  {
    slug: 'women-empowerment',
    title: 'Women Empowerment & Gender Equality',
    shortTitle: 'Women Empowerment',
    category: 'Women & Leadership',
    summary:
      "Organizing skill development programs, awareness campaigns, leadership training, health education, and initiatives that promote women's rights and economic independence.",
    fullDescription: [
      "PCDS organizes skill development programs, awareness campaigns, leadership training, health education, and initiatives that promote women's rights and economic independence.",
      'Our women empowerment programmes equip women across urban and rural Guntur with confidence, legal awareness, health knowledge, and livelihood skills.',
    ],
    image: '/assets/activities/women-empowerment.png',
    highlights: [
      'Skill development & vocational workshops',
      'Leadership training & gender equality awareness',
      'Health education & economic independence initiatives',
    ],
  },
  {
    slug: 'child-welfare',
    title: 'Child Welfare & Education Support',
    shortTitle: 'Child Welfare',
    category: 'Children & Education',
    summary:
      "Supporting children's education, health, nutrition, protection, and overall development through community-based initiatives.",
    fullDescription: [
      "PCDS is dedicated to supporting children's education, health, nutrition, protection, and overall development through community-based initiatives.",
      'Through our Child Protection & Legal Awareness campaigns, PCDS has created awareness among over 3,000 students on Emergency Response Support System (112), Childline (1098), the POCSO Act, child rights, child safety, and other child protection laws through awareness programs conducted in educational institutions and communities.',
    ],
    image: '/assets/activities/child-welfare.png',
    highlights: [
      'Awareness on Emergency Response Support System (112) & Childline (1098)',
      'POCSO Act, child rights, and child safety education',
      'Support for educational institutions, orphanages, and communities',
    ],
    metrics: [{ label: 'Students Reached Through Awareness Programmes', value: '3,000+' }],
  },
  {
    slug: 'legal-aid',
    title: 'Legal Awareness & Free Legal Aid',
    shortTitle: 'Legal Aid',
    category: 'Justice & Rights',
    summary:
      'Conducting legal literacy programs, rights awareness campaigns, counselling, and facilitating access to free legal assistance for disadvantaged communities.',
    fullDescription: [
      'Founded by a Legal Professional (Advocate), PCDS conducts legal literacy programs, rights awareness campaigns, counselling, and facilitates access to free legal assistance for disadvantaged communities.',
      'Special focus is placed on empowering victims of domestic violence, abuse, or social injustice, as well as educating citizens on constitutional rights and child protection laws.',
    ],
    image: '/assets/activities/legal-aid.png',
    highlights: [
      'Legal literacy & constitutional rights campaigns',
      'Counselling for victims of domestic violence and social injustice',
      'Facilitating free legal assistance for marginalized families',
    ],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & Community Welfare',
    shortTitle: 'Medical Camps',
    category: 'Public Health',
    summary:
      'Organizing health awareness programs, medical camps, blood donation drives, hygiene campaigns, and preventive healthcare initiatives.',
    fullDescription: [
      'PCDS has conducted 5 Free Medical Camps, providing health check-ups, medical consultations, basic treatment, and health awareness services to underprivileged communities.',
      'In addition, PCDS has organized 7 Blood Donation Camps in partnership with the Indian Red Cross Society and local medical volunteers to support emergency blood needs in Guntur.',
    ],
    image: '/assets/activities/medical-camps.png',
    highlights: [
      'Free health check-ups, consultations, and basic treatment',
      'Voluntary Blood Donation Camps with Indian Red Cross Society',
      'Preventive healthcare & hygiene awareness campaigns',
    ],
    metrics: [
      { label: 'Free Medical Camps', value: '5' },
      { label: 'Blood Donation Camps', value: '7' },
    ],
  },
  {
    slug: 'environment',
    title: 'Environmental Protection & Sustainable Development',
    shortTitle: 'Environment Care',
    category: 'Green & Sustainability',
    summary:
      'Conducting tree plantation drives, cleanliness campaigns, environmental awareness programs, and promoting sustainable community practices.',
    fullDescription: [
      'PCDS conducts tree plantation drives, park cleaning & gardening drives, Swachh Bharat cleanliness campaigns, and environmental awareness programs across Guntur.',
      'Planted more than 6,515 saplings since 2018 across rural and urban areas of Guntur with the support of Government officials, contributing to environmental sustainability and community participation.',
    ],
    image: '/assets/activities/environment.png',
    highlights: [
      '6,515+ saplings planted since 2018 across rural & urban Guntur',
      'Park cleaning, gardening & Swachh Bharat drives (3x Swachh Bharat Award winner)',
      'Eco-friendly Ganesh idol distribution & climate awareness',
    ],
    metrics: [{ label: 'Saplings Planted Since 2018', value: '6,515+' }],
  },
  {
    slug: 'livelihood',
    title: 'Livelihood Development & Skill Enhancement',
    shortTitle: 'Skill Development',
    category: 'Skills & Livelihood',
    summary:
      'Supporting vocational training, entrepreneurship, and income-generation opportunities to improve self-reliance among economically weaker sections.',
    fullDescription: [
      'PCDS supports vocational training, entrepreneurship, and income-generation opportunities to improve self-reliance among economically weaker sections.',
      'Key programmes include Tailoring Training for Homemakers (2017–2020) and Block-Level Youth & Sports Development initiatives to build practical skills, confidence, and economic independence.',
    ],
    image: '/assets/activities/livelihood.png',
    highlights: [
      'Tailoring Training for Homemakers (2017–2020)',
      'Vocational training & entrepreneurship support',
      'Block-Level Sports Meets & youth engagement',
    ],
  },
  {
    slug: 'disaster-relief',
    title: 'Disaster Relief & Humanitarian Assistance',
    shortTitle: 'Disaster Relief',
    category: 'Emergency Response',
    summary:
      'Extending emergency relief, essential supplies, and rehabilitation support to communities affected by natural or other disasters.',
    fullDescription: [
      'PCDS extends emergency relief, essential supplies, and rehabilitation support to communities affected by natural disasters and public health emergencies.',
      'During the COVID-19 pandemic (2020–2021), PCDS served 12,574 free meals to highway travellers and migrant workers for 43 days, supported 4,708+ dry ration beneficiaries (3,458 in 2020 + 1,250 in 2021), distributed 45,000 face masks and 279 litres of sanitizers, provided oxygen concentrators on free loan, and distributed medicine & discharge kits at GGH.',
    ],
    image: '/assets/activities/disaster-relief.png',
    highlights: [
      '4,708+ Dry Ration Beneficiaries & 12,574 Free Meals during COVID-19',
      '45,000 face masks & 279 litres of sanitizer distributed',
      'Oxygen concentrators on free loan, Red Zone vegetable & medicine supply',
    ],
    metrics: [
      { label: 'Free Meals Served (COVID-19)', value: '12,574' },
      { label: 'Dry Ration Beneficiaries', value: '4,708+' },
      { label: 'Face Masks Distributed', value: '45,000' },
      { label: 'Sanitizer Distributed', value: '279 Litres' },
    ],
  },
  {
    slug: 'self-defence',
    title: 'Self-Defence Training Programs for Girls and Women',
    shortTitle: 'Self-Defence Training',
    category: 'Women Safety',
    summary:
      'Organizing professional self-defence training workshops to equip girls and women with practical self-protection skills, enhance confidence, and promote personal safety.',
    fullDescription: [
      'PCDS organizes professional self-defence training workshops to equip girls and women with practical self-protection skills, enhance their confidence, promote personal safety, and empower them to respond effectively in challenging situations.',
      "Trained 320 girls and women in self-defence and personal safety. The training programs were conducted at B.H.H. Women's Degree College, Guntur, Government Women's Degree College, Guntur, and in rural communities of Pattipadu Mandal.",
    ],
    image: '/assets/activities/self-defence.png',
    highlights: [
      "Conducted at B.H.H. Women's Degree College & Govt. Women's Degree College, Guntur",
      'Rural outreach in Pattipadu Mandal & selected government/orphanage schools',
      'Led by Silambam Association Guntur martial arts instructors',
    ],
    metrics: [{ label: 'Girls & Women Trained in Self-Defence', value: '320' }],
  },
];

export const TARGET_BENEFICIARIES = [
  { id: '01', label: 'Underprivileged and economically weaker families', icon: 'Users' },
  { id: '02', label: 'Women and Girls', icon: 'HeartHandshake' },
  { id: '03', label: 'Children and Adolescents', icon: 'Smile' },
  { id: '04', label: 'Legal Aid', icon: 'Scale' },
  { id: '05', label: 'Senior Citizens', icon: 'Home' },
  { id: '06', label: 'Persons with Disabilities', icon: 'Accessibility' },
  { id: '07', label: 'Cancer patients and individuals requiring emotional and social support', icon: 'Ribbon' },
  { id: '08', label: 'Orphans and vulnerable children', icon: 'ShieldCheck' },
  { id: '09', label: 'Environment', icon: 'Globe' },
  { id: '10', label: 'Youth seeking education, skill development, and employment opportunities', icon: 'GraduationCap' },
  { id: '11', label: 'Rural and underserved communities', icon: 'MapPin' },
  { id: '12', label: 'Victims of domestic violence, abuse, or social injustice', icon: 'ShieldAlert' },
  { id: '13', label: 'People requiring free legal aid and legal awareness', icon: 'Gavel' },
  { id: '14', label: 'Communities affected by natural disasters and emergencies', icon: 'LifeBuoy' },
];

export const IMPACT_METRICS: ImpactMetric[] = [
  { id: '01', number: 46, suffix: '+', label: 'Senior Citizens Supported', detail: 'Since Inception', iconName: 'Users' },
  { id: '02', number: 25, suffix: '', label: 'Senior Citizens Currently Residing', detail: 'In the Old Age Home', iconName: 'Home' },
  { id: '03', number: 12574, suffix: '', label: 'Free Meals Served During COVID-19', detail: 'For 43 days to travellers & migrant workers', iconName: 'Utensils' },
  { id: '04', number: 4708, suffix: '+', label: 'Dry Ration Beneficiaries', detail: '3,458 in 2020 + 1,250 in 2021', iconName: 'PackageCheck' },
  { id: '05', number: 45000, suffix: '', label: 'Face Masks Distributed', detail: 'COVID-19 Preventive Drive', iconName: 'Shield' },
  { id: '06', number: 279, suffix: ' Litres', label: 'Sanitizer Distributed', detail: 'Across communities & institutions', iconName: 'Droplets' },
  { id: '07', number: 3, suffix: '', label: 'Hair Donation Camps', detail: 'Conducted for cancer patients', iconName: 'Sparkles' },
  { id: '08', number: 17, suffix: '', label: 'Voluntary Hair Donors', detail: 'Supporting wig preparation', iconName: 'Heart' },
  { id: '09', number: 7, suffix: '', label: 'Blood Donation Camps', detail: 'With Indian Red Cross Society', iconName: 'Droplet' },
  { id: '10', number: 5, suffix: '', label: 'Free Medical Camps', detail: 'Health check-ups & consultations', iconName: 'Stethoscope' },
  { id: '11', number: 320, suffix: '', label: 'Girls & Women Trained', detail: 'In Self-Defence & personal safety', iconName: 'Award' },
  { id: '12', number: 6515, suffix: '+', label: 'Saplings Planted', detail: 'Since 2018 across Guntur', iconName: 'Trees' },
  { id: '13', number: 3000, suffix: '+', label: 'Students Reached', detail: 'Through Awareness Programmes', iconName: 'GraduationCap' },
];

export const COVID_RESPONSE_BULLETS = [
  'Dry Ration Distribution – 4,708+ beneficiaries (3,458 in 2020 + 1,250 in 2021)',
  'Free Meals for 12,574 highway travellers and migrant workers for 43 days',
  'Distribution of 45,000 face masks and 279 litres of sanitizers',
  'Door-to-door COVID-19 awareness campaigns',
  'Awareness programmes for Grama Sachivalayam and community volunteers',
  'Medicine distribution in Red Zone areas',
  'Transportation support for pregnant women during lockdown',
  'Support to orphanages and old age homes',
  'Distribution of sanitary napkins to migrant women and orphanages',
  'Supply of vegetables to Red Zone families',
  'Assistance to migrant workers through registration, temporary shelter, and travel support',
  'Distribution of health drinks and packed food to migrant workers travelling by bicycles',
  'Transportation of COVID-19 victims with the support of local authorities',
  'Distribution of eco-friendly Ganesh idols during Ganesh Chaturthi',
  'Oxygen concentrators provided on a free loan basis',
  'COVID discharge kits (masks & dry fruits) distributed to patients discharged from GGH',
  'Vaccination support for inmates of orphanages and old age homes',
  'Volunteer support to the Indian Red Cross Society',
];

export const AWARDS: AwardItem[] = [
  {
    id: 'award-1',
    title: 'Appreciation Award (2025)',
    year: '2025',
    presenter: 'Nara Lokesh & Guntur District Collector (MY Bharat)',
    description:
      'Honoured on the occasion of the 79th Independence Day (2025) for outstanding services under Mera Yuva Bharat (MY Bharat). The appreciation award was presented by Nara Lokesh and received through the Guntur District Collector.',
  },
  {
    id: 'award-2',
    title: 'Appreciation Award for COVID-19 Services (2021)',
    year: '15 August 2021',
    presenter: 'Shri A. S. Dinesh Kumar, IAS, District Collector, Guntur',
    description:
      'In recognition of outstanding services rendered during the COVID-19 pandemic, an Appreciation Certificate was received from Shri A. S. Dinesh Kumar, IAS, District Collector, Guntur on the occasion of the 75th Independence Day (15 August 2021).',
  },
  {
    id: 'award-3',
    title: 'Best Youth Club Award',
    year: '2020–2021',
    presenter: 'Nehru Yuva Kendra Sangathan (District Level)',
    description:
      'Awarded by the Nehru Yuva Kendra Sangathan at the District Level for outstanding youth development and community service initiatives in 2020–2021.',
  },
  {
    id: 'award-4',
    title: 'Swachh Bharat Awards',
    year: 'Since 2018 (3 Consecutive Years)',
    presenter: 'Swachh Bharat Mission',
    description:
      'Recipient of the Swachh Bharat Award for three consecutive years (since 2018) in recognition of contributions to cleanliness, sanitation, and community awareness.',
  },
  {
    id: 'award-5',
    title: 'Best Volunteer Award',
    year: 'Honoured Twice',
    presenter: 'Indian Red Cross Society',
    description:
      'Honoured twice by the Indian Red Cross Society for exemplary voluntary service and humanitarian activities.',
  },
  {
    id: 'award-6',
    title: 'Mahila Meekosam Recognition Award',
    year: 'District Recognition',
    presenter: 'Superintendent of Police, Guntur District',
    description:
      "Presented by the Superintendent of Police, Guntur District in recognition of outstanding contributions towards women's welfare, empowerment, and public awareness.",
  },
  {
    id: 'award-7',
    title: 'Government & NGO Recognition',
    year: 'Ongoing',
    presenter: 'Government Departments, NGOs & Educational Institutions',
    description:
      'Received several certificates of appreciation and recognition from various Government Departments, Non-Government Organizations (NGOs), educational institutions, and community organizations for dedicated social service and community development initiatives.',
  },
];

export const FUTURE_PLANS: FuturePlanItem[] = [
  {
    number: '01',
    title: 'Expansion of Senior Citizen Care Services',
    description:
      'By strengthening and upgrading the existing Old Age Home with improved healthcare, rehabilitation, and recreational facilities.',
  },
  {
    number: '02',
    title: 'Establishment of a Free Legal Aid & Counselling Centre',
    description: 'To provide legal assistance, awareness, and support to vulnerable and marginalized communities.',
  },
  {
    number: '03',
    title: 'Development of Skill Training & Livelihood Centres',
    description: 'To enhance employability and promote sustainable income opportunities for youth and women.',
  },
  {
    number: '04',
    title: "Expansion of Women's Empowerment Programmes",
    description: 'Including entrepreneurship development, digital literacy, leadership, and financial literacy training.',
  },
  {
    number: '05',
    title: 'Expansion of Free Medical Camps and Preventive Healthcare Services',
    description: 'In rural and underserved communities.',
  },
  {
    number: '06',
    title: 'Establish a Shelter and Support Centre for Persons with Disabilities',
    description:
      'To provide safe accommodation, healthcare, rehabilitation, skill development, and livelihood opportunities for a dignified and independent life.',
  },
  {
    number: '07',
    title: 'Strengthening Child Welfare and Educational Support Programmes',
    description: 'Through scholarships, mentoring, and life-skills education.',
  },
  {
    number: '08',
    title: 'Environmental Sustainability Initiatives',
    description: 'Including large-scale tree plantation drives, waste management awareness, and climate action programmes.',
  },
  {
    number: '09',
    title: 'Youth Leadership and Employment Initiatives',
    description: 'Through career guidance, vocational training, and community volunteering programmes.',
  },
  {
    number: '10',
    title: 'Partnerships with Government, CSR, and Development Organizations',
    description: 'To expand the reach and sustainability of community development initiatives.',
  },
];

export const LEGAL_DETAILS = [
  { particular: 'Organization Name', detail: 'Prajwala Community Development Society' },
  { particular: 'Registration Number', detail: '240/2019' },
  { particular: 'Registration Date', detail: '03 Aug 2019' },
  { particular: 'Unique ID for NGO', detail: 'AP/2021/0280454' },
  { particular: 'PAN', detail: 'AAJAP2309P' },
  { particular: '12A', detail: 'AAJAP2309P25HY01' },
  { particular: '80G', detail: 'AAJAP2309P25HY02' },
  { particular: 'CSR-1 (CSER-1)', detail: 'CSR00108210' },
  { particular: 'FCRA', detail: 'Not Applicable' },
];

export const GOVERNING_BODY = [
  { position: 'President', responsibility: 'Overall Leadership (Founder & Legal Professional – Advocate)' },
  { position: 'Vice President', responsibility: 'Supports President' },
  { position: 'Secretary', responsibility: 'Administration' },
  { position: 'Joint Secretary', responsibility: 'Programme Coordination' },
  { position: 'Treasurer', responsibility: 'Finance & Accounts' },
  { position: 'Executive Committee Members (2)', responsibility: 'Governance & Monitoring' },
];

export const IMPLEMENTATION_TEAM = [
  { position: 'Programme Coordinator', responsibility: 'Programme Management' },
  { position: 'Old Age Home Coordinator', responsibility: 'Elder Care Services' },
  { position: 'Social Workers', responsibility: 'Community Outreach' },
  { position: 'Legal Advisor', responsibility: 'Legal Aid' },
  { position: 'Medical Volunteers', responsibility: 'Health Services' },
  { position: 'Counsellors', responsibility: 'Counselling' },
  { position: 'Self-Defence Trainers', responsibility: 'Women Safety Training' },
  { position: 'Volunteer Team', responsibility: 'Field Support' },
];

export const ADVISORY_TEAM: AdvisoryMember[] = [
  {
    name: 'Dr. SAHAN KUMAR Garu',
    designation: 'REAKHA CLINIC, Inner Ring Road, Guntur',
    role: 'General Physician',
    responsibilities: 'Provides medical consultations, regular health check-ups, treatment guidance, and preventive healthcare services for beneficiaries.',
  },
  {
    name: 'Dr. Ch. SOWMYA, B.D.S.; F.A.G.E. & Dr. Ch. Naveen, M.D.S.',
    designation: 'Cosmetic Dental Surgeon & Prosthodontics & Implantologist — SOWMYA MULTI SPECIALITY DENTAL CLINIC, Kothapet, Guntur',
    role: 'Dental Surgeons',
    responsibilities: 'Supports oral health awareness, dental screening, and preventive dental care programmes.',
  },
  {
    name: 'RAFA LABS, R. Agraharam & Dr. SAHAN KUMAR Garu',
    designation: 'Diagnostic & Clinical Laboratory Support',
    role: 'Medical Laboratory Professionals',
    responsibilities: 'Assist in diagnostic services, health screening camps, laboratory investigations, and medical reporting.',
  },
  {
    name: 'B. Sharmila & B. Krishnabharath',
    designation: 'Assistant Professor & Psychologist, Guntur | Psychologist & Founder President, Advanced Psychological Services Association (APA India), Hyderabad',
    role: 'Psychology Professor / Mental Health Experts',
    responsibilities: 'Provides psychological counselling, emotional well-being support, mental health awareness, and behavioural guidance.',
  },
  {
    name: 'R. SIVARAMA KRISHNA (VARMA)',
    designation: 'Silambam Association GUNTUR',
    role: 'Self-Defence Trainer / Martial Arts Instructor',
    responsibilities: 'Provides expert guidance and conducts self-defence training sessions for women, adolescent girls, students, and community groups to promote safety, confidence, and empowerment.',
  },
  {
    name: 'Former Government Childline Officials',
    designation: 'Child Protection & Welfare Specialists',
    role: 'Child Protection Advisors',
    responsibilities: 'Provide expert guidance on child protection, child rights, counselling, rescue, rehabilitation, referrals, and coordination with Indian Red Cross Society and government departments.',
  },
];

export const WHY_SUPPORT_US = {
  paragraphs: [
    'Prajwala Community Development Society (PCDS) believes that every individual deserves dignity, care, hope, and equal opportunities, regardless of their age, gender, physical ability, or economic background.',
    'Since its inception, PCDS has been committed to serving society with compassion and integrity. Most of our programmes have been sustained through the personal contributions of our President, Vice President, Executive Committee Members, volunteers, and generous well-wishers. Their dedication has enabled us to continue serving vulnerable communities even with limited resources.',
    'Today, the needs of our communities are growing rapidly. Every day, we meet more senior citizens in need of care, more women seeking safety and empowerment, more children requiring protection and education, more persons with disabilities needing support, and more families struggling to access healthcare and legal assistance.',
    'To expand our impact and serve more people, we invite Government agencies, CSR partners, philanthropic organizations, foundations, and individual donors to join hands with us.',
  ],
  helpList: [
    'Strengthen and expand our Old Age Home services.',
    'Provide shelter and support for persons with disabilities.',
    'Organize free medical camps and healthcare initiatives.',
    'Empower women and girls through self-defence and skill development programmes.',
    'Conduct child protection, legal awareness, and educational programmes.',
    'Promote environmental sustainability through tree plantation and community awareness.',
    'Create sustainable livelihood opportunities for disadvantaged communities.',
  ],
  closing:
    'Every contribution—whether financial, material, technical, or voluntary—directly supports meaningful change in the lives of those who need it most. Together, we can build a compassionate, inclusive, and empowered society where no one is left behind.',
  ctaQuote: 'Your Support Can Transform Lives and Build a Better Tomorrow.',
};

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export const GALLERY_CATEGORIES = [
  'All',
  'Old Age Home',
  'Hair Donation',
  'Medical Camps',
  'Blood Donation',
  'Women Empowerment',
  'Skill Development',
  'Sports & Youth',
  'Environmental Activities',
  'Child Protection',
  'COVID-19 Relief',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Old Age Home Meal & Care',
    category: 'Old Age Home',
    image: '/assets/activities/old-age-home.png',
    caption: 'Providing nutritious food, safe shelter, and compassionate daily care for 25 senior citizens.',
  },
  {
    id: 'g2',
    title: 'Voluntary Hair Donation Camp',
    category: 'Hair Donation',
    image: '/assets/activities/hair-donation.jpg',
    caption: '17 voluntary hair donors across 3 camps helping prepare wigs for cancer patients.',
  },
  {
    id: 'g3',
    title: 'Free Community Medical Camp',
    category: 'Medical Camps',
    image: '/assets/activities/medical-camps.png',
    caption: '5 Free Medical Camps delivering check-ups, consultations, and preventive care.',
  },
  {
    id: 'g4',
    title: 'Voluntary Blood Donation Drive',
    category: 'Blood Donation',
    image: '/assets/gallery/blood-donation.svg',
    caption: '7 Blood Donation Camps organized with Indian Red Cross Society, Guntur.',
  },
  {
    id: 'g5',
    title: 'Women Empowerment Workshop',
    category: 'Women Empowerment',
    image: '/assets/activities/women-empowerment.png',
    caption: 'Leadership, rights awareness, and economic independence sessions for women.',
  },
  {
    id: 'g6',
    title: 'Tailoring & Skill Development',
    category: 'Skill Development',
    image: '/assets/activities/livelihood.png',
    caption: 'Vocational tailoring training empowering homemakers toward financial self-reliance.',
  },
  {
    id: 'g7',
    title: 'Block-Level Youth Sports Meet',
    category: 'Sports & Youth',
    image: '/assets/gallery/youth-sports.svg',
    caption: 'Encouraging youth participation, fitness, and sportsmanship in Guntur.',
  },
  {
    id: 'g8',
    title: 'Tree Plantation & Green Drive',
    category: 'Environmental Activities',
    image: '/assets/activities/environment.png',
    caption: '6,515+ saplings planted since 2018 across rural and urban Guntur.',
  },
  {
    id: 'g9',
    title: 'Child Protection & POCSO Awareness',
    category: 'Child Protection',
    image: '/assets/activities/child-welfare.png',
    caption: '3,000+ students reached on 112, Childline 1098, and child safety laws.',
  },
  {
    id: 'g10',
    title: 'COVID-19 Dry Ration & Meal Relief',
    category: 'COVID-19 Relief',
    image: '/assets/activities/disaster-relief.png',
    caption: '12,574 free meals and 4,708+ dry ration beneficiaries supported during lockdown.',
  },
  {
    id: 'g11',
    title: 'Self-Defence Training for Girls',
    category: 'Women Empowerment',
    image: '/assets/activities/self-defence.png',
    caption: '320 girls and women trained in practical self-defence across Guntur colleges and villages.',
  },
  {
    id: 'g12',
    title: 'Support for Persons with Disabilities',
    category: 'Old Age Home',
    image: '/assets/activities/disability-support.png',
    caption: 'Promoting inclusion, assistive support, and dignified living.',
  },
];
