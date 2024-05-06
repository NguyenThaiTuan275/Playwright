const { chromium } = require('playwright');

(async () => {
  // Mở trình duyệt mới (trình duyệt Chromium)
  const browser = await chromium.launch({ headless: false });
  
  // Tạo một trang mới
  const page = await browser.newPage();

  // Điều hướng đến trang đăng nhập
  await page.goto('https://www.saucedemo.com/');

  // Điền thông tin đăng nhập và đăng nhập
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Chờ cho trang tiếp theo tải xong
  await page.waitForNavigation();

  // Thêm sản phẩm vào giỏ hàng
  await page.click('.btn_primary');
  
  // Chuyển đến trang giỏ hàng
  await page.click('.shopping_cart_link');

  // Thực hiện tiến trình thanh toán
  await page.click('.checkout_button');

  // Điền thông tin thanh toán
  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '12345');

  // Chuyển đến trang xác nhận đơn hàng
  await page.click('.cart_button');

  // Chờ cho trang tiếp theo tải xong
  await page.waitForNavigation();

  // Đóng trình duyệt
  await browser.close();
})();
