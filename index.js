// PDF SECTION START
async function generatePDF() {
    document.getElementById("cmd").innerHTML = "Downloading wait.....";

    var downloading = document.getElementById("wholeOutput");
    var doc = new jsPDF('l', 'pt');

    await html2canvas(downloading, {
        allowTaint: true,
        useCORS: true,
        width: 800,
        height: 250
    }).then((canvas) => {
        doc.addImage(canvas.toDataURL("image/png"), "PNG", 5, 5, 800, 250)
    })

    doc.save("Ticket.pdf")

    document.getElementById("cmd").innerHTML = "Click to Download"
}
// PDF SECTION OVER

//PDF 2 IDEA
// var div = document.querySelector("#wholeOutput");

// function generatePDF2(){
//     var ImgData;

//     html2canvas($("#wholeOutput"), {
//         useCORS:true,
//         onrendered:function(canvas){
//             ImgData = canvas.toDataURL('image/png');

//             //make pdf using jspdf

//             var doc2 = new jsPDF('p', 'pt', 'a4');

//             doc2.addImage(ImgData, 'PNG',10,10);

//             doc2.save('same.pdf');

//             window.open(ImgData);
//         }
//     })
// }
//PDDF 2 IDEA OVER

//USER INPUT AND DISPLAY SECTION
const txt1 = document.getElementById("tbuser");
const txt2 = document.getElementById("tbuserage");
const txt3 = document.getElementById("tbuserlocation");
const txt4 = document.getElementById("tbuserdate");
const btn1 = document.getElementById("btn1");
const out1 = document.getElementById("output1");
const out2 = document.getElementById("output2");
const out3 = document.getElementById("output3");
const out4 = document.getElementById("output4");

function fun1() {
    out1.innerHTML = "<h3>Name : </h3>" + txt1.value;
    out2.innerHTML = "<h3>Age : </h3>" + txt2.value;
    out3.innerHTML = "<h3>Location : </h3>" + txt3.value;
    out4.innerHTML = "<h3>Date : </h3>" + txt4.value;
}

btn1.addEventListener("click", fun1)
//USER INPUT AND DISPLAY SECTION OVER

//IMAGE UPLOAD SECTION 
const image_input = document.querySelector("#image_input");
var uploadedImg = ""; // we are making this a global variable we can access it anywhere in the JS code

image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", ()=> {
        uploadedImg = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploadedImg})`;
    })
    reader.readAsDataURL(this.files[0])
})
//IMAGE UPLOADING OVER

