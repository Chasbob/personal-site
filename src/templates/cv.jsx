import React, { useState, useEffect } from 'react'
import styles from './cv.module.scss'
import { navigate } from 'gatsby'

const DefaultTemplate = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate('#frame')
    }, 350)
  }, [])
  return (
    <iframe id="frame" className={styles.frame} src="https://cv.chasbob.dev/" />
  )
}

export default DefaultTemplate
