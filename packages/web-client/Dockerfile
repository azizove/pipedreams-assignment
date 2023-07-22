# Stage 1: Build the React app
FROM node:14.17.0 as build

WORKDIR /app

# Copy package.json and package-lock.json (if using npm)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire app source code
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve the production build with a lightweight HTTP server
FROM nginx:1.21.1-alpine

# Remove the default nginx website configuration
RUN rm -rf /usr/share/nginx/html/*

# Copy the built React app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (the default port for HTTP traffic)
EXPOSE 80

# Start the nginx server in the foreground
CMD ["nginx", "-g", "daemon off;"]
