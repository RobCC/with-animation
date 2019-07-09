# with-animation

HOC that handles animation when mounting and unmounting

## Installation

```
npm install with-animation
```

## Usage

withAnimation wraps your custom React component.

```
import React, { Component } from 'react';
import withAnimation from 'with-animation';

const Block = (
  <div className="block">
    {this.props.children}
  </div>
);

export default withAnimation(NormalBlock);
```

The `mount` property will specify if the component should be mount. Both `onMount` and `onUnmount`
includes a CSS keyframe that will be executed when the component mounts or unmounts.

```
...

<button className="button" onClick={() => this.setState({ toggle: true });}>
  Toggle Class
</button>
          
<Block mount={toggle} onMount="in" onUnmount="out" defaultClass="wrapper" animateOnFirst={false}>
  Animated Block
</Block>
```
