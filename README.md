Soure cũ: https://github.com/huynqbg/booking-care-server

## Booking Care Api

### Cách cài đặt

1. Cài đặt các thư viện:
   `npm install`

2. Tạo database mysql với tên là: `bookingcare-web`
3. Cấu hình file .env
4. Chạy migrate database
   `npx sequelize-cli db:migrate`
5. import dữ liệu từ file database/database.sql
6. Chạy project
   `npm start`
7. Xem các api tại folder `routes`
