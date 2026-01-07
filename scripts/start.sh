#!/bin/bash

# Start backend and frontend
cd backend && npm start &
cd ../frontend && npm start