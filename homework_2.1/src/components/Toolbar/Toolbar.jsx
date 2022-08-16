import React from 'react';
import s from './Toolbar.module.css';
import PropTypes from "prop-types";

const Toolbar = (props) => {
    const { filters, selected, onSelectFilter } = props;

    // Формируем разметку кнопкок с навешенными событиями клика
    const buttonsJSX = filters.map((filter, index) => {
        const filterClasses = `${s.filter__item} ${filter === selected ? s.active : ''}` // Классы каждой кнопки фильтра

        return (
            <button className={filterClasses}
                    onClick={() => onSelectFilter(filter)}
                    key={index}>
                {filter}
            </button>
        );
    });

    return (
        <div className={s.filter}>
            {buttonsJSX}
        </div>
    );
}

Toolbar.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired,
}

export default Toolbar;