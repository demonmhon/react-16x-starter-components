# 1: Build to dist
FROM node:10-alpine as build
RUN apk add --no-cache python
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --silent
COPY . ./
RUN npm run build

# 2: Production Environment
FROM nginx:1.16.0-alpine
RUN apk add --no-cache curl git grep
WORKDIR /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build ./usr/app/dist ./
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
