# Stage 1: Build the Angular app
FROM node:20 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the Angular app with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/angular17-login-signup-localstorage/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
