import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface HealthTopic {
  id: number;
  name: string;
  title: string;
  summary: string;
  category: string;
  icon: string; // emoji or icon identifier
  prevalence: string;
}

export interface HealthTopicDetail extends HealthTopic {
  description: string;
  causes: string[];
  symptoms: string[];
  riskFactors: string[];
  diagnosis: string[];
  treatments: string[];
  medications: string[];
  lifestyle: string[];
  prevention: string[];
  complications: string[];
  statistics: {
    year: string;
    cases: number;
    deaths?: number;
    recoveries?: number;
  }[];
  relatedArticles: {
    title: string;
    url: string;
    source: string;
  }[];
  whenToSeeDoctor: string[];
}

// Mock health topics data
const healthTopicsData: HealthTopic[] = [
  {
    id: 1,
    name: "diabetes",
    title: "Diabetes Mellitus",
    summary:
      "A chronic condition affecting how your body processes blood sugar (glucose), leading to elevated blood sugar levels.",
    category: "Endocrinology",
    icon: "🩺",
    prevalence: "463 million adults worldwide",
  },
  {
    id: 2,
    name: "hypertension",
    title: "Hypertension (High Blood Pressure)",
    summary:
      "A common condition where the long-term force of blood against artery walls is high enough to cause health problems.",
    category: "Cardiology",
    icon: "❤️",
    prevalence: "1.28 billion adults worldwide",
  },
  {
    id: 3,
    name: "dengue",
    title: "Dengue Fever",
    summary:
      "A mosquito-borne viral infection causing flu-like illness and potentially developing into severe dengue.",
    category: "Infectious Disease",
    icon: "🦟",
    prevalence: "390 million infections annually",
  },
  {
    id: 4,
    name: "covid-19",
    title: "COVID-19",
    summary:
      "A contagious disease caused by the SARS-CoV-2 virus, affecting the respiratory system and other organs.",
    category: "Infectious Disease",
    icon: "🦠",
    prevalence: "Global pandemic since 2020",
  },
  {
    id: 5,
    name: "obesity",
    title: "Obesity",
    summary:
      "A complex disease involving excessive body fat that increases the risk of other health problems.",
    category: "Metabolic Health",
    icon: "⚖️",
    prevalence: "650 million adults worldwide",
  },
  {
    id: 6,
    name: "asthma",
    title: "Asthma",
    summary:
      "A chronic respiratory condition causing inflammation and narrowing of airways, leading to breathing difficulties.",
    category: "Pulmonology",
    icon: "🫁",
    prevalence: "262 million people worldwide",
  },
];

