import React from "react"
import '../index.css'
import ProjectCard from './ProjectCard';
// data
import projectList from '../data/data';
// MUI tabs
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// filter berdasarkan category yeah
const portfolioItems = projectList.filter(item => item.category === "portfolio");
const otherItems = projectList.filter(item => item.category === "other");

// tabs MUI
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const project = () => {

    // tabs MUI
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <div className='project w-screen bg-[#F5F5F5] dark:bg-slate-950 px-12 py-10 z-[5] relative'>
                <h1 data-aos="fade-down" id="project" className="text-[#0c0c0c] dark:text-white lg:text-4xl md:text-[3.8rem] text-2xl font-unigeo text-center md:pb-10 lg:pb-1 lg:py-10">My Projects</h1>
                {/* card project */}
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                            <Tab label="All" className="text-[#0c0c0c] dark:text-white" {...a11yProps(0)} />
                            <Tab label="Portfolio" className="text-[#0c0c0c] dark:text-white" {...a11yProps(1)} />
                            <Tab label="Other" className="text-[#0c0c0c] dark:text-white" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 flex flex-col items-center lg:gap-0 lg:gap-y-10 gap-5 py-10'>
                            {projectList.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    icon={project.icon}
                                    frontText={project.frontText}
                                    imgContent={project.imgContent}
                                    titleDesc={project.titleDesc}
                                    tech={project.tech}
                                    link={project.link}
                                />
                            ))}
                        </div>
                    </CustomTabPanel>

                    <CustomTabPanel value={value} index={1}>
                        <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 flex flex-col items-center lg:gap-0 lg:gap-y-10 gap-5 py-10'>
                            {portfolioItems.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    icon={project.icon}
                                    frontText={project.frontText}
                                    imgContent={project.imgContent}
                                    titleDesc={project.titleDesc}
                                    tech={project.tech}
                                    link={project.link}
                                />
                            ))}
                        </div>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 flex flex-col items-center lg:gap-0 lg:gap-y-10 gap-5 py-10'>
                            {otherItems.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    icon={project.icon}
                                    frontText={project.frontText}
                                    imgContent={project.imgContent}
                                    titleDesc={project.titleDesc}
                                    tech={project.tech}
                                    link={project.link}
                                />
                            ))}
                        </div>
                    </CustomTabPanel>
                </Box>
            </div>
        </>
    )
}

export default project
