const quizData = [
  {
    id: 1,
    question:
      "When light enters from air to glass, it bends toward the normal. If red, blue, and yellow colours are allowed to enter the same glass block at the same angle of incidence, then for which colour, the value of $\\angle i-\\angle r$, be greater?",
    options: {
      a: "green",
      b: "red",
      c: "blue",
      d: "yellow",
    },
    answer: "c",
  },
  {
    id: 2,
    question:
      "Assertion (A): When light passes through a triangular prism, it is observed that for two angles of incidence, the angle of deviation is the same.\n Reason (R): According to the principle of reversibility, the light retraces the path in reversing the direction.",
    options: {
      a: "A and R are true, and R is the reason for A.",
      b: "A and R are true, and R is not the reason for A.",
      c: "A is true, but R is false.",
      d: "A is false, but R is true.",
    },
    answer: "a",
  },
  {
    id: 3,
    question:
      "Which of the following diagrams shows the correct path of light through the lens?",
    options: {
      a: "Diagram (a)",
      b: "Diagram (b)",
      c: "Diagram (c)",
      d: "Diagram (d)",
    },
    answer: "b",
  },
  {
    id: 4,
    question:
      "The diagrams below show four pulley systems. State which of the statements following the diagrams is true.",
    options: {
      a: "There are three pulley systems with V.R.=2 and one pulley system with V.R.=1",
      b: "There are two pulley systems with V.R.=2, one pulley system with V.R.=3 and one pulley system with VR.=1.",
      c: "There are two pulley systems with V.R.=2, one pulley system with V.R.=3 and one pulley system with V.R.=4.",
      d: "There are two pulley systems with V.R.=2 and two pulley system with V.R.=3.",
    },
    answer: "d",
  },
  {
    id: 5,
    question:
      "The diagrams below show a force F=40 N acting on a rod AB pivoted at A in different directions. Identify the correct statement.",
    options: {
      a: "P and S have opposite moments.",
      b: "The magnitude of the moment of force is maximum in R.",
      c: "The magnitude of the moment of force is maximum in P and Q.",
      d: "The moment of force in R is negative.",
    },
    answer: "c",
  },
  {
    id: 6,
    question:
      "In the diagram below, four cones are depicted, each with a height of 12cm. The position of the center of gravity is indicated by dots located at 9cm, 8cm, 4cm, and 3cm from the apex of each cone. Which of these cones is completely solid?",
    options: {
      a: "9cm",
      b: "8cm",
      c: "4cm",
      d: "3cm",
    },
    answer: "a",
  },
  {
    id: 7,
    question:
      "The given figure depicts the graph of work done vs. displacement under a constant force of 10N. Which of the following statements is true?",
    options: {
      a: "Force is acting at an angle of 0° with the displacement.",
      b: "Force is acting at an angle of 45° with the displacement.",
      c: "Force is acting at an angle of 60° with the displacement.",
      d: "Force is acting at an angle of 90° with the displacement.",
    },
    answer: "c",
  },
  {
    id: 8,
    question:
      "During his experiments with a single movable pulley, Jas determined the effort, mechanical advantage and efficiency as X, Y & Z, respectively. Subsequently, after lubricating the pulley thoroughly, he recalculated the effort, MA and efficiency. X' Y' & Z' respectively. Which of the following relationships accurately represents the scenario?",
    options: {
      a: "X'>X",
      b: "Y'<Y",
      c: "Z'>Z",
      d: "Z'=Z",
    },
    answer: "c",
  },
  {
    id: 9,
    question:
      "Assertion: For a glass block, the i vs. r graph is a straight line.\n Reason: When a ray of light undergoes refraction, it follows Snell's law.",
    options: {
      a: "Both Assertion and Reason are true, and the Reason is the correct explanation of the Assertion.",
      b: "Both Assertion and Reason are true, but Reason is not the correct explanation of the Assertion.",
      c: "Assertion is true, but the Reason is false.",
      d: "Assertion is false, but the Reason is true.",
    },
    answer: "d",
  },
  {
    id: 10,
    question:
      "______ of UV > ______ of microwaves. The quantity suitable for filling in both the blanks is:",
    options: {
      a: "speed in vacuum",
      b: "speed in a medium",
      c: "frequency",
      d: "wavelength.",
    },
    answer: "c",
  },
  {
    id: 11,
    question:
      "Sumit, a teenager, enjoys playing his music loudly. However, his grandmother consistently lowers the volume of the music player. Analyse the wave to identify which characteristic of the wave has been altered when the grandmother reduces the volume.",
    options: {
      a: "The length PS becomes more.",
      b: "The length SR becomes less.",
      c: "The length QR becomes less.",
      d: "The length PR becomes less.",
    },
    answer: "c",
  },
  {
    id: 12,
    question:
      "Data: mass = 10g quantity of heat supplied = 120J rise in temperature = 10C\n STATEMENT A: The heat capacity of the substance is 12 J/g.\n STATEMENT B: The specific heat capacity of the substance is 1.2 J/gK",
    options: {
      a: "Only statement A is correct.",
      b: "Only statement B is correct.",
      c: "Both statements A and B are correct.",
      d: "Both statements A and B are incorrect.",
    },
    answer: "b",
  },
  {
    id: 13,
    question:
      "Given that the resistivity of Gold and Platinum is 2.1 x 10^-8 and 10.5 x 10^-8 ohm m, respectively, which is the correct statement?\n STATEMENT A: 5 metres of platinum wire will have the same resistance as one metre of gold wire.\n STATEMENT B: Gold wire of 1cm radius will have the same resistance as platinum wire of 5cm radius.",
    options: {
      a: "Only statement A is correct.",
      b: "Only statement B is correct.",
      c: "Both statements A and B are correct.",
      d: "Both statements A and B are incorrect.",
    },
    answer: "d",
  },
  {
    id: 14,
    question:
      "Assertion: A switch will serve the purpose of making and breaking a circuit when it is connected to the neutral wire.\n Reason: Neutral wire is at zero potential.",
    options: {
      a: "Both Assertion and Reason are true, and the Reason is the correct explanation of the Assertion",
      b: "Both Assertion and Reason are true, but Reason is not the correct explanation of the Assertion",
      c: "Assertion is true, but the Reason is false.",
      d: "Both Assertion & Reason are false.",
    },
    answer: "b",
  },
  {
    id: 15,
    question: "The given rods will attract each other when:",
    options: {
      a: "A and C are connected to positive terminal of the battery.",
      b: "B and C are connected to the positive terminal of the battery.",
      c: "A and D are connected to the positive terminal of the battery.",
      d: "A and D are connected to the negative terminal of the battery.",
    },
    answer: "a",
  },
  {
    id: 16,
    question: "Which of the following equations are correctly balanced?",
    options: {
      a: "Only D",
      b: "Only C",
      c: "Both A & B",
      d: "Both C & D",
    },
    answer: "d",
  },
  {
    id: 17,
    question:
      "The above picture shows three cylinders filled with water to a different extent. The tuning forks L, M and N in vibration produce louder sound when held above the mouth of the cylinders. Which combination is correct for hearing a louder sound of the tuning fork?",
    options: {
      a: "L-R, M-Q, N-P",
      b: "L-P, M-Q, N-R",
      c: "L-R, M-P, N-Q",
      d: "L-Q, M-R, N-P",
    },
    answer: "d",
  },
  {
    id: 18,
    question:
      "Three metals, A, B and C, are supplied with the same quantity of heat. Their masses are in the ratio 2:3:4. If they show the same rise in the temperature, then the ratio of their thermal capacities will be:",
    options: {
      a: "1:1:1",
      b: "4:3:2",
      c: "2:3:4",
      d: "2:3:1",
    },
    answer: "a",
  },
  {
    id: 19,
    question:
      "The above diagram shows different copper conductors of diameters d and 2d and lengths, which are multiples of l. The increasing order of their resistances will be:",
    options: {
      a: "A < B < C < D",
      b: "A < C < D < B",
      c: "A < D < C < B",
      d: "D < A < C < B",
    },
    answer: "b",
  },
  {
    id: 20,
    question:
      "The diagram shows the magnificent dome at Gol Ghumbaz at Bijapur. A boy standing at A whispers, and it is clearly heard at B across the huge dome. [Speed of sound is 330 ms-1]\n Assertion (A): The distance travelled by sound waves (x+y) should be < 33 m.\n Reason (R): Sound reflected within 0.1 s is not heard by humans.",
    options: {
      a: "A and R are true, and R is the reason for A.",
      b: "A and R are true, and R is not the reason for A.",
      c: "A is true, but R is false.",
      d: "A is false, but R is true.",
    },
    answer: "d",
  },
  {
    id: 21,
    question:
      "A magnetic compass is present on a small table, very close to the wall in a room. A man enters the room and switches on the Air Conditioner fitted near the ceiling. He observes that the needle in the compass shows immediate deflection. Identify the most probable reason for the deflection.",
    options: {
      a: "Air blowing in the room.",
      b: "Current starts flowing through AC wire concealed in the adjacent wall.",
      c: "Vibrations are produced when the Man starts talking to his wife in the kitchen.",
      d: "Vibrations were produced due to a file in his hand that fell on the ground.",
    },
    answer: "b",
  },
  {
    id: 22,
    question:
      "Two substances, A and B, have the same mass. Substance A has a higher specific heat capacity than substance B. What consequences would you expect when these substances are subjected to the same amount of heat energy?",
    options: {
      a: "Substance A will experience a smaller temperature change than substance B.",
      b: "Substance A will experience a larger temperature change than substance B.",
      c: "Both substances will experience the same temperature change.",
      d: "Either of them can show a greater change in temperature as the temperature change depends on factors other than specific heat capacity.",
    },
    answer: "a",
  },
  {
    id: 23,
    question:
      "A student traces the path of a ray of light through a glass prism for different angles of incidence. He analyses each diagram and draws the following conclusion:\n I. On entering the prism, the light ray bends towards its base.\n II. Light ray suffers refraction at the point of incidence and at the point of emergence while passing through the prism.\n III. An emergent ray bends at a certain angle to the direction of the incident ray.\n IV. While emerging from the prism at the second surface, the angle of refraction is less than the angle of incidence at that surface.\n Which of the above inferences are correct?",
    options: {
      a: "I, II and III",
      b: "I, III and IV",
      c: "II, III and IV",
      d: "All of these.",
    },
    answer: "a",
  },
  {
    id: 24,
    question:
      "A metal ball is whirled inside a ring placed on a table, as shown in the diagram P. The diagram Q shows the motion of the ball after the ring is lifted. Which of the following diagrams shows the correct position of the metal ball in the ring when the ring is lifted?",
    options: {
      a: "Diagram (a)",
      b: "Diagram (b)",
      c: "Diagram (c)",
      d: "Diagram (d)",
    },
    answer: "c",
  },
  {
    id: 25,
    question:
      "Assertion (A): Sometimes the sky appears reddish in the evening.\n Reason (R): Red, being longer in wavelength, scatter more than the other colours.",
    options: {
      a: "A and R are true, and R is the reason for A.",
      b: "A and R are true, and R is not the reason for A.",
      c: "A is true, but R is false.",
      d: "A is false, but R is true.",
    },
    answer: "c",
  },
  {
    id: 26,
    question:
      "Assertion (A): When the displacement is zero, then the work is zero. So, if the work done is zero, then it necessarily means the displacement is zero.\n Reason (R): Work done is calculated by the relation W = FScosθ",
    options: {
      a: "A and R are true, and R is the reason for A.",
      b: "A and R are true, and R is not the reason for A.",
      c: "A is true, but R is false.",
      d: "A is false, but R is true.",
    },
    answer: "d",
  },
  {
    id: 27,
    question:
      "Which of the following statement is CORRECT? The frequency of a stretched string is:",
    options: {
      a: "directly proportional to its length but inversely proportional to the tension of the wire.",
      b: "inversely proportional to its length but directly proportional to the tension of the wire.",
      c: "directly proportional to the square root of its length but inversely proportional to the tension of the wire.",
      d: "inversely proportional to its length but directly proportional to the square root of the tension of the wire.",
    },
    answer: "d",
  },
  {
    id: 28,
    question:
      "A ray of light passes obliquely from an optical medium of refractive index 1.33 to another medium of refractive index 1.5. While passing from the first medium to the second, the light ray will:",
    options: {
      a: "bend towards the normal.",
      b: "bend away from the normal.",
      c: "move along the normal.",
      d: "suffer total internal reflection.",
    },
    answer: "a",
  },
  {
    id: 29,
    question:
      "You want to register your name for an examination. For registration purposes, you need a passport-size photograph of yourself. When you went to a studio, the photographer told you to sit on a chair in front of a white screen in the room.\n Assertion (A): This is purposefully done so that you as an object should stand beyond the centre of curvature of the camera lens, but surely not at an infinite distance.\n Reason (R): The characteristics of the image formed are that it can be taken on a screen and is also diminished in size.",
    options: {
      a: "Both A and R are true, and R is the correct explanation of A.",
      b: "Both A and R are true, and R is not the correct explanation of A.",
      c: "A is true, but R is false.",
      d: "Both A and R are false.",
    },
    answer: "a",
  },
  {
    id: 30,
    question:
      "Rivers which originate from the glaciers at high altitudes have a supply of water throughout the year. This is because ice in high mountains does not melt all at once. This is due to:",
    options: {
      a: "high specific heat of ice.",
      b: "low specific heat of ice.",
      c: "low specific latent heat of fusion of ice.",
      d: "high specific latent heat of fusion of ice.",
    },
    answer: "d",
  },
  {
    id: 31,
    question:
      "If three resistors R1, R2 and R3 are connected in series and by R1 > R2 > R3, then what is the relation between the currents I1, I2 and I3 respectively flowing through them?",
    options: {
      a: "I1 = I2 = I3",
      b: "I1 < I2 < I3",
      c: "I1 > I2 > I3",
      d: "1/I1 < 1/I2 < 1/I3",
    },
    answer: "a",
  },
  {
    id: 32,
    question: "What is the ratio of wavelengths between P, Q and R?",
    options: {
      a: "3:2:1",
      b: "1:2:3",
      c: "6:3:2",
      d: "2:3:6",
    },
    answer: "d",
  },
  {
    id: 33,
    question:
      "During the change of state of a substance from solid to liquid, heat is absorbed by a body, but its temperature does not rise. Which of the following statements explains the phenomenon?",
    options: {
      a: "Only K.E of the molecules increases, but P.E remains the same.",
      b: "Only P.E of the molecules increases, but K.E remains the same.",
      c: "Both K.E and P.E of the molecules increase.",
      d: "There is no increase in the P.E and K.E of the molecules.",
    },
    answer: "b",
  },
  {
    id: 34,
    question:
      "Assertion (A): When current is passed through a wire, a magnetic field is generated around the wire.\n Reasoning (R): Whenever there is a change of magnetic flux linked up with the coil, the induced current is generated in the coil.",
    options: {
      a: "Both A and R are correct, and R is the correct explanation of A.",
      b: "Both A and R are correct, but R is not the correct explanation of A.",
      c: "A is correct but R is wrong.",
      d: "Both A and R are wrong.",
    },
    answer: "b",
  },
  {
    id: 35,
    question:
      "Which of the following combinations correctly shows the charges on the particles.?",
    options: {
      a: "proton, neutron, alpha particle",
      b: "alpha particle, electron, neutron",
      c: "proton, electron, alpha particle",
      d: "electron, Proton, alpha particle",
    },
    answer: "c",
  },
  {
    id: 36,
    type: "subjective",
    question:
      "Anu and Amy purchased ice creams in plastic balls and cones, respectively, during their outing at the science fair. After consuming their ice creams, Anu stated that regardless of whether they were filled with ice cream or empty, the centre of gravity of the objects would remain unchanged. Do you agree with Anu? Why?",
    answer:
      "No\nThe Centre of gravity of the sphere remains the same, while the CG of hollow cones and solid cones are different.",
  },
  {
    id: 37,
    type: "subjective",
    question:
      "The picture below shows a boy climbing a rope ladder hanging from the branch of a tree. The boy in the picture finds it difficult to climb the ladder as it turns about the axis where he is holding. The instructor tells the boy to stretch the body with the hands stretched up and make the body parallel to the ladder and climb.\n(a) Which force caused the ladder to turn?\n(b) How does keeping the body parallel to the ladder make climbing easier?",
    answer:
      "(a) His own weight causes the torque on his body and turns about his hands holding the ladder.\n(b) By stretching and keeping the body parallel to the rope decreases the torque arm, reducing the torque and makes it easier to climb.",
  },
  {
    id: 38,
    type: "subjective",
    question:
      "Regenerative braking involves harnessing the energy that is typically lost when a car decelerates and brakes and instead using it to recharge the car's batteries. Unlike traditional braking systems that simply dissipate energy, regenerative braking allows some of that energy to be recycled.\n(a) What is the energy conversion process that results in the wastage of energy in a normal car during braking?\n(b) How does regenerative braking differ from normal braking in terms of energy conversion?",
    answer:
      "(a) Kinetic energy to heat (due to friction).\n(b) Kinetic to electrical energy.",
  },
  {
    id: 39,
    type: "subjective",
    question:
      "John is trying to create musical notes using water-filled bottles, as shown in the picture. Which of the bottles is likely to produce a musical note with the highest pitch? Give reasons.",
    answer:
      "B;\nFrequency is inversely proportional to the length of the air column.",
  },
  {
    id: 40,
    type: "subjective",
    question:
      "When Shyam, the band leader, struck both the bass drum and the kettle drum with equal force, the bass drum emitted a sound measuring 120dB, whereas the kettle drum produced a sound of 90dB. Explain this discrepancy in the loudness.",
    answer:
      "Surface area of bass drums is bigger than that of kettle drums. Larger the surface area louder is the sound produced.",
  },
  {
    id: 41,
    type: "subjective",
    question:
      "In the above diagram, calculate the ratio of the resistances A, B, C and D.",
    answer:
      "Let the resistance of D be x. Therefore, the resistances of A, B and C will be x/4, 3x and 2x/4. Therefore, the ratio of their resistances will be x/4 : 3x : x/2 : x therefore 1: 12: 2: 4",
  },
  {
    id: 42,
    type: "subjective",
    question:
      "There are two copper wires of length ratio 1:2 that have their cross-sectional areas in the ratio 1:4. What will be the ratio of their:\n(a) resistances?\n(b) specific resistances?",
    answer: "(a) R1: R2 = l1/A1 : l2/A2 therefore R1: R2 = 2: 1\n(b) 1:1",
  },
  {
    id: 43,
    type: "subjective",
    question:
      "AB is an object and PQ is its real, inverted image. The lengths of AB and PQ are equal. This is possible when a lens is present between the object and its image.\n(a) What kind of lens is used here? Also, state the position of the lens and where it is to be placed.\n(b) Name a device where this lens action is used.",
    answer:
      "(a) Convex lens, at the midpoint of the distance between the object and the image.\n(b) Photocopier / xerox machine / intermediate lens in a terrestrial telescope.",
  },
  {
    id: 44,
    type: "subjective",
    question:
      "The two metals A and B have their specific heat capacities in the ratio 2:3. If they are supplied the same amount of heat, then\n(a) which metal piece will show a greater rise in temperature if their masses are the same?\n(b) calculate the ratio in which their temperatures rise, if the mass ratio of metal A and metal B is 3:5.",
    answer: "(a) Metal A\n(b) 5:2",
  },
  {
    id: 45,
    type: "subjective",
    question:
      "Soumya took two right circular cones of the same vertical height. One of the two cones is a solid one, while the other is hollow from inside. By measuring the cross-sectional areas of the cones and from the knowledge of symmetry, by using suitable formulas, he found the positions of the centre of gravity of both cones. He found that the difference is about 1.5 cm. What is the vertical height of the two cones?",
    answer:
      "h/3 - h/4 = 1.5 therefore h/12 = 1.5 therefore h = 1.5 x 12 = 18 cm",
  },
  {
    id: 46,
    type: "subjective",
    question:
      "Seismic waves have different frequencies. During earthquakes, why are short-length buildings more prone to damage caused by high-frequency seismic waves?",
    answer:
      "Natural frequency of a body is inversely proportional to the length of the body. High frequency seismic waves can resonate with short length buildings, and due to the large amplitude of vibration, it can cause more damage to the buildings.",
  },
  {
    id: 47,
    type: "subjective",
    question:
      "Will the centre of gravity of a hollow sphere filled half with mercury and half with oil be identical to that of an empty hollow sphere? Give reasons for your answer.",
    answer:
      "No.\nThe Centre of gravity will shift towards the mercury side as the position of the centre of gravity depends on the distribution of mass.",
  },
  {
    id: 48,
    type: "subjective",
    question:
      "Study the diagram and answer the questions that follow.\n(a) In the diagram, is the worker attempting to raise or lower the load?\n(b) Justify your answer to (a) with the necessary calculation.",
    answer: "(a) Lower\n(b) 4000x10x25 > 20000x10\n10,00,000Nm>2,00,000Nm",
  },
  {
    id: 49,
    type: "subjective",
    question:
      "The graph shows load against effort for a lever with load and effort on the same side of the fulcrum.\n(a) Which feature of the load and effort graph must be calculated to determine mechanical advantage?\n(b) Which class does this lever belong to?",
    answer: "(a) slope\n(b) 2nd class",
  },
  {
    id: 50,
    type: "subjective",
    question:
      "(a) Convert to SI unit: 1J/g 0F\n(b) Why does 1g of water at 00 C have 336J more heat energy than 1g of ice at 00 C?",
    answer:
      "(a) 1x1.8x1000J/kg0C = 1800J/kg0C\n(b) 336J of energy is used to increase the potential energy due to an increase in intermolecular separation, so the latent heat of ice is 336 J.",
  },
  {
    id: 51,
    type: "subjective",
    question:
      "Match the columns by choosing the body part and corresponding mechanical lever of the same class.\n Human body part - Mechanical lever\n i. Nodding head - (a) Bottle Opener\n ii. Lifting body weight on your toes. - (b) Tongs\n (c) See-Saw",
    answer: "i – (c)\nii – (a)",
  },
  {
    id: 52,
    type: "subjective",
    question:
      "Redraw the diagram by linking points A, B, and C to points X, Y, and Z on the socket.",
    answer:
      "(1 mark for correct connection of live wire.)\n(1 mark for correct connection of neutral and earth wire.)",
  },
  {
    id: 53,
    type: "subjective",
    question:
      "Ashish, Sameer, Aditya and Mohit were sitting on the terrace of Ashish’s house listening to the songs playing on Aditya’s mobile phone. Mohit, sitting in one corner, a little distance away from the others, requests to increase the volume of the songs. But Aditya says the volume is full. Sameer, being a smart guy, gets up, goes into the kitchen, brings an empty steel glass, places the mobile phone inside it and solves the problem. What is the reason for Sameer to keep the mobile phone in the glass?",
    answer:
      "Loudness increases with the increase in the surface area of vibration. By placing the mobile phone in the glass, the surface area of vibration increases, transferring more energy in the medium and increasing the loudness.",
  },
  {
    id: 54,
    type: "subjective",
    question:
      "You are given three resistors of magnitude 3 Ω each. You can join them either in a series or in a parallel combination. How will you arrange them so that the equivalent resistance would become:\n(a) maximum\n(b) minimum\n(Your answer must be accompanied by proper mathematical calculations)",
    answer:
      "(a) maximum when they are combined in series \nR (max) = 3 + 3 + 3 = 9 Ω\n(b) minimum when they are combined in parallel \nI/R = ⅓ + ⅓ + ⅓ = 1 \nR (min) = 1 Ω",
  },
  {
    id: 55,
    type: "subjective",
    question:
      "In a gold atom (atomic number 79), an electron revolves around the nucleus in a circular orbit. There is a strong electrostatic force between the positively charged nucleus and the negatively charged electron. Though the total positive charge possessed by the nucleus is much higher than the negative charge of the electron, there is no displacement of the electron in the direction of the force.\n(a) Name the force responsible for the movement of the electron around the nucleus in its own orbit.\n(b) In the absence of such force, what would happen to the movement of the electron?",
    answer:
      "(a) Centripetal force which is electrostatic force.\n(b) The electron would have moved in straight line along the tangent to the circular path.",
  },
  {
    id: 56,
    type: "subjective",
    question:
      "A straight wire is passed vertically through cardboard sprinkled with iron filings.\n(a) When current is passed through the wire in the upward direction, it is seen that the iron fillings are arranging themselves in a definite pattern. Why?\n(b) What would happen to this arrangement if more current were passed through the wire?",
    answer:
      "(a) When the current is passed through the wire, a magnetic field is generated around the wire.\n(b) The concentration of magnetic field lines will increase/the number of concentric circles will increase up to a greater distance.",
  },
  {
    id: 57,
    type: "subjective",
    question:
      "On a hot summer day, we often put ice cubes to cool the water. Why?",
    answer:
      "We put ice cubes into the water because every 1 g of ice at 00 C extracts 336 J of heat from hot water as its latent heat of fusion. Hence, the temperature of the water falls sharply.",
  },
  {
    id: 58,
    type: "subjective",
    question:
      "In the given circuit diagram, Minakshi replaced the ammeter by a voltmeter by mistake. Will this circuit work?",
    answer:
      "Voltmeter is a high-resistance device. Ideally, its resistance is infinite. So, if by mistake, the ammeter is replaced by the voltmeter, the total resistance of the circuit will also become infinite. In that case, the current flowing through the circuit will almost become zero, and the circuit will not work properly.",
  },
  {
    id: 59,
    type: "subjective",
    question:
      "A metre rod is half made of copper and half made of iron. If the mass of the copper part is 900 g and the mass of iron is 800g, then calculate the position at which the rod can remain in equilibrium.",
    answer:
      "The distance between their CG is 50 cm\n900 x x = 800(50 - x)\ntherefore 900x = 40000 - 800x\ntherefore 1700x = 40000\ntherefore x = 40000/1700 = 400/17 = 23.53cm\nIt will be balanced at a distance 48.53 cm from the end of copper.",
  },
  {
    id: 60,
    type: "subjective",
    question:
      "The diagram below shows a copper conductor placed along the east-west direction. Magnetic compass P is present above the conductor, and Q is below the conductor. If current is passed through the wire from A to B, then which of the two compasses will show prominent deflection and why?",
    answer:
      "Compass P. \nThis is because the direction of magnetic field produced around the conductor for compass Q is in the same direction but it is opposite to the compass P so in order to align in the direction P will show deflection.",
  },
  {
    id: 61,
    type: "subjective",
    question:
      "The difference between the temperature of water at the bottom and the top of a waterfall is 0.2 0C. Calculate the height of the waterfall. [g = 10 N kg-1, Specific heat capacity of water = 4200 J kg-1 0C-1]",
    answer:
      "By pr. of conservation of energy\nmgh = m c delta t\n10 x h = 4200 x 0.2\nh = 840 / 10 = 84 m",
  },
  {
    id: 62,
    type: "subjective",
    question:
      "The diagram shows straw partially immersed in water in the glasses.\n(a) Why does the straw in water appear thicker as compared to the straw outside water?\n(b) Why does the straw appear discontinuous in water?",
    answer:
      "(a) The surface of the glass with water is curved so it acts like a convex lens. Thus, due to the refraction through a convex lens it appears bigger (thicker). (1 mark)\n(b) Due to refraction, when light passes through water, lateral displacement takes place which shifts the position of the image and makes it appear discontinuous. (1 mark)",
  },
  {
    id: 63,
    type: "subjective",
    question:
      "The above diagram shows a triangular prism used for tracing the path of ray AB due to the refraction through the prism. Observe the diagram and answer the following:\n(a) State the correct eye position from the points P, Q, R and S to see the images of the points A and B in the same line through the prism.\n(b) If the ray, after entering the prism, suffers total internal reflection, then which would be the appropriate position out of P, Q, R, and S to see the image due to TIR?",
    answer: "(a) Point Q (1 mark)\n(b) S, R (1 mark)",
  },
  {
    id: 64,
    type: "subjective",
    question:
      'Read the excerpt from a story and answer the questions that follow:\nOn stage, a soft iron box sits atop a hidden copper coiled platform, conductive to electricity. I summoned a man who fancied himself a modern-day Hercules onto the stage and challenged him to lift the iron box. With ease, he lifted it up. Then, with a wave of my magic wand and a hidden switch activated, I said, "I\'m going to take away your strength." When I asked him to lift the box again, he struggled, unable to budge it.\n(a) Explain the secret behind the magic.\n(b) If you are asked to design the same magic in your science lab, give the necessary circuit diagram.\n(c) Give any one device that works on the same principle.',
    answer:
      "(a) When switch is put on the coil turns into a magnet and attracts the iron box to it. (1 mark)\n(b) Given below is the circuit diagram (1 mark)\n(c) Electric bell or any (1 mark)",
  },
  {
    id: 65,
    type: "subjective",
    question:
      "Which one of the switches, S1, S2 or S3, should be opened so that:\n(a) total resistance is equal to 4 ohms.\n(b) the total resistance is equal 3 ohms.\n(c) the current through 4 ohms is ⅗ th of the total current.",
    answer: "(a) S3\n(b) S1\n(c) S2",
  },
  {
    id: 66,
    type: "subjective",
    question:
      "In the given diagram, X represents a conductor carrying current into the plane of the paper and kept in a magnetic field. N & S represent the poles of a magnet and concentric circles of the magnetic field produced by the conductor.\n(a) State the direction of the force experienced by the conductor.\n(b) Explain the cause of the above-said force.\n(c) Name the law used to determine the direction of the force in the conductor.",
    answer:
      "(a) Downwards\n(b) Above the conductor magnetic field due to conductor and the magnet are in same direction while below the conductor is in the opposite direction\n(c) Fleming’s left-hand rule.",
  },
  {
    id: 67,
    type: "subjective",
    question:
      "Study the diagram and answer the following:\n(a) Arrange the following pendulums according to their natural frequencies (use < > =).\n(b) If Pendulum Z is initiated into oscillation, which pendulum among the others will exhibit the highest amplitude of vibration?\n(c) Give reasons for your answer.",
    answer:
      "(a) Y < W < Z=X\n(b) X\n(c) As Z and X share identical natural frequencies, Z will resonate and vibrate with greater amplitude.",
  },
  {
    id: 68,
    type: "subjective",
    question:
      "In the physics laboratory, various blocks of materials labelled A and B, each with masses ranging from 10 grams to 50 grams, are utilised to determine their respective heat capacities. Subsequently, a graph is plotted to depict the relationship between the heat capacity and the mass of the materials, as shown.\n(a) Plot a graph illustrating the relationship between the mass and specific heat capacity of materials A and B.\n(b) Which material is a relatively better conductor?",
    answer: "(a) [Graph expected]\n(b) B",
  },
  {
    id: 69,
    type: "subjective",
    question:
      "The above circuit diagram illustrates a copper bar placed on two copper wires stretched over a wooden base placed between two poles of magnets. This entire setup is placed on a compression balance, which shows a weight of 0.4 kgf.\n(a) What will be the observation of the compression balance when we close the switch?\n(b) How will this observation change, when we increase the current in the circuit?\n(c) Name the rule used to come to the conclusion in (a).",
    answer:
      "(a) The reading on the compression balance will increase.\n(b) The reading on the compression balance will increase.\n(c) Fleming’s left-hand rule.",
  },
  {
    id: 70,
    type: "subjective",
    question:
      "Bandish and Parag, on a trek to Sandakpu, halted at a tea house in Tumbling. The picture above shows the entrance door of the tea house. They saw the tumbrel filled with water hanging from top rigid support passing through the door. On enquiring about the tumbrel, the owner of the tea house, he said that it acts as a pullback (door closure) after opening and releasing the door.\n(a) Explain how the tumbrel helps to close the door on its own.\n(b) Name the principle involved.",
    answer:
      "(a) Initially, the C.G. of the tumbrel is vertically below the fixed support, so the torque on the door is zero as the torque arm is zero. But when you push the door to open it, the tumbrel moves away and now there is some torque arm which acts on the door to bring it back to its original position.\n(b) Principle of moments.",
  },
  {
    id: 71,
    type: "subjective",
    question:
      "A convex lens of power +5 D has an object placed at a distance of 50 cm in front of the lens.\n(a) State the nature of the image formed.\n(b) What is the definite distance, towards or away from the lens, the object should move so that the image is not seen?",
    answer:
      "(a) f = 1/P = 1/5 = 0.2m \n f = 20cm \n Image is real and diminished.\n(b) 30 cm towards the lens. \n [At f the magnification is so large that practically the image is not seen.]",
  },
  {
    id: 72,
    type: "subjective",
    question:
      "The diagram below shows a bulb connected by dual control switches. Observe the diagrams and answer the questions that follow.\n(a) Which of the above circuits will be able to switch ON or switch OFF the bulb using both switches?\n(b) At present, in which circuit is the bulb glowing?\n(c) If we interchange the L and N wires in circuit B, will the circuit work?",
    answer:
      "(a) Both circuits will be able to switch ON and switch OFF the bulb using both switches.\n(b) Circuit B \n(c) Yes, the circuit will function.",
  },
  {
    id: 73,
    type: "subjective",
    question:
      "Observe the electric circuit above and answer the questions that follow.\n(a) If we increase the current in the above circuit using a rheostat, will the reading of the voltmeter decrease or increase?\n(b) Give a reason for your answer in ‘a’.\n(c) The present reading of the voltmeter is 2V, and the current in the circuit is 0.8A. Calculate the potential drop when the current in the circuit becomes 1 A. Given E = 3V.",
    answer:
      "(a) Decrease.\n(b) This is because the voltmeter shows terminal voltage. An increase in current increases potential drop, which decreases terminal voltage.\n(c) (Potential drop is always across the internal resistance)\nP. drop = 3 - 2 = 1 V\n V = IR therefore 1 = 0.8 x r\nr = 1/0.8 = 1.25 ohm\nNew P drop = 1 x 1.25\nP drop = 1.25 V",
  },
  {
    id: 74,
    type: "subjective",
    question:
      "Pavel took an earthen pot which was filled with water up to its brim. The earthen pot was conical in shape and kept with its apex in downward direction.\n(a) If the vertical height of the earthen pot is 12 cm, where does its centre of gravity lie?\n(b) Pavel poured out all the water from the pot. How will its centre of gravity shift – towards the open end or towards its apex?\n(c) Pavel wanted to grow a plant in the given pot. So, he filled it completely again with some soil. What will be the new position of its centre of gravity?",
    answer:
      "(a) 3 cm from the open end or 9 cm from the apex.\n(b) towards the apex.\n(c) It will be shifted to the original position i.e. 3 cm from the open end or 9 cm from the apex.",
  },
  {
    id: 75,
    type: "subjective",
    question:
      "The mass of the block P is 5 kg. It is to be moved along an inclined plane AC of length 8 m, which makes an angle of 300 with the horizontal. A force of 50 N is applied on the block to move it through the inclined plane AC, as shown in the diagram.\n(a) What is the work done by the force along the inclined plane?\n(b) Find the gain in potential energy of block P if it is directly lifted to C from the ground. (g = 10 ms-2)\n(c) We know that potential energy is gained due to the work done on the body against gravity. Then, in this case, why is the work done on the block and the increase in the potential energy of the block different?",
    answer:
      "(a) W = F X S = 50 X 8 = 400 J\n(b) sin30 = BC/AC therefore 1/2 = BC/8 therefore BC = 4m\nP.E gained = 5 x 10 x 4 = 200 J\n(c) This is because while pushing the block along the inclined plane, some energy is wasted to overcome the friction between the block and the inclined plane.",
  },
  {
    id: 76,
    type: "subjective",
    question:
      "A ball of mass m is dropped freely from point A. It is given that AB = BC = CD = h. If the acceleration due to gravity at the given place is g, then what will be its\n(a) potential energy at point A?\n(b) kinetic energy at point C?",
    answer:
      "(a) P.E = m.g.3h = 3mgh \n(b) T.E throughout the journey = 3 mgh \n P.E at C = mgh\n K.E at C = 2 mgh",
  },
  {
    id: 77,
    type: "subjective",
    question:
      "In a science exhibition, boys of a Secondary school made two types of periscopes. In one of the periscopes, ordinary glass was used as the reflecting material, while in the other, a prism was used. When Anushka put her eyes on the eyepiece of the periscope, she saw that the image formed in one of the periscopes was quite bright, while in the other, it was a dimmer.\n(a) In which of the two periscopes, mirror or prism, Anushka saw the image brighter?\n(b) Why is one of the images brighter than the other?",
    answer:
      "(a) Image is brighter in the prism periscope.\n(b) This is due to the phenomenon of total internal reflection of light. During TIR, there is no absorption of light energy by the prism.",
  },
  {
    id: 78,
    type: "subjective",
    question:
      "ABC is a glass block whose two sides, AB and BC, are at right angles to each other. A ray of light is incident on the surface AB, as shown in the diagram, and suffers total internal reflection before falling on the surface BC. Finally, the light ray emerges out along the surface BC.\n(a) What is the angle of incidence at the surface AB?\n(b) What is the critical angle for the glass block BC?\n(c) What would happen to the critical angle if the temperature of the glass block is increased?",
    answer:
      "(a) 180 - 132 = 480\nBy alternate angle property and being angle i = angle r\nangle i = 480 \n(b) angle c = 132 - 90 = 420 \n(c) It increases.",
  },
  {
    id: 79,
    type: "subjective",
    question:
      "A block of mass 30 kg is pulled up a slope (diagram below) with a constant speed by applying a force of 200 N parallel to the slope. A and B are the initial and final positions of the block. Calculate the force of friction offered by the surface AB.",
    answer:
      "W = F x S\nW = 200 x 3\nW = 600 J \nU = m g h\nU = 30 x 10 x 1.5\nU = 450 J \n600 - 450 = F x 3\nF = 150/3 = 50 N",
  },
  {
    id: 80,
    type: "subjective",
    question:
      "A roller with a diameter of 0.2 m is raised over a pavement AB by applying forces F1 and F2, as shown in the diagram. If the magnitude of both forces is 20 N, then compare the magnitudes of the torques produced by the two forces.",
    answer:
      "Torque produced due to F1 = -20 x 0.2 = -4 N m \nTorque due F2 = -20 x 0.1 = -2 N m \nRatio of torques = 2: 1",
  },
  {
    id: 81,
    type: "subjective",
    question:
      "The diagram above shows two parallel wires carrying current in the downward direction. The magnitude of the current in wire A is greater than in wire B. It is also observed that the wires exert force on each other.\n(a) State the direction of the force experienced by wire A.\n(b) Name the law/laws used to come to the conclusion in (a).\n(c) When a compass is placed in between the two wires, it does not remain along the direction of the magnetic field wire A or wire B at one of the points P, Q, or R. State with a reason at which point you will observe this.",
    answer:
      "(a) Towards B. \n(b) Right hand thumb rule and Fleming’s left-hand rule. \n(c) At point R \nNeutral point will always be formed near the weaker magnet.",
  },
  {
    id: 82,
    type: "subjective",
    question:
      "Shan is utilising a dynamometer to measure the force, expressed in newtons, on a bowstring. He records both the force and displacement of the bowstring and plots the data on a graph that shows the relationship between force in newtons and displacement in centimetres. Shan is interested in determining the highest point that the arrow reaches. He knows he can calculate the work done by finding the area under the graph.\n(a) What is the potential energy stored in the bow string, when the force is 25N?\n(b) If the mass of the arrow is 31.25g, calculate the maximum velocity attained by the arrow.\n(c) Calculate the maximum height reached by the arrow.",
    answer:
      "(a) PE = work done = area under the graph = 1/2 bh = 1/2 x 25 x 0.05 = 0.625J\n(b) By law of conservation of energy PE of the bow string = KE of the arrow \n 0.625 J = 1/2 x 0.03125 x v^2\n v = sqrt(0.625 x 2 x 1000 / 31.25) = sqrt(40) = 6.32 m/s\n(c) 0.625 = mgh \n h = 0.625 / (0.03125 x 10) = 2m",
  },
  {
    id: 83,
    type: "subjective",
    question:
      "The graph illustrates the correlation between the number of protons (x-axis) and the number of neutrons (y-axis) for element C in the periodic table. The element is denoted by letters rather than their conventional symbols. When element C, depicted in the graph, undergoes radioactive decay, it releases radioactive rays.\n(a) Write the chemical symbol along with the mass number and atomic number for the element denoted as ‘C’.\n(b) Plot on the graph,\n i. The daughter element after the emission of beta radiation by the element ‘C’.\n ii. The daughter element, as indicated in the previous answer, if it undergoes alpha decay.",
    answer: "(a) 92C238\n(b) [Graph expected]",
  },
  {
    id: 84,
    type: "subjective",
    question:
      "The adjacent diagram shows four solid plastic balls with wires fitted on a wooden base. A person shakes the wooden base to and fro (forward and backward) periodically. It is observed that even the balls start vibrating. It is also observed that all balls vibrate, but only one ball vibrates vigorously.\n(a) Explain why only one ball vibrates vigorously.\n(b) If fA, fB, fC, and fD are the natural frequencies of vibration of the wires, then arrange them in the increasing order of their frequencies and give reasons for the same.",
    answer:
      "(a) The frequency of vibration of the wooden base matches with the natural frequency of only one wire. Due to resonance the amplitude of vibration increases. \n(b) fD < fA < fC < fB \nFrequency of vibration is inversely proportional to the vibrating length.",
  },
  {
    id: 85,
    type: "subjective",
    question:
      "The above diagram shows a glass prism of a critical angle 420.\n(a) Redraw the diagram and complete the path of the light ray PQ till it emerges out of the prism.\n(b) Also, calculate the net angle of deviation of the ray PQ when it emerges from the prism.",
    answer:
      "(a) At surface AC ray travelling undeviated \n TIR at surface AB with angle i marked \n Refraction at surface BC with angle i marked \n(b) angle d = 180 - 48 = 1320",
  },
  {
    id: 86,
    type: "subjective",
    question:
      "The circuit depicted in the figure is employed to study Ohm's Law. Rather than employing a conventional resistor, a glass tube of length ‘l’ and cross-sectional area ‘a’, which is half-filled with mercury of resistivity ‘d’, is connected to the circuit via two electrodes, E1 and E2. These electrodes are linked to a battery with an emf of ‘E’ and negligible internal resistance. Provide the answer in terms of ‘a’, ‘l’, ‘d’, and ‘E’.\n(a) Resistance of mercury in the tube.\n(b) The ammeter reading.\n(c) Voltmeter reading.\n(d) Which of the measurements are altered when the tube is entirely filled with mercury?",
    answer:
      "(a) R = rho l / A = d l / (a/2) = 2dl/a \n(b) V = IR therefore I = V/R = E / (2dl/a) = Ea / 2dl \n(c) E \n(d) Resistance & ammeter reading",
  },
  {
    id: 87,
    type: "subjective",
    question:
      "Two students are conducting experiments with identical 100 g mass simple pendulums, each raising the bob 5m above the mean position. The graph depicting the relationship between distance from the mean position and velocities is presented in the diagram.\n(a) Demonstrate, using mathematical calculations, that the path followed by student 1 is devoid of friction.\n(b) Does the situation involving student 2 exhibit a breach of the law of conservation of energy?",
    answer:
      "(a) Student 1\n U = mgh = (100/1000) x 10 x 5 = 5J\n K = 1/2 mv^2 = 1/2 x (100/1000) x 10^2 = 5J \n U = K STUDENT 1 \n K = 1/2 mv^2 = 1/2 x (100/1000) x 8^2 = 3.2J \n 1.8 J of energy is converted as heat due to friction.\n(b) No case will violate law of conservation of energy",
  },
  {
    id: 88,
    type: "subjective",
    question:
      "Examine the graph depicting the transmitted (T) and reflected (R) waves from submarines A and B, which are equipped with a device emitting ultrasonic sounds. Study the graph and answer the following. (Speed of sound in water is 1500 m/s)\n(a) Name the device used here.\n(b) Why is ultrasonic sound used in this device? \n(c) Which submarine is closer to the ship? Calculate the distance of the closest submarine.",
    answer:
      "(a) Sonar \n(b) unidirectional/ high energy.\n(c) submarine B is closer to the ship. \ndistance = vxt / 2 = 1500 x 20 / 2 = 15000 m",
  },
  {
    id: 89,
    type: "subjective",
    question:
      "In the above circuit diagram, calculate the power consumed in the circuit when:\n(a) the switch S1 is closed, and the switch S2 is open.\n(b) the switch S2 is closed, and the switch S1 is open.",
    answer:
      "(a) R = (20x60)/(20+60) = 15 ohm \n P = V^2/R = 5x5/15 = 5/3 = 1.67 W \n(b) P = V^2/R = 5x5/20 \n P = 5/4 = 1.25 W",
  },
  {
    id: 90,
    type: "subjective",
    question:
      "The diagram above shows a pulley used to lift an iron beam of length 3m and weight 100 kgf, lying on the ground.\n(a) Calculate the minimum effort needed to just lift the beam off the ground. [Assume no loss of energy]\n(b) When the beam is being lifted from the ground, with the other end touching the ground, state with a reason whether the effort needed keeps on increasing, decreasing or remains constant.",
    answer:
      "(a) By pr of levers\n100 x 1.5 = x x 3\ntherefore x = 100/2 = 50 kgf is the effective load for pulley.\nM.A. = L/E therefore 4 = 50/E \ntherefore E = 12.5 kgf \n(b) Effort needed remains the same.\nRatio between the effort arm and load arm is the same when the beam is being lifted.",
  },
  {
    id: 91,
    type: "subjective",
    question:
      "You are doing an experiment on the refraction of light in your Physics laboratory. ABCD is a rectangular block. A ray of light is incident obliquely on the surface AB.\n(a) Draw the path of the ray of light through the glass block and also show how it emerges from the block. [ The diagram should show the lateral displacement suffered by the ray.]\n(b) Which two pairs of angles remain the same during the experiment?\n(c) If the same experiment is performed first with red and then with blue light, which colour will suffer greater lateral displacement?",
    answer:
      "(a) [Diagram expected] \n(b) Angle of incidence = angle of emergence and angle of refraction at the first surface = angle of incidence at the second surface. (2 marks)\n(c) Blue (1 mark)",
  },
  {
    id: 92,
    type: "subjective",
    question:
      "An element ZPA emits one α-particle and then two β-particles consecutively to form an element Q. \n(a) Show all the transformations by means of equations only.\n(b) What are P and Q called?",
    answer:
      "(a) ZPA -> Z-2RA-4 + 2He4/2alpha4 \n Z-2RA-4 -> Z-1SA-4 + -1e0/-1beta0 \n Z-1SA-4 -> ZQA-4 + -1e0/-1beta0 \n(b) Isotopes",
  },
  {
    id: 93,
    type: "subjective",
    question:
      "In the graph, a given quantity of ice is converted to water.\n(a) What does the portion AB represent?\n(b) Why is the portion AB parallel to the time axis?\n(c) Why is the slope OA steeper than the slope BC?",
    answer:
      "(a) Melting of ice.\n(b) Unless and until all the ice gets converted to water, the temperature remains constant/during melting though heat is supplied from outside temperature remains constant.\n(c) As S.H.C of ice is less than S.H.C of water. Hence, ice needs less quantity of heat than water for the same rise of temperature.",
  },
  {
    id: 94,
    type: "subjective",
    question:
      "In the given diagram, two transparent optical media are shown. The rarer medium is air, while the denser medium is water. Redraw the diagram by showing the paths of the rays after striking the surface of separation AD for the incident rays OA, OB, OC and OD, respectively. (Critical angle for the denser medium = 480)",
    answer:
      "(a) The ray OA will go straight without any deviation.\n(b) The ray OB, after striking the surface of separation, will move away from the normal.\n(c) The ray OC, after striking the surface, will graze along the surface.\n(d) The ray OD will return back to the same denser medium (it is necessary to show the angle of reflection as 600).",
  },
  {
    id: 95,
    type: "subjective",
    question:
      "In a hydraulic power station, water is first stored in a dam at a higher altitude.\n(a) What is the purpose of being stored at higher altitudes?\n(b) When the water is allowed to fall on a turbine, what change of energy takes place for the water?\n(c) Why is this turbine connected to the armature of a generator?\n(d) Which basic law of physics is followed by the whole mechanism?",
    answer:
      "(a) To store the potential energy. \n(b) The potential energy of water gets converted to kinetic and heat energy.\n(c) To produce the electrical energy. \n(d) Law of conservation of energy.",
  },
];
