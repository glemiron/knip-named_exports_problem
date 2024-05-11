import React from 'react';
import { allFixtures } from './fixures'
import {Feature} from './features'

type Props = {
    features: Feature[]
}

export function App(props: Props) {
  if (props.features.includes('FEATURE_ONE')) {
      return <div>Cool feature!</div>
  }
  return (
    <div className='App'>
      <h1>{allFixtures.order1}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

// Log to console
console.log('Hello console')