// Detailed health topic information
const healthTopicDetails: { [key: number]: Partial<HealthTopicDetail> } = {
  1: {
    // Diabetes
    description:
      "Diabetes is a metabolic disorder characterized by high blood sugar levels over a prolonged period. The disease occurs either when the pancreas doesn't produce enough insulin or when the body cannot effectively use the insulin it produces. There are three main types: Type 1, Type 2, and Gestational diabetes.",
    causes: [
      "Type 1: Autoimmune destruction of insulin-producing beta cells",
      "Type 2: Insulin resistance and relative insulin deficiency",
      "Genetic predisposition and family history",
      "Obesity and sedentary lifestyle",
      "Poor diet high in refined sugars and unhealthy fats",
      "Age factor (risk increases with age)",
    ],
    symptoms: [
      "Increased thirst and frequent urination",
      "Unexplained weight loss",
      "Extreme hunger",
      "Fatigue and weakness",
      "Blurred vision",
      "Slow-healing sores or frequent infections",
      "Tingling or numbness in hands or feet",
      "Darkened skin areas (acanthosis nigricans)",
    ],
    riskFactors: [
      "Family history of diabetes",
      "Overweight or obesity (BMI over 25)",
      "Age 45 or older",
      "Physical inactivity",
      "History of gestational diabetes",
      "Polycystic ovary syndrome (PCOS)",
      "High blood pressure (140/90 mmHg or above)",
      "Abnormal cholesterol levels",
    ],
    diagnosis: [
      "Fasting blood glucose test (FBG)",
      "HbA1c test (glycated hemoglobin)",
      "Oral glucose tolerance test (OGTT)",
      "Random blood glucose test",
      "Urine tests for ketones",
    ],
    treatments: [
      "Insulin therapy (Type 1 and some Type 2)",
      "Oral medications (Metformin, Sulfonylureas, DPP-4 inhibitors)",
      "GLP-1 receptor agonists",
      "SGLT2 inhibitors",
      "Blood sugar monitoring",
      "Continuous glucose monitoring (CGM) devices",
    ],
    medications: [
      "Metformin - First-line medication for Type 2",
      "Insulin (various types: rapid, short, intermediate, long-acting)",
      "Sulfonylureas (Glipizide, Glyburide)",
      "Thiazolidinediones (Pioglitazone)",
      "DPP-4 inhibitors (Sitagliptin, Linagliptin)",
      "GLP-1 agonists (Liraglutide, Semaglutide)",
    ],
    lifestyle: [
      "Regular physical activity (150 minutes per week)",
      "Healthy diet rich in whole grains, vegetables, and lean proteins",
      "Weight management and loss if overweight",
      "Regular blood sugar monitoring",
      "Stress management techniques",
      "Adequate sleep (7-9 hours)",
      "Smoking cessation",
      "Limited alcohol consumption",
    ],
    prevention: [
      "Maintain healthy weight through diet and exercise",
      "Eat a balanced diet low in processed sugars",
      "Exercise regularly (at least 30 minutes daily)",
      "Get regular health screenings",
      "Manage stress effectively",
      "Avoid tobacco products",
      "Limit alcohol intake",
      "Stay hydrated",
    ],
    complications: [
      "Cardiovascular disease (heart attack, stroke)",
      "Neuropathy (nerve damage)",
      "Nephropathy (kidney disease)",
      "Retinopathy (eye damage, blindness)",
      "Diabetic foot problems",
      "Skin conditions and infections",
      "Hearing impairment",
      "Depression and anxiety",
    ],
    statistics: [
      { year: "2019", cases: 463000000, deaths: 4200000 },
      { year: "2020", cases: 475000000, deaths: 4300000 },
      { year: "2021", cases: 490000000, deaths: 4500000 },
      { year: "2023", cases: 537000000, deaths: 4800000 },
      { year: "2024", cases: 550000000, deaths: 5000000 },
    ],
    relatedArticles: [
      {
        title: "Managing Type 2 Diabetes with Diet",
        url: "#",
        source: "American Diabetes Association",
      },
      {
        title: "Understanding Insulin Therapy",
        url: "#",
        source: "Mayo Clinic",
      },
      {
        title: "Preventing Diabetes Complications",
        url: "#",
        source: "CDC",
      },
      {
        title: "Latest Research in Diabetes Treatment",
        url: "#",
        source: "Journal of Clinical Endocrinology",
      },
    ],
    whenToSeeDoctor: [
      "Blood sugar levels consistently above 180 mg/dL",
      "Experiencing symptoms of high or low blood sugar",
      "Frequent infections or slow-healing wounds",
      "Vision changes or eye problems",
      "Numbness or tingling in extremities",
      "Chest pain or shortness of breath",
      "Unexplained weight loss",
    ],
  },
  2: {
    // Hypertension
    description:
      "Hypertension, or high blood pressure, is a common condition where the force of blood against artery walls is consistently too high. Often called the 'silent killer,' it typically has no symptoms but can lead to serious health complications if left untreated.",
    causes: [
      "Genetic factors and family history",
      "Age (risk increases with age)",
      "Obesity and being overweight",
      "Lack of physical activity",
      "High salt intake in diet",
      "Excessive alcohol consumption",
      "Chronic stress",
      "Kidney disease",
      "Thyroid disorders",
      "Sleep apnea",
    ],
    symptoms: [
      "Often no symptoms (silent condition)",
      "Severe headaches",
      "Nosebleeds",
      "Fatigue or confusion",
      "Vision problems",
      "Chest pain",
      "Difficulty breathing",
      "Irregular heartbeat",
      "Blood in urine",
    ],
    riskFactors: [
      "Age over 65",
      "Race (more common in African Americans)",
      "Family history",
      "Obesity or overweight",
      "Physical inactivity",
      "Tobacco use",
      "High sodium diet",
      "Low potassium diet",
      "Excessive alcohol",
      "Chronic stress",
    ],
    diagnosis: [
      "Blood pressure measurement (multiple readings)",
      "Ambulatory blood pressure monitoring",
      "Blood tests (cholesterol, kidney function)",
      "Urine tests",
      "Electrocardiogram (ECG)",
      "Echocardiogram",
    ],
    treatments: [
      "Lifestyle modifications",
      "ACE inhibitors",
      "ARBs (Angiotensin II receptor blockers)",
      "Calcium channel blockers",
      "Diuretics (water pills)",
      "Beta-blockers",
      "Combination medications",
    ],
    medications: [
      "Lisinopril (ACE inhibitor)",
      "Losartan (ARB)",
      "Amlodipine (Calcium channel blocker)",
      "Hydrochlorothiazide (Diuretic)",
      "Metoprolol (Beta-blocker)",
      "Combination pills (multiple drugs)",
    ],
    lifestyle: [
      "DASH diet (Dietary Approaches to Stop Hypertension)",
      "Reduce sodium intake (less than 2,300 mg/day)",
      "Regular aerobic exercise (30 minutes most days)",
      "Maintain healthy weight",
      "Limit alcohol consumption",
      "Quit smoking",
      "Manage stress through meditation, yoga",
      "Get adequate sleep",
    ],
    prevention: [
      "Maintain healthy weight",
      "Exercise regularly",
      "Eat a heart-healthy diet",
      "Reduce sodium intake",
      "Limit alcohol",
      "Manage stress",
      "Regular blood pressure monitoring",
      "Avoid tobacco",
    ],
    complications: [
      "Heart attack and heart disease",
      "Stroke",
      "Aneurysm",
      "Heart failure",
      "Kidney problems or failure",
      "Vision loss",
      "Metabolic syndrome",
      "Memory and cognitive issues",
    ],
    statistics: [
      { year: "2019", cases: 1200000000, deaths: 10300000 },
      { year: "2020", cases: 1230000000, deaths: 10500000 },
      { year: "2021", cases: 1250000000, deaths: 10700000 },
      { year: "2023", cases: 1280000000, deaths: 11000000 },
      { year: "2024", cases: 1300000000, deaths: 11200000 },
    ],
    relatedArticles: [
      {
        title: "DASH Diet Guide for Hypertension",
        url: "#",
        source: "American Heart Association",
      },
      {
        title: "Understanding Blood Pressure Readings",
        url: "#",
        source: "Mayo Clinic",
      },
      {
        title: "Medication Management for High Blood Pressure",
        url: "#",
        source: "CDC",
      },
    ],
    whenToSeeDoctor: [
      "Blood pressure consistently above 130/80",
      "Severe headache with confusion",
      "Chest pain",
      "Difficulty breathing",
      "Vision changes",
      "Blood in urine",
      "Pounding in chest, neck, or ears",
    ],
  },
  3: {
    // Dengue
    description:
      "Dengue is a mosquito-borne viral disease transmitted by Aedes mosquitoes. It causes flu-like symptoms and can develop into severe dengue (dengue hemorrhagic fever), which can be fatal. The disease is endemic in tropical and subtropical regions.",
    causes: [
      "Dengue virus (DENV) types 1, 2, 3, and 4",
      "Transmitted by Aedes aegypti mosquitoes",
      "Aedes albopictus mosquitoes (secondary vector)",
      "Mosquito breeding in stagnant water",
      "Urban and semi-urban environments",
      "Climate conditions favoring mosquito breeding",
    ],
    symptoms: [
      "High fever (104°F/40°C)",
      "Severe headache",
      "Pain behind the eyes",
      "Severe joint and muscle pain",
      "Fatigue",
      "Nausea and vomiting",
      "Skin rash (appears 2-5 days after fever)",
      "Mild bleeding (nose, gums)",
    ],
    riskFactors: [
      "Living in or traveling to tropical areas",
      "Previous dengue infection (increases severe dengue risk)",
      "Urban and semi-urban residence",
      "Monsoon season",
      "Areas with standing water",
      "Inadequate mosquito control",
    ],
    diagnosis: [
      "NS1 antigen test (early detection)",
      "IgM and IgG antibody tests",
      "PCR test for virus detection",
      "Complete blood count (low platelet count)",
      "Liver function tests",
    ],
    treatments: [
      "No specific antiviral treatment",
      "Supportive care and hydration",
      "Pain relievers (acetaminophen/paracetamol only)",
      "Avoid NSAIDs (aspirin, ibuprofen) - bleeding risk",
      "Hospitalization for severe cases",
      "IV fluid replacement",
      "Blood transfusion if necessary",
    ],
    medications: [
      "Paracetamol/Acetaminophen for fever and pain",
      "Oral rehydration solutions",
      "IV fluids for severe cases",
      "Platelet transfusion (severe dengue)",
      "DO NOT USE: Aspirin, Ibuprofen, or NSAIDs",
    ],
    lifestyle: [
      "Rest and adequate sleep",
      "Drink plenty of fluids (water, ORS, coconut water)",
      "Light, easily digestible diet",
      "Monitor for warning signs",
      "Avoid strenuous activities",
      "Continue mosquito protection during illness",
    ],
    prevention: [
      "Use mosquito repellent (DEET-based)",
      "Wear long sleeves and pants",
      "Use mosquito nets while sleeping",
      "Install window and door screens",
      "Eliminate standing water around home",
      "Use mosquito coils or electric vaporizers",
      "Dengue vaccine (in endemic areas, age 9-45)",
      "Community clean-up drives",
    ],
    complications: [
      "Severe dengue (dengue hemorrhagic fever)",
      "Plasma leakage",
      "Severe bleeding",
      "Organ failure (liver, heart)",
      "Shock (dengue shock syndrome)",
      "Death (if untreated)",
    ],
    statistics: [
      { year: "2019", cases: 4200000, deaths: 4032 },
      { year: "2020", cases: 3800000, deaths: 3500 },
      { year: "2021", cases: 5100000, deaths: 4800 },
      { year: "2023", cases: 6200000, deaths: 5500 },
      { year: "2024", cases: 7000000, deaths: 6000 },
    ],
    relatedArticles: [
      {
        title: "Dengue Prevention Strategies",
        url: "#",
        source: "WHO",
      },
      {
        title: "Recognizing Severe Dengue Warning Signs",
        url: "#",
        source: "CDC",
      },
      {
        title: "Dengue Vaccine: What You Need to Know",
        url: "#",
        source: "International Journal of Infectious Diseases",
      },
    ],
    whenToSeeDoctor: [
      "Severe abdominal pain",
      "Persistent vomiting",
      "Bleeding from nose or gums",
      "Blood in vomit or stool",
      "Extreme fatigue or restlessness",
      "Rapid breathing",
      "Cold or clammy skin",
    ],
  },
  4: {
    // COVID-19
    description:
      "COVID-19 is a contagious respiratory and systemic disease caused by the SARS-CoV-2 virus. First identified in December 2019, it has caused a global pandemic affecting millions worldwide. The virus primarily spreads through respiratory droplets and can range from mild to severe illness.",
    causes: [
      "SARS-CoV-2 virus (novel coronavirus)",
      "Airborne transmission through respiratory droplets",
      "Close contact with infected individuals",
      "Touching contaminated surfaces then touching face",
      "Indoor poorly ventilated spaces",
      "Prolonged exposure to infected persons",
    ],
    symptoms: [
      "Fever or chills",
      "Cough (usually dry)",
      "Shortness of breath or difficulty breathing",
      "Fatigue",
      "Body aches and muscle pain",
      "Headache",
      "Loss of taste or smell",
      "Sore throat",
      "Congestion or runny nose",
      "Nausea or vomiting",
      "Diarrhea",
    ],
    riskFactors: [
      "Age 65 and older",
      "Chronic lung disease or asthma",
      "Heart conditions",
      "Weakened immune system",
      "Obesity (BMI ≥30)",
      "Diabetes",
      "Chronic kidney disease",
      "Liver disease",
      "Cancer",
      "Pregnancy",
    ],
    diagnosis: [
      "RT-PCR test (gold standard)",
      "Rapid antigen tests",
      "Antibody tests",
      "Chest X-ray or CT scan",
      "Blood tests (D-dimer, inflammatory markers)",
      "Pulse oximetry for oxygen levels",
    ],
    treatments: [
      "Antiviral medications (Paxlovid, Remdesivir)",
      "Monoclonal antibodies",
      "Corticosteroids (dexamethasone)",
      "Oxygen therapy",
      "Mechanical ventilation (severe cases)",
      "Supportive care",
    ],
    medications: [
      "Paxlovid (nirmatrelvir/ritonavir)",
      "Remdesivir (antiviral)",
      "Dexamethasone (corticosteroid)",
      "Molnupiravir (antiviral)",
      "Acetaminophen for fever",
      "Cough suppressants",
    ],
    lifestyle: [
      "Rest and adequate sleep",
      "Stay hydrated",
      "Isolate from others (5-10 days)",
      "Monitor oxygen levels if available",
      "Eat nutritious foods",
      "Manage fever with medications",
      "Avoid strenuous activity",
    ],
    prevention: [
      "Get vaccinated and boosted",
      "Wear masks in crowded indoor spaces",
      "Maintain physical distance (6 feet)",
      "Wash hands frequently (20 seconds)",
      "Use hand sanitizer (60%+ alcohol)",
      "Improve indoor ventilation",
      "Avoid large gatherings",
      "Stay home when sick",
      "Cover coughs and sneezes",
    ],
    complications: [
      "Acute respiratory distress syndrome (ARDS)",
      "Pneumonia",
      "Blood clots",
      "Multi-organ failure",
      "Long COVID (persistent symptoms)",
      "Heart problems (myocarditis)",
      "Kidney injury",
      "Neurological issues",
    ],
    statistics: [
      { year: "2020", cases: 82000000, deaths: 1800000, recoveries: 46000000 },
      {
        year: "2021",
        cases: 203000000,
        deaths: 4300000,
        recoveries: 182000000,
      },
      {
        year: "2022",
        cases: 450000000,
        deaths: 6000000,
        recoveries: 430000000,
      },
      {
        year: "2023",
        cases: 670000000,
        deaths: 6700000,
        recoveries: 655000000,
      },
      {
        year: "2024",
        cases: 775000000,
        deaths: 7000000,
        recoveries: 760000000,
      },
    ],
    relatedArticles: [
      {
        title: "Understanding COVID-19 Variants",
        url: "#",
        source: "CDC",
      },
      {
        title: "Long COVID: Symptoms and Management",
        url: "#",
        source: "WHO",
      },
      {
        title: "COVID-19 Vaccination Guide",
        url: "#",
        source: "Johns Hopkins Medicine",
      },
      {
        title: "Post-COVID Recovery Tips",
        url: "#",
        source: "Mayo Clinic",
      },
    ],
    whenToSeeDoctor: [
      "Trouble breathing or shortness of breath",
      "Persistent chest pain or pressure",
      "New confusion or inability to wake",
      "Bluish lips or face",
      "Oxygen saturation below 94%",
      "Severe or persistent vomiting",
      "Symptoms worsen after initial improvement",
    ],
  },
  5: {
    // Obesity
    description:
      "Obesity is a complex chronic disease characterized by excessive body fat that increases the risk of other health conditions. It's defined as having a body mass index (BMI) of 30 or higher. Obesity results from a combination of genetic, behavioral, environmental, and physiological factors.",
    causes: [
      "Consuming more calories than burned",
      "Sedentary lifestyle and physical inactivity",
      "Genetic predisposition",
      "Poor diet high in processed foods and sugars",
      "Lack of sleep",
      "Certain medications (antidepressants, steroids)",
      "Medical conditions (hypothyroidism, PCOS)",
      "Psychological factors (stress, depression)",
      "Environmental factors (food deserts, lack of safe exercise spaces)",
    ],
    symptoms: [
      "Excess body fat, particularly around waist",
      "Difficulty with physical activities",
      "Shortness of breath",
      "Excessive sweating",
      "Fatigue",
      "Joint and back pain",
      "Skin problems (stretch marks, infections in skin folds)",
      "Sleep problems including sleep apnea",
      "Low self-esteem",
    ],
    riskFactors: [
      "Family history and genetics",
      "Age (risk increases with age)",
      "Pregnancy",
      "Quitting smoking",
      "Certain medications",
      "Social and economic issues",
      "Lack of access to healthy foods",
      "Stress",
      "Gut bacteria imbalance",
    ],
    diagnosis: [
      "BMI calculation (weight/height²)",
      "Waist circumference measurement",
      "Body composition analysis",
      "Blood tests (cholesterol, glucose, thyroid)",
      "Assessment of medical history",
      "Evaluation of diet and activity levels",
    ],
    treatments: [
      "Dietary changes and nutrition counseling",
      "Physical activity program",
      "Behavioral therapy",
      "Weight-loss medications",
      "Bariatric surgery (severe cases)",
      "Ongoing support and monitoring",
    ],
    medications: [
      "Orlistat (Xenical, Alli)",
      "Phentermine-topiramate (Qsymia)",
      "Liraglutide (Saxenda)",
      "Semaglutide (Wegovy)",
      "Naltrexone-bupropion (Contrave)",
      "Setmelanotide (for genetic obesity)",
    ],
    lifestyle: [
      "Balanced, calorie-controlled diet",
      "Increase fruit and vegetable intake",
      "Regular physical activity (150+ minutes/week)",
      "Strength training exercises",
      "Portion control",
      "Meal planning and preparation",
      "Adequate sleep (7-9 hours)",
      "Stress management",
      "Stay hydrated",
      "Limit screen time",
    ],
    prevention: [
      "Maintain healthy eating habits from childhood",
      "Regular physical activity",
      "Monitor weight regularly",
      "Limit processed and high-calorie foods",
      "Eat more whole foods",
      "Cook at home more often",
      "Practice mindful eating",
      "Get support from family and friends",
      "Seek professional help early",
    ],
    complications: [
      "Type 2 diabetes",
      "Heart disease and stroke",
      "High blood pressure",
      "Certain cancers",
      "Digestive problems (GERD)",
      "Sleep apnea",
      "Osteoarthritis",
      "Fatty liver disease",
      "Kidney disease",
      "Depression and anxiety",
      "Infertility",
    ],
    statistics: [
      { year: "2019", cases: 650000000 },
      { year: "2020", cases: 672000000 },
      { year: "2021", cases: 695000000 },
      { year: "2023", cases: 740000000 },
      { year: "2024", cases: 760000000 },
    ],
    relatedArticles: [
      {
        title: "Understanding BMI and Body Composition",
        url: "#",
        source: "National Institutes of Health",
      },
      {
        title: "Weight Loss Surgery: Options and Considerations",
        url: "#",
        source: "Cleveland Clinic",
      },
      {
        title: "Creating a Sustainable Weight Loss Plan",
        url: "#",
        source: "American Obesity Association",
      },
      {
        title: "The Role of Gut Health in Weight Management",
        url: "#",
        source: "Harvard Medical School",
      },
    ],
    whenToSeeDoctor: [
      "BMI of 30 or higher",
      "Unable to lose weight despite efforts",
      "Weight-related health problems",
      "Considering weight-loss medication or surgery",
      "Rapid weight gain",
      "Emotional eating or binge eating",
      "Family history of obesity-related diseases",
    ],
  },
  6: {
    // Asthma
    description:
      "Asthma is a chronic inflammatory disease of the airways characterized by variable and recurring symptoms, reversible airflow obstruction, and bronchospasm. It affects people of all ages but often starts in childhood.",
    causes: [
      "Genetic predisposition",
      "Allergies (atopy)",
      "Respiratory infections in childhood",
      "Environmental factors",
      "Occupational exposures",
      "Air pollution",
      "Tobacco smoke exposure",
      "Obesity",
    ],
    symptoms: [
      "Shortness of breath",
      "Chest tightness or pain",
      "Wheezing when exhaling",
      "Coughing, especially at night or early morning",
      "Difficulty sleeping due to breathing problems",
      "Rapid breathing",
      "Frequent respiratory infections",
    ],
    riskFactors: [
      "Family history of asthma or allergies",
      "Allergic conditions (eczema, hay fever)",
      "Obesity or overweight",
      "Smoking or secondhand smoke exposure",
      "Occupational exposure to irritants",
      "Air pollution",
      "Childhood respiratory infections",
    ],
    diagnosis: [
      "Spirometry (lung function test)",
      "Peak flow measurement",
      "Methacholine challenge test",
      "Allergy testing",
      "Exhaled nitric oxide test",
      "Chest X-ray",
      "Physical examination",
    ],
    treatments: [
      "Inhaled corticosteroids",
      "Long-acting beta agonists",
      "Leukotriene modifiers",
      "Combination inhalers",
      "Quick-relief (rescue) inhalers",
      "Biologic therapies for severe asthma",
      "Allergy shots (immunotherapy)",
    ],
    medications: [
      "Albuterol (rescue inhaler)",
      "Fluticasone (inhaled corticosteroid)",
      "Salmeterol (long-acting beta agonist)",
      "Montelukast (leukotriene modifier)",
      "Combination: Fluticasone/Salmeterol",
      "Omalizumab (biologic for allergic asthma)",
    ],
    lifestyle: [
      "Identify and avoid triggers",
      "Use air conditioner to reduce airborne allergens",
      "Maintain healthy weight",
      "Regular exercise with proper warm-up",
      "Cover nose and mouth in cold weather",
      "Manage stress",
      "Get flu and pneumonia vaccines",
      "Use asthma action plan",
    ],
    prevention: [
      "Avoid tobacco smoke",
      "Minimize allergen exposure",
      "Control indoor humidity",
      "Use HEPA filters",
      "Regular exercise",
      "Maintain healthy weight",
      "Get appropriate vaccinations",
      "Manage gastroesophageal reflux",
    ],
    complications: [
      "Severe asthma attacks requiring emergency care",
      "Permanent airway narrowing",
      "Frequent hospitalizations",
      "Side effects from long-term medication use",
      "Sleep disruption",
      "Limitations in daily activities",
      "Respiratory failure (rare)",
    ],
    statistics: [
      { year: "2019", cases: 262000000 },
      { year: "2020", cases: 267000000 },
      { year: "2021", cases: 272000000 },
      { year: "2023", cases: 280000000 },
      { year: "2024", cases: 285000000 },
    ],
    relatedArticles: [
      {
        title: "Understanding Asthma Triggers",
        url: "#",
        source: "American Lung Association",
      },
      {
        title: "Using Your Inhaler Correctly",
        url: "#",
        source: "Mayo Clinic",
      },
      {
        title: "Asthma Action Plan Template",
        url: "#",
        source: "CDC",
      },
      {
        title: "Exercise-Induced Asthma Management",
        url: "#",
        source: "Journal of Allergy and Clinical Immunology",
      },
    ],
    whenToSeeDoctor: [
      "Increasing shortness of breath or wheezing",
      "No improvement after using rescue inhaler",
      "Breathing difficulties during minimal activity",
      "Frequent need for rescue inhaler",
      "Symptoms disrupting sleep",
      "Peak flow measurements in yellow or red zone",
      "Suspected asthma attack",
    ],
  },
};

export const getHealthTopics = async (): Promise<HealthTopic[]> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return healthTopicsData;
};

export const getHealthTopicDetail = async (
  id: number
): Promise<HealthTopicDetail> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const baseTopic = healthTopicsData.find((topic) => topic.id === id);
  const detailData = healthTopicDetails[id];

  if (!baseTopic || !detailData) {
    throw new Error("Health topic not found");
  }

  return {
    ...baseTopic,
    ...detailData,
  } as HealthTopicDetail;
};

export default api;
