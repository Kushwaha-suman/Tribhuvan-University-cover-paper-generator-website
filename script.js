const fields = [
  "universityName",
  "collegeName",
  "collegeAddress",
  "faculty",
  "department",
  "specificDepartment",
  "semester",
  "subject",
  "studentName",
  "rollNumber",
  "registrationNumber",
  "teacherName",
  "submittedTo",
  "campusLocation",
  "affiliation"
];

fields.forEach(id => {

  const el = document.getElementById(id);

  if(el){

    el.addEventListener("input", function(){

      const previewId =
        "preview" +
        id.charAt(0).toUpperCase() +
        id.slice(1);

      const previewEl =
        document.getElementById(previewId);

      if(previewEl){
        previewEl.innerText = this.value;
      }

      if(id === "studentName"){
        document.getElementById("previewStudentBottom")
        .innerText = this.value.toUpperCase();
      }

      if(id === "teacherName"){
        document.getElementById("previewTeacherName")
        .innerText = "(" + this.value + ")";
      }

      if(id === "affiliation"){
        document.getElementById("previewAffiliation")
        .innerText = "(" + this.value + ")";
      }

    });

  }

});

/* LOGO UPLOAD */

document.getElementById("logoInput")
.addEventListener("change", function(e){

  const file = e.target.files[0];

  if(file){

    const reader = new FileReader();

    reader.onload = function(event){

      document.getElementById("logoPreview")
      .src = event.target.result;

    };

    reader.readAsDataURL(file);

  }

});

/* PDF */

function downloadPDF(){
  window.print();
}