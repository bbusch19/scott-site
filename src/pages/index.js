import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'
import Link from 'gatsby-link'
import Header from '../components/header'
import Hero from '../components/hero'
import BasicContent from '../components/basicContent'
import ColumnComp from '../components/columnComp'
import Column from '../components/column'
import Form from '../components/form'
import Cta from '../components/cta';

class IndexPage extends Component {

  handleScroll(el) {
    window.scroll({
      top: document.querySelector(`#${el}`).offsetTop,
      behavior: 'smooth'
    })
  }

  render() {
    return (
      <div>
        <Header onClick={this.handleScroll} />
        <Hero>
          <h1>Results that move you.</h1>
          <p className="subhead-alt">Get an honest cash offer within days.</p>
        </Hero>
        <Form id="form" classes="alt-bg" header="Get an offer!" />
        <ColumnComp id="how-it-works">
          <div className='before columns'>
            <h2>How it works</h2>
          </div>
          <Column classes='third'>
            <h3>Submit a request</h3>
            <p>
              The more information we have the quicker we can write up an offer.  Tell us about the current condition of the home, necessary repairs, additions and updates that have already been done and any other important facts about the property.
            </p>
          </Column>
          <Column classes='third'>
            <h3>Schedule a walk-through</h3>
            <p>
              This is an important part of getting the most out of your home.  Regardless of  condition an expert will come out to get a feel for the amount of work your home needs to become marketable.  The quicker we can get in the home the sooner you will have an offer.
            </p>
          </Column>
          <Column classes='third last'>
            <h3>Closing</h3>
            <p>
              We will shop your home to the top tier cash buyers and find the best fit for you and your situation.  If you need time to find another home to purchase/rent several of our investors are willing to work with your needs.  They will also cover any normal closing costs associated with the purchase.  We do everything we can to get you the result you expect.
            </p>
          </Column>
          <div className='after columns'>
          <Cta classes="space-top round-mobile" text="Call 801-201-2707 to learn about how it works" mobileText="CALL TO LEARN MORE" phone="801-201-2707" hasIcon={true} />
          </div>
        </ColumnComp>
        {/* <BasicContent id="about" classes="alt-bg">
          <h2>This is the about section</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse. Adipiscing vitae proin sagittis nisl rhoncus. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Tincidunt vitae semper quis lectus nulla. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Arcu cursus euismod quis viverra nibh cras. Hendrerit dolor magna eget est lorem ipsum dolor. Sit amet mauris commodo quis imperdiet massa. Eget sit amet tellus cras.
          </p>
          <p className="collapse-bottom">
            Dui vivamus arcu felis bibendum ut tristique et. Et pharetra pharetra massa massa ultricies mi quis. Eget magna fermentum iaculis eu. Elementum sagittis vitae et leo duis ut diam quam nulla. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Sagittis orci a scelerisque purus semper eget. Amet est placerat in egestas erat imperdiet sed. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. At urna condimentum mattis pellentesque id nibh tortor id aliquet.
          </p>
        </BasicContent> */}
      </div>
    )
  }
}

export default IndexPage
