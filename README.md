### App Covid 

#### Đảm bảo các chức năng theo yêu cầu

- Hiển thị danh sách các quốc gia ảnh hưởng bởi dịch covid-19
- Cho phép sắp xếp các quốc gia theo: quốc gia có nhiều ca nhiễm nhất, quốc gia có ca tử vong cao nhất, quốc gia có người hồi phục thấp nhất (vì api bị lỗi số người hồi phục nên em không có làm chức năng này)
- Hiển thị popup chi tiết quốc gia gồm 2 phần

  - Phần đầu chi tiết quốc gia: khu vực, tiểu vùng, thủ đô, diện tích, dân số, quốc kỳ, tên quốc gia.
  - Phần hai hiển thị biểu đồ thống kê số liệu covid theo khoảng thời gian nhất định.

- Có thể đánh dấu hoặc xóa quốc gia (được xử lý ở redux)

#### Các chức năng thực hiện thêm 

- Thống kê số liệu covid-19 trên thế giới trong 1 ngày và tất cả các ngày.
- Chức năng mở rộng khi xem danh sách quốc gia.

#### Thực hiện một số chức năng BIG PLUS

- Spinner-loader, responsive (min-width: 500px up to).
- Create UI manually (use SCSS).
- Deploy to any platform that you know.