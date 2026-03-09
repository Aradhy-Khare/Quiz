const quizData = [
  {
    id: 1,
    question:
      "Ravi was asked to identify the cation present in the salt solution. He added one of the reagents given below and got a reddish-brown precipitate. The reagent that he used is:",
    options: {
      a: "Silver nitrate solution",
      b: "Barium chloride solution",
      c: "Ammonium hydroxide",
      d: "Calcium chloride solution",
    },
    answer: "c",
  },
  {
    id: 2,
    question:
      "Which metal does not react with HCl to form a colourless, odourless gas which burns with a pop sound?",
    options: {
      a: "Ca",
      b: "Mg",
      c: "Cu",
      d: "Zn",
    },
    answer: "c",
  },
  {
    id: 3,
    question:
      "Prateek added warm water to magnesium nitride, and a colourless gas evolved, which, when tested with phenolphthalein, turned it pink. The gas evolved is:",
    options: {
      a: "Carbon dioxide",
      b: "Ammonia",
      c: "Nitrogen",
      d: "Hydrogen chloride",
    },
    answer: "b",
  },
  {
    id: 4,
    question: "Which of the following statements about ethane is false?",
    options: {
      a: "It is a saturated hydrocarbon.",
      b: "It undergoes a substitution reaction.",
      c: "It is a gas at ordinary temperatures.",
      d: "It has a triple bond between the carbon atoms.",
    },
    answer: "d",
  },
  {
    id: 5,
    question:
      "Thermite mixture is used to weld the broken ends of the iron girders. This mixture consists of ferric oxide and aluminium powder, which, when heated, produces molten iron. In this reaction, the aluminium powder acts as a/an ______ agent.",
    options: {
      a: "oxidising",
      b: "reducing",
      c: "dehydrating",
      d: "corroding",
    },
    answer: "b",
  },
  {
    id: 6,
    question:
      "The diagram represents the electrolysis of acidulated water. The reaction occurring at the anode is:",
    options: {
      a: "H2SO4 -> 2H+ + SO4 2-",
      b: "H2O -> H+ + OH-",
      c: "H+ + e- -> H, 2[H] + 2[H] -> H2",
      d: "OH- - e- -> OH, [4OH] -> 2H2O + O2",
    },
    answer: "d",
  },
  {
    id: 7,
    question:
      "With reference to the portion of the periodic table given, identify the element having the largest atomic size:",
    options: {
      a: "Li",
      b: "B",
      c: "K",
      d: "L",
    },
    answer: "b",
  },
  {
    id: 8,
    question:
      "The picture given shows an apparatus that a teacher used for demonstrating the properties of ionic substances. The teacher heats a sample of lead bromide in a crucible which contains two electrodes which are part of the circuit shown. The bulb does not light up. What is the best explanation for this?",
    options: {
      a: "The circuit is complete.",
      b: "Molten lead bromide does not conduct electricity.",
      c: "The sample of lead bromide was not heated up to the melting point by the teacher.",
      d: "The DC power supply was set up correctly.",
    },
    answer: "c",
  },
  {
    id: 9,
    question:
      "Element Y is in Group IIA of the Periodic Table. Y reacts with element Q to form an ionic compound. Which equation shows the process that takes place when Y forms ions?",
    options: {
      a: "Y + 2e- -> Y2+",
      b: "Y - 2e- -> Y2-",
      c: "Y + 2e- -> Y2-",
      d: "Y - 2e- -> Y2+",
    },
    answer: "d",
  },
  {
    id: 10,
    question:
      "The diagram shows a circuit used to electrolyse aqueous sodium argento cyanide. Which arrow indicates the movement of the silver ions in the electrolyte and of the electrons in the external circuit?",
    options: {
      a: "1, 3",
      b: "1, 4",
      c: "2, 3",
      d: "4, 1",
    },
    answer: "d",
  },
  {
    id: 11,
    question:
      "The relative atomic mass of nitrogen is 14, and that of hydrogen is 1. This means that (i) ________ of nitrogen has the same mass as (ii) ________ of hydrogen. Which words correctly complete the gaps?",
    options: {
      a: "(i) An atom, (ii) 28 molecules",
      b: "(i) An atom, (ii) 7 molecules",
      c: "(i) A molecule, (ii) 14 atoms",
      d: "(i) A molecule, (ii) 7 atoms",
    },
    answer: "b",
  },
  {
    id: 12,
    question:
      "A student reacts copper turnings with cold dilute nitric acid in a test tube. He tests the gas given off with moist red and blue litmus paper. What is the name of the gas that evolved and what is the final colour of the litmus paper?",
    options: {
      a: "NO. No change in blue and red litmus paper",
      b: "NO2. Blue litmus turns red and no change in red litmus",
      c: "N2. No change in blue and red litmus paper",
      d: "N2O. No change in blue and red litmus paper",
    },
    answer: "a",
  },
  {
    id: 13,
    question:
      "Which element forms a stable ion with the same electronic configuration as argon?",
    options: {
      a: "Magnesium",
      b: "Fluorine",
      c: "Chlorine",
      d: "Sodium",
    },
    answer: "c",
  },
  {
    id: 14,
    question:
      "The diagram represents the molecule of an organic compound. What is the name of this compound?",
    options: {
      a: "Pentanol",
      b: "Butanol",
      c: "Butanoic acid",
      d: "Pentanoic acid",
    },
    answer: "b",
  },
  {
    id: 15,
    question:
      "When a compound was electrolysed using inert electrodes, the gas released at the anode made a glowing splinter rekindle. The electrolyte that will not produce such gas observation at the anode is:",
    options: {
      a: "diluted solution of NaCl.",
      b: "concentrated solution of NaCl.",
      c: "diluted solution of copper sulphate.",
      d: "acidified water.",
    },
    answer: "b",
  },
  {
    id: 16,
    question:
      "Which of the following chains of hydrocarbons undergoes two steps of reactions to become saturated?",
    options: {
      a: "- C - C -",
      b: "- C = C -",
      c: "- C ≡ C -",
      d: "branched alkane chain",
    },
    answer: "c",
  },
  {
    id: 17,
    question:
      "Given below are four different illustrations of preparing hydrochloric acid drawn by students. Which of these is the correct?",
    options: {
      a: "Diagram a",
      b: "Diagram b",
      c: "Diagram c",
      d: "Diagram d",
    },
    answer: "a",
  },
  {
    id: 18,
    question:
      "When two organic compounds A and B react together in the presence of conc. H2SO4, a fruity smell evolved from one of the products. If A has the functional group [-O-H], which of the following stands for the functional group of B?",
    options: {
      a: "-CHO",
      b: ">C=O",
      c: "-COOH",
      d: "-O-",
    },
    answer: "c",
  },
  {
    id: 19,
    question:
      "Given below are four covalent compounds. (A) H2O (B) CCl4 (C) Cl2 (D) NH3. Which of the following represents the correct order when they are arranged in their increasing number of covalent bonds?",
    options: {
      a: "B < D < A < C",
      b: "A < C < D < B",
      c: "C < D < A < B",
      d: "C < A < D < B",
    },
    answer: "d",
  },
  {
    id: 20,
    question:
      "The electrolytic cell used for the electrolysis of molten lead bromide is made of Silica. Which of the following properties of silica that is the reason for it not having much significance in the process of electrolysis?",
    options: {
      a: "Hard and strong",
      b: "Non-conductor of electricity",
      c: "Non-reactive",
      d: "Withstands high temperature",
    },
    answer: "a",
  },
  {
    id: 21,
    question:
      "A distinctive reaction that takes place when ethanol is treated with acetic acid in the presence of concentrated sulphuric acid to give a fruity smell. P: The reaction is called esterification. Q: The reaction is called hydration.",
    options: {
      a: "Only P",
      b: "Only Q",
      c: "Both P and Q",
      d: "Both P and Q are wrong",
    },
    answer: "a",
  },
  {
    id: 22,
    question:
      "The pH of the soil is tested, and for the better growth of crops, slightly alkaline soil is required. Which ion in the fertiliser will increase the alkalinity of the soil?",
    options: {
      a: "Hydronium ion",
      b: "Hydroxyl ion",
      c: "Hydrogen ion",
      d: "Both hydroxyl and hydrogen",
    },
    answer: "b",
  },
  {
    id: 23,
    question:
      "Ramu makes a detailed study on the values of electronegativity and the formation of compounds. Accordingly, he draws the following conclusion: The larger the electronegativity (EN) difference between the combining atoms, the more ionic bonds will form. If the EN difference is negligible, covalent bonds will form. So, which of the following values refers to covalent bonds?\nP: 3.0 and 3.0\nQ: 0.9 and 3.0",
    options: {
      a: "Only P",
      b: "Only Q",
      c: "Both P and Q",
      d: "Neither P nor Q",
    },
    answer: "a",
  },
  {
    id: 24,
    question:
      "10g of magnesium carbonate reacts completely with excess dilute hydrochloric acid. What volume of carbon dioxide is formed at room temperature and pressure? [Mg=24, C=12, O=16]\nThe equation for the reaction is:\nMgCO3 + 2HCl -> MgCl2 + H2O + CO2",
    options: {
      a: "2.8 dm3",
      b: "2.6 dm3",
      c: "2.2 dm3",
      d: "2.4 dm3",
    },
    answer: "b",
  },
  {
    id: 25,
    question:
      "The diagram shown is a wrong attempt to electroplate a pan with copper: Which of the following could have been done to copper plate a pan?",
    options: {
      a: "To change DC to AC.",
      b: "To change the electrolyte from copper sulphate to cobalt sulphate.",
      c: "Connect the pan to the negative electrode.",
      d: "To induce a higher current.",
    },
    answer: "c",
  },
  {
    id: 26,
    question:
      "During the extraction of aluminium by Hall Heroult’s process, the carbon rods are replaced continuously. This is because:",
    options: {
      a: "It minimises heat loss by radiation.",
      b: "It enhances the mobility of ions.",
      c: "The carbon anode is consumed.",
      d: "It lowers the fusion point.",
    },
    answer: "c",
  },
  {
    id: 27,
    question:
      "Which of the following observations correctly shows the action of indicator on sodium hydroxide solution?",
    options: {
      a: "P: methyl orange orange to yellow, phenolphthalein remains colourless",
      b: "Q: methyl orange orange to pink, phenolphthalein remains colourless",
      c: "R: methyl orange orange to yellow, phenolphthalein colourless to pink",
      d: "S: methyl orange remains orange, phenolphthalein remains pink",
    },
    answer: "c",
  },
  {
    id: 28,
    question:
      "When electrolysis of molten lead bromide is carried out, the products formed at the respective electrodes are:",
    options: {
      a: "At the positive electrode: Bromine, At the negative electrode: Lead",
      b: "At the positive electrode: Bromine, At the negative electrode: Hydrogen",
      c: "At the positive electrode: Lead, At the negative electrode: Bromine",
      d: "At the positive electrode: Lead, At the negative electrode: Oxygen",
    },
    answer: "a",
  },
  {
    id: 29,
    question:
      "The following are the structural diagrams of certain hydrocarbons: Which two structures are related to each other?",
    options: {
      a: "A and B",
      b: "B and C",
      c: "C and D",
      d: "A and C",
    },
    answer: "d",
  },
  {
    id: 30,
    question:
      "The electronic configuration of X is 2,8,6. It gains 'Y’ electrons into its valence shell to attain the nearest noble gas electronic configuration and gets converted to an ion Z. X, Y, and Z, respectively, are:",
    options: {
      a: "Sodium, one, electropositive",
      b: "Beryllium, two, electronegative",
      c: "Oxygen, six, electronegative",
      d: "Sulphur, two, electronegative",
    },
    answer: "d",
  },
  {
    id: 31,
    question:
      "Which of the following arrangements is INCORRECT as per the property stated against it?",
    options: {
      a: "Li > Be > N > O (Metallic character)",
      b: "CI > F > Br > I (Electron gain enthalpy)",
      c: "O2- > F- > Mg2+ > Na+ (Ionic radii)",
      d: "I > Br > CI > F (Number of shells)",
    },
    answer: "c",
  },
  {
    id: 32,
    question:
      "Baking soda (NaHCO3), when added to vinegar, evolves a gas. Which of these statements is true about the evolution of gas?\nI. It turns limewater milky.\nII. It extinguishes the burning splinter.\nIII. It acts as a non-metallic oxide.\nIV. It has a pungent odour.",
    options: {
      a: "I and IV",
      b: "I and II",
      c: "I, II and III",
      d: "III and IV",
    },
    answer: "c",
  },
  {
    id: 33,
    question:
      "The statements below show the results when three metal strips, P, Q, and R, are placed in blue copper sulphate solution.\nP- Solution turns green.\nQ- Solution becomes colourless.\nR- Solution remains blue.\nWhich of the following metals could be P, Q, and R?",
    options: {
      a: "P-Al, Q-Zn, R-Fe",
      b: "P-Zn, Q-Fe, R-Ag",
      c: "P-Fe, Q-Zn, R-Ag",
      d: "P-Zn, Q-Al, R-Fe",
    },
    answer: "c",
  },
  {
    id: 34,
    question:
      "Compound X reacts with ammonia in the combustion tube, which leaves a residue Y. Identify X and Y, as well as the property Z of ammonia demonstrated in this particular reaction.",
    options: {
      a: "X = CuO, Y = black, Z = reducing property.",
      b: "X = PbO, Y = yellow, Z = oxidising property.",
      c: "X = CuO, Y = yellow, Z = oxidising property.",
      d: "X = PbO, Y = black, Z = reducing property.",
    },
    answer: "a",
  },
  {
    id: 35,
    question:
      "Assertion (A): Few drops of dilute acid is added to a solution of zinc sulphide, a colourless gas is formed with a rotten egg odour.\nReason (R): Gas formed does not turn moist lead acetate paper silvery black.",
    options: {
      a: "Both A and R are true.",
      b: "A and R are true, but R is the correct explanation of A.",
      c: "A is true, but R is not the correct explanation of A.",
      d: "Both A and R are false.",
    },
    answer: "c",
  },
  {
    id: 36,
    question:
      "Assertion (A): Hall Heroult’s process is used to get pure aluminium from its oxide.\nReason (R): Aluminium generally is not found in aluminium oxide form.",
    options: {
      a: "Both A and R are correct.",
      b: "A is correct, but R is not a true explanation of A.",
      c: "A is correct, and R is a true explanation of B.",
      d: "Both A and R are incorrect.",
    },
    answer: "a",
  },
  {
    id: 37,
    question:
      "Assertion (A): Alkenes, alkynes and alkanes are examples of homologous series.\nReason (R): Organic compounds of the homologous series have similar structures but different chemical properties.",
    options: {
      a: "Both A and R are true.",
      b: "Both A and R are false.",
      c: "A is true but R is not the correct explanation of A.",
      d: "A is false but R is true.",
    },
    answer: "c",
  },
  {
    id: 38,
    question:
      "Assertion (A): The atomic mass of oxygen is 16 a.m.u; therefore, its gram atomic mass is 16g.\nReason (R): The atomic mass of an element expressed in grams is called gram atomic mass.",
    options: {
      a: "A is true, and R is the correct explanation of A.",
      b: "Both A and R are true, but R is not a true explanation of A.",
      c: "Both A and R are false.",
      d: "R is false, but A is a true explanation.",
    },
    answer: "a",
  },
  {
    id: 39,
    type: "subjective",
    question:
      "Fill in the blanks by choosing the correct options given in the brackets:\nAn aqueous solution of gas X turns red litmus blue, so it must contain (i)________ (hydrogen/ hydroxyl) ions. When this solution is added in excess to copper sulphate solution, it turns to (ii) ______ (deep blue/ pale blue) solution. Gas X is also a good (iii)_____(oxidising/reducing) agent, which in excess reacts with a greenish-yellow gas to form dense white fumes of (iv) _______ (hydrogen chloride/ammonium chloride).",
    answer: "(i) hydroxyl\n(ii) deep blue\n(iii) reducing agent\n(iv) ammonium chloride",
  },
  {
    id: 40,
    type: "subjective",
    question:
      "Ammonia can convert heated copper oxide to copper. This shows that ammonia is a ____________ (reducing agent/oxidising agent).",
    answer: "Reducing agent",
  },
  {
    id: 41,
    type: "subjective",
    question:
      "The number of hydrogen atoms present in 1 mole of sulphuric acid and 1 mole of sulphurous acid are (X) and (Y), respectively. Relationship between X and Y is ____________ (X=Y / cannot compare X and Y).",
    answer: "X=Y",
  },
  {
    id: 42,
    type: "subjective",
    question:
      "Hydrocarbon X decolourises bromine in carbon tetrachloride, and hydrocarbon Y does not decolourise bromine water. Both of the compounds burn with a sooty flame. The molecular formula of X and Y is ____________ (C5H12 and C4H8 / C5H8 and C4H10).",
    answer: "C5H8 and C4H10",
  },
  {
    id: 43,
    type: "subjective",
    question:
      "The number of chain isomers possible for an alkane with 5 carbon atoms are _______ (3 / 4).",
    answer: "3",
  },
  {
    id: 44,
    type: "subjective",
    question:
      "Cations are ___________ (oxidised/ reduced) ions due to the _________(gain/loss) of electrons by the neutral atom.",
    answer: "Oxidised, loss",
  },
  {
    id: 45,
    type: "subjective",
    question:
      "If a hydrocarbon has the formula of C50H98, then it is likely to undergo ________a/an (addition/ substitution) reaction, and the hydrocarbon is a/an _____________ (saturated/ unsaturated hydrocarbon).",
    answer: "Addition, unsaturated hydrocarbon",
  },
  {
    id: 46,
    type: "subjective",
    question:
      "The atomic size of Boron is 0.88 A⁰, and that of nitrogen is 0.70 A⁰. Nitrogen lies to the ______ (left/ right) of Boron.",
    answer: "Right",
  },
  {
    id: 47,
    type: "subjective",
    question:
      "The ______ (higher/ lower) is the position of the cation in the electrochemical series, the greater the difficulty of it being discharged at the cathode.",
    answer: "Higher",
  },
  {
    id: 48,
    question: "The correct order of increasing volatility of the acids is _______.",
    options: {
      a: "HCl < CH3COOH < HNO3",
      b: "CH3COOH < HCl < HNO3",
      c: "HNO3 < HCl < CH3COOH",
      d: "HCl < HNO3 < CH3COOH",
    },
    answer: "b",
  },
  {
    id: 49,
    question:
      "Nikita wanted to gift her friend a decorative piece that is quite hard and strong, doesn’t get corroded and can be polished. She selected a statue that matched her criteria as it was made of an alloy whose main constituent was _______.",
    options: {
      a: "Cu",
      b: "Al",
      c: "Fe",
      d: "Zn",
    },
    answer: "a",
  },
  {
    id: 50,
    type: "subjective",
    question:
      "Match the following:\nColumn A\n(a) Alkali metals\n(b) Alkaline earth metals\n(c) Atomic radius decreases\n(d) Non-metallic character decreases\n(e) Period 3 elements\n\nColumn B\n(i) Be, C, O, F\n(ii) F, Cl, Br, I\n(iii) P, Al, Na, S\n(iv) K, Na, Li, Rb\n(v) Ba, Ca, Sr, Ra",
    answer: "(a) - (iv)\n(b) - (v)\n(c) - (i)\n(d) - (ii)\n(e) - (iii)",
  },
];