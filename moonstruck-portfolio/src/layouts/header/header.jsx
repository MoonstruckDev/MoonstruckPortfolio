import React, { useState, useEffect } from 'react';
import './header.scss'; // Import your CSS or SCSS file for styling
import Icon from '../../assets/icons/wave.gif';
import getLatestCommitDate from '../../helpers/githubdate'; // Import your asynchronous function
import '../../styles/fonts.scss'
import { Link } from 'react-router-dom';


function Header() {
    const [latestCommitDate, setLatestCommitDate] = useState(null);

    useEffect(() => {
        const fetchCommitDate = async () => {
            try {
                const date = await getLatestCommitDate("MoonstruckDev", "MoonstruckPortfolio");
                setLatestCommitDate(date);
            } catch (error) {
                console.error('Error fetching commit date:', error);
                setLatestCommitDate(null); // Handle error state if needed
            }
        };

        fetchCommitDate();
    }, []); // Empty dependency array ensures useEffect runs once on component mount

    return (
        <header className="header">
            <h2 className="last-commit-info">
                Latest Update: {latestCommitDate ? latestCommitDate : "Loading..."}
            </h2>
            <nav className="header__nav">
                <ul className="nav__list">
                    <li className="list__item"><span>Hi!</span></li>
                    <li className="list__item"><Link to="/">Homepage</Link></li>
                    <li className="list__item"><Link to="/Projects">Projects</Link></li>
                    <li className="list__item"><Link to="/Contact">Contact</Link></li>
                </ul>
                <img className="header__logo" src={Icon} alt="MoonstruckDev's profile picture" />
            </nav>
        </header>
    );
}

export default Header;
