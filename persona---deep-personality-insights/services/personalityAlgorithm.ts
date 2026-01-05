
import { AnalysisResult, PersonalityScores } from "../types";

const PERSONALITY_DATA: Record<string, Omit<AnalysisResult, 'typeCode'>> = {
  "INTJ": {
    typeName: "Architect",
    summary: "Thoughtful tacticians who love perfecting the details of life, applying creativity and rationality to everything they do. Their inner world is often a private, complex place.",
    strengths: ["Strategic Thinking", "Rational", "Informed", "Independent", "Determined"],
    weaknesses: ["Arrogant", "Dismissive of Emotions", "Overly Critical", "Combative", "Socially Clueless"],
    relatableTraits: ["You have a 'Plan B' for your 'Plan B'", "Social small talk feels like a chore", "You'd rather be right than popular", "People often think you're 'intense'"],
    cognitiveFunctions: {
      dominant: "Introverted Intuition (Ni)",
      auxiliary: "Extraverted Thinking (Te)",
      explanation: "You naturally spot patterns and future possibilities (Ni), then organize the external world to make those visions a reality (Te)."
    },
    lifeInsights: {
      work: "Thrives in autonomous roles requiring long-term strategy and logic. Hates micromanagement and inefficiency.",
      friendships: "Quality over quantity; seeks intellectual equals who respect boundaries and value deep debate.",
      relationships: "Deeply loyal and honest; values intellectual compatibility and personal independence in a partner.",
      stress: "Becomes obsessive over minor details, disconnects entirely, or indulges in sensory excess.",
      growth: "Learning to value emotional intelligence as a valid metric for success and collaboration.",
      unhealthy: "Becomes cold, arrogant, and dismissive of everyone else's competence or humanity."
    },
    recommendations: {
      careers: ["System Architect", "Strategic Planner", "Investment Banker", "Scientific Researcher"],
      workStyles: ["Deeply Focused", "Autonomous", "Goal-Oriented", "Highly Organized"],
      learningMethods: ["Theoretical Exploration", "Independent Study", "Conceptual Mapping", "Abstract Problem Solving"]
    },
    careerPath: "Strategic Planning, Software Architecture, or Scientific Research.",
    relationshipAdvice: "Needs a partner who is independent and can handle blunt honesty."
  },
  "INTP": {
    typeName: "Logician",
    summary: "Flexible and thoughtful theorists who enjoy taking an unconventional approach to many aspects of life. They often seek unlikely paths, mixing willingness to experiment with personal creativity.",
    strengths: ["Analytical", "Original", "Open-Minded", "Curious", "Objective"],
    weaknesses: ["Disconnected", "Insensitive", "Dissatisfied", "Impatient", "Perfectionistic"],
    relatableTraits: ["You often correct people's grammar or logic in your head", "Your room is 'organized chaos'", "You find yourself awake at 3 AM researching black holes", "Making a final decision is painful because you want more data"],
    cognitiveFunctions: {
      dominant: "Introverted Thinking (Ti)",
      auxiliary: "Extraverted Intuition (Ne)",
      explanation: "You seek internal logical consistency (Ti) and use your imagination to explore endless possibilities and connections (Ne)."
    },
    lifeInsights: {
      work: "Needs a high degree of creative freedom and abstract problem-solving. Prefers to think through problems rather than manage people.",
      friendships: "Enjoys deep debates and sharing niche interests with a small circle. Values honesty above social grace.",
      relationships: "Appreciates a partner who is intellectually stimulating, low-maintenance, and respects their need for solitude.",
      stress: "May become uncharacteristically emotional, hypersensitive to others' opinions, or paralyzed by indecision.",
      growth: "Focusing on finishing projects and applying their theories to the real world.",
      unhealthy: "Becomes cynical, lethargic, and completely detached from social norms and responsibilities."
    },
    recommendations: {
      careers: ["Software Engineer", "Professor", "Philosopher", "Systems Analyst"],
      workStyles: ["Non-Linear", "Intellectual", "Problem-Solving focused", "Adaptable"],
      learningMethods: ["Deconstructive Analysis", "Explorative Reading", "Logical Deduction", "Idea Synthesis"]
    },
    careerPath: "Programming, Philosophy, Physics, or Investigative Analysis.",
    relationshipAdvice: "Appreciates a partner who is intellectually stimulating and low-maintenance."
  },
  "ENTJ": {
    typeName: "Commander",
    summary: "Decisive people who love momentum and accomplishment. They gather information to construct their creative visions but rarely hesitate long before acting on them.",
    strengths: ["Efficient", "Energetic", "Self-Confident", "Strong-Willed", "Strategic"],
    weaknesses: ["Stubborn", "Intolerant", "Impatient", "Arrogant", "Cold"],
    relatableTraits: ["You are the one who organizes the group trip", "Inefficiency physically hurts you", "You see life as a series of challenges to win", "You are naturally the leader in any room"],
    cognitiveFunctions: {
      dominant: "Extraverted Thinking (Te)",
      auxiliary: "Introverted Intuition (Ni)",
      explanation: "You focus on external efficiency and results (Te), guided by a strong inner sense of vision and future trends (Ni)."
    },
    lifeInsights: {
      work: "Natural fit for executive leadership. Values meritocracy, efficiency, and clear hierarchies of competence.",
      friendships: "Values loyalty and ambitious peers who can provide intellectual challenge and growth.",
      relationships: "Values drive and directness; wants a partner who is an equal and shares their ambitions.",
      stress: "Can become explosive, overbearing, or isolate themselves to brood over perceived failures.",
      growth: "Practicing patience and empathy with those who move at a different pace.",
      unhealthy: "Becomes tyrannical, ruthless, and obsessed with maintaining absolute control."
    },
    recommendations: {
      careers: ["Business Executive", "Management Consultant", "Judge", "Entrepreneur"],
      workStyles: ["Commanding", "Structured", "Action-Oriented", "Decisive"],
      learningMethods: ["Outcome-Based Training", "Case Studies", "Leadership Workshops", "Applied Theory"]
    },
    careerPath: "CEO, Business Consultant, Judge, or Entrepreneur.",
    relationshipAdvice: "Needs a partner who is strong-willed and shares their drive for growth."
  },
  "ENTP": {
    typeName: "Debater",
    summary: "Quick-witted and audacious, Debaters aren't afraid to disagree with the status quo. They love the mental gymnastics of a good argument.",
    strengths: ["Knowledgeable", "Quick Thinker", "Excellent Brainstormer", "Charismatic", "Energetic"],
    weaknesses: ["Argumentative", "Insensitive", "Intolerant", "Difficulty Focusing", "Dislike Practicality"],
    relatableTraits: ["You play devil's advocate just for fun", "You have 50 browser tabs open right now", "Rules feel more like suggestions to you", "You can talk your way out of almost any situation"],
    cognitiveFunctions: {
      dominant: "Extraverted Intuition (Ne)",
      auxiliary: "Introverted Thinking (Ti)",
      explanation: "You see patterns and possibilities everywhere (Ne) and analyze them against a rigorous internal logical framework (Ti)."
    },
    lifeInsights: {
      work: "Thrives in dynamic roles with constant new challenges. Hates routine and repetitive administrative tasks.",
      friendships: "Enjoys wit, banter, and friends who aren't easily offended. Values variety in social circles.",
      relationships: "Needs a partner who is secure, flexible, and enjoys spirited discussion without taking it personally.",
      stress: "Becomes obsessed with tiny, irrelevant details or feels paralyzed by 'what-ifs'.",
      growth: "Learning to follow through on ideas even after the initial excitement fades.",
      unhealthy: "Becomes scattered, manipulative, and argumentative just to distract from their own lack of progress."
    },
    recommendations: {
      careers: ["Marketing Director", "Politician", "Inventor", "Venture Capitalist"],
      workStyles: ["Brainstorming-Heavy", "Spontaneous", "Challenging", "Creative"],
      learningMethods: ["Interactive Debate", "Trial and Error", "Multi-Disciplinary Research", "Brainstorming"]
    },
    careerPath: "Lawyer, Stock Trader, Creative Director, or Inventor.",
    relationshipAdvice: "Needs a partner who is secure, flexible, and enjoys spirited discussion."
  },
  "INFJ": {
    typeName: "Advocate",
    summary: "They guide others with their quiet, principled version of humanism. They don't just drift through life – they act with purpose.",
    strengths: ["Creative", "Insightful", "Principled", "Passionate", "Altruistic"],
    weaknesses: ["Sensitive to Criticism", "Extremely Private", "Perfectionistic", "Always Needs a Cause", "Burnout Prone"],
    relatableTraits: ["You have 'door-slammed' people who hurt you deeply", "You can feel the 'vibe' of a room instantly", "You often feel like a social chameleon", "You have a vivid inner world nobody else sees"],
    cognitiveFunctions: {
      dominant: "Introverted Intuition (Ni)",
      auxiliary: "Extraverted Feeling (Fe)",
      explanation: "You have deep insights into human nature and the future (Ni), and you use those to help others and create harmony (Fe)."
    },
    lifeInsights: {
      work: "Seeks meaning and human connection. Thrives in roles where they can advocate for a cause or help individuals grow.",
      friendships: "Extremely selective and loyal; seeks authentic connection over superficial popularity.",
      relationships: "Values deep emotional intimacy, shared long-term values, and soul-level understanding.",
      stress: "Might overindulge in sensory pleasures (eating, spending) or act out impulsively in an uncharacteristic way.",
      growth: "Setting healthy boundaries and realizing they cannot carry everyone's emotional weight.",
      unhealthy: "Becomes martyr-like, manipulative, and deeply resentful of the world's 'cruelty'."
    },
    recommendations: {
      careers: ["Psychologist", "Writer", "Humanitarian Worker", "Counselor"],
      workStyles: ["Purpose-Driven", "Empathetic", "In-depth", "Values-Aligned"],
      learningMethods: ["Holistic Understanding", "Symbolic Thinking", "Insight-Based Learning", "Reflective Writing"]
    },
    careerPath: "Psychology, Writing, Non-Profit Leadership, or Counseling.",
    relationshipAdvice: "Values deep emotional intimacy and shared long-term values."
  },
  "INFP": {
    typeName: "Mediator",
    summary: "Mediators are quiet, imaginative, and idealistic. They feel things deeply and are often motivated by their own personal values and ethics.",
    strengths: ["Empathetic", "Generous", "Open-Minded", "Creative", "Passionate"],
    weaknesses: ["Too Idealistic", "Self-Censoring", "Unrealistic", "Emotionally Vulnerable", "Hard to get to know"],
    relatableTraits: ["You often root for the underdog", "Music is a core part of your identity", "You've been called 'too sensitive' more than once", "You have a deep internal moral compass"],
    cognitiveFunctions: {
      dominant: "Introverted Feeling (Fi)",
      auxiliary: "Extraverted Intuition (Ne)",
      explanation: "You prioritize your inner values and emotional truth (Fi), and express them through creative patterns and possibilities (Ne)."
    },
    lifeInsights: {
      work: "Needs a role that aligns with their values. Values personal expression and hates rigid corporate structures.",
      friendships: "Seeks authentic connection and people who value their individuality. A deep listener and loyal companion.",
      relationships: "Needs a partner who respects their privacy, rich emotional depth, and need for self-expression.",
      stress: "Becomes uncharacteristically critical, cold, and fixated on objective facts and logic.",
      growth: "Developing thicker skin and learning to take concrete action on their dreams.",
      unhealthy: "Becomes self-pitying, hyper-sensitive, and completely withdrawn from reality into a fantasy world."
    },
    recommendations: {
      careers: ["Poet", "Animator", "Social Worker", "Art Therapist"],
      workStyles: ["Authentic", "Independent", "Harmonious", "Creative"],
      learningMethods: ["Storytelling", "Values-Based Discovery", "Personalized Projects", "Creative Expression"]
    },
    careerPath: "Creative Writing, Arts, Social Work, or Graphic Design.",
    relationshipAdvice: "Needs a partner who respects their privacy and rich emotional depth."
  },
  "ENFJ": {
    typeName: "Protagonist",
    summary: "Natural-born leaders, full of passion and charisma. They are often the ones reaching out to help and inspire others to do good in the world.",
    strengths: ["Receptive", "Reliable", "Passionate", "Altruistic", "Charismatic"],
    weaknesses: ["Overly Idealistic", "Too Selfless", "Too Sensitive", "Fluctuating Self-Esteem", "Struggle with tough choices"],
    relatableTraits: ["You are the 'mom' or 'dad' of the friend group", "You can't say no to someone in need", "You feel others' pain as if it were your own", "You love helping people reach their potential"],
    cognitiveFunctions: {
      dominant: "Extraverted Feeling (Fe)",
      auxiliary: "Introverted Intuition (Ni)",
      explanation: "You are attuned to the needs and emotions of the group (Fe), and use your intuition to guide them toward a better future (Ni)."
    },
    lifeInsights: {
      work: "Excels in roles that involve teaching, mentoring, or leading. Values social harmony and collective success.",
      friendships: "Very social and inclusive; values deep, supportive bonds and shared community activities.",
      relationships: "Seeks a partner who is appreciative, supportive, and shares their altruistic spirit.",
      stress: "Can become excessively critical of themselves or withdraw into a dark, cynical, and logical headspace.",
      growth: "Learning to prioritize their own needs without feeling guilty or selfish.",
      unhealthy: "Becomes manipulative, codependent, and uses their social influence to control others."
    },
    recommendations: {
      careers: ["Non-Profit Director", "Teacher", "HR Specialist", "Motivational Speaker"],
      workStyles: ["Collaborative", "Inspirational", "People-Oriented", "Diplomatic"],
      learningMethods: ["Group Discussion", "Coaching", "Interactive Seminars", "Role-Playing"]
    },
    careerPath: "Teaching, PR, HR Management, or Life Coaching.",
    relationshipAdvice: "Seeks a partner who is appreciative and shares their altruistic spirit."
  },
  "ENFP": {
    typeName: "Campaigner",
    summary: "The Campaigner personality is a true free spirit. They are often the life of the party, but they enjoy the emotional connections they make.",
    strengths: ["Curious", "Observant", "Energetic", "Excellent Communicator", "Festive"],
    weaknesses: ["Poor Practical Skills", "Hard to Focus", "Overthinker", "Stressed Easily", "Highly Emotional"],
    relatableTraits: ["You have started 100 hobbies in the last year", "You can make a friend in any elevator ride", "You are easily bored by routine", "You are a 'visionary' who hates the paperwork"],
    cognitiveFunctions: {
      dominant: "Extraverted Intuition (Ne)",
      auxiliary: "Introverted Feeling (Fi)",
      explanation: "You see exciting possibilities everywhere (Ne) and filter them through your deep personal values and feelings (Fi)."
    },
    lifeInsights: {
      work: "Needs variety and the ability to innovate. Hates boring routine and overly bureaucratic structures.",
      friendships: "Warm and enthusiastic; loves bringing people together and exploring new ideas with friends.",
      relationships: "Needs a partner who can provide stability and grounding while joining in their spontaneous fun.",
      stress: "Becomes obsessive over minor health issues or tiny logical inconsistencies in their surroundings.",
      growth: "Practicing mindfulness and following through on the projects they've started.",
      unhealthy: "Becomes scattered, hypersensitive, and uses charm to manipulate others to avoid responsibility."
    },
    recommendations: {
      careers: ["Content Creator", "Travel Journalist", "PR Manager", "Landscape Architect"],
      workStyles: ["Innovative", "Enthusiastic", "Dynamic", "Network-building"],
      learningMethods: ["Project-Based Exploration", "Social Learning", "Brainstorming Sessions", "Creative Play"]
    },
    careerPath: "Marketing, Journalism, Arts, or Social Entrepreneurship.",
    relationshipAdvice: "Needs a partner who can provide a bit of grounding while joining the fun."
  },
  "ISTJ": {
    typeName: "Logistician",
    summary: "Practical and fact-minded. Their reliability cannot be doubted. They take pride in their integrity and work ethic.",
    strengths: ["Honest", "Direct", "Strong-Willed", "Dutiful", "Very Responsible"],
    weaknesses: ["Stubborn", "Insensitive", "By the book", "Judgmental", "Self-Blaming"],
    relatableTraits: ["You are never late", "You have a spreadsheet for your budget", "You value tradition and 'tried and true' methods", "Your desk is perfectly organized"],
    cognitiveFunctions: {
      dominant: "Introverted Sensing (Si)",
      auxiliary: "Extraverted Thinking (Te)",
      explanation: "You rely on past experience and detailed facts (Si) to organize your environment and get things done efficiently (Te)."
    },
    lifeInsights: {
      work: "Thrives in structured environments. Values competence, honesty, and clear procedures.",
      friendships: "Dependable and steady; shows love through acts of service and being there in times of need.",
      relationships: "Values stability, loyalty, and clear roles. Expects their partner to be just as dependable.",
      stress: "Becomes catastrophically worried about the future and all the things that could go wrong.",
      growth: "Being more open to new ideas that haven't been 'proven' yet. Embracing flexibility.",
      unhealthy: "Becomes rigid, judgmental, and obsessively critical of everyone's 'failure' to follow rules."
    },
    recommendations: {
      careers: ["Accountant", "Office Manager", "Supply Chain Analyst", "Military Officer"],
      workStyles: ["Systematic", "Reliable", "Standard-Setting", "Fact-based"],
      learningMethods: ["Step-by-Step Training", "Structured Reading", "Repetition and Drill", "Practical Application"]
    },
    careerPath: "Accounting, Law Enforcement, Military, or Data Analysis.",
    relationshipAdvice: "Values stability, loyalty, and clear communication of expectations."
  },
  "ISFJ": {
    typeName: "Defender",
    summary: "Warm and unassuming in their own steady way. They are efficient and responsible, giving careful attention to practical details.",
    strengths: ["Supportive", "Reliable", "Patient", "Imaginative", "Observant"],
    weaknesses: ["Humble to a fault", "Take things personally", "Repress feelings", "Overcommitted", "Reluctant to change"],
    relatableTraits: ["You remember everyone's birthday", "You hate being the center of attention", "You find it hard to ask for help", "Your home is cozy and welcoming"],
    cognitiveFunctions: {
      dominant: "Introverted Sensing (Si)",
      auxiliary: "Extraverted Feeling (Fe)",
      explanation: "You have a deep memory for personal details and facts (Si), using them to take care of the people around you (Fe)."
    },
    lifeInsights: {
      work: "Natural fit for supportive roles. Values harmony, stability, and helping others succeed quietly.",
      friendships: "Kind and selfless; the 'rock' that friends lean on for practical and emotional support.",
      relationships: "Needs a partner who acknowledges and appreciates their quiet hard work and loyalty.",
      stress: "Might become uncharacteristically critical or lash out with 'truth bombs' after suppressing feelings too long.",
      growth: "Learning to set boundaries and say 'no' without feeling immense guilt.",
      unhealthy: "Becomes martyrs, overly sensitive to slights, and passively-aggressive toward those they serve."
    },
    recommendations: {
      careers: ["Nurse", "Social Worker", "Kindergarten Teacher", "Customer Service Manager"],
      workStyles: ["Service-Oriented", "Diligent", "Cooperative", "Patient"],
      learningMethods: ["Hands-on Demonstration", "Memory Aids", "Contextualized Learning", "Observation"]
    },
    careerPath: "Nursing, Social Work, Teaching, or Customer Service.",
    relationshipAdvice: "Needs a partner who acknowledges and appreciates their quiet hard work."
  },
  "ESTJ": {
    typeName: "Executive",
    summary: "Representatives of tradition and order, utilizing their understanding of what is right and wrong to bring communities together.",
    strengths: ["Dedicated", "Strong-Willed", "Direct", "Loyal", "Excellent Organizers"],
    weaknesses: ["Inflexible", "Uncomfortable with change", "Judgmental", "Status-Focused", "Hard to relax"],
    relatableTraits: ["You're usually the one holding the clipboard", "You follow the instructions perfectly", "You value clear hierarchies", "You are the first to call out someone for being late"],
    cognitiveFunctions: {
      dominant: "Extraverted Thinking (Te)",
      auxiliary: "Introverted Sensing (Si)",
      explanation: "You organize the external world for efficiency (Te) by relying on established rules and past experience (Si)."
    },
    lifeInsights: {
      work: "Great in management. Values hard work, directness, and results. Expects everyone to pull their weight.",
      friendships: "Direct and reliable; enjoys shared activities and community events. Values social tradition.",
      relationships: "Values dependability, shared community involvement, and clear mutual goals.",
      stress: "Can become uncharacteristically emotional or hypersensitive to how others perceive them.",
      growth: "Learning that there's more than one 'right' way to accomplish a goal. Appreciating diversity of thought.",
      unhealthy: "Becomes bossy, close-minded, and aggressively critical of anyone who challenges their 'authority'."
    },
    recommendations: {
      careers: ["Project Manager", "Financial Officer", "Judge", "Administrator"],
      workStyles: ["Authoritative", "Efficiency-driven", "Practical", "Goal-oriented"],
      learningMethods: ["Workshops", "Skill-Based Training", "Explicit Instructions", "Real-world Drills"]
    },
    careerPath: "Project Management, Business Admin, or Public Official.",
    relationshipAdvice: "Appreciates a partner who is dependable and respects their work ethic."
  },
  "ESFJ": {
    typeName: "Consul",
    summary: "Extraordinary listeners and observers, and they're usually the ones making sure everyone else is okay. They thrive on community.",
    strengths: ["Strong Practical Skills", "Sense of Duty", "Loyal", "Warm", "Good with People"],
    weaknesses: ["Social Status Focused", "Inflexible", "Reluctant to Innovate", "Sensitive to Criticism", "Needy"],
    relatableTraits: ["You're the life of the family reunion", "You love hosting dinner parties", "You are very aware of social etiquette", "You seek consensus in every group decision"],
    cognitiveFunctions: {
      dominant: "Extraverted Feeling (Fe)",
      auxiliary: "Introverted Sensing (Si)",
      explanation: "You prioritize social harmony and the needs of others (Fe), guided by tradition and past experience (Si)."
    },
    lifeInsights: {
      work: "Excels in customer-facing roles. Values harmony, tradition, and knowing everyone is taken care of.",
      friendships: "Warm and attentive; often the 'glue' that keeps a social group connected and informed.",
      relationships: "Needs a partner who values family, social connection, and traditions as much as they do.",
      stress: "Becomes uncharacteristically cold and fixated on logical flaws or efficiency to the detriment of feelings.",
      growth: "Learning that their worth isn't solely defined by what others think of them.",
      unhealthy: "Becomes gossip-prone, needy, and manipulative in their attempt to maintain social harmony."
    },
    recommendations: {
      careers: ["Public Relations", "Catering Manager", "Special Education Teacher", "Real Estate Agent"],
      workStyles: ["Socially Dynamic", "Service-led", "Team-building", "Organized"],
      learningMethods: ["Collaborative Workshops", "Group Projects", "Experiential Learning", "Interactive Seminars"]
    },
    careerPath: "Event Planning, Hospitality, Nursing, or Community Organizing.",
    relationshipAdvice: "Needs a partner who values family and social connection as much as they do."
  },
  "ISTP": {
    typeName: "Virtuoso",
    summary: "Virtuosos love to explore with their hands and eyes, examining the world with cool rationalism and spirited curiosity.",
    strengths: ["Optimistic", "Creative", "Spontaneous", "Rational", "Prioritizes Well"],
    weaknesses: ["Stubborn", "Insensitive", "Private", "Easily Bored", "Dislike Commitment"],
    relatableTraits: ["You are the one who fixes the broken appliance", "You love high-adrenaline activities", "You are a man/woman of few words", "You learn best by doing, not reading"],
    cognitiveFunctions: {
      dominant: "Introverted Thinking (Ti)",
      auxiliary: "Extraverted Sensing (Se)",
      explanation: "You analyze systems internally for logical consistency (Ti) and interact with the physical world in a spontaneous, tactical way (Se)."
    },
    lifeInsights: {
      work: "Thrives in tactical, hands-on environments. Values freedom, skill-mastery, and practical results.",
      friendships: "Cool and laid-back; prefers shared activities and 'doing things' over deep emotional talks.",
      relationships: "Needs a partner who respects their independence, love for action, and need for personal space.",
      stress: "Might have emotional outbursts or become obsessed with future possibilities and 'what-ifs'.",
      growth: "Learning to share their feelings and thoughts before they reach a boiling point.",
      unhealthy: "Becomes reckless, emotionally cold, and completely uncommitted to any responsibilities."
    },
    recommendations: {
      careers: ["Mechanical Engineer", "Forensic Scientist", "Carpenter", "Pilot"],
      workStyles: ["Pragmatic", "Hands-on", "Risk-taking", "Technical"],
      learningMethods: ["Kinaesthetic Learning", "Laboratory Work", "Problem-Solving Tasks", "Direct Experience"]
    },
    careerPath: "Mechanic, Engineer, Pilot, or Software Developer.",
    relationshipAdvice: "Needs a partner who respects their independence and love for action."
  },
  "ISFP": {
    typeName: "Adventurer",
    summary: "True artists who use aesthetics and design to push the limits of social convention. They live in a world of sensory possibilities.",
    strengths: ["Charming", "Sensitive", "Imaginative", "Passionate", "Curious"],
    weaknesses: ["Fiercely Independent", "Unpredictable", "Stressed Easily", "Competitive", "Fluctuating Self-Esteem"],
    relatableTraits: ["You have a very specific aesthetic", "You hate being boxed in by rules", "You are very observant of your surroundings", "You express yourself through your style"],
    cognitiveFunctions: {
      dominant: "Introverted Feeling (Fi)",
      auxiliary: "Extraverted Sensing (Se)",
      explanation: "You have a deep inner set of values and feelings (Fi) which you express through the immediate sensory world (Se)."
    },
    lifeInsights: {
      work: "Needs creative freedom and a sensory-rich environment. Hates rigid hierarchies and high-pressure social demands.",
      friendships: "Kind, accepting, and quiet; values friends who are authentic and share their love for the moment.",
      relationships: "Values a partner who is gentle, respects their privacy, and gives them room to be themselves.",
      stress: "Becomes uncharacteristically bossy, aggressive, and obsessed with objective efficiency and rules.",
      growth: "Learning to plan for the long-term rather than just living for the sensory thrill of today.",
      unhealthy: "Becomes hyper-sensitive, self-indulgent, and avoids all conflict to the point of isolation."
    },
    recommendations: {
      careers: ["Graphic Designer", "Chef", "Fashion Designer", "Occupational Therapist"],
      workStyles: ["Artistic", "Individualistic", "Observant", "Hands-on"],
      learningMethods: ["Visual Arts", "Sensory Discovery", "Open-Ended Projects", "Emotional Engagement"]
    },
    careerPath: "Graphic Design, Photography, Fashion, or Social Service.",
    relationshipAdvice: "Values a partner who is gentle and gives them space to be themselves."
  },
  "ESTP": {
    typeName: "Entrepreneur",
    summary: "Entrepreneurs always have an impact on their immediate surroundings – they are the life of the party and love the thrill of the moment.",
    strengths: ["Bold", "Rational", "Original", "Perceptive", "Direct"],
    weaknesses: ["Insensitive", "Impatient", "Risk-prone", "Unstructured", "Short-sighted"],
    relatableTraits: ["You're the first one on the dance floor", "You'd rather ask for forgiveness than permission", "You notice tiny changes in people's behavior", "You love a good challenge or competition"],
    cognitiveFunctions: {
      dominant: "Extraverted Sensing (Se)",
      auxiliary: "Introverted Thinking (Ti)",
      explanation: "You are highly attuned to the physical world and 'the now' (Se), analyzing it for logical shortcuts and tactics (Ti)."
    },
    lifeInsights: {
      work: "Natural in fast-paced environments. Values tactical action, speed, and tangible results. Hates endless theory.",
      friendships: "Exciting and fun; always up for an adventure. Prefers active friends who can keep up with their pace.",
      relationships: "Needs a partner who can match their high energy, love for fun, and avoid being too 'serious' or sensitive.",
      stress: "Might become withdrawn and obsessed with negative, catastrophic future possibilities.",
      growth: "Developing patience and considering the long-term impact of their impulsive actions.",
      unhealthy: "Becomes reckless, manipulative, and emotionally shallow, chasing sensory highs at any cost."
    },
    recommendations: {
      careers: ["Sales Executive", "Stock Trader", "Professional Athlete", "Emergency Medic"],
      workStyles: ["Energetic", "Tactical", "Fast-paced", "Action-focused"],
      learningMethods: ["Field Training", "Competitive Simulations", "Real-Time Problem Solving", "Physical Practice"]
    },
    careerPath: "Sales Representative, Police Officer, Stock Broker, or Athlete.",
    relationshipAdvice: "Needs a partner who can match their high energy and love for fun."
  },
  "ESFP": {
    typeName: "Entertainer",
    summary: "If anyone is to be found spontaneously breaking into song and dance, it is the Entertainer. They get caught up in the excitement of the moment.",
    strengths: ["Bold", "Original", "Aesthetic", "Practical", "Observant"],
    weaknesses: ["Sensitive", "Conflict-Averse", "Easily Bored", "Poor Planner", "Unfocused"],
    relatableTraits: ["You treat every day like a performance", "You have a large, diverse social circle", "You hate 'heavy' or depressing topics", "You are the first to try a new fashion trend"],
    cognitiveFunctions: {
      dominant: "Extraverted Sensing (Se)",
      auxiliary: "Introverted Feeling (Fi)",
      explanation: "You live fully in the sensory moment (Se) and make decisions based on how they align with your inner feelings (Fi)."
    },
    lifeInsights: {
      work: "Thrives in industries with high variety and social interaction. Values immediate feedback and collaborative fun.",
      friendships: "Generous and fun-loving; often the heart of their social group, providing laughter and support.",
      relationships: "Needs a partner who shares their love for life, beauty, and excitement, avoiding high-drama conflict.",
      stress: "Becomes uncharacteristically cold, withdrawn, and fixated on logical inconsistencies or 'cold' facts.",
      growth: "Learning to handle conflict directly rather than just avoiding it or 'performing' through it.",
      unhealthy: "Becomes shallow, impulsive, and avoids all depth or responsibility to chase the next fun thing."
    },
    recommendations: {
      careers: ["Actor", "Event Planner", "Flight Attendant", "PR Professional"],
      workStyles: ["Expressive", "Spontaneous", "Interactive", "Pleasure-seeking"],
      learningMethods: ["Performance-Based Learning", "Social Interaction", "Multi-Sensory Inputs", "Playful Discovery"]
    },
    careerPath: "Event Planner, Actor, Travel Guide, or Sales.",
    relationshipAdvice: "Needs a partner who shares their love for life and avoids being too 'serious'."
  }
};

export const getPersonalityAnalysisAlgorithmic = (scores: PersonalityScores, typeCode: string): AnalysisResult => {
  const data = PERSONALITY_DATA[typeCode] || PERSONALITY_DATA["INFP"]; 
  return {
    ...data,
    typeCode
  };
};
