// 倒數計時邏輯
let countdown = 30;
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    if (countdown > 0) {
        countdown--;
        countdownElement.textContent = countdown;
    } else {
        location.reload(); // 倒數結束後重新整理
    }
}

// 每秒更新一次倒數計時
setInterval(updateCountdown, 1000);

// 重新整理按鈕功能
document.getElementById("refresh-btn").addEventListener("click", function() {
    location.reload();
});
