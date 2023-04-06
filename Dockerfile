FROM node:14 as builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build && \
    cp node_modules/tailwindcss/tailwind.css /app/build/tailwind.css

FROM nginx:1.19-alpine

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

