const Developer = require('../models/Developer');
const Skill = require('../models/Skill');
const ProfessionalExperience = require('../models/ProfessionalExperience');
const Education = require('../models/Education');

const submitOnboarding = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      skills,
      experience,
      education,
    } = req.body;

    // Create a new developer
    const newDeveloper = new Developer({
      firstName,
      lastName,
      phoneNumber,
      email,
    });

    // Create and save skills
    const skillIds = await Promise.all(
      skills.map(async (skillName) => {
        const existingSkill = await Skill.findOne({ name: skillName });
        if (existingSkill) {
          return existingSkill._id;
        } else {
          const newSkill = new Skill({ name: skillName });
          await newSkill.save();
          return newSkill._id;
        }
      })
    );

    // Create and save professional experiences
    const experienceIds = await Promise.all(
      experience.map(async (exp) => {
        const newExp = new ProfessionalExperience({
          company: exp.company,
          techStack: exp.techStack,
          skillsUsed: await Promise.all(
            exp.skillsUsed.map(async (skillName) => {
              const existingSkill = await Skill.findOne({ name: skillName });
              if (existingSkill) {
                return existingSkill._id;
              } else {
                const newSkill = new Skill({ name: skillName });
                await newSkill.save();
                return newSkill._id;
              }
            })
          ),
          timePeriod: {
            startDate: new Date(exp.timePeriod.startDate),
            endDate: new Date(exp.timePeriod.endDate),
          },
        });
        await newExp.save();
        return newExp._id;
      })
    );

    // Create and save educations
    const educationIds = await Promise.all(
      education.map(async (edu) => {
        const newEducation = new Education({
          degreeName: edu.degreeName,
          schoolName: edu.schoolName,
          timePeriod: edu.timePeriod,
        });
        await newEducation.save();
        return newEducation._id;
      })
    );

    // Update the developer with the created skill, experience, and education IDs
    newDeveloper.skills = skillIds;
    newDeveloper.experience = experienceIds;
    newDeveloper.education = educationIds;

    // Save the developer to the database
    await newDeveloper.save();

    res.status(201).json({ message: 'Onboarding details submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  submitOnboarding,
};
