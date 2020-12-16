# @bytesoftio/use-action

## Installation

`yarn add @bytesoftio/use-action` or `npm install @bytesoftio/use-action`

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Description](#description)
- [Usage](#usage)
  - [useAction](#useaction)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Description

This package is built on top of [@bytesoftio/use-async](https://github.com/bytesoftio/use-async). The purpose of this package is to be able to encapsulate any async operation into a standardized handle that can be run on demand and awaited. Example use case: You have an async operation, like send some data to an endpoint, you create an async action and trigger it when the time is right. You don't have to worry about state related things like running, result, error handling, etc. It's all available for you within the handle.

## Usage

### useAction

```tsx
import React, { useState } from "react"
import { useAction } from "@bytesoftio/use-action"

const LikeButton = () => {
  const [likesCount, setLikesCount] = useState(0)
  const likeAction = useAction(async (count: number) => {
    // some http magic
    return count
  }) 
  
  const onClick = async () => {
    if ( ! likeAction.running) {
      await likeAction.run(likesCount)
     
      if ( ! likeAction.error) {
        setLikesCount(likeAction.result)
      } 
    } 
  }

  return (
    <button onClick={onClick}>Like {likesCount}</button>
  )
}
```
