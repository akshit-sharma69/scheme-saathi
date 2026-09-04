// 20 Official Government of India Schemes from Verified National Portals
export const schemesData = [
  {
    id: "pmegp",
    name: "Prime Minister's Employment Generation Programme (PMEGP)",
    shortName: "PMEGP Subsidy",
    ministry: "Ministry of Micro, Small and Medium Enterprises (MSME)",
    nodalAgency: "Khadi and Village Industries Commission (KVIC)",
    targetCategories: ["SC", "ST", "OBC", "General"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Micro-Entrepreneur / Self-Employed", "Unemployed / Seeking", "Artisan / Craftsperson", "Food Processing"],
    minAge: 18,
    maxAge: 65,
    maxIncome: Infinity,
    educationRequired: "8th Pass for projects > ₹10 Lakh (Mfg) / > ₹5 Lakh (Services)",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Capital Subsidy & Loan",
    shortDesc: "Credit-linked subsidy scheme providing 15% to 35% margin money subsidy for setting up new micro-enterprises in manufacturing or service sectors.",
    keyBenefits: [
      "Up to 35% Government Capital Subsidy",
      "Project cost up to ₹50 Lakh (Manufacturing) & ₹20 Lakh (Service)",
      "Bank loan for 90%–95% of project cost",
      "Own contribution as low as 5% for SC/ST/OBC/Women"
    ],
    fundingRange: "₹10 Lakh – ₹50 Lakh Project Cost",
    benefitAmount: "Margin-money subsidy 15%–35% (up to ₹17.5 Lakh non-refundable grant)",
    subsidyPct: 35,
    loanLimit: "₹50 Lakh",
    interestRate: "Standard bank repo-linked (approx. 8.5% - 10.5%)",
    processingTime: "30 – 45 Days",
    officialLink: "https://www.kviconline.gov.in/pmegpeportal/",
    region: "Pan India",
    tags: ["High Subsidy", "MSME", "New Business", "Manufacturing", "Services"],
    eligibilityCriteria: [
      "Any Indian citizen aged 18 years and above.",
      "Must have passed at least 8th standard for manufacturing projects above ₹10 Lakh and service projects above ₹5 Lakh.",
      "Assistance is strictly for new micro-enterprise units (greenfield).",
      "Special category beneficiaries (SC, ST, OBC, Women, Minorities, Ex-servicemen, PwD, North East, Hilly & Border areas) get 25% subsidy in Urban and 35% in Rural areas.",
      "General category beneficiaries get 15% in Urban and 25% in Rural areas."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "Caste Certificate (for SC/ST/OBC)", weight: 15, required: true },
      { name: "Residence / Domicile Certificate", weight: 12, required: true },
      { name: "Bank Passbook / Cancelled Cheque", weight: 10, required: true },
      { name: "Detailed Project Report (DPR)", weight: 10, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "PAN Card", weight: 8, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "Education / 8th Pass Certificate", weight: 10, required: false }
    ],
    applicationSteps: [
      "Visit KVIC PMEGP official portal and fill the online agency application selecting DIC, KVIC, or KVIB.",
      "Upload Detailed Project Report (DPR), Aadhaar, caste certificate, and educational qualification.",
      "District Level Task Force Committee (DLTFC) scrutinizes and forwards application to selected financing bank.",
      "Bank sanctions the term loan and working capital; KVIC credits margin money subsidy directly into bank subsidy reserve account."
    ]
  },
  {
    id: "pmmy",
    name: "Pradhan Mantri MUDRA Yojana (PMMY)",
    shortName: "PM MUDRA Yojana",
    ministry: "Department of Financial Services, Ministry of Finance",
    nodalAgency: "MUDRA / Commercial & RRB Banks",
    targetCategories: ["General", "OBC", "SC", "ST"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Micro-Entrepreneur / Self-Employed", "Artisan / Craftsperson", "Food Processing", "Farmer / Allied", "Unemployed / Seeking"],
    minAge: 18,
    maxAge: 65,
    maxIncome: Infinity,
    educationRequired: "No minimum educational requirement",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Collateral-Free Institutional Loan",
    shortDesc: "Provides collateral-free institutional credit up to ₹20 Lakh to non-corporate, non-farm micro and small enterprises across Shishu, Kishor, and Tarun tiers.",
    keyBenefits: [
      "100% Collateral-Free Bank Loan",
      "Zero processing fees for Shishu & Kishor loans",
      "Three flexible tiers: Shishu (₹50k), Kishor (₹5L), Tarun/Tarun Plus (₹20L)",
      "MUDRA RuPay Debit Card for working capital flexibility"
    ],
    fundingRange: "₹50,000 – ₹20 Lakh",
    benefitAmount: "Institutional term loan & cash credit limit without collateral",
    subsidyPct: 0,
    loanLimit: "₹20 Lakh",
    interestRate: "Concessional bank rate (approx. 7.5% - 9.5%)",
    processingTime: "7 – 14 Days",
    officialLink: "https://www.financialservices.gov.in/pradhan-mantri-mudra-yojana-pmmy",
    region: "Pan India",
    tags: ["Collateral-Free", "Instant Credit", "All Categories", "Working Capital"],
    eligibilityCriteria: [
      "Indian citizen with non-farm income-generating activity plan.",
      "Micro-enterprises in manufacturing, processing, trading, allied agriculture or services.",
      "Applicant should not be a defaulter to any nationalized or private bank.",
      "Shishu: Loans up to ₹50,000 for nascent startups.",
      "Kishor: Loans above ₹50,000 up to ₹5 Lakh for mid-stage micro-units.",
      "Tarun & Tarun Plus: Loans above ₹5 Lakh up to ₹20 Lakh for expansion."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card / Voter ID", weight: 17, required: true },
      { name: "Bank Passbook (Last 6 months)", weight: 10, required: true },
      { name: "PAN Card", weight: 8, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "Business Address Proof", weight: 12, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "Quotations of Machinery / Stock", weight: 15, required: true },
      { name: "Caste Certificate (if claiming sub-targets)", weight: 10, required: false },
      { name: "Income / Balance Sheet Proof", weight: 10, required: false }
    ],
    applicationSteps: [
      "Prepare business proposal and determine financing category (Shishu, Kishor, or Tarun).",
      "Apply online through Udyamimitra portal (udyamimitra.in) or visit nearest bank / NBFC branch.",
      "Submit KYC, asset quotations, and business proof to the loan manager.",
      "Receive sanction letter and Mudra RuPay card for immediate credit withdrawal."
    ]
  },
  {
    id: "standup-india",
    name: "Stand-Up India Scheme for Women and SC/ST",
    shortName: "Stand-Up India",
    ministry: "Department of Financial Services, Ministry of Finance",
    nodalAgency: "SIDBI / Scheduled Commercial Banks",
    targetCategories: ["SC", "ST", "General", "OBC"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Micro-Entrepreneur / Self-Employed", "Food Processing", "Artisan / Craftsperson", "Farmer / Allied"],
    minAge: 18,
    maxAge: 70,
    maxIncome: Infinity,
    educationRequired: "Literate (ability to operate greenfield venture)",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "High-Value Enterprise Credit",
    shortDesc: "Bank loans between ₹10 Lakh and ₹1 Crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one woman borrower per bank branch.",
    keyBenefits: [
      "Substantial financing: ₹10 Lakh to ₹1 Crore",
      "Composite loan covering 85% of total project cost",
      "Repayment tenure up to 7 years with 18-month moratorium",
      "Handholding support via SIDBI Stand-Up Mitra network"
    ],
    fundingRange: "₹10 Lakh – ₹1 Crore",
    benefitAmount: "Composite term loan and working capital finance",
    subsidyPct: 15,
    loanLimit: "₹1 Crore",
    interestRate: "Lowest applicable rate of bank for that category (MCLR + 3% + tenor premium)",
    processingTime: "3 – 6 Weeks",
    officialLink: "https://www.standupmitra.in/",
    region: "Pan India",
    tags: ["Women Focus", "SC/ST Special", "High Capital", "Greenfield"],
    eligibilityCriteria: [
      "Applicant must be an SC/ST individual OR a Woman entrepreneur of any caste.",
      "Age must be 18 years and above.",
      "Enterprise must be greenfield (first-time business venture in manufacturing, services, agri-allied, or trading).",
      "In case of non-individual enterprise, 51% of shareholding and controlling stake must be held by SC/ST or woman entrepreneur.",
      "Applicant should not be a defaulter with any financial institution."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "Caste Certificate (for SC/ST applicants)", weight: 15, required: true },
      { name: "Residence Certificate", weight: 12, required: true },
      { name: "Bank Passbook / Statements", weight: 10, required: true },
      { name: "Detailed Project Report (DPR)", weight: 10, required: true },
      { name: "PAN Card", weight: 8, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "Mobile Verification", weight: 10, required: true },
      { name: "Pollution Clearance / Trade License", weight: 10, required: false }
    ],
    applicationSteps: [
      "Register on standupmitra.in portal and choose your business category.",
      "Get connected with a Lead District Manager (LDM) or handholding agency for DPR prep.",
      "Submit application to chosen Scheduled Commercial Bank branch.",
      "Bank conducts appraisal, sanctions composite loan, and releases tranches."
    ]
  },
  {
    id: "pm-vishwakarma",
    name: "PM Vishwakarma Scheme",
    shortName: "PM Vishwakarma",
    ministry: "Ministry of MSME and Ministry of Skill Development",
    nodalAgency: "National Skill Development Corporation (NSDC) & MoMSME",
    targetCategories: ["SC", "ST", "OBC", "General"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Artisan / Craftsperson", "Micro-Entrepreneur / Self-Employed"],
    minAge: 18,
    maxAge: 75,
    maxIncome: Infinity,
    educationRequired: "No formal education required (traditional trade skill)",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Artisan Grant, Toolkit & Soft Loan",
    shortDesc: "End-to-end holistic support for traditional artisans & craftspeople in 18 notified trades with ₹15,000 free toolkit grant, ₹500/day stipend, and 5% interest loans.",
    keyBenefits: [
      "PM Vishwakarma Certificate & National ID Card",
      "₹15,000 Free Digital Modern Toolkit Incentive Grant",
      "5-7 days basic skill training with ₹500/day cash stipend",
      "Collateral-free credit: Tranche 1 (₹1 Lakh) + Tranche 2 (₹2 Lakh) @ flat 5% interest",
      "Digital transaction incentive: ₹1 per transaction up to ₹100/month"
    ],
    fundingRange: "Up to ₹3 Lakh Loan + ₹15,000 Toolkit Grant",
    benefitAmount: "₹15,000 Free Toolkit + 5% Collateral-free loan up to ₹3 Lakh",
    subsidyPct: 20,
    loanLimit: "₹3 Lakh",
    interestRate: "Concessional 5% fixed interest (8% interest subvention paid by MoMSME)",
    processingTime: "10 – 21 Days",
    officialLink: "https://pmvishwakarma.gov.in/",
    region: "Pan India",
    tags: ["Artisans", "Free Toolkit", "5% Interest", "Traditional Craft", "Stipend"],
    eligibilityCriteria: [
      "Artisan or craftsperson working with hands and tools in one of 18 notified traditional family trades (Carpenter, Boat Maker, Blacksmith, Potter, Sculptor, Cobbler, Mason, Weaver, Basket Maker, Doll/Toy Maker, Barber, Garland Maker, Washerman, Tailor, Fishing Net Maker).",
      "Minimum age 18 years on date of registration.",
      "Should not have availed loans under PMEGP, Mudra, or PM SVANidhi in the last 5 years.",
      "Registration is limited to one family member (husband, wife, and unmarried children)."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "Bank Passbook", weight: 10, required: true },
      { name: "Ration Card / Family Proof", weight: 12, required: true },
      { name: "PAN Card (if available)", weight: 8, required: false },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "Caste Certificate (optional)", weight: 15, required: false },
      { name: "Trade Experience Declaration", weight: 10, required: true },
      { name: "Skill Certificate (if any)", weight: 10, required: false }
    ],
    applicationSteps: [
      "Visit nearest Common Service Centre (CSC) with Aadhaar and bank details for biometric verification.",
      "Gram Panchayat / Urban Local Body conducts field verification of your traditional trade.",
      "Screening Committee approves enrollment; receive PM Vishwakarma Digital ID and certificate.",
      "Undergo 5-day basic skill training, collect ₹15,000 toolkit voucher, and apply for ₹1 Lakh first tranche loan."
    ]
  },
  {
    id: "pmfme",
    name: "PM Formalisation of Micro Food Processing Enterprises (PMFME)",
    shortName: "PMFME Scheme",
    ministry: "Ministry of Food Processing Industries (MoFPI)",
    nodalAgency: "National Institute of Food Technology (NIFTEM) & State SNA",
    targetCategories: ["General", "OBC", "SC", "ST"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Food Processing", "Micro-Entrepreneur / Self-Employed", "Farmer / Allied"],
    minAge: 18,
    maxAge: 65,
    maxIncome: Infinity,
    educationRequired: "Minimum 8th pass preferable",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Capital Subsidy & Incubation",
    shortDesc: "35% credit-linked capital subsidy up to ₹10 Lakh for upgrading or establishing micro food-processing units under the One District One Product (ODOP) framework.",
    keyBenefits: [
      "35% Credit-linked Capital Subsidy (Max ₹10 Lakh)",
      "Seed Capital of ₹40,000 per SHG member for working capital and small tools",
      "Brand building & marketing support up to 50% subsidy",
      "Free technical training and food safety certification support"
    ],
    fundingRange: "Up to ₹10 Lakh Subsidy (Project up to ₹30 Lakh+)",
    benefitAmount: "35% capital subsidy for individual units, maximum ₹10 Lakh",
    subsidyPct: 35,
    loanLimit: "Up to ₹25 Lakh",
    interestRate: "Standard bank commercial rate with priority sector lending benefits",
    processingTime: "3 – 5 Weeks",
    officialLink: "https://pmfme.mofpi.gov.in/",
    region: "Pan India",
    tags: ["Food Processing", "35% Subsidy", "ODOP", "Agri-Business", "FSSAI"],
    eligibilityCriteria: [
      "Individual micro food-processing unit, SHG, FPO, or producer cooperative.",
      "Applicant must be at least 18 years of age.",
      "Unit can be existing or new unit adopting One District One Product (ODOP) focus.",
      "Ownership right over the micro food-processing enterprise.",
      "Willingness to contribute at least 10% own equity and obtain FSSAI license."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "PAN Card", weight: 8, required: true },
      { name: "Bank Passbook (6 months)", weight: 10, required: true },
      { name: "Residence Certificate / Electricity Bill", weight: 12, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "Detailed Project Report (DPR)", weight: 10, required: true },
      { name: "FSSAI / Udyam Certificate", weight: 10, required: false },
      { name: "Caste Certificate (if applicable)", weight: 15, required: false }
    ],
    applicationSteps: [
      "Register on the PMFME portal (pmfme.mofpi.gov.in) with Aadhaar and business details.",
      "District Resource Person (DRP) assists with DPR preparation and FSSAI documentation free of cost.",
      "District Level Committee (DLC) recommends proposal to nationalized lending bank.",
      "Bank disburses credit and capital subsidy is placed in back-ended subsidy reserve."
    ]
  },
  {
    id: "csss-scholarship",
    name: "PM-USP Central Sector Scheme of Scholarship for College and University Students (CSSS)",
    shortName: "CSSS Scholarship",
    ministry: "Department of Higher Education, Ministry of Education",
    nodalAgency: "National Scholarship Portal (NSP)",
    targetCategories: ["General", "OBC", "SC", "ST"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Student"],
    minAge: 17,
    maxAge: 25,
    maxIncome: 450000,
    educationRequired: "12th Pass (above 80th percentile in relevant board stream)",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Higher Education Merit Scholarship",
    shortDesc: "Direct financial assistance to meritorious students from low-income families pursuing regular graduate and post-graduate degree courses.",
    keyBenefits: [
      "₹12,000 per annum for the first 3 years of Graduation",
      "₹20,000 per annum for 4th and 5th year / Post-Graduation",
      "Direct Benefit Transfer (DBT) straight into student's Aadhaar-linked bank account",
      "Renewable every year based on academic performance"
    ],
    fundingRange: "₹12,000 – ₹20,000 per year",
    benefitAmount: "₹12,000/year at graduation; ₹20,000/year at post-graduation",
    subsidyPct: 100,
    loanLimit: "Non-repayable grant",
    interestRate: "0% (Pure Scholarship)",
    processingTime: "3 – 6 Weeks",
    officialLink: "https://scholarships.gov.in/",
    region: "Pan India",
    tags: ["Merit Scholarship", "Higher Education", "College", "Direct Benefit Transfer"],
    eligibilityCriteria: [
      "Must be above 80th percentile of successful candidates in relevant stream from Class 12 board.",
      "Pursuing regular full-time degree course (not correspondence or distance mode) in a recognized university/college.",
      "Total gross parental/family annual income must not exceed ₹4.50 Lakh per annum.",
      "Not availing any other scholarship from central or state government for the same course."
    ],
    requiredDocuments: [
      { name: "OTR / Aadhaar Number", weight: 17, required: true },
      { name: "Income Certificate (< ₹4.5L)", weight: 10, required: true },
      { name: "Class 12 Marksheet", weight: 15, required: true },
      { name: "College Admission Proof / ID Card", weight: 12, required: true },
      { name: "Aadhaar-Linked Bank Account Passbook", weight: 10, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "PAN Card", weight: 8, required: false },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "Bonafide Student Certificate", weight: 10, required: true }
    ],
    applicationSteps: [
      "Generate One Time Registration (OTR) on the National Scholarship Portal (scholarships.gov.in).",
      "Fill online CSSS application and select your higher education institution.",
      "College / Institute Nodal Officer (INO) verifies student bonafide and Class 12 percentile.",
      "State Nodal Officer conducts final approval and funds are disbursed via DBT PFMS."
    ]
  },
  {
    id: "aicte-pragati",
    name: "AICTE Pragati Scholarship Scheme for Girl Students (Technical Degree)",
    shortName: "AICTE Pragati for Girls",
    ministry: "Ministry of Education",
    nodalAgency: "All India Council for Technical Education (AICTE)",
    targetCategories: ["General", "OBC", "SC", "ST"],
    targetGenders: ["Female"],
    targetOccupations: ["Student"],
    minAge: 17,
    maxAge: 30,
    maxIncome: 800000,
    educationRequired: "Enrolled in 1st year of Technical Degree (B.E./B.Tech/B.Arch)",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Women Empowerment Technical Scholarship",
    shortDesc: "Empowering meritorious young women admitted to AICTE-approved technical degree institutions with ₹50,000 per annum for tuition fees, computer, and book expenses.",
    keyBenefits: [
      "₹50,000 per annum scholarship for up to 4 academic years",
      "Covers college tuition fee, computer purchase, books & equipment",
      "10,000 total fresh scholarships awarded every academic year",
      "No state quota restrictions — pan-India open merit"
    ],
    fundingRange: "₹50,000 per year (Up to ₹2,00,000 total)",
    benefitAmount: "Up to ₹50,000 per academic year for all 4 years",
    subsidyPct: 100,
    loanLimit: "Non-repayable scholarship",
    interestRate: "0% (Pure Scholarship)",
    processingTime: "4 – 6 Weeks",
    officialLink: "https://scholarships.gov.in/",
    region: "Pan India",
    tags: ["Girl Students", "B.Tech/B.E.", "Women in STEM", "₹50k/Year"],
    eligibilityCriteria: [
      "Candidate must be a female student admitted to 1st year of Technical Degree course in an AICTE approved institution.",
      "Maximum of two girl children per family are eligible.",
      "Family annual income must not exceed ₹8.00 Lakh per annum.",
      "Admission must have been through centralized admission process of state/central government."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "College Allotment / Admission Proof", weight: 15, required: true },
      { name: "Income Certificate (< ₹8.0L)", weight: 10, required: true },
      { name: "Class 10 & 12 Marksheets", weight: 12, required: true },
      { name: "Bank Passbook (Student's single account)", weight: 10, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "PAN Card", weight: 8, required: false },
      { name: "Parent Declaration for 2 Girls Max", weight: 10, required: true }
    ],
    applicationSteps: [
      "Register with OTR on National Scholarship Portal (NSP).",
      "Submit application for AICTE Pragati Scholarship with AICTE College AISHE code.",
      "Upload tuition fee receipt, family income certificate, and parental declaration.",
      "AICTE verifies with institute and releases ₹50,000 directly via Aadhaar-seeded DBT."
    ]
  },
  {
    id: "aicte-swanath",
    name: "AICTE Swanath Scholarship Scheme (Technical Degree)",
    shortName: "AICTE Swanath",
    ministry: "Ministry of Education",
    nodalAgency: "AICTE",
    targetCategories: ["General", "OBC", "SC", "ST"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Student"],
    minAge: 17,
    maxAge: 35,
    maxIncome: 800000,
    educationRequired: "Enrolled in AICTE Approved Technical Degree Program",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Vulnerable Category Scholarship",
    shortDesc: "Financial assistance of ₹50,000/year to vulnerable students: Orphans, wards of parents died due to COVID-19, wards of armed forces/paramilitary martyrs, and Specially-Abled (PwD >= 40%).",
    keyBenefits: [
      "₹50,000 lump sum per annum for every year of technical study",
      "Special priority for PwD students, orphans, and wards of martyrs",
      "No rank cutoff requirement as long as enrolled in AICTE degree",
      "Covers tuition fees, books, software, hostel and living costs"
    ],
    fundingRange: "₹50,000 per year",
    benefitAmount: "₹50,000/year for duration of course (up to 4 years)",
    subsidyPct: 100,
    loanLimit: "Non-repayable scholarship",
    interestRate: "0% (Pure Scholarship)",
    processingTime: "4 – 6 Weeks",
    officialLink: "https://scholarships.gov.in/",
    region: "Pan India",
    tags: ["PwD Friendly", "Orphans & Martyrs", "Technical Degree", "Inclusive Education"],
    eligibilityCriteria: [
      "Candidate must be enrolled in an AICTE approved technical degree program.",
      "Must fall into one of 3 categories: (a) Orphan, (b) Either or both parents died due to COVID-19, (c) Wards of Armed Forces / Paramilitary personnel killed in action, (d) Specially-abled students (PwD with >= 40% disability).",
      "Family annual income should not exceed ₹8.00 Lakh per annum (No income limit for martyrs' wards)."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "Disability Certificate / Death Certificate of Martyr/Parents", weight: 15, required: true },
      { name: "College Admission Letter & Fee Receipt", weight: 12, required: true },
      { name: "Income Certificate (if applicable)", weight: 10, required: true },
      { name: "Bank Passbook Details", weight: 10, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "PAN Card", weight: 8, required: false },
      { name: "Bonafide Certificate from Head of Institute", weight: 10, required: true }
    ],
    applicationSteps: [
      "Apply through National Scholarship Portal under AICTE Swanath scheme.",
      "Upload disability certificate issued by Competent Medical Authority or martyr record.",
      "College head verifies student enrollment and forwards digital application.",
      "Funds transferred via PFMS direct benefit transfer."
    ]
  },
  {
    id: "pm-yasasvi",
    name: "PM YASASVI Central Sector Scheme of Top Class Education in College for OBC, EBC and DNT",
    shortName: "PM YASASVI Scheme",
    ministry: "Ministry of Social Justice and Empowerment",
    nodalAgency: "Department of Social Justice and Empowerment / NSP",
    targetCategories: ["OBC"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Student"],
    minAge: 17,
    maxAge: 30,
    maxIncome: 250000,
    educationRequired: "Admission in Notified Top Class Higher Educational Institutions",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Comprehensive Higher Education Support",
    shortDesc: "Recognizes and promotes quality education among OBC, Economically Backward Classes (EBC), and De-notified Nomadic Tribes (DNT) studying in premier colleges and universities.",
    keyBenefits: [
      "Full non-refundable tuition fees reimbursed up to prescribed limits",
      "Living expenses allowance: ₹3,000 per month (₹36,000/year)",
      "Books and stationery allowance: ₹5,000 per year",
      "One-time grant of ₹45,000 for computer/laptop & accessories"
    ],
    fundingRange: "Full Tuition + Living Expenses + ₹45,000 Laptop Grant",
    benefitAmount: "Tuition + ₹36k living + ₹5k books + ₹45k laptop grant",
    subsidyPct: 100,
    loanLimit: "Non-repayable scholarship",
    interestRate: "0% (Pure Scholarship)",
    processingTime: "4 – 8 Weeks",
    officialLink: "https://scholarships.gov.in/",
    region: "Pan India",
    tags: ["OBC Special", "EBC/DNT", "Top Class Colleges", "Laptop Grant", "Full Fees"],
    eligibilityCriteria: [
      "Belonging to OBC, EBC or DNT community with valid certificate.",
      "Secured admission in notified top institutions (IITs, IIMs, NITs, AIIMS, National Law Universities, Central Universities).",
      "Total family annual income not exceeding ₹2.50 Lakh per annum.",
      "Scholarship will be awarded from the year of admission till completion of course subject to good academic performance."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "OBC / EBC / DNT Caste Certificate", weight: 15, required: true },
      { name: "Income Certificate (< ₹2.50 Lakh)", weight: 10, required: true },
      { name: "Fee Receipt & Admission Letter of Notified Institute", weight: 12, required: true },
      { name: "Bank Account Details", weight: 10, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "PAN Card", weight: 8, required: false },
      { name: "Class 10 & 12 Marksheets", weight: 10, required: true }
    ],
    applicationSteps: [
      "Verify that your institute is in the notified list of Top Class Institutions on NSP.",
      "Fill online application under PM YASASVI Top Class College Education.",
      "Upload community certificate, income certificate, and current fee schedule.",
      "Ministry verifies credentials and directly credits tuition fee and living allowance."
    ]
  },
  {
    id: "sc-top-class",
    name: "Central Sector Scholarship of Top Class Education for SC Students",
    shortName: "Top Class SC Scholarship",
    ministry: "Ministry of Social Justice and Empowerment",
    nodalAgency: "Department of Social Justice and Empowerment / NSP",
    targetCategories: ["SC"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Student"],
    minAge: 17,
    maxAge: 32,
    maxIncome: 800000,
    educationRequired: "Admission in Notified Top Class Institutions (IITs, NITs, IIMs, NLUs, etc.)",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Premier Higher Education Support",
    shortDesc: "Complete financial support for Scheduled Caste students pursuing studies in notified top institutions of excellence, covering full tuition fee, computer assistance, and monthly stipend.",
    keyBenefits: [
      "100% full tuition fee and non-refundable charges paid directly",
      "Living expenses allowance of ₹3,000 per month (₹36,000/year)",
      "Books and stationery allowance of ₹5,000 per year",
      "One-time laptop/computer grant of ₹45,000 in first year"
    ],
    fundingRange: "Full Tuition + ₹36,000/year living + ₹45,000 Computer grant",
    benefitAmount: "100% Tuition fee + living, books and computer support",
    subsidyPct: 100,
    loanLimit: "Non-repayable scholarship",
    interestRate: "0% (Pure Scholarship)",
    processingTime: "4 – 6 Weeks",
    officialLink: "https://scholarships.gov.in/",
    region: "Pan India",
    tags: ["SC Exclusive", "Top Class Institutes", "Full Tuition", "Laptop Aid"],
    eligibilityCriteria: [
      "Candidate must belong to Scheduled Caste (SC) category with verified caste certificate.",
      "Must have secured admission in any of the 260+ notified top institutions (IITs, NITs, IIMs, AIIMS, Central Universities, etc.).",
      "Total family annual income must not exceed ₹8.00 Lakh per annum.",
      "Must not be receiving duplicate financial assistance from other government schemes."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "SC Caste Certificate (from Revenue Officer)", weight: 15, required: true },
      { name: "Income Certificate (< ₹8.00L)", weight: 10, required: true },
      { name: "Admission Proof / Fee Structure of Notified College", weight: 12, required: true },
      { name: "Aadhaar Linked Bank Passbook", weight: 10, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "PAN Card", weight: 8, required: false },
      { name: "Class 12 / Degree Marksheet", weight: 10, required: true }
    ],
    applicationSteps: [
      "Register on National Scholarship Portal (NSP) with valid OTR.",
      "Select 'Central Sector Scholarship of Top Class Education for SC Students'.",
      "Enter your institute's AISHE code and upload verifiable SC certificate and income slip.",
      "Institute Nodal Officer approves verification and Ministry releases full grant via DBT."
    ]
  },
  {
    id: "nssh",
    name: "National SC-ST Hub (NSSH)",
    shortName: "National SC-ST Hub",
    ministry: "Ministry of Micro, Small and Medium Enterprises (MSME)",
    nodalAgency: "National Small Industries Corporation (NSIC)",
    targetCategories: ["SC", "ST"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Micro-Entrepreneur / Self-Employed", "Artisan / Craftsperson", "Food Processing"],
    minAge: 18,
    maxAge: 70,
    maxIncome: Infinity,
    educationRequired: "No bar (Must own SC/ST MSME unit)",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Vendor Subsidy, Capacity Building & Market Linkage",
    shortDesc: "Provides comprehensive professional support to SC/ST entrepreneurs to participate in public procurement and achieve the 4% annual procurement mandate from Central Public Sector Undertakings (CPSUs).",
    keyBenefits: [
      "100% reimbursement of vendor registration fees for CPSUs/Govt portals",
      "80% subsidy on exhibition stall rental fees (domestic & international)",
      "Reimbursement of rating and quality testing certification fees",
      "Free capacity development training, mentoring, and bid preparation support"
    ],
    fundingRange: "Component-based Subsidies & Reimbursements",
    benefitAmount: "100% tender fee waiver + 80% exhibition subsidy + market linkage",
    subsidyPct: 80,
    loanLimit: "Facilitates bank credit linkage up to ₹1 Crore",
    interestRate: "N/A (Institutional subsidy & market linkage grant)",
    processingTime: "2 – 4 Weeks",
    officialLink: "https://scsthub.in/",
    region: "Pan India",
    tags: ["SC/ST MSEs", "Government Tenders", "Vendor Subsidies", "Capacity Building"],
    eligibilityCriteria: [
      "Enterprise must be registered as Micro or Small Enterprise (MSE) under Udyam Registration.",
      "Sole Proprietor must be SC or ST; in partnership/private limited company, 51% shareholding must be SC/ST.",
      "Active enterprise engaged in manufacturing or service provision with valid GST where applicable."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "SC / ST Caste Certificate", weight: 15, required: true },
      { name: "Udyam MSME Registration Certificate", weight: 12, required: true },
      { name: "Bank Passbook / Statements", weight: 10, required: true },
      { name: "PAN Card of Enterprise & Proprietor", weight: 8, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "Exhibition / Tender Fee Invoices", weight: 10, required: true },
      { name: "Partnership Deed / Shareholding Certificate", weight: 10, required: false }
    ],
    applicationSteps: [
      "Register on scsthub.in with your Udyam MSME registration number.",
      "Select desired NSSH intervention (Exhibition subsidy, testing reimbursement, or tender support).",
      "Upload paid fee receipts, SC/ST certificate, and cancelled cheque.",
      "NSIC NSSH cell verifies claims and directly credits reimbursement into the enterprise account."
    ]
  },
  {
    id: "sclcss",
    name: "Special Credit Linked Capital Subsidy Scheme (SCLCSS)",
    shortName: "SCLCSS Subsidy",
    ministry: "Ministry of MSME",
    nodalAgency: "Office of Development Commissioner (MSME) & SIDBI",
    targetCategories: ["SC", "ST"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Micro-Entrepreneur / Self-Employed", "Food Processing", "Artisan / Craftsperson"],
    minAge: 18,
    maxAge: 70,
    maxIncome: Infinity,
    educationRequired: "No specific qualification",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Upfront Capital Technology Subsidy",
    shortDesc: "Provides 25% upfront capital subsidy (capped up to ₹25 Lakh) to SC/ST-owned MSEs on institutional credit availed for modernization, new plant & machinery, and technology adoption.",
    keyBenefits: [
      "25% Upfront Capital Subsidy on plant & machinery loan",
      "Maximum capital subsidy ceiling of ₹25 Lakh",
      "Eligible for both new enterprises and modernization of existing units",
      "Reduces debt burden and improves competitive productivity"
    ],
    fundingRange: "Up to ₹25 Lakh Capital Subsidy (on loan up to ₹1 Crore)",
    benefitAmount: "25% capital subsidy on machinery loan, maximum ₹25 Lakh",
    subsidyPct: 25,
    loanLimit: "Up to ₹1 Crore institutional term loan",
    interestRate: "Lending bank prime lending rate minus subsidy impact",
    processingTime: "4 – 8 Weeks",
    officialLink: "https://sclcss.msme.gov.in/",
    region: "Pan India",
    tags: ["25% Capital Subsidy", "SC/ST Industrialists", "Plant & Machinery", "Tech Upgrade"],
    eligibilityCriteria: [
      "Micro and Small Enterprises owned by SC/ST entrepreneurs (51% or higher equity).",
      "Unit must have valid Udyam Registration.",
      "Must have availed institutional term loan from eligible commercial bank, SIDBI, or RRB for purchasing new plant, equipment or machinery.",
      "Second-hand machinery is not eligible."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "SC / ST Certificate", weight: 15, required: true },
      { name: "Bank Term Loan Sanction Letter", weight: 12, required: true },
      { name: "Machinery Tax Invoice / Quotation", weight: 10, required: true },
      { name: "Bank Passbook / Statements", weight: 10, required: true },
      { name: "Udyam Registration Certificate", weight: 10, required: true },
      { name: "PAN Card", weight: 8, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "Chartered Accountant Installation Certificate", weight: 10, required: false }
    ],
    applicationSteps: [
      "Apply for term loan for plant and machinery with any commercial bank or SIDBI.",
      "After sanction, the lending bank uploads subsidy claim on SCLCSS portal (sclcss.msme.gov.in).",
      "Nodal agency (SIDBI / MSME-DC) scrutinizes machine invoices and SC/ST ownership.",
      "Subsidy is released and kept in Term Deposit Receipt (TDR) for 3 years, then adjusted against loan principal."
    ]
  },
  {
    id: "nsfdc-term-loan",
    name: "NSFDC Term Loan Scheme",
    shortName: "NSFDC Term Loan",
    ministry: "Ministry of Social Justice and Empowerment",
    nodalAgency: "National Scheduled Castes Finance and Development Corporation (NSFDC)",
    targetCategories: ["SC"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Micro-Entrepreneur / Self-Employed", "Artisan / Craftsperson", "Farmer / Allied", "Food Processing"],
    minAge: 18,
    maxAge: 65,
    maxIncome: 300000,
    educationRequired: "No bar (Technical/practical experience in trade preferred)",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Concessional Term Loan",
    shortDesc: "Provides concessional term loans up to ₹50 Lakh to Scheduled Caste entrepreneurs covering up to 90% of project cost for establishing viable income-generating units.",
    keyBenefits: [
      "Covers up to 90% of total project cost (Max loan ₹50 Lakh)",
      "Highly concessional interest rates between 6% and 9% per annum",
      "Comfortable repayment period of up to 10 years including moratorium",
      "Channelised through State Channelising Agencies (SCAs) and RRBs"
    ],
    fundingRange: "Up to ₹50 Lakh Project Cost",
    benefitAmount: "Low-interest term loan covering 90% of venture cost",
    subsidyPct: 15,
    loanLimit: "Up to ₹50 Lakh",
    interestRate: "6% - 9% per annum",
    processingTime: "3 – 5 Weeks",
    officialLink: "https://nsfdc.nic.in/",
    region: "Pan India",
    tags: ["SC Exclusive", "Low Interest (6%)", "High Loan Cap", "10-Year Repayment"],
    eligibilityCriteria: [
      "Applicant must belong to Scheduled Caste (SC) community.",
      "Annual family income must not exceed ₹3.00 Lakh per annum.",
      "Applicant must be at least 18 years of age.",
      "Project proposal must be economically viable and technically feasible."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "SC Caste Certificate", weight: 15, required: true },
      { name: "Income Certificate (< ₹3.0 Lakh)", weight: 10, required: true },
      { name: "Detailed Project Feasibility Report", weight: 12, required: true },
      { name: "Bank Passbook", weight: 10, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "PAN Card", weight: 8, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "Residence Proof / Ration Card", weight: 10, required: true }
    ],
    applicationSteps: [
      "Contact the State Channelising Agency (SCA) office in your district or apply through NSFDC portal.",
      "Submit project proposal along with caste and income credentials.",
      "SCA conducts interview and technical appraisal before recommending to NSFDC.",
      "Loan disbursed in stages aligned with project implementation milestones."
    ]
  },
  {
    id: "nsfdc-micro-finance",
    name: "NSFDC Micro Finance Scheme",
    shortName: "NSFDC Micro Credit",
    ministry: "Ministry of Social Justice and Empowerment",
    nodalAgency: "NSFDC & Microfinance Institutions / SCAs",
    targetCategories: ["SC"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Micro-Entrepreneur / Self-Employed", "Artisan / Craftsperson", "Unemployed / Seeking"],
    minAge: 18,
    maxAge: 65,
    maxIncome: 300000,
    educationRequired: "No formal schooling required",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Grassroots Micro-Credit",
    shortDesc: "Affordable micro-credit up to ₹1,40,000 per SC beneficiary at only 5% annual interest for taking up tiny income-generating trades and street vending.",
    keyBenefits: [
      "Micro-credit up to ₹1,40,000 per beneficiary",
      "Very low interest rate of only 5% per annum for the borrower",
      "Zero collateral requirements; group guarantee model supported",
      "Flexible monthly or weekly repayments tailored to cash flows"
    ],
    fundingRange: "Up to ₹1,40,000",
    benefitAmount: "Micro-credit loan @ 5% interest per annum",
    subsidyPct: 0,
    loanLimit: "₹1,40,000",
    interestRate: "5% per annum",
    processingTime: "2 – 3 Weeks",
    officialLink: "https://nsfdc.nic.in/",
    region: "Pan India",
    tags: ["SC Micro-Credit", "5% Low Interest", "Grassroots", "Collateral-Free"],
    eligibilityCriteria: [
      "Belonging to Scheduled Caste (SC) community.",
      "Annual family income up to ₹3.00 Lakh per annum.",
      "Applicant should have practical skills in trade (hawking, tailoring, tea stall, repair, small livestock).",
      "Assistance provided directly or through Self-Help Groups (SHGs)."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "SC Caste Certificate", weight: 15, required: true },
      { name: "Income Certificate", weight: 10, required: true },
      { name: "Bank Passbook", weight: 10, required: true },
      { name: "Residence Proof", weight: 12, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "PAN Card (optional)", weight: 8, required: false },
      { name: "SHG Recommendation / Activity Declaration", weight: 10, required: true }
    ],
    applicationSteps: [
      "Contact local partner NGO, SCA field officer, or designated NBFC-MFI.",
      "Submit simple 1-page application with Aadhaar and caste document.",
      "Quick verification of home address and micro-business activity.",
      "Loan disbursed within 14 days directly into the borrower's bank account."
    ]
  },
  {
    id: "nsfdc-udyam-nidhi",
    name: "NSFDC Udyam Nidhi Yojana",
    shortName: "Udyam Nidhi SC",
    ministry: "Ministry of Social Justice and Empowerment",
    nodalAgency: "NSFDC",
    targetCategories: ["SC"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Micro-Entrepreneur / Self-Employed", "Artisan / Craftsperson", "Farmer / Allied"],
    minAge: 18,
    maxAge: 60,
    maxIncome: 300000,
    educationRequired: "Literate",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Small Enterprise Seed Finance",
    shortDesc: "Targeted enterprise loan up to ₹4 Lakh at 7% per annum interest, covering 90% of project cost for budding Scheduled Caste small business entrepreneurs.",
    keyBenefits: [
      "Loan up to ₹4 Lakh for small/micro ventures",
      "Fixed low interest rate of 7% per annum",
      "NSFDC contributes up to 90% of project expenditure",
      "Repayment period of 5 years with 6-month initial moratorium"
    ],
    fundingRange: "Up to ₹4,00,000",
    benefitAmount: "Soft enterprise loan covering 90% cost @ 7% interest",
    subsidyPct: 10,
    loanLimit: "₹4,00,000",
    interestRate: "7% per annum",
    processingTime: "2 – 4 Weeks",
    officialLink: "https://nsfdc.nic.in/",
    region: "Pan India",
    tags: ["SC Small Business", "7% Interest", "Easy Terms", "Low Margin"],
    eligibilityCriteria: [
      "Scheduled Caste (SC) citizen aged between 18 and 60 years.",
      "Family annual income under ₹3.00 Lakh.",
      "Intended for setting up grocery store, cyber cafe, auto rickshaw, electric repair shop, apparel unit, etc.",
      "Should not have outstanding dues with other state corporations."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "SC Caste Certificate", weight: 15, required: true },
      { name: "Income Certificate", weight: 10, required: true },
      { name: "Venture Activity Quotation", weight: 12, required: true },
      { name: "Bank Passbook", weight: 10, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "PAN Card", weight: 8, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "Rent Agreement / Worksite Proof", weight: 10, required: false }
    ],
    applicationSteps: [
      "Collect application form from District SCA office or download from nsfdc.nic.in.",
      "Attach proforma invoices of items/machinery to be purchased.",
      "District Scrutiny Committee evaluates enterprise viability.",
      "Loan sanctioned and funds credited directly to vendor / entrepreneur."
    ]
  },
  {
    id: "nsfdc-mahila-adhikarita",
    name: "NSFDC Mahila Adhikarita Yojana",
    shortName: "Mahila Adhikarita (SC Women)",
    ministry: "Ministry of Social Justice and Empowerment",
    nodalAgency: "NSFDC & State Channelising Agencies",
    targetCategories: ["SC"],
    targetGenders: ["Female"],
    targetOccupations: ["Micro-Entrepreneur / Self-Employed", "Artisan / Craftsperson", "Food Processing", "Unemployed / Seeking"],
    minAge: 18,
    maxAge: 65,
    maxIncome: 300000,
    educationRequired: "No educational qualification bar",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Women Micro-Entrepreneurship Concession",
    shortDesc: "Exclusive low-interest financial assistance up to ₹2 Lakh at an ultra-low interest rate of 4% per annum for Scheduled Caste women for starting self-employment ventures.",
    keyBenefits: [
      "Ultra-low interest rate of only 4% per annum",
      "Loan assistance up to ₹2,00,000 per SC woman borrower",
      "Covers 90% of total project cost with only 5% woman contribution",
      "Flexible repayment up to 5 years with 6 months grace period"
    ],
    fundingRange: "Up to ₹2,00,000",
    benefitAmount: "Ultra-low interest credit @ 4% per annum up to ₹2 Lakh",
    subsidyPct: 15,
    loanLimit: "₹2,00,000",
    interestRate: "4% per annum fixed",
    processingTime: "2 – 3 Weeks",
    officialLink: "https://nsfdc.nic.in/",
    region: "Pan India",
    tags: ["SC Women Only", "4% Interest Rate", "Women Empowerment", "Easy Repayment"],
    eligibilityCriteria: [
      "Must be a woman belonging to Scheduled Caste (SC) community.",
      "Annual family income must not exceed ₹3.00 Lakh per annum.",
      "Age 18 years and above.",
      "For individual SC women or SC women organized into SHGs/cooperatives."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "SC Caste Certificate", weight: 15, required: true },
      { name: "Income Certificate (< ₹3.0L)", weight: 10, required: true },
      { name: "Bank Passbook Details", weight: 10, required: true },
      { name: "Residence Certificate / Ration Card", weight: 12, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "PAN Card", weight: 8, required: false },
      { name: "Proposed Business Brief / Quotation", weight: 10, required: true }
    ],
    applicationSteps: [
      "Submit application to District SCA or Mahila Vikas Mandal.",
      "State Agency validates SC woman status and income limits.",
      "Funds released under Mahila Adhikarita window at 4% annual interest.",
      "Commence business with ongoing business mentoring from SCA officers."
    ]
  },
  {
    id: "nstfdc-term-loan",
    name: "NSTFDC Term Loan Scheme for Scheduled Tribes",
    shortName: "NSTFDC Term Loan",
    ministry: "Ministry of Tribal Affairs",
    nodalAgency: "National Scheduled Tribes Finance and Development Corporation (NSTFDC)",
    targetCategories: ["ST"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Micro-Entrepreneur / Self-Employed", "Farmer / Allied", "Artisan / Craftsperson", "Food Processing"],
    minAge: 18,
    maxAge: 65,
    maxIncome: 300000,
    educationRequired: "No bar",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Concessional Tribal Enterprise Finance",
    shortDesc: "Provides concessional term loans up to ₹50 Lakh covering up to 90% of viable project cost for Scheduled Tribe (ST) entrepreneurs in agriculture, industry, and service sectors.",
    keyBenefits: [
      "Concessional term loan up to ₹50 Lakh (up to 90% project cost)",
      "Low interest rate between 6% and 8% per annum",
      "Tenure up to 10 years including generous moratorium period",
      "Special emphasis on forest-based and agro-based tribal value chains"
    ],
    fundingRange: "Up to ₹50 Lakh Project Cost",
    benefitAmount: "Concessional finance covering up to 90% project cost @ 6%–8%",
    subsidyPct: 15,
    loanLimit: "Up to ₹50 Lakh",
    interestRate: "6% - 8% per annum",
    processingTime: "3 – 5 Weeks",
    officialLink: "https://nstfdc.tribal.gov.in/",
    region: "Pan India",
    tags: ["ST Exclusive", "Tribal Enterprise", "6% Interest", "Forest Produce"],
    eligibilityCriteria: [
      "Applicant must belong to Scheduled Tribe (ST) community with authorized certificate.",
      "Annual family income must not exceed ₹3.00 Lakh per annum.",
      "Applicant must be at least 18 years of age.",
      "Proposed venture must be located in or serve viable commercial market."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "ST Scheduled Tribe Certificate", weight: 15, required: true },
      { name: "Income Certificate (< ₹3.0L)", weight: 10, required: true },
      { name: "Detailed Project Report / Cost Estimates", weight: 12, required: true },
      { name: "Bank Passbook", weight: 10, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "PAN Card", weight: 8, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "Tribal Land / Business Site Proof", weight: 10, required: true }
    ],
    applicationSteps: [
      "Apply through State Tribal Development Cooperative Corporation (STDCC) or SCA.",
      "Attach ST certificate and project proposal for appraisal.",
      "SCA forwards scrutinized application to NSTFDC for fund sanction.",
      "Credit disbursed through state channelizing bank account."
    ]
  },
  {
    id: "nstfdc-micro-credit",
    name: "NSTFDC Micro Credit Scheme (Adivasi Mahila Sashaktikaran Yojana)",
    shortName: "NSTFDC Micro Credit",
    ministry: "Ministry of Tribal Affairs",
    nodalAgency: "NSTFDC & Tribal SCAs",
    targetCategories: ["ST"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Micro-Entrepreneur / Self-Employed", "Artisan / Craftsperson", "Farmer / Allied", "Unemployed / Seeking"],
    minAge: 18,
    maxAge: 65,
    maxIncome: 300000,
    educationRequired: "No educational bar",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Tribal Micro-Credit",
    shortDesc: "Microfinance support up to ₹1,00,000 per ST beneficiary at a subsidized interest rate of 4% per annum for tribal women and self-help group members.",
    keyBenefits: [
      "Subsidized micro-credit up to ₹1,00,000 per beneficiary",
      "Special concessional interest rate of only 4% per annum for ST women",
      "Zero collateral required; group peer guarantee accepted",
      "Tenure of 5 years with easy quarterly or monthly repayments"
    ],
    fundingRange: "Up to ₹1,00,000",
    benefitAmount: "Micro-credit @ 4% per annum for tribal women & SHGs",
    subsidyPct: 0,
    loanLimit: "₹1,00,000",
    interestRate: "4% per annum (for ST women)",
    processingTime: "2 – 3 Weeks",
    officialLink: "https://nstfdc.tribal.gov.in/",
    region: "Pan India",
    tags: ["Tribal Women", "ST Micro-Credit", "4% Interest", "SHG Linkage"],
    eligibilityCriteria: [
      "Belonging to Scheduled Tribe (ST) community.",
      "Annual family income up to ₹3.00 Lakh per annum.",
      "Targeted primarily at tribal women and members of tribal Self-Help Groups (SHGs).",
      "Engaged in small retail, minor forest produce processing, weaving, poultry, or dairy."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "ST Certificate", weight: 15, required: true },
      { name: "Income Certificate", weight: 10, required: true },
      { name: "Bank Passbook Details", weight: 10, required: true },
      { name: "Residence Proof / Village Head Endorsement", weight: 12, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "PAN Card (if available)", weight: 8, required: false },
      { name: "SHG Member Resolution", weight: 10, required: false }
    ],
    applicationSteps: [
      "Contact the local Tribal Development Department or SCA field officer.",
      "Submit group or individual application with ST proof.",
      "Field officer conducts spot appraisal and forwards recommendation.",
      "Direct loan release to beneficiary account at 4% p.a."
    ]
  },
  {
    id: "nmdfc-term-loan",
    name: "NMDFC Term Loan Scheme for Minorities",
    shortName: "NMDFC Term Loan",
    ministry: "Ministry of Minority Affairs",
    nodalAgency: "National Minorities Development and Finance Corporation (NMDFC)",
    targetCategories: ["General", "OBC", "SC", "ST"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Micro-Entrepreneur / Self-Employed", "Artisan / Craftsperson", "Food Processing"],
    minAge: 18,
    maxAge: 65,
    maxIncome: 800000,
    educationRequired: "No bar",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Concessional Business Finance for Minorities",
    shortDesc: "Provides concessional term loans up to ₹20 Lakh covering up to 90% project cost for entrepreneurs belonging to notified minority communities across two income credit lines.",
    keyBenefits: [
      "Credit Line 1: Loans up to ₹20 Lakh @ 6% p.a. for family income < ₹3.0 Lakh",
      "Credit Line 2: Loans up to ₹30 Lakh @ 8% for men / 6% for women (< ₹8.0L income)",
      "Covers up to 90% of total commercial project cost",
      "Repayment tenure of 5 years with 6 months initial moratorium"
    ],
    fundingRange: "Up to ₹20 Lakh (Credit Line 1) / ₹30 Lakh (Credit Line 2)",
    benefitAmount: "Concessional term loan @ 6%–8% p.a. covering 90% cost",
    subsidyPct: 10,
    loanLimit: "Up to ₹20 Lakh",
    interestRate: "6% - 8% per annum",
    processingTime: "3 – 6 Weeks",
    officialLink: "https://www.nmdfc.org/nmdfcschemes",
    region: "Pan India",
    tags: ["Minority Communities", "Muslim/Sikh/Christian/Jain/Buddhist/Parsi", "6% Interest", "Up to ₹20L"],
    eligibilityCriteria: [
      "Must belong to one of 6 notified minority communities: Muslims, Christians, Sikhs, Buddhists, Parsis, or Jains.",
      "Annual family income criteria: Credit Line 1 up to ₹3.00 Lakh; Credit Line 2 up to ₹8.00 Lakh.",
      "Age 18 years and above.",
      "Engaged in commercially viable trade, transport, service, craftsmanship or small industry."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "Minority Community Affidavit / Certificate", weight: 15, required: true },
      { name: "Income Certificate (< ₹3.0L or < ₹8.0L)", weight: 10, required: true },
      { name: "Detailed Project Report (DPR) / Quotations", weight: 12, required: true },
      { name: "Bank Passbook (Last 6 months)", weight: 10, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "PAN Card", weight: 8, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "Business Premise Proof / Trade License", weight: 10, required: false }
    ],
    applicationSteps: [
      "Apply through the State Minority Financial Development Corporation (State Channelising Agency).",
      "Submit community self-declaration, income certificate, and project quotation.",
      "SCA conducts interview and technical appraisal before sanctions.",
      "Loan released with quarterly monitoring and repayment tracking."
    ]
  },
  {
    id: "nmdfc-micro-finance",
    name: "NMDFC Micro-Finance Scheme (Mahila Samridhi & Virasat)",
    shortName: "NMDFC Micro Credit",
    ministry: "Ministry of Minority Affairs",
    nodalAgency: "NMDFC & Partner SCAs/NGOs",
    targetCategories: ["General", "OBC", "SC", "ST"],
    targetGenders: ["Female", "Male", "Other"],
    targetOccupations: ["Micro-Entrepreneur / Self-Employed", "Artisan / Craftsperson", "Unemployed / Seeking"],
    minAge: 18,
    maxAge: 65,
    maxIncome: 300000,
    educationRequired: "No educational qualification bar",
    disabilityEligible: true,
    minorityEligible: true,
    schemeType: "Grassroots Minority Micro-Credit",
    shortDesc: "Micro-credit up to ₹1,50,000 at concessional interest rates of 5% to 7% per annum delivered through Self-Help Groups, especially targeting minority women and traditional artisans.",
    keyBenefits: [
      "Micro-credit up to ₹1,50,000 per member",
      "Special concessional rate of 5% p.a. for women under Mahila Samridhi",
      "5% p.a. for traditional minority craftspersons under Virasat Scheme",
      "No physical collateral; disbursed through trusted SHGs and certified NGOs"
    ],
    fundingRange: "Up to ₹1,50,000",
    benefitAmount: "Micro-credit loan @ 5%–7% p.a. through SHGs",
    subsidyPct: 0,
    loanLimit: "₹1,50,000",
    interestRate: "5% - 7% per annum",
    processingTime: "2 – 3 Weeks",
    officialLink: "https://www.nmdfc.org/nmdfcschemes",
    region: "Pan India",
    tags: ["Minority Women", "Artisan Virasat", "5% Interest", "SHG Group Lending"],
    eligibilityCriteria: [
      "Must belong to notified minority community (Muslim, Christian, Sikh, Buddhist, Jain, Parsi).",
      "Annual family income not exceeding ₹3.00 Lakh per annum.",
      "Preference given to women organized into Self-Help Groups (SHGs) and traditional craftspersons.",
      "Clean repayment record in group savings and credit."
    ],
    requiredDocuments: [
      { name: "Aadhaar Card", weight: 17, required: true },
      { name: "Minority Declaration / Certificate", weight: 15, required: true },
      { name: "Income Proof / Ration Card", weight: 10, required: true },
      { name: "Bank Passbook", weight: 10, required: true },
      { name: "Residence Certificate", weight: 12, required: true },
      { name: "Mobile Linked with Aadhaar", weight: 10, required: true },
      { name: "Passport Size Photograph", weight: 8, required: true },
      { name: "PAN Card (optional)", weight: 8, required: false },
      { name: "SHG Resolution & Membership Book", weight: 10, required: true }
    ],
    applicationSteps: [
      "SHG applies through designated State Channelising Agency (SCA) or empanelled NGO.",
      "SCA verifies minority status, SHG grading, and income parameters.",
      "Block sanction granted to SHG, which disburses micro-loans to individual members.",
      "Repayments collected monthly through regular SHG meetings."
    ]
  }
];

