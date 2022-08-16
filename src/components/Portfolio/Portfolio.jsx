import React, { useState } from 'react';
import ProjectList from '../ProjectList/ProjectList'
import Toolbar from '../Toolbar/Toolbar';
import PropTypes from "prop-types";

const Portfolio = (props) => {
    const { projects } = props;
    const [activeFilter, setActiveFilter] = useState('All'); // Состояние (активный фильтр)
    const filters = ["All", "Websites", "Flayers", "Business Cards"]; // Используемые фильтры

    /**
     * Функция изменяет состояние activeFilter в соответствии с выбранным фильтром
     * @param {string} checkedFilter - наименование выбранного фильтра (категории)
     */
    function handlerClickOnItemMenu(checkedFilter) {
        setActiveFilter(checkedFilter);
    }

    return (
        <React.Fragment>
            <Toolbar filters={filters} selected={activeFilter} onSelectFilter={(checkedFilter) => {
                handlerClickOnItemMenu(checkedFilter);
            }} />
            <ProjectList projects={projects} selected={activeFilter} />
        </React.Fragment>
    );
}

Portfolio.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
    })).isRequired,
}

export default Portfolio;