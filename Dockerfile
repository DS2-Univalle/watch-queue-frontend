# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package*.json tsconfig.json .eslint* ./

# Install any needed packages specified in package.json
RUN npm install

# Expose the port the app runs in
EXPOSE 4200

# Start the app
CMD ["npm", "start"]