// Calculation engine for ranked matching
export function calculateSchemeEligibility(scheme, profile) {
  let score = 50; // Base score
  const reasons = [];

  // 1. Category Matching
  const isSC = profile.category === "SC";
  const isST = profile.category === "ST";
  const isOBC = profile.category === "OBC";
  const isMinority = profile.minorityStatus === "Yes";

  // Check specific targeted schemes
  if (scheme.id.startsWith("nsfdc") || scheme.id === "sc-top-class") {
    if (isSC) {
      score += 35;
      reasons.push("Direct Category Match (SC Exclusive)");
    } else {
      score -= 45;
    }
  } else if (scheme.id.startsWith("nstfdc")) {
    if (isST) {
      score += 35;
      reasons.push("Direct Category Match (ST Exclusive)");
    } else {
      score -= 45;
    }
  } else if (scheme.id.startsWith("nmdfc")) {
    if (isMinority) {
      score += 35;
      reasons.push("Direct Community Match (Minority Exclusive)");
    } else {
      score -= 40;
    }
  } else if (scheme.id === "pm-yasasvi") {
    if (isOBC) {
      score += 35;
      reasons.push("Direct Category Match (OBC / EBC / DNT)");
    } else {
      score -= 40;
    }
  } else if (scheme.id === "nssh" || scheme.id === "sclcss") {
    if (isSC || isST) {
      score += 35;
      reasons.push("SC/ST Entrepreneur Hub Priority");
    } else {
      score -= 35;
    }
  } else {
    // Universal schemes like PMEGP, MUDRA, Stand-Up India, PMFME, Vishwakarma, CSSS, Pragati, Swanath
    if (scheme.id === "standup-india") {
      if (profile.gender === "Female" || isSC || isST) {
        score += 30;
        reasons.push("Stand-Up India Priority (Women & SC/ST)");
      } else {
        score -= 20;
      }
    } else {
      score += 15;
    }
  }

  // 2. Gender Matching
  if (scheme.targetGenders.length === 1 && scheme.targetGenders[0] === "Female") {
    if (profile.gender === "Female") {
      score += 20;
      reasons.push("Special Women Empowerment Focus");
    } else {
      score -= 50;
    }
  }

  // 3. Occupation Matching
  const occ = profile.occupation;
  if (occ === "Student") {
    if (
      scheme.tags.includes("Merit Scholarship") ||
      scheme.tags.includes("Technical Degree") ||
      scheme.tags.includes("Higher Education") ||
      scheme.tags.includes("Top Class Institutes") ||
      scheme.tags.includes("Top Class Colleges") ||
      scheme.id.includes("scholarship") ||
      scheme.id.includes("pragati") ||
      scheme.id.includes("swanath") ||
      scheme.id.includes("yasasvi") ||
      scheme.id.includes("top-class")
    ) {
      score += 25;
      reasons.push("Higher Education & Scholarship Match");
    } else {
      score -= 15;
    }
  } else if (occ === "Artisan / Craftsperson") {
    if (scheme.id === "pm-vishwakarma") {
      score += 35;
      reasons.push("Direct 18-Trade Artisan Match");
    } else if (scheme.tags.includes("Artisans") || scheme.tags.includes("Artisan Virasat") || scheme.tags.includes("Traditional Craft")) {
      score += 25;
      reasons.push("Artisan Sector Priority");
    }
  } else if (occ === "Food Processing") {
    if (scheme.id === "pmfme") {
      score += 35;
      reasons.push("Prime One-District-One-Product (ODOP) Match");
    }
  } else if (occ === "Micro-Entrepreneur / Self-Employed") {
    if (
      scheme.id === "pmegp" ||
      scheme.id === "pmmy" ||
      scheme.id === "standup-india" ||
      scheme.id.includes("term-loan") ||
      scheme.id.includes("micro-credit") ||
      scheme.id.includes("sclcss")
    ) {
      score += 20;
      reasons.push("Micro-Enterprise Credit Alignment");
    }
  }

  // 4. Income Compatibility
  const incomeNumeric = {
    "< ₹1.5 Lakh": 140000,
    "₹1.5L - ₹3.0 Lakh": 280000,
    "₹3.0L - ₹5.0 Lakh": 450000,
    "₹5.0L - ₹8.0 Lakh": 750000,
    "> ₹8.0 Lakh": 950000
  }[profile.income] || 300000;

  if (scheme.maxIncome !== Infinity) {
    if (incomeNumeric <= scheme.maxIncome) {
      score += 10;
      reasons.push("Income Within Prescribed Ceiling");
    } else {
      score -= 30;
    }
  } else {
    score += 5;
  }

  // 5. Disability & Vulnerability Match
  if (profile.disabilityStatus === "PwD (>= 40%)") {
    if (scheme.id === "aicte-swanath") {
      score += 35;
      reasons.push("Special AICTE Swanath Specially-Abled Priority");
    } else {
      score += 5;
    }
  }

  // Clamp score between 10% and 99%
  const finalPercentage = Math.min(Math.max(score, 12), 99);

  return {
    percentage: finalPercentage,
    isHighlyRecommended: finalPercentage >= 80,
    isEligible: finalPercentage >= 60,
    reasons: reasons.slice(0, 3)
  };
}
