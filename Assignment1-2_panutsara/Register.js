function checkInput() {
    var companyName = document.getElementById("companyName").value;
    var boothSize = document.getElementById("boothSize").value;
    var chairAmount = document.getElementById("chairAmount").value;
    var userName = document.getElementById("userName").value;
    var userTel = document.getElementById("userTel").value;

    if (companyName == "" || userName == "" || userTel == "") {
        alert("กรุณากรอกชื่อบริษัท, ชื่อผู้ติดต่อ, และเบอร์โทรผู้ติดต่อ");
        return;
    }
    if (boothSize == "0" || boothSize == "1") {
    } else {
        alert("กรุณาเลือกขนาดบูธสินค้า");
        return;
    }
    if (chairAmount != "") {
        var chairNumber = parseInt(chairAmount);
        if (chairNumber < 1 || chairNumber > 10) {
            alert("จำนวนเก้าอี้ต้องเป็นตัวเลขระหว่าง 1 - 10");
            return;
        }
    }
    alert("ฟอร์มถูกกรอกข้อมูลถูกต้องแล้ว");
}