# Step 1: Use an official Node.js image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Expose port (Next.js default port is 3000)
EXPOSE 3000

# Step 7: Build the Next.js application
RUN npm run build

# Step 8: Start the Next.js application
CMD ["npm", "start"]
