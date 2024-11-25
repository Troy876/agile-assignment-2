# Stage 1
FROM node:14 as build-stage

WORKDIR /todo-app
COPY package.json .
RUN npm install
COPY . .

RUN npm run build

# Stage 2
FROM nginx:1.17.0-alpine

COPY --from=build-stage /todo-app/dist /usr/share/nginx/html
EXPOSE 8080

CMD nginx -g 'daemon off;'
