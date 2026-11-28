export interface ActivityItem {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  fullDescription: string[];
  image: string;
  galleryImages?: string[];
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
  image?: string;
  clinic?: string;
}

export interface GoverningBodyMember {
  id?: string;
  position: string;
  responsibility: string;
}

export interface FounderInfo {
  name: string;
  qualification: string;
  designation: string;
  image: string;
  quote: string;
  message: string[];
  achievements: { label: string; value: string }[];
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
  address:
    'OLD-AGE HOME, PRAJWALA COMMUNITY DEVELOPMENT SOCIETY, Sri Vasavi Heights, 70-13-1708, 2nd Ln, beside Guntur, I.P.D Colony, Area, Sangadigunta, Guntur, Andhra Pradesh 522003, India',
  phone: '+91 95020 46096',
  landline: '0863 2947780',
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

export const FOUNDER_INFO: FounderInfo = {
  name: 'Perumalla Gowri Sireesha',
  qualification: 'B.Com., LL.B.',
  designation: 'Founder & President',
  image: '/images/real/founder/gowri-sireesha.jpg',
  quote: 'Service to humanity is not charity; it is our responsibility.',
  message: [
    'It is with immense joy and gratitude that I welcome you to Prajwala Community Development Society. Our journey began with a simple belief — that every human being deserves to live with dignity, care, and hope.',
    'Over the years, we have grown into a family of dedicated volunteers, supporters, and changemakers committed to uplifting the vulnerable, protecting the neglected, and creating sustainable development across Guntur and beyond.',
    'Whether providing safe shelter and loving care to abandoned senior citizens, organizing free medical and hair donation camps, championing legal literacy and child protection, or empowering women and youth with practical skills — every initiative is driven by heartfelt dedication.',
    'Together, let us build a society where compassion leads, justice prevails, and no one is left behind.',
  ],
  achievements: [
    { label: 'Senior Citizens Supported', value: '46+' },
    { label: 'Free Meals During COVID-19', value: '12,574' },
    { label: 'Saplings Planted', value: '6,515+' },
    { label: 'Students Reached', value: '3,000+' },
  ],
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
    image: '/images/real/services/hair-donation-1.jpg',
    galleryImages: [
      '/images/real/services/hair-donation-1.jpg',
      '/images/real/services/hair-donation-2.jpg',
      '/images/real/services/hair-donation-3.jpg',
    ],
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
    image: '/images/real/services/old-age-1.jpg',
    galleryImages: [
      '/images/real/services/old-age-1.jpg',
      '/images/real/services/old-age-2.jpg',
      '/images/real/services/old-age-3.jpg',
      '/images/real/services/old-age-4.jpg',
    ],
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
    image: '/images/real/services/disabled-1.jpg',
    galleryImages: ['/images/real/services/disabled-1.jpg'],
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
    image: '/images/real/services/women-empowerment-1.jpg',
    galleryImages: ['/images/real/services/women-empowerment-1.jpg'],
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
    image: '/images/real/services/child-welfare-1.jpg',
    galleryImages: [
      '/images/real/services/child-welfare-1.jpg',
      '/images/real/services/child-welfare-2.jpg',
    ],
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
    image: '/images/real/services/legal-aid-1.jpg',
    galleryImages: ['/images/real/services/legal-aid-1.jpg'],
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
    image: '/images/real/services/healthcare-1.jpg',
    galleryImages: [
      '/images/real/services/healthcare-1.jpg',
      '/images/real/services/medical-camp-1.jpg',
      '/images/real/services/medical-camp-2.jpg',
      '/images/real/services/medical-camp-3.jpg',
      '/images/real/services/blood-donation-1.jpg',
    ],
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
    image: '/images/real/services/environment-1.jpg',
    galleryImages: [
      '/images/real/services/environment-1.jpg',
      '/images/real/services/environment-2.jpg',
      '/images/real/services/environment-3.jpg',
    ],
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
    image: '/images/real/services/livelihood-1.jpg',
    galleryImages: [
      '/images/real/services/livelihood-1.jpg',
      '/images/real/services/skill-training-1.jpg',
      '/images/real/services/skill-training-2.jpg',
      '/images/real/services/youth-sports-1.jpg',
      '/images/real/services/youth-sports-2.jpg',
      '/images/real/services/youth-sports-3.jpg',
    ],
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
    image: '/images/real/services/disaster-relief-1.jpg',
    galleryImages: [
      '/images/real/services/disaster-relief-1.jpg',
      '/images/real/services/dry-ration-1.jpg',
      '/images/real/services/ration-1.jpg',
      '/images/real/services/ration-2.jpg',
      '/images/real/services/covid-relief-1.jpg',
    ],
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
    title: 'Sparsha Counselling & Self-Defence Training Programs',
    shortTitle: 'Sparsha Counselling',
    category: 'Women Safety & Counselling',
    summary:
      'Organizing professional Sparsha Counselling and self-defence training workshops to equip girls and women with practical self-protection skills, psychological confidence, and personal safety awareness.',
    fullDescription: [
      'PCDS organizes professional Sparsha Counselling and self-defence training workshops to equip girls and women with practical self-protection skills, psychological confidence, mental resilience, promote personal safety, and empower them to respond effectively in challenging situations.',
      "Trained 320 girls and women in Sparsha counselling, self-defence, and personal safety. The training programs were conducted at B.H.H. Women's Degree College, Guntur, Government Women's Degree College, Guntur, and in rural communities of Pattipadu Mandal.",
    ],
    image: '/images/real/services/self-defense-1.jpg',
    galleryImages: [
      '/images/real/services/self-defense-1.jpg',
      '/images/real/services/self-defense-2.jpg',
    ],
    highlights: [
      'Sparsha psychological counselling, emotional resilience, and personal safety awareness',
      "Conducted at B.H.H. Women's Degree College & Govt. Women's Degree College, Guntur",
      'Rural outreach in Pattipadu Mandal & selected government/orphanage schools',
      'Led by expert psychologists and Silambam Association Guntur martial arts instructors',
    ],
    metrics: [{ label: 'Girls & Women Trained in Sparsha & Safety', value: '320' }],
  },
  {
    slug: 'blood-donation',
    title: 'Voluntary Blood Donation Drives & Emergency Health Support',
    shortTitle: 'Blood Donation',
    category: 'Emergency Healthcare & Red Cross',
    summary:
      'Organizing voluntary blood donation camps in partnership with the Indian Red Cross Society to ensure life-saving blood supplies for critical hospital patients and emergency cases.',
    fullDescription: [
      'Prajwala Community Development Society (PCDS) regularly organizes Voluntary Blood Donation Camps in active collaboration with the Indian Red Cross Society and local health institutions.',
      'Successfully conducted 7 Blood Donation Camps across Guntur District, motivating youth, volunteers, and community members to donate blood voluntarily and save precious lives during medical emergencies, surgeries, and critical patient care.',
    ],
    image: '/images/real/services/blood-donation-1.jpg',
    galleryImages: [
      '/images/real/services/blood-donation-1.jpg',
    ],
    highlights: [
      'Organized in active partnership with Indian Red Cross Society, Guntur',
      'Life-saving support for emergency patients, surgeries, and thalassemia cases',
      'Community awareness on voluntary donation, health benefits, and safety',
    ],
    metrics: [{ label: 'Blood Donation Camps Conducted', value: '7' }],
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
  { id: '11', number: 320, suffix: '', label: 'Girls & Women Trained', detail: 'In Sparsha Counselling, Self-Defence & personal safety', iconName: 'Award' },
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
  { position: 'Counsellors / Psychology Counsellor', responsibility: 'Counselling / Psychology Counselling' },
  { position: 'Self-Defence Trainers', responsibility: 'Women Safety Training' },
  { position: 'Volunteer Team', responsibility: 'Field Support' },
];

export const ADVISORY_TEAM: AdvisoryMember[] = [
  {
    name: 'Dr. SAHAN KUMAR Garu',
    designation: 'REAKHA CLINIC, Inner Ring Road, Guntur',
    role: 'General Physician',
    responsibilities:
      'Provides medical consultations, regular health check-ups, treatment guidance, and preventive healthcare services for beneficiaries.',
    image: '/images/real/advisory/dr-sahan-kumar.jpg',
    clinic: 'REAKHA CLINIC, Inner Ring Road, Guntur',
  },
  {
    name: 'Dr. Ch. SOWMYA, B.D.S.; F.A.G.E.',
    designation:
      'Cosmetic Dental Surgeon — SOWMYA MULTI SPECIALITY DENTAL CLINIC, (Kothapet, Guntur)',
    role: 'Dental Surgeon',
    responsibilities:
      'Supports oral health awareness, dental screening, and preventive dental care programmes.',
    image: '/images/real/advisory/dr-sowmya.jpg',
    clinic: 'SOWMYA MULTI SPECIALITY DENTAL CLINIC, (Kothapet, Guntur)',
  },
  {
    name: '2. Dr. Ch. Naveen, M.D.S.',
    designation:
      'Prosthodontics & Implantologist — SOWMYA MULTI SPECIALITY DENTAL CLINIC, (Kothapet, Guntur)',
    role: 'Dental Surgeon',
    responsibilities:
      'Supports dental consultations, oral healthcare awareness, restorative treatments, and preventive dental care.',
    image: '/images/real/advisory/dr-naveen.jpg',
    clinic: 'SOWMYA MULTI SPECIALITY DENTAL CLINIC, (Kothapet, Guntur)',
  },
  {
    name: 'RAFA LABS, R.Agraharam',
    designation: 'Dr. SAHAN KUMAR Garu',
    role: 'Medical Laboratory Professionals',
    responsibilities:
      'Assist in diagnostic services, health screening camps, laboratory investigations, and medical reporting.',
    clinic: 'RAFA LABS, R.Agraharam, Guntur',
  },
  {
    name: 'B. Sharmila',
    designation: 'Assistant Professor & Psychologist, Guntur',
    role: 'Psychology Professor / Mental Health Expert',
    responsibilities:
      'Provides psychological counselling, emotional well-being support, mental health awareness, and behavioural guidance.',
    image: '/images/real/advisory/b-sharmila.jpg',
    clinic: 'Guntur, Andhra Pradesh',
  },
  {
    name: 'B. Krishnabharath',
    designation:
      'Psychologist Founder President Advanced Psychological services Association (APA India) Hyderabad',
    role: 'Psychology Professor / Mental Health Expert',
    responsibilities:
      'Provides psychological counselling, emotional well-being support, mental health awareness, and behavioural guidance.',
    image: '/images/real/advisory/krishnabharath.jpg',
    clinic: 'APA India, Hyderabad',
  },
  {
    name: 'R.SIVARAMA KRISHNA (VARMA)',
    designation: 'Silambam Association GUNTUR',
    role: 'Self-Defence Trainer / Martial Arts Instructor',
    responsibilities:
      'Provides expert guidance and conducts self-defence training sessions for women, adolescent girls, students, and community groups to promote safety, confidence, and empowerment.',
    image: '/images/real/advisory/dummy-trainer.png',
    clinic: 'Silambam Association GUNTUR',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'The legal awareness camp conducted by PCDS opened our eyes to our rights. We are much more confident now in protecting ourselves and our families.',
    name: 'Sunitha V.',
    role: 'Beneficiary, Women Empowerment & Legal Aid',
  },
  {
    quote:
      'Volunteering at the old age home has been the most fulfilling experience of my life. PCDS is a true family where every senior citizen lives with unconditional dignity and love.',
    name: 'Rahul S.',
    role: 'Dedicated Volunteer',
  },
  {
    quote:
      'The timely medical camp saved my father’s life through early diagnosis and free medication. We couldn’t afford private treatment otherwise. Bless this society.',
    name: 'Ramesh K.',
    role: 'Community Member & Healthcare Beneficiary',
  },
  {
    quote:
      'Donating my hair for cancer patients through PCDS gave me immense joy. Their wig preparation and handover process is so transparent, caring, and deeply moving.',
    name: 'Anjali M.',
    role: 'Voluntary Hair Donor',
  },
];

export const TIMELINE_MILESTONES = [
  {
    year: '2014',
    title: 'Inception of Community Service',
    description:
      'Initial grassroots field initiatives, local drives, and social welfare support launched in Guntur by our founder Advocate Perumalla Gowri Sireesha.',
  },
  {
    year: '2017–2018',
    title: 'Expansion of Local Programs & Green Drives',
    description:
      'Conducted large-scale tree plantation drives with government officials, free medical camps, and tailoring training for homemakers.',
  },
  {
    year: '2019',
    title: 'Formal Registration of PCDS',
    description:
      'Officially registered under the Andhra Pradesh Societies Registration Act, 2001 (Reg. No. 240/2019) on 03 August 2019.',
  },
  {
    year: '2020–2021',
    title: 'COVID-19 Emergency Relief Mission',
    description:
      'Served 12,574 free meals to highway travellers and migrant workers for 43 days, distributed 4,708+ dry ration kits, 45,000 masks, and provided free oxygen concentrators.',
  },
  {
    year: '2022–2023',
    title: 'Special Care Initiatives & Hair Donation',
    description:
      'Launched 3 voluntary Hair Donation Camps for cancer wigs, expanded PCDS Old Age Home to 25 residents, and trained 320 girls in self-defence.',
  },
  {
    year: '2024–Present',
    title: 'Sustainable Growth & Permanent Care Center',
    description:
      'Over 6,515+ trees planted, 46+ elders supported since inception, 3,000+ students educated on child rights, and advancing towards our permanent Community Care Center.',
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
  'Healthcare & Camps',
  'Blood Donation',
  'Women & Self-Defence',
  'Child & Education',
  'Environment',
  'Disaster Relief',
  'Livelihood & Sports',
  'Offices & Team',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'PCDS Old Age Home Inmates & Meal Care',
    category: 'Old Age Home',
    image: '/images/real/services/old-age-1.jpg',
    caption: 'Providing compassionate shelter, nutritious daily meals, and medical care for 25 resident senior citizens.',
  },
  {
    id: 'g2',
    title: 'Senior Citizen Daily Care & Healthcare',
    category: 'Old Age Home',
    image: '/images/real/services/old-age-2.jpg',
    caption: 'Regular geriatric health check-ups and loving emotional companionship for elderly residents.',
  },
  {
    id: 'g3',
    title: 'Elderly Residents Recreation & Joy',
    category: 'Old Age Home',
    image: '/images/real/services/old-age-3.jpg',
    caption: 'Fostering a loving family atmosphere where every elderly person feels respected and cherished.',
  },
  {
    id: 'g4',
    title: 'Dignified Living at PCDS Home',
    category: 'Old Age Home',
    image: '/images/real/services/old-age-4.jpg',
    caption: 'Over 46+ senior citizens supported since inception with safe residential shelter in Guntur.',
  },
  {
    id: 'g5',
    title: 'Voluntary Hair Donation Camp for Cancer Wigs',
    category: 'Hair Donation',
    image: '/images/real/services/hair-donation-1.jpg',
    caption: '17 voluntary donors contributed hair to prepare custom wigs for underprivileged cancer patients.',
  },
  {
    id: 'g6',
    title: 'Hair Donation Drive for Cancer Patients',
    category: 'Hair Donation',
    image: '/images/real/services/hair-donation-2.jpg',
    caption: 'Restoring dignity, beauty, and emotional strength to women undergoing chemotherapy.',
  },
  {
    id: 'g7',
    title: 'Community Hair Donation Awareness',
    category: 'Hair Donation',
    image: '/images/real/services/hair-donation-3.jpg',
    caption: 'Engaging youth and college students to support cancer survivors across Andhra Pradesh.',
  },
  {
    id: 'g8',
    title: 'Free Community Health & Medical Camp',
    category: 'Healthcare & Camps',
    image: '/images/real/services/healthcare-1.jpg',
    caption: 'Delivering free clinical check-ups, diagnostics, and essential medicines to underserved families.',
  },
  {
    id: 'g9',
    title: 'Specialized Medical Consultation Drive',
    category: 'Healthcare & Camps',
    image: '/images/real/services/medical-camp-1.jpg',
    caption: 'Expert medical consultations with volunteer doctors across 5 Free Medical Camps in Guntur.',
  },
  {
    id: 'g10',
    title: 'Rural Community Health Screening',
    category: 'Healthcare & Camps',
    image: '/images/real/services/medical-camp-2.jpg',
    caption: 'Providing preventive health screenings and vitals monitoring for rural villagers.',
  },
  {
    id: 'g11',
    title: 'Geriatric & Pediatric Medical Care',
    category: 'Healthcare & Camps',
    image: '/images/real/services/medical-camp-3.jpg',
    caption: 'On-site medical diagnostics and prescription distribution for elderly and children.',
  },
  {
    id: 'g12',
    title: 'Voluntary Blood Donation Drive',
    category: 'Blood Donation',
    image: '/images/real/services/blood-donation-1.jpg',
    caption: 'Organized 7 Blood Donation Camps in partnership with the Indian Red Cross Society, Guntur.',
  },
  {
    id: 'g13',
    title: 'Self-Defence Workshop for College Girls',
    category: 'Women & Self-Defence',
    image: '/images/real/services/self-defense-1.jpg',
    caption: 'Trained 320 girls and women in practical martial arts self-protection at B.H.H. Degree College.',
  },
  {
    id: 'g14',
    title: 'Martial Arts & Personal Safety Training',
    category: 'Women & Self-Defence',
    image: '/images/real/services/self-defense-2.jpg',
    caption: 'Empowering women with confidence, physical techniques, and emergency response training.',
  },
  {
    id: 'g15',
    title: 'Women Empowerment & Rights Literacy',
    category: 'Women & Self-Defence',
    image: '/images/real/services/women-empowerment-1.jpg',
    caption: 'Workshops promoting gender equality, rights awareness, and women leadership.',
  },
  {
    id: 'g16',
    title: 'Child Rights & 112/1098 Safety Awareness',
    category: 'Child & Education',
    image: '/images/real/services/child-welfare-1.jpg',
    caption: 'Reached 3,000+ students with POCSO Act, Childline 1098, and emergency response education.',
  },
  {
    id: 'g17',
    title: 'Educational Support & Child Welfare',
    category: 'Child & Education',
    image: '/images/real/services/child-welfare-2.jpg',
    caption: 'Supporting school education, learning kits, and nutrition for underprivileged children.',
  },
  {
    id: 'g18',
    title: 'Tree Plantation & Environmental Drive',
    category: 'Environment',
    image: '/images/real/services/environment-1.jpg',
    caption: '6,515+ saplings planted across rural and urban Guntur with community participation.',
  },
  {
    id: 'g19',
    title: 'Community Green Belt Drive',
    category: 'Environment',
    image: '/images/real/services/environment-2.jpg',
    caption: 'Promoting clean and green environments alongside 3x Swachh Bharat Recognition awards.',
  },
  {
    id: 'g20',
    title: 'Public Park Cleanliness & Gardening',
    category: 'Environment',
    image: '/images/real/services/environment-3.jpg',
    caption: 'Volunteers and students uniting for environmental preservation and sustainability.',
  },
  {
    id: 'g21',
    title: 'COVID-19 Humanitarian Food Relief',
    category: 'Disaster Relief',
    image: '/images/real/services/disaster-relief-1.jpg',
    caption: '12,574 free hot meals served for 43 days to stranded migrant workers and highway travellers.',
  },
  {
    id: 'g22',
    title: 'Dry Ration Kit Distribution',
    category: 'Disaster Relief',
    image: '/images/real/services/dry-ration-1.jpg',
    caption: '4,708+ families provided with comprehensive dry ration kits during pandemic lockdowns.',
  },
  {
    id: 'g23',
    title: 'Emergency Relief Supply to Red Zones',
    category: 'Disaster Relief',
    image: '/images/real/services/ration-1.jpg',
    caption: 'Direct delivery of vegetables, medicines, and groceries to barricaded containment zones.',
  },
  {
    id: 'g24',
    title: 'Emergency Medical & Mask Distribution',
    category: 'Disaster Relief',
    image: '/images/real/services/covid-relief-1.jpg',
    caption: 'Distributed 45,000 face masks and 279 litres of sanitizer across hospitals and communities.',
  },
  {
    id: 'g25',
    title: 'Vocational Tailoring Training for Women',
    category: 'Livelihood & Sports',
    image: '/images/real/services/livelihood-1.jpg',
    caption: 'Tailoring training programs empowering homemakers toward financial self-reliance.',
  },
  {
    id: 'g26',
    title: 'Youth Sports & Athletic Meets',
    category: 'Livelihood & Sports',
    image: '/images/real/services/youth-sports-1.jpg',
    caption: 'Organizing block-level youth sports tournaments to promote fitness and positive leadership.',
  },
  {
    id: 'g27',
    title: 'PCDS Society Registered Headquarters',
    category: 'Offices & Team',
    image: '/images/real/office/ngoofc.jpg',
    caption: 'Registered headquarters and central coordination center in Sangadi Gunta Area, Guntur.',
  },
  {
    id: 'g28',
    title: 'PCDS Field Office & Community Hall',
    category: 'Offices & Team',
    image: '/images/real/office/ngoofc1.jpg',
    caption: 'Field operations office coordinating healthcare, old age care, and legal aid campaigns.',
  },
];
