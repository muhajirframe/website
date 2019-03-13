import React from 'react'
import styled from '@emotion/styled'
import Ribbon from './Ribbon'
import Link from './Link'
import { mq, hidden, block } from '../styles'

const Container = styled('div')`
  ${tw`flex justify-between`};
`
const Items = styled('div')`
  ${tw`flex items-center`};
`
const Item = styled('h3')`
  ${tw`text-grey-darkest ml-4 sm:ml-8 text-xs mb-0`};
`
const Title = styled('h1')`
  ${tw`text-grey-darkest text-base m-0`};
`
const LogoBig = ({ title }) => (
  <Title css={[hidden, mq('sm')(block)]}>{title}</Title>
)
const LogoSmall = ({ title }) => (
  <Title css={mq('sm')(hidden)}>{title[0]}</Title>
)

const Header = ({ siteTitle }) => (
  <Ribbon>
    <Container>
      <div>
        <Link to="/">
          <LogoSmall title={siteTitle} />
          <LogoBig title={siteTitle} />
        </Link>
      </div>
      <Items>
        <Link to="/writing">
          <Item>WRITING</Item>
        </Link>
        <Link to="/reading">
          <Item>READING</Item>
        </Link>
        <Link to="/">
          <Item>WORK</Item>
        </Link>
        <Link to="/contact">
          <Item>CONTACT</Item>
        </Link>
      </Items>
    </Container>
  </Ribbon>
)

export default Header
