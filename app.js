var prev = document.getElementById("prev");
var next = document.getElementById("next");
var image = document.getElementById("image");
var images = ["https://besthqwallpapers.com/Uploads/2-3-2018/42703/bogliasco-4k-sea-coast-liguria.jpg", "https://www.nastol.com.ua/pic/201703/2560x1440/nastol.com.ua-211652.jpg", "https://wallpaperlayer.com/img/2015/9/italy-wallpaper-2229-2388-hd-wallpapers.jpg", "https://pbs.twimg.com/media/CplApaEWgAA_yhf.jpg:large", "https://a-static.besthdwallpaper.com/street-italiassa-tapetti-2160x1440-26815_40.jpg", "https://rikedoms.ru/wp-content/uploads/2020/01/zabastovki-v-italii.jpg", "http://www.anypics.ru/pic/201210/2560x1600/anypics.ru-18841.jpg"];
var imageIndex = 0;
prev.onclick = function() {
    if(imageIndex==0){
        imageIndex = images.length - 1;
    }
    else {imageIndex --;}
    image.setAttribute("src", images[imageIndex])}
    next.onclick = function(){
        if(imageIndex == images.length - 1){
            imageIndex = 0;
        }
        else {imageIndex++;}
        image.setAttribute("src", images[imageIndex])
    }


