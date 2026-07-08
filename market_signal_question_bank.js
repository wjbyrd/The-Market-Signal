/* =====================================================
   THE MARKET SIGNAL — QUESTION BANK SCAFFOLD

   This file intentionally contains no instructional question pools yet.
   Keep it beside "The Market Signal.html" in the same GitHub Pages folder.

   Boss alignment:
   - easyBoss: Chapter 5 — capital allocation and investment decisions
   - mediumBoss: Chapter 17 — uncertainty and decision design
   - finalBoss: Chapters 8–9 — markets, competition, returns, and profit erosion
   - legendaryBoss: integrated questions across Chapters 5, 17, 8, and 9

   Required question fields:
   {
     id,
     sourceGame: "marketSignal",
     q,
     options: [four choices],
     a: 0-3,
     tag,
     type,
     objective,
     difficulty,
     conceptCluster,
     primarySkill,
     secondarySkills: [],
     repairSkill,
     commonError,
     feedback,
     image // optional .webp filename
   }
===================================================== */

const objectiveLabels = {
    "LO5.1": "Calculate discount rates to evaluate the trade-off between current sacrifice and future gain",
    "LO5.2": "Identify how the cost of capital is compared with project returns",
    "LO5.3": "Describe the NPV rule and investment shortcuts such as payback periods",
    "LO5.4": "Calculate break-even quantity and price and apply investment or shutdown decisions",
    "LO5.5": "Describe how to choose contracts involving sunk costs",

    "LO17.1": "Assign probability distributions and compute expected costs and benefits",
    "LO17.2": "Explain how price discrimination can model pricing uncertainty",
    "LO17.3": "Use selection bias and randomized experiments to resolve business uncertainty",
    "LO17.4": "Analyze decisions that minimize expected error costs",
    "LO17.5": "Assess situations to obtain accurate estimates of uncertainty",
    "LO17.6": "Design institutions to handle unforeseen contingencies",

    "LO8.1": "Define the market before applying supply-and-demand analysis",
    "LO8.2": "Describe buyer and seller behavior in a competitive market",
    "LO8.3": "Explain demand, supply, and market equilibrium",
    "LO8.4": "Analyze industry-level changes with supply and demand",

    "LO9.1": "Describe rates of return in a competitive industry",
    "LO9.2": "Identify mean reversion in profits",
    "LO9.3": "Differentiate compensating wage and risk differentials",
    "LO9.4": "Explain movement out of risky assets when risk premia become too small",
    "LO9.5": "Summarize how entry and imitation erode monopoly profits"
};

const questionBanks = {
    easy: [],
    medium: [],
    hard: [],
    elite: [],
    legendary: [],

    easyBoss: [],
    mediumBoss: [],
    finalBoss: [],
    legendaryBoss: []
};

/*
   Repair and bridge pools are keyed by primarySkill / repairSkill.

   Example structure:

   const microSkillRepairPools = {
       discount_rate_calculation: [
           { ...question object... }
       ]
   };

   const microSkillBridgePools = {
       discount_rate_calculation: [
           { ...question object... }
       ]
   };
*/
const microSkillRepairPools = {};
const microSkillBridgePools = {};

window.objectiveLabels = objectiveLabels;
window.questionBanks = questionBanks;
window.microSkillRepairPools = microSkillRepairPools;
window.microSkillBridgePools = microSkillBridgePools;
