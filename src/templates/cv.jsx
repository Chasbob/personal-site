import React, { useState, useEffect } from 'react'
import { frame } from './cv.module.scss'
import { navigate } from 'gatsby'

const DefaultTemplate = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('#frame')
    }, 350)
  }, [])
  return <iframe id="frame" className={frame} src="https://cv.chasbob.dev/" />
}

export default DefaultTemplate
