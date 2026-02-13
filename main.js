function circleArea() {
    var radius = document.getElementById("Rad1").value;
    radius = Number(radius);
    var area = Math.PI * radius * radius;
    document.getElementById("Area1").value = area.toFixed(2);
}