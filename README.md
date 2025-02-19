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

### Các chức năng chính

1. Tạo Người dùng
2. Tạo thông tin bác sĩ
3. Tạo thông tin về cơ sở khám chữa bệnh, 1 cơ sở khám bệnh có nhiều chuyên khoa và bác sĩ
4. Tạo chuyên khoa, mỗi 1 chuyên khoa có nhiều bác sĩ
5. Bác sĩ có thể tạo lịch khám bệnh theo từng khung giờ trong ngày
6. Bệnh nhân chọn lịch khám được hiển thị và đặt lịch khám bệnh, sau đó sẽ được gửi mail để xác nhận lịch hẹn khám
7. Bác sĩ có thể gửi đơn thuốc cho bệnh nhân qua email
8. Ngoài ra còn nhiều tính năng thú vị khác...
