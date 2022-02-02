import { languages, tools } from "../data"
import Bar from "../components/Bar"
import {motion} from "framer-motion";
import {fadeInUp} from "../animations";
    
const resume = () => {
    
    return (
        <div className='p-4 px-6'>
            {/* education & experience */}
            <motion.div className="grid gap-6 md:grid-cols-2" variants={fadeInUp} initial="initial" animate="animate">
                <div>
                    <h5 className='my-3 text-2xl font-bold '>Experience</h5>
                    <div>
                        <h5 className='my-2 text-xl font-bold '>MEAN Dev Jr.</h5>
                        <p className='font-semibold '>SS (2021 - 2022)</p>
                        <p className='my-3 '>i don't know why am I doing this even..</p>
                    </div>
                </div>
                <div>
                    <h5 className='my-3 text-2xl font-bold '>Education</h5>
                    <div>
                        <h5 className='my-2 text-xl font-bold '>Bsc Computer Science</h5>
                        <p className='font-semibold '>Msc CA </p>
                        <p className='my-3 '>Currently working as a Dev</p>
                    </div>
                </div>
            </motion.div>
            {/* languages & tools */}
            <motion.div className="grid gap-6 md:grid-cols-2" variants={fadeInUp} initial="initial" animate="animate">
                <div>
                <h5 className='my-3 text-2xl font-bold '>Languages & Frameworks</h5>
                    {languages.map(language =><Bar value={language} key={language.name}/>)}
                </div>
                <div>
                <h5 className='my-3 text-2xl font-bold '>Tools & Softwares</h5>
                    {tools.map(tool =><Bar value={tool} key={tool.name}/>)}
                </div>
            </motion.div>
        </div>
    )
}

export default resume
