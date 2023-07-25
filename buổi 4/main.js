// Xử lý sự kiện click trên nút "Upload new photo"
const uploadBtn = document.getElementById('uploadBtn');
const fileInput = document.getElementById('fileInput');
const previewImage = document.getElementById('previewImage');

uploadBtn.addEventListener('click', () => {
    fileInput.click(); // Khi click vào nút "Upload new photo," sẽ kích hoạt sự kiện click trên input file ẩn
});

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0]; // Lấy file từ sự kiện change
    if (file) {
        const reader = new FileReader(); // Đọc file dưới dạng URL data
        reader.onload = () => {
            previewImage.src = reader.result; // Hiển thị file đã chọn lên trước khi tải lên
        };
        reader.readAsDataURL(file);
    }
});
// Chặn sự kiện "submit" khi click vào nút "Upload new photo"
uploadBtn.addEventListener('click', (event) => {
    event.preventDefault();
});