import React, { Component } from 'react'
import Link from 'gatsby-link'
import Cta from './cta';
import styles from './header.module.scss'

class Header extends Component {

  constructor() {
    super();
    this.state = { active: false };
  }

  handleLinkClick(scrollTo, e) {
    this.props.onClick(scrollTo);
    this.setState({ active: false});
  }

  handleClickMenu(e) {
    this.setState({ active: !this.state.active});
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={`container ${styles.container}`}>
            <div className={styles.logo}>
              <a href="/" className={styles.first}>Scott Merill Realty</a>
            </div>
          {!this.props.basic ? (
            <ul className={`${styles.menu} ${this.state.active ? styles.active : ''}`}>
            <li onClick={(e) => this.handleLinkClick('about', e)}>
              About
            </li>
            <li onClick={(e) => this.handleLinkClick('how-it-works', e)}>
              How it works
            </li>
            <li onClick={(e) => this.handleLinkClick('form', e)}>
              Get an offer
            </li>
            <li onClick={(e) => this.handleLinkClick('contact', e)}>
              Contact
            </li>
            <li className="mobile-only">
            <Cta text="801-201-2707" mobileText="1-888-8888" phone="801-201-2707" />
            </li>
          </ul>
          ) : (
            ''
          )}
          <div className={styles.right}>
            <Cta classes={'medium-up space-right'} text="801-201-2707" mobileText="1-888-8888" phone="801-201-2707" />
            {!this.props.basic ? (
              <div onClick={(e) => this.handleClickMenu(e)} className={`${styles.hamburger} ${this.state.active ? styles.active : ''}`}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
              </div>
            ) : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default Header
