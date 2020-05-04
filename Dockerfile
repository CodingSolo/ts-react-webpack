FROM node:10-alpine as builder
WORKDIR /app
COPY . ./
ENV PATH="/app/node_modules/.bin:$PATH"
RUN yarn install && yarn run build


FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

