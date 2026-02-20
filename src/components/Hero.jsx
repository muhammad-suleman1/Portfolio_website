import { motion } from "framer-motion"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function Hero() {

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <section style={{height:"100vh", display:"flex", alignItems:"center"}}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background:{color:{value:"transparent"}},
          particles:{number:{value:50},size:{value:2},move:{speed:1},links:{enable:true,color:"#6366f1"}}
        }}
        style={{position:"absolute", top:0}}
      />
      <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:1}}>
        <h1>Hi, I'm <span className="gradient-text">Muhammad Suleman</span></h1>
        <h3>DevOps Engineer | Linux | AWS | CI/CD | Docker</h3>
        <p>Specializing in cloud infrastructure, automation, and system reliability engineering.</p>
        <button className="btn">Download Resume</button>
      </motion.div>
    </section>
  )
}
