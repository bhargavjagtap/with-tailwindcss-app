import {RiComputerLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiOutlineAntDesign, AiOutlineApi} from 'react-icons/ai'
import {BsCircleFill} from 'react-icons/bs'  
import {MdDeveloperMode} from 'react-icons/md'  
import {IProject, Service, Skill} from './type' 

export const services:Service[] = [
    {
        Icon : RiComputerLine,
        title : 'Frontend Development',
        about : 'lorem ipsum bla bla bla I can design the <b>HTML</b>, <b>CSS</b> and <b>React.js</b> shit...',
    },
    {
        Icon : FaServer,
        title : 'Backend Development',
        about : 'DB and server management. Robust <b>Node API</b> ',
    },
    {
        Icon : AiOutlineApi,
        title : 'API Development',
        about : 'Developing APIs and shit',
    },
    {   
        Icon : MdDeveloperMode,
        title : 'Competitive Coder',
        about : 'solving those fuckin mind-fucked problems',
    },
    {
        Icon: AiOutlineAntDesign,
        title: 'UI/UX designer',
        about: 'stunning user interface designer using <b>Figma</b> and <b>Framer </b> ',
    },
    {
        Icon: RiComputerLine,
        title: 'Whatever',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
    },
]

export const languages:Skill[] = [
    {
        name : 'Javascript',
        level : '60%',
        Icon : BsCircleFill,
    },
    {
        name : 'React',
        level : '50%',
        Icon :BsCircleFill,
    },
    {
        name : 'Bootstrap',
        level : '60%',
        Icon : BsCircleFill,
    },
    {   
        name : 'Angular',
        level : '70%',
        Icon : BsCircleFill,
    },
    {
        name: 'Electron',
        level: '50%',
        Icon: BsCircleFill,
    },
    {
        name: 'Node',
        level: '80%',
        Icon: BsCircleFill,
    },
]

export const tools:Skill[] = [
    {
        name : 'Figma',
        level : '60%',
        Icon : BsCircleFill,
    },
    {
        name : 'Photoshop',
        level : '50%',
        Icon :BsCircleFill,
    },
    {
        name : 'Illustrator',
        level : '60%',
        Icon : BsCircleFill,
    },
    {   
        name : 'Framer',
        level : '70%',
        Icon : BsCircleFill,
    },
    {
        name: 'Electron',
        level: '50%',
        Icon: BsCircleFill,
    },
    {
        name: 'Node',
        level: '80%',
        Icon: BsCircleFill,
    },
]

export const projects:IProject[] = [
    {
        name : 'Tesla Clone',
        description : 'Tesla-Clone using Next.js, TailwindCSS and Firebase',
        image_path : 'https://i.postimg.cc/bNZ3xFvZ/Screenshot-from-2022-02-01-23-35-29.png',
        deployed_url : 'https://tesla-clone-2bcf4.firebaseapp.com/',
        github_url : 'https://github.com/bhargavjagtap/tesla-clone',
        category : ['firebase', 'tailwind', 'nextjs'],
        key_tags : ['Nextjs', 'Clone', 'App', 'Firebase'],
    },
    {
        name : 'Twitter Clone',
        description : 'Twitter-Clone using Next.js, TailwindCSS and Firebase',
        image_path : 'https://i.postimg.cc/qBb1Cdpf/Screenshot-from-2022-02-01-23-48-29.png',
        deployed_url : 'https://twitter-clone-snowy-rho.vercel.app/',
        github_url : 'https://github.com/bhargavjagtap/twitter-clone',
        category : ['firebase', 'tailwind', 'nextjs'],
        key_tags : ['Nextjs', 'Clone', 'App', 'Firebase'],
    },
    {
        name : 'Medium Clone',
        description : 'Medium-Clone using Next.js, TailwindCSS and Sanity CMS',
        image_path : 'https://i.postimg.cc/bJbtTM5R/Screenshot-from-2022-02-01-23-53-34.png',
        deployed_url : 'https://medium-clone-jet.vercel.app/',
        github_url : 'https://github.com/bhargavjagtap/Medium-clone',
        category : ['sanity', 'tailwind', 'nextjs'],
        key_tags : ['Nextjs', 'Clone', 'App', 'Sanity'],
    },
]