import React from 'react';
import s from './ProjectList.module.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from "prop-types";

const ProjectList = (props) => {
    const { projects, selected } = props;

    // Фильтруем массив проектов по выбранной категории
    const filteredProjects = projects.filter((project) => {
        if (selected === 'All') return true;
        return project.category === selected;
    });

    // Создаем JSX разметку проектов
    const projectsJSX = filteredProjects.map((project) => {
        return (
            <div className={s.item} key={uuidv4()}>
                <img src={project.img} alt="" />
            </div>
        )
    });

    return (
        <div className={s.wrapper}>
            {projectsJSX}
        </div>
    );
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    })).isRequired,
    selected: PropTypes.string.isRequired,
}

export default ProjectList;