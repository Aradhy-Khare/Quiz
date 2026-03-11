const quizData = [
  {
    id: 1,
    question:
      "[The Union Legislature] Rajya Sabha: 238+12 members. Lok Sabha: ______________ members.",
    options: { a: "525+25", b: "550+0", c: "520+30", d: "530+20" },
    answer: "b",
  },
  {
    id: 2,
    question:
      "[The Union Legislature] The house has 550 members. On a particular day, 45 members are present. The Government wants to present a Bill. What do you think will happen?",
    options: {
      a: "The Government has a majority, so the Bill will be passed.",
      b: "The Government cannot pass the Bill because the opposition is against it.",
      c: "The Government is unable to introduce the Bill because the Speaker adjourns the House.",
      d: "The Government can introduce the Bill but cannot pass it.",
    },
    answer: "c",
  },
  {
    id: 3,
    question:
      "[The Union Legislature] 31st July 2023, ANI reported: Government to introduce Delhi Services Ordinance Bill in Lok Sabha tomorrow. Why should the Government introduce an ordinance in the Lok Sabha?",
    options: {
      a: "The Government needs the approval of only the Lok Sabha.",
      b: "The Government needs the approval of the Opposition.",
      c: "The Rajya Sabha has no power over an ordinance.",
      d: "Every ordinance needs to be approved by both houses of the Parliament to become law.",
    },
    answer: "d",
  },
  {
    id: 4,
    question:
      "[The Union Legislature] Identify the exclusive powers of the Lok Sabha. P: Introduces the Money Bill, Q: Passes an ordinary bill, R: Can vote a government out of power, S: Can impeach the President.",
    options: { a: "P and Q", b: "R and S", c: "P and R", d: "Q and S" },
    answer: "c",
  },
  {
    id: 5,
    question:
      "[The Union Legislature] Which of the following can make the amendment as shown in the picture? (Differently abled protest, demand amendments in rights bill)",
    options: {
      a: "The Parliament",
      b: "The High Court",
      c: "The Supreme Court",
      d: "The President",
    },
    answer: "a",
  },
  {
    id: 6,
    question:
      "[The Judiciary] 12 February 2023, The Economic Times reported: More than 97.64 lakh cases settled in the first National Lok Adalat of 2023: NALSA. Which advantage of the Lok Adalat is MOST highlighted in the above headline?",
    options: {
      a: "Saves money.",
      b: "Speedy justice.",
      c: "Works on compromise.",
      d: "Reduces burden on Higher courts.",
    },
    answer: "b",
  },
  {
    id: 7,
    question:
      "[The Judiciary] The High Court feels there has been blatant injustice in a case solved by the lower court and transfers the case to itself to check the judgement. Which jurisdiction is it exercising?",
    options: {
      a: "Revisory",
      b: "Advisory",
      c: "Original",
      d: "Appellate",
    },
    answer: "a",
  },
  {
    id: 8,
    question:
      "[The Indian National Movement] In 1853, the British East India Company did not acknowledge the succession of Anand Rao, the son of Rani of Jhansi, as a lawful heir to the throne. How did the British justify this decision?",
    options: {
      a: "He was named the ruler without the consent of the British East India Company.",
      b: "He had inherited the private property of the deceased.",
      c: "He was not a natural male heir to the throne.",
      d: "He was too young to succeed to the throne.",
    },
    answer: "c",
  },
  {
    id: 9,
    question:
      "[Mass Phase of the National Movement] Replace the underlined phrase with the correct option: The objective of the Non-Cooperation Movement was to demobilise public opinion all over the country.",
    options: {
      a: "to make the movement rare and unique.",
      b: "to provide an international base for Congress.",
      c: "to generate a wedge between Hindu-Muslim unity.",
      d: "to attain self-governance.",
    },
    answer: "d",
  },
  {
    id: 10,
    question:
      "[The Indian National Movement] The central government of a country has decided to enforce a law that involves issuing licenses to keep arms. Who among the following British Governor Generals had passed a similar law in India in 1878?",
    options: {
      a: "Lord Curzon.",
      b: "Lord Lytton.",
      c: "Lord Ripon.",
      d: "Lord Dalhousie.",
    },
    answer: "b",
  },
  {
    id: 11,
    question:
      "[The Indian National Movement] Read the two statements given below about the split in Congress and select the option that shows the correct relationship between (A) and (B). (A) Leaders with moderate political opinions wanted to insert a Clause in the Congress Constitution that said that Swaraj was to be achieved through constitutional means. (B) Swadeshi and Boycott were the basic components of methods of struggle of the assertive nationalists that led to the split in the Congress in 1907.",
    options: {
      a: "(B) contradicts (A).",
      b: "(B) is the reason for (A).",
      c: "(A) is true, but (B) is false.",
      d: "(A) and (B) are independent of each other.",
    },
    answer: "b",
  },
  {
    id: 12,
    question:
      "[The Indian National Movement] Read the two statements given below about the Partition of Bengal and select the option that shows the correct relationship between (A) and (B). (A) The partition of Bengal 'was a mere readjustment of administrative boundaries.' (B) The nationalists believed that the Government did not intend to strike at the roots of Indian nationalism.",
    options: {
      a: "(B) contradicts (A).",
      b: "(B) is the reason for (A).",
      c: "(A) is true, but (B) is false.",
      d: "(A) and (B) are independent of each other.",
    },
    answer: "c",
  },
  {
    id: 13,
    question:
      "[The Indian National Movement] Analysing the picture given below, identify the statement that does NOT align with its content.",
    options: {
      a: "The press spread modern liberal ideals such as liberty, freedom, and equality among the populace.",
      b: "The press provided a platform for various social groups from different regions of the country to exchange their views.",
      c: "The press played an important role in organising political movements.",
      d: "The press regularly praised the policies of the British Government in India.",
    },
    answer: "d",
  },
  {
    id: 14,
    question:
      "[The Indian National Movement] Choose the options that DO NOT apply to the immediate objectives of the Indian National Congress. P- To prevent national workers from all parts of India from becoming personally known to each other. Q- To end all racial, religious, and provincial prejudices to promote national unity. R- To formulate popular demands on vital Indian problems and their presentation before the government. S- To manipulate the public opinion.",
    options: { a: "P and Q", b: "Q and R", c: "P and S", d: "R and S" },
    answer: "c",
  },
  {
    id: 15,
    question:
      "[Mass Phase of the National Movement] Assertion (A): Gandhiji called off the Non-Cooperation Movement in 1922. Reason (R): An unruly crowd burnt down a police station at Chauri-Chaura in 1922.",
    options: {
      a: "Both A and R are true, and R is the correct explanation of A.",
      b: "Both A and R are true, but R is not the correct explanation of A.",
      c: "A is true, but R is false.",
      d: "A is false, but R is true.",
    },
    answer: "a",
  },
  {
    id: 16,
    question:
      "[Mass Phase of the National Movement] The issue on which the Civil Disobedience Movement of 1930 was launched was",
    options: {
      a: "equal employment opportunities for Indians.",
      b: "the proposed execution of Bhagat Singh.",
      c: "salt monopoly exercised by the British Government.",
      d: "complete freedom.",
    },
    answer: "c",
  },
  {
    id: 17,
    question:
      "[Mass Phase of the National Movement] The statement, 'We shall either free India or die in the attempt', is associated with which of the following?",
    options: {
      a: "Non-Cooperation Movement",
      b: "Civil Disobedience Movement",
      c: "Individual Satyagraha",
      d: "Quit India Movement",
    },
    answer: "d",
  },
  {
    id: 18,
    question:
      "[Mass Phase of the National Movement] At Wardha, the Congress Working Committee adopted a resolution that was passed in Bombay. Name the resolution.",
    options: {
      a: "Poorna Swaraj Resolution",
      b: "Quit India Resolution",
      c: "Non-Cooperation Resolution",
      d: "Swaraj Resolution",
    },
    answer: "b",
  },
  {
    id: 19,
    question:
      "[Mass Phase of the National Movement] Arrange the following events of Netaji's life in chronological order. i. Supreme Commander of INA ii. Provisional Government of Free India iii. Formation of Forward Bloc iv. Congress Presidentship",
    options: {
      a: "i,iii,iv,ii",
      b: "iv,iii,ii,i",
      c: "i,ii,iii,iv",
      d: "iv,iii,i,ii",
    },
    answer: "d",
  },
  {
    id: 20,
    question:
      "[Mass Phase of the National Movement] Which of these statements regarding the status of Princely States are INCORRECT with reference to the Mountbatten Plan?",
    options: {
      a: "Princely states would receive the choice to be independent or join the Indian Union.",
      b: "All existing treaties with the princely states would end.",
      c: "A plebiscite will be held for all states.",
      d: "Freedom to associate with any dominion.",
    },
    answer: "c",
  },
  {
    id: 21,
    question:
      "[The Union Executive] Which of the following is an Executive function of the President in a parliamentary system?",
    options: {
      a: "Issuing ordinances",
      b: "Appointing the Prime Minister",
      c: "Granting assent to bills passed by Parliament",
      d: "Addressing the nation on Independence Day",
    },
    answer: "b",
  },
  {
    id: 22,
    question:
      "[The Union Executive] Assertion [A]: The President uses his discretionary judgment to appoint the Prime Minister when no party has a clear majority in the Parliament. Reason [R]: The President cannot appoint a new Prime Minister on the advice of the outgoing Prime Minister, who may have lost the election or the support of the House.",
    options: {
      a: "A is true, but R is false.",
      b: "A is false, but R is true.",
      c: "Both A and R are true, but R is not the correct explanation of A.",
      d: "Both A and R are false.",
    },
    answer: "c",
  },
  {
    id: 23,
    question:
      "[The Union Executive] Mr. Patil was not found eligible for the election as the Vice-President of India even though he had the qualifications of being a citizen of India and not being a member of the Parliament and State Legislature. On what ground was he disqualified?",
    options: {
      a: "For being above the age of thirty-five.",
      b: "For being qualified as a member of the Council of States.",
      c: "For holding any office of profit under the Centre or the State government.",
      d: "All of the above.",
    },
    answer: "c",
  },
  {
    id: 24,
    question:
      "[The Union Legislature] Your uncle is a renowned scientist. He has neither contested nor won any election to the Rajya Sabha. But he has recently become a member of the Rajya Sabha and has been appointed as a minister. How is this possible?",
    options: {
      a: "He was appointed by the Chief Justice of India.",
      b: "He was nominated by the President.",
      c: "He was appointed by the Prime Minister.",
      d: "He was nominated by the Governor.",
    },
    answer: "b",
  },
  {
    id: 25,
    question:
      "[The Judiciary] In August 2002, President Dr. Abdul Kalam sought the help of the Supreme Court in connection with the controversy between the Election Commission and the Government on elections in Gujarat. The Jurisdiction of the Supreme Court applicable in the above-mentioned situation is____",
    options: {
      a: "Revisory",
      b: "Appellate",
      c: "Advisory",
      d: "Original",
    },
    answer: "c",
  },
  {
    id: 26,
    question:
      "[The Union Legislature] The house is discussing an issue regarding the nation in the month of November. Which session is in motion?",
    options: {
      a: "Summer Session",
      b: "Budget Session",
      c: "Winter Session",
      d: "Monsoon Session.",
    },
    answer: "c",
  },
  {
    id: 27,
    question:
      "[The Contemporary World] Which of the following is INCORRECT with reference to World War I?",
    options: {
      a: "Triple Entente – France, Russia, Japan",
      b: "Allied Powers – Britain, France, Russia",
      c: "Triple Alliance – Germany, Italy, Austria-Hungary",
      d: "Central Powers – Germany, Austria, Italy",
    },
    answer: "d",
  },
  {
    id: 28,
    question:
      "[The Contemporary World] Which of the following statements is INCORRECT about the President & Vice President of the International Court of Justice?",
    options: {
      a: "Term in office is 3 years.",
      b: "They are both nominated by the United Nations General Assembly and the Security Council.",
      c: "The Vice-President takes charge in the absence of the President.",
      d: "The President and Vice-President may be re-elected.",
    },
    answer: "b",
  },
  {
    id: 29,
    question:
      "[The Contemporary World] Which of the following objectives of the UNO has been recently added?",
    options: {
      a: "Maintain international peace.",
      b: "Develop friendly relations among nations.",
      c: "Centre for harmonising the actions of nations.",
      d: "Disarm, decolonise and develop.",
    },
    answer: "d",
  },
  {
    id: 30,
    question:
      "[The Contemporary World] Why did Britain and France follow the policy of appeasement towards Japan in the period before the outbreak of WWII?",
    options: {
      a: "Japan could be used to weaken China.",
      b: "Japan was supporting Britain and France.",
      c: "Japan wanted to occupy the colonies of Britain.",
      d: "Japan was a weak country.",
    },
    answer: "a",
  },
  {
    id: 31,
    question:
      "[The Contemporary World] Which of the following statements about the Cold War is incorrect?",
    options: {
      a: "It was a competition between the US & the Soviet Union and their respective allies.",
      b: "It was an ideological war between the superpowers.",
      c: "It triggered an arms race.",
      d: "The US and USSR were engaged in direct wars.",
    },
    answer: "d",
  },
  {
    id: 32,
    question:
      "[The Contemporary World] Which movement is depicted in the cartoon showing Nehru looking neutrally at US and Soviet aid?",
    options: {
      a: "Formation of UN",
      b: "Non-Aligned movement",
      c: "Beginning Cold War",
      d: "None of the above",
    },
    answer: "b",
  },

  // --- SUBJECTIVE QUESTIONS (33-76) ---
  {
    id: 33,
    type: "subjective",
    question:
      "[The Union Legislature] 29th March 2023, The Hindu reported: Opposition MPs... are mooting an idea of a resolution against Lok Sabha Speaker Om Birla for being 'unfair'. What is the consequence when the Lok Sabha moves a resolution against the Speaker? In the above case, do you think the resolution would have led to such a consequence? Why?",
    answer:
      "The Speaker is removed from the position. In the above case, the resolution will not pass due to a lack of a majority.",
  },
  {
    id: 34,
    type: "subjective",
    question:
      "[The Union Legislature] 14th December 2023: Total 13 opposition MPs suspended... Who can suspend the members from the Lok Sabha? Mention any one probable circumstance under which he/she can suspend the members.",
    answer: "The Speaker. Lack of discipline (or any other relevant point).",
  },
  {
    id: 35,
    type: "subjective",
    question:
      "[The Judiciary] 2nd February 2024: Centre notifies appointment of Chief Justices of seven different High Courts. Can the Centre remove the judges? Give a reason for your answer.",
    answer:
      "The President (can appoint/remove). The judges can only be removed by the Parliament through the process of impeachment.",
  },
  {
    id: 36,
    type: "subjective",
    question:
      "[The Indian National Movement] State any two significant outcomes of the pact signed in 1916 between the Indian National Congress and the All-India Muslim League (Lucknow Pact).",
    answer:
      "1. It was an important step towards Hindu-Muslim unity and demoralised the British Government. 2. It led to the gradual development of Self-Governing Institutions.",
  },
  {
    id: 37,
    type: "subjective",
    question:
      "[The Indian National Movement] Read the excerpt about a bill that caused outrage in Britain regarding judicial equality... Which Bill is being referred to? What was its implication on the Indian judicial system?",
    answer:
      "The Ilbert Bill. It had put forward a proposal to allow Indian judges and magistrates to try British offenders in criminal cases, removing the absurdity that no European could be tried except by a European judge.",
  },
  {
    id: 38,
    type: "subjective",
    question:
      "[The Indian National Movement] He led a movement in India that called for the creation of a new social order in which no one would be subordinated to the upper-caste Brahmans... Identify the social reformer and the organisation he established in 1873.",
    answer: "Jyotiba Phule. Satya Sodhak Samaj.",
  },
  {
    id: 39,
    type: "subjective",
    question:
      "[Mass Phase] 'SIMON GO BACK' slogan. (a) Identify the event associated with the slogan. (b) Why did the Indian leaders decide to boycott the event?",
    answer:
      "(a) Simon Commission. (b) There was no Indian member on the commission, which was seen as a violation of self-determination and an insult to Indians.",
  },
  {
    id: 40,
    type: "subjective",
    question:
      "[Mass Phase] State any two reasons for the acceptance of the Mountbatten Plan.",
    answer:
      "1. Large-scale communal riots convinced leaders that Partition was the only solution. 2. The League joined the interim Government only to obstruct. 3. Partition was the price for immediate Independence.",
  },
  {
    id: 41,
    type: "subjective",
    question:
      "[Mass Phase] 'It is our duty to pay for our liberty with our own blood...' Put forth the slogans given by Subhash Chandra Bose.",
    answer: "Chalo Delhi. Jai Hind. 'Give me blood, I shall give you freedom.'",
  },
  {
    id: 42,
    type: "subjective",
    question:
      "[The Contemporary World] Mention ANY TWO functions of the UN agency associated with children (UNICEF).",
    answer:
      "1. To protect children in respect of their survival, health and well-being. 2. To provide funds for training personnel, health workers, and providing supplies/medicines.",
  },
  {
    id: 43,
    type: "subjective",
    question:
      "[The Contemporary World] Identify the big three (from the WWII era picture). Name the organisation formed by them after World War II.",
    answer:
      "Stalin, Churchill, Roosevelt. The U.N.O. (United Nations Organisation).",
  },
  {
    id: 44,
    type: "subjective",
    question:
      "[The Contemporary World] Mention the similarities in the ideologies of the dictators depicted in the cartoon (Hitler/Mussolini).",
    answer:
      "To have faith in totalitarian rule, despise democratic systems, hold that the state is supreme, uphold one party/leader, and believe in aggressive nationalism and imperialism.",
  },
  {
    id: 45,
    type: "subjective",
    question:
      "[The Union Executive] Is the Prime Minister like a king, or 'first among equals'? Justify your answer.",
    answer:
      "Student's response justification with one valid reason (e.g., He is the keystone of the cabinet arch but must maintain majority support and adhere to democratic principles).",
  },
  {
    id: 46,
    type: "subjective",
    question:
      "[The Judiciary] What does 'Habeas Corpus' mean? Which bodies in our Country are authorised to issue such orders?",
    answer:
      "'Habeas Corpus' means 'Have the body'. The Supreme Court & High Courts are authorised to issue such orders.",
  },
  {
    id: 47,
    type: "subjective",
    question:
      "[The Judiciary] With reference to the RK Laxman cartoon showing an old man being called 'Young Man' by a judge, explain a common problem of the judicial system and how a subordinate court solves it.",
    answer:
      "Problem: Delay in judgment. Solution: Lok Adalats can provide quick/speedy justice.",
  },
  {
    id: 48,
    type: "subjective",
    question:
      "[The Judiciary] Mr Aniruddh Choudhary is a retired judge of the Supreme Court who has been offered the position of legal head of a multinational company. Can he take up the offer? Why or Why not?",
    answer:
      "He cannot take up the offer as the retired judges of the Supreme Court are prohibited from practising after retirement.",
  },
  {
    id: 49,
    type: "subjective",
    question:
      "[The Union Legislature] If the Parliament has prorogued its session by the end of February, within which month it must have its next session? Why?",
    answer:
      "By the end of August. This is because the gap between two sessions must not be more than six months.",
  },
  {
    id: 50,
    type: "subjective",
    question:
      "[The Indian National Movement] Awadh was annexed on the ground of misrule. With respect to it, state two of its impacts.",
    answer:
      "1. It led to the dissolution of the court and the sacking of the army of Awadh. 2. It caused resentment among soldiers of the British Indian army who came from Awadh and lost their jobs.",
  },
  {
    id: 51,
    type: "subjective",
    question:
      "[Mass Phase] Explain what made the Lahore session of Congress in 1929 a momentous event.",
    answer:
      "The demand for Purna Swaraj (complete independence) was made the objective of the Congress. It marked a shift towards total sovereignty and laid the groundwork for the Civil Disobedience Movement.",
  },
  {
    id: 52,
    type: "subjective",
    question:
      "[Mass Phase] Mention any two ways in which the British Government reacted to the Quit India Resolution.",
    answer:
      "The press was muzzled, demonstrating crowds were machine-gunned/bombed, prisoners tortured, and top leaders like Gandhiji were immediately arrested and detained.",
  },
  {
    id: 53,
    type: "subjective",
    question:
      "[Mass Phase] Mention any two traits that made the Indian National Army unique.",
    answer:
      "It was organised on foreign soil, depended on patriotic fervour of Indian nationals in East Asia for funds/supplies, and its greatest asset was the spirit of self-sacrifice of its volunteers.",
  },
  {
    id: 54,
    type: "subjective",
    question:
      "[The Contemporary World] Name any one single nation-state and one imperial state before 1914.",
    answer:
      "Nation-states: France, Holland, Germany. Imperial states: Austria-Hungary, Russian Empire.",
  },
  {
    id: 55,
    type: "subjective",
    question:
      "[The Contemporary World] The League of Nations failed in preventing the Second World War II. Give two reasons.",
    answer:
      "No collective security among members, economic sanctions were of no use, and it lacked adequate coercive military machinery.",
  },
  {
    id: 56,
    type: "subjective",
    question:
      "[The Union Executive] As the leader of the cabinet, what are the powers of the Prime Minister of India?",
    answer:
      "Allocate portfolios, reshuffle the Council of Ministers, select & dismiss ministers, and direct & coordinate policy.",
  },
  {
    id: 57,
    type: "subjective",
    question:
      "[The Union Legislature] Mention any three exclusive powers of the Lok Sabha.",
    answer:
      "1. Motions of no-confidence can only be introduced here. 2. Money bills can only be introduced in Lok Sabha. 3. In a deadlock between houses, the will of Lok Sabha prevails due to numerical strength.",
  },
  {
    id: 58,
    type: "subjective",
    question:
      "[The Union Legislature] Mention any three ways in which the Parliament exercises control over the Executive.",
    answer:
      "Through question hour, votes of no-confidence, adjournment motions, rejection of Government Bills, and monetary control (budget).",
  },
  {
    id: 59,
    type: "subjective",
    question:
      "[The Judiciary] Analyse the role of the Lok Adalat by giving three advantages.",
    answer:
      "Saves time, saves money, works in the spirit of compromise, and reduces the burden of the higher courts.",
  },
  {
    id: 60,
    type: "subjective",
    question:
      "[The Indian National Movement] Highlight three ways in which India's wealth was being diverted to England.",
    answer:
      "Salaries of the India Council, pensions to British officials, payments for maintenance of British troops in India, and profits of British trading agencies.",
  },
  {
    id: 61,
    type: "subjective",
    question:
      "[Mass Phase] Name the movement that ensued with the Simon Commission coming to India. State any two significant impacts.",
    answer:
      "Civil Disobedience Movement. Impacts: Created patriotic fervour, forced British to consider reforms (Govt of India Act 1935), brought women into politics, and depressed classes gained entry to temples.",
  },
  {
    id: 62,
    type: "subjective",
    question:
      "[The Indian National Movement] Discuss how the British empire deindustrialised India.",
    answer:
      "India was turned into a colonial economy exporting raw materials and importing finished goods. Heavy duties were imposed on Indian goods in England, leading to the stagnation of Indian handicrafts and impoverishment of peasants.",
  },
  {
    id: 63,
    type: "subjective",
    question:
      "[Mass Phase] State the composition of the Constituent Assembly proposed by the Cabinet Mission.",
    answer:
      "389 members total: 296 elected from British Provinces, 93 from Princely States. Elected by Provincial Legislative Assemblies (Adult Suffrage was ruled out).",
  },
  {
    id: 64,
    type: "subjective",
    question:
      "[Mass Phase] When and where was the Second Round Table conference held? State the demand raised.",
    answer:
      "London, 1931. Deadlocked on minority issues; separate electorates were demanded by Muslims, Depressed Classes, Christians, etc., sidelining the demand for immediate dominion status.",
  },
  {
    id: 65,
    type: "subjective",
    question: "[Mass Phase] Enlist the impact of the Quit India Movement.",
    answer:
      "Demonstrated depth of nationalist feeling, made clear British could no longer rule against the people's wishes, saw participation from all sections of society, and strengthened the Congress Socialist Party.",
  },
  {
    id: 66,
    type: "subjective",
    question:
      "[The Contemporary World] Mention any three ways in which Germany was affected by the Treaty of Versailles.",
    answer:
      "1. Required to pay huge reparations (33 billion dollars). 2. Lost all overseas colonies. 3. Army restricted to 100,000 men and Navy to 15,000 men; Air Force banned. 4. Lost territories like Alsace-Lorraine.",
  },
  {
    id: 67,
    type: "subjective",
    question:
      "[The Contemporary World] Enumerate any three objectives of the Non-Aligned Movement.",
    answer:
      "1. To protect freedom of newly independent countries from colonial domination. 2. To oppose colonialism and racism. 3. To advocate peaceful settlement of international disputes.",
  },
  {
    id: 68,
    type: "subjective",
    question:
      "[The Contemporary World] Discuss a special power enjoyed by the permanent members of the UN Security Council.",
    answer:
      "The Veto Power. The negative vote of any of the five permanent members can stop the Council from acting on a non-procedural matter.",
  },
  {
    id: 69,
    type: "subjective",
    question:
      "[The Judiciary] Compare the Supreme Court and High Court regarding: (a) qualification (b) age of retirement (c) Original Jurisdiction.",
    answer:
      "SC: High Court judge for 5 yrs/Advocate for 10 yrs; Retirement at 65; Original: Centre-State disputes. HC: Judicial office 10 yrs/Advocate 10 yrs; Retirement at 62; Original: State revenue/divorce/election petitions.",
  },
  {
    id: 70,
    type: "subjective",
    question:
      "[The Union Executive] Does Lal Bahadur Shastri's resignation reflect Individual or Collective Responsibility? Highlight differences.",
    answer:
      "Individual Responsibility, as he took accountability for his specific department (Railways). Individual responsibility applies to a specific minister's department, while Collective Responsibility means all ministers jointly share responsibility for government policies.",
  },
  {
    id: 71,
    type: "subjective",
    question:
      "[The Union Executive] What can the President promulgate when Parliament is not in session? Who prepares it? Which body must approve it?",
    answer:
      "An Ordinance. Prepared by the Cabinet. Approved by the Parliament.",
  },
  {
    id: 72,
    type: "subjective",
    question:
      "[The Union Legislature] Why did the Supreme Court emphasise 'utmost protection' for Rajya Sabha elections? Mention one exclusive power of the Rajya Sabha.",
    answer:
      "Members are elected indirectly by MLAs, making them prone to political pressure; protection ensures they vote freely. Exclusive power: It is a permanent house and never dissolves.",
  },
  {
    id: 73,
    type: "subjective",
    question:
      "[The Judiciary] Mention any four ways in which the Constitution has ensured the independence of the judiciary.",
    answer:
      "1. Judges removed only through strict impeachment. 2. Security of tenure until age 65 (SC) or 62 (HC). 3. Salaries paid from Consolidated Fund. 4. Power to punish for contempt of court.",
  },
  {
    id: 74,
    type: "subjective",
    question:
      "[The Indian National Movement] Identify the ruthless Viceroy (1876-1880) and mention three of his policies.",
    answer:
      "Lord Lytton. 1. Reduced Civil Service age from 21 to 19. 2. Held Imperial Durbar during a massive famine. 3. Passed the Vernacular Press Act and Indian Arms Act in 1878.",
  },
  {
    id: 75,
    type: "subjective",
    question:
      "[Mass Phase] Name the incident related to 'The Amritsar Massacre' and examine the cause and effect.",
    answer:
      "Jallianwala Bagh Massacre. Cause: Peaceful gathering to protest the arrest of Dr Kichlew and Dr Satyapal. Effect: General Dyer fired on the unarmed crowd, killing hundreds. Resulted in widespread hatred against the British.",
  },
  {
    id: 76,
    type: "subjective",
    question:
      "[The Contemporary World] Which disaster was aggravated due to the assassination of Archduke Franz Ferdinand? What were the consequences?",
    answer:
      "The First World War. Consequences: Treaty of Versailles, massive territorial rearrangements, and the formation of the League of Nations.",
  },
];
