# Use the official Node.js LTS image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port your Node.js application listens on (replace PORT_NUMBER with the actual port)
EXPOSE 3000

# Command to start your Node.js application (replace "app.js" with your main application file)
CMD ["node", "app.js"]
