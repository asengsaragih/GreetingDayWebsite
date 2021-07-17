function changeBackgroundAnimation() {
    // 1 for white
    // 2 for black

    //untuk perubahan warna
    var color = 0;

    if (getLinkName() == 1) {
        color = 1;
    } else if (getLinkName() == 2) {
        color = 2;
    } else {
        color = 1;
    }

    if (color == 1) {
        $(document).ready(function () {
            $(".area").css("background", "#ffffff");
            $(".circles li").css("background", "#ffa500");
        });
    } else {
        $(document).ready(function () {
            $(".area").css("background", "#121212");
            $(".circles li").css("background", "#ffa500");
        });
    }
}

function getLinkName() {
    return location.search.split('type=')[1];
}