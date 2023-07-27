import React, { useRef, useEffect, useState } from 'react';
import { withTheme } from 'styled-components';

import {
  HeroCardWrapper,
  CodeCardWrapper,
  ColorPaletteWrapper,
  ColorBoxWrapper,
} from './HeroCard.style'


function repeatString(str, count) {
  let maxCount = str.length * count;
  count = Math.floor(Math.log(count) / Math.log(2));
  while (count) {
    str += str;
    count--;
  }
  str += str.substring(0, maxCount - str.length);
  return str;
}

function copyToClipboard(str) {
  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style = { position: 'absolute', left: '-9999px' };
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

export const CodeCard = () => {
  // trimed down polyfill of String.repeat

  return (
    <CodeCardWrapper>
      <pre>1    class <b>Person</b>: </pre>
      <pre>2          def __init__(self):</pre>
      <pre>3              self.name = "<b>Monpezat</b>"</pre>
      <pre>4              self.surname = "<b>Baptiste</b>"</pre>
      <pre>5              self.passions = ["<b>Data Science</b>", "<b>Tennis</b>"]</pre>
      <pre>6              self.age = <b>29</b></pre>
      <pre>7              self.city = <b>Bordeaux</b></pre>
      <pre>8  </pre>
    </CodeCardWrapper>
  )
}

const ColorBox = ({ color }) => {
  const tooltipRef = useRef();
  useEffect(() => {
    return tooltipRef.current.addEventListener('animationend', () => {
      tooltipRef.current.classList.remove('tooltip-animate')
    });
  })
  const copy = () => {
    copyToClipboard(color);
    tooltipRef.current.classList.add('tooltip-animate');
  };

  return <ColorBoxWrapper ref={tooltipRef} onClick={copy} style={{ background: color }} />
}

export const ColorPalette = withTheme(({ theme }) => {
  return (
    <ColorPaletteWrapper>
      <ColorBox color={theme.primaryColor} />
      <ColorBox color={'#6A98F0'} />
      <ColorBox color={theme.gradient} />
      <ColorBox color={theme.primaryBlack} />
      <ColorBox color={theme.accentColor} />
    </ColorPaletteWrapper>
  )
})

export const HeroCard = () => {
  return (
    <HeroCardWrapper>
      <CodeCard />
    </HeroCardWrapper>
  )
}