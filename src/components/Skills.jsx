import { motion } from "framer-motion"

const skills = [
  { name:"Linux Administration", level:90 },
  { name:"AWS (EC2, S3, IAM, VPC)", level:85 },
  { name:"CI/CD - GitHub Actions", level:80 },
  { name:"Docker & Containers", level:75 },
  { name:"Git & Version Control", level:85 },
]

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="gradient-text">Technical Skills</h2>
      {skills.map((skill,i)=>(
        <div key={i}>
          <p>{skill.name}</p>
          <div className="progress">
            <motion.div
              initial={{width:0}}
              whileInView={{width:`${skill.level}%`}}
              transition={{duration:1}}
              className="progress-bar"
            />
          </div>
        </div>
      ))}
    </section>
  )
}
