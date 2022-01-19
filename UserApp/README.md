# Setup Instructions

## install pods

## Comment out fipper commands in PodFile

## Setup amplify

delete amplify folder
amplify configure

cp to app.js after imports:

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
