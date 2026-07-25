// ตั้งค่าตั้งต้น
const LIFF_ID = "2010842634-E2d2x4l0"; 
const GAS_URL = "https://script.google.com/macros/s/AKfycbx48qTE9jzw8BO-QCiZamFvyiWr2E-u7vhPejpVrZ4tjLvwF-97KWCig0i0Tyz1QYIq/exec"; 

// ควบคุมเวลา 00:00:00
setInterval(() => {
    const now = new Date();
    document.getElementById('current-date').innerText = now.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('current-time').innerText = now.toLocaleTimeString('th-TH');
}, 1000);

// Initialize Swiper (Slider)
const swiper = new Swiper(".mySwiper", {
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
});

// ฟังก์ชันสลับ Tab เมนูด้านล่าง
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    
    document.getElementById(`tab-${tabId}`).classList.add('active');
    event.currentTarget.classList.add('active');
}

// ฟังก์ชันเปลี่ยนหน้าหลัก
function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// การทำงานของ LIFF Login
document.getElementById('btn-line-login').addEventListener('click', () => {
    // โค้ดจำลองการข้ามไปหน้าแดชบอร์ด/ลงทะเบียน (คุณต้องใช้ liff.init() ในการทำงานจริง)
    // เช็คว่ามีข้อมูลในระบบหรือไม่ ถ้าไม่มี -> showPage('page-register')
    // ถ้ามี -> showPage('page-main')
    showPage('page-register'); 
});

// การขอ OTP สวยๆ ด้วย SweetAlert2
document.getElementById('btn-get-otp').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    if(!email) return Swal.fire({ icon: 'warning', title: 'แจ้งเตือน', text: 'กรุณากรอกอีเมลก่อน', confirmButtonColor: '#000' });
    
    // เรียก API ส่ง OTP...
    Swal.fire({
        title: 'กำลังส่งรหัส OTP',
        text: 'กรุณารอสักครู่ ระบบกำลังส่งรหัสไปยังอีเมลของคุณ',
        icon: 'info',
        showConfirmButton: false,
        timer: 2000
    }).then(() => {
        Swal.fire({ icon: 'success', title: 'สำเร็จ', text: 'ส่งรหัส OTP เรียบร้อยแล้ว (โปรดเช็คในกล่องจดหมาย)', confirmButtonColor: '#000' });
    });
});
