import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/hero'
import BasicContent from '../components/basicContent'
import ColumnComp from '../components/columnComp'
import Column from '../components/column'
import Form from '../components/form'

const IndexPage = () => (
  <div>
    <Hero />
    <BasicContent>
      <h2>This is the about section</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse. Adipiscing vitae proin sagittis nisl rhoncus. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Tincidunt vitae semper quis lectus nulla. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Arcu cursus euismod quis viverra nibh cras. Hendrerit dolor magna eget est lorem ipsum dolor. Sit amet mauris commodo quis imperdiet massa. Eget sit amet tellus cras.
      </p>
      <p>
        Dui vivamus arcu felis bibendum ut tristique et. Et pharetra pharetra massa massa ultricies mi quis. Eget magna fermentum iaculis eu. Elementum sagittis vitae et leo duis ut diam quam nulla. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Sagittis orci a scelerisque purus semper eget. Amet est placerat in egestas erat imperdiet sed. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. At urna condimentum mattis pellentesque id nibh tortor id aliquet.
      </p>
    </BasicContent>
    <ColumnComp classes="alt-bg">
      <div className='before columns'>
        <h2>How it works</h2>
      </div>
      <Column classes='third'>
        <h3>Column one</h3>
        <p>
          Sagittis orci a scelerisque purus semper eget. Amet est placerat in egestas erat imperdiet sed. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et.
        </p>
      </Column>
      <Column classes='third'>
        <h3>Column two</h3>
        <p>
          Sagittis orci a scelerisque purus semper eget. Amet est placerat in egestas erat imperdiet sed. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et.
        </p>
      </Column>
      <Column classes='third last'>
        <h3>Column three</h3>
        <p>
          Sagittis orci a scelerisque purus semper eget. Amet est placerat in egestas erat imperdiet sed. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et.
        </p>
      </Column>
    </ColumnComp>
    <Form />
  </div>
)

export default IndexPage
